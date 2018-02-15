import React from 'react';
import { View, Text, AsyncStorage , StyleSheet, BackHandler, Dimensions, TouchableOpacity, Image, TextInput} from 'react-native';
import BackgroundTimer from 'react-native-background-timer'
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
window.navigator.userAgent = 'react-native';
 const io = require('react-native-socket.io-client/socket.io');


const USER_ID = '@userId';

 class General extends React.Component {

  constructor(props) {

    super(props);
    this.getToken()
    this.state = {
      messages: [],
      user: '',
      username: '',
      token: '',
      sent: ''
    };
    
    // this.onReceivedMessage = this.onReceivedMessage.bind(this);
    this.socket = io('https://chatapis.herokuapp.com');
    let sender = this.state.username
    this.socket.on('connect', ()=>{
        console.log('connected to server', this.state.username)
        let params = {
          room: 'general',
          name: this.state.username
        }
        this.socket.emit('join', params, (user)=>{
          console.log('user joined general', params)
        });
    })                         
    this.socket.on('userList', (users)=> {
      console.log(user)
    } )
    this.socket.on('newMessage', this.onReceivedMessage.bind(this));                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    // this.determineUser = this.determineUser.bind(this);
    
    this.onSend = this.onSend.bind(this);
    this._storeMessages = this._storeMessages.bind(this);

    this.socket.on('disconnect', ()=>{
      console.log('disconnected')
    })
    setTimeout = (fn, ms = 0) => BackgroundTimer.setTimeout(fn, ms)
    setInterval = (fn, ms = 0) => BackgroundTimer.setInterval(fn, ms)
    clearTimeout = (fn, ms = 0) => BackgroundTimer.clearTimeout(fn, ms)
    clearInterval = (fn, ms = 0) => BackgroundTimer.clearInterval(fn, ms)
    
    // this.determineUser();
  }

 async componentDidMount(){
   await this.getMessages()
  }

  
  async getToken(){
    try {
        
        const value = await AsyncStorage.getItem('@MySuperStore')
        const response = await JSON.parse(value)
        console.log({getToken: response})
        if (value !== null){
            // We have data!!
            console.log(value);
            this.setState({
                token: response.token,
                user: response.user,
                username: response.username
            })
            
        }
        else{
            console.log('no token yet')
            
        }
        }
    catch (error) {
          console.log(error)
        // Error retrieving data
      }
    }

 async getMessages(){

    await this.getToken()
    try{
      console.log(this.state.token)
      let response = await fetch('https://chatapis.herokuapp.com/api/v1/forum/message/general', {
      headers: {
          'Authorization': this.state.token,
          'Accept': 'application/json',
          'content-Type': 'application/json',
      }
  })
  let res = await response.json()
  this.formatoSaveMessage(res)
  console.log(res);

    }
    catch(error){
      console.log(error.toString())
    }
  

  }

  onReceivedMessage(messages) {
    let res = []
    console.log({messageReceived: messages})
    let obj = {}
    if(messages.from == this.state.username){
         obj = {
          text: messages.text,
          createdAt: new Date() * 0.3,
          _id: new Date(),
          user: {
            _id: this.state.user,
            name: messages.from
          }
        }
    }
    else{
       obj = {
        text: messages.text,
        room: messages.room,
        createdAt: new Date() * 0.3,
        _id: new Date(),
        user: {
          _id: messages.from,
          name: messages.from
        }
      }
    }
    console.log(obj)
    res.push(obj)
    
    this._storeMessages(obj);
  }
  formatMessage(message){
    console.log({formated: message})
    let messages = message[0]

    let obj = {
      text: messages.text,
      room: message.room,
      from: message.sender

    }
  }

  formatoSaveMessage(message){
    data = message.groupMsg
    let res = []
    data.map((arr) => {
      let obj = {
        _id: arr._id,
        text: arr.message,
        createdAt: arr.createdAt,
        user: {
          _id: arr.sender.email,
          name: arr.sender.username
        }
      }
      let save = []
      save.push(obj)
       this._storeMessages(save[0])
      res.push(obj)
    })
    console.log({formatedtosave: res})
    return res
  }

  async sendMessage(message){
    try{
      console.log("when we send", message)
      let response = await fetch('https://chatapis.herokuapp.com/api/v1/forum/message/general', {
            method: 'POST',
            headers: {
              'Authorization': this.state.token,
              'Accept': 'application/json',
              'content-Type': 'application/json'
          },
          body: JSON.stringify({
            message: message,
            secondUser: "english"
         })
        })
        let res = await response.json()
        console.log({postMessage: res});
        // console.log(req.body)

    }catch(error){
      console.log(error.toString())
    }
  }
  /**
   * When a message is sent, send the message to the server
   * and store it in this component's state.
   */
  async onSend(messages=[]) {
    console.log(messages)
    let sent = messages[0].text
    this.setState({
      sent: sent
    })
    
     await this.sendMessage(sent)
     this.socket.emit('createMessage', {
       text: sent,
       sender: this.state.username,
       room: 'general'
   })
     let emitting = this.formatMessage(messages)
    // let data = this.formatMessage(messages)
    
    // this._storeMessages(messages);
  }

  renderBubble(props) { return ( <Bubble {...props} 
    wrapperStyle={{
        left: {
          backgroundColor: '#3A539B',
        },
        right: {
          backgroundColor: '#446CB3'
        }
      }} />
    )}
  

  render() {
      // console.log(this.state)
    var user = { _id: this.state.userId || -1 };

    return (
      
         
        <GiftedChat
          messages={this.state.messages}
          onSend={this.onSend}
          user={{
            _id: this.state.user,
            name: this.state.username
          }}
          textInputProps={{
            style: styles.chatT
          }}
          isAnimated = {true}
          renderBubble={this.renderBubble.bind(this)}
          
        />
    

      
    );
  }

  // Helper functions
  _storeMessages(messages) {
    
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#FFF',
  },
  chatT: {
    color: '#2C3E50',
    width: '80%'
  }, 
  topic: {
      color: '#008841',
      fontSize: (( Dimensions.get('window').height) * 0.025),
      marginTop: '5%',
      alignSelf: 'center' 
  },
  checks: {
      color: '#000',
      marginLeft: '1%'
  },
  title: {
    fontSize: (( Dimensions.get('window').height) * 0.024), 
    position: 'absolute',
    top: '-18%',
    left: '26%'
},
  box:{
      flex: 1,
      justifyContent: 'center'
      
  },
  check: {
      display: 'flex',
      flexDirection: 'row'
  },
  input: {
      color: '#000',
      marginTop: '3%',
      borderWidth: 1,
      borderColor: '#999',
      width: '90%',
      alignSelf: 'center',
      textAlignVertical: 'top',
      fontSize: (( Dimensions.get('window').height) * 0.018)
  },
  signup: {
      fontSize:  (( Dimensions.get('window').height) * 0.025),
      color: '#fff',
  },
  button: {
      margin: '3%',
      backgroundColor: '#5cb85c',
      color: '#fff',
      padding: '8%'

    },
    butCont: {
      borderRadius: 5,
      width: '50%',
      alignSelf: 'center'
    },
    content: {
      marginTop: '3%'
  },
  banner: {
      opacity: 0,
      position: 'absolute',
      bottom: -200
  },
  checkbox: {
      backgroundColor: '#999'
  },
  widget: {
    backgroundColor: '#000',
  },
  

})

module.exports = General;
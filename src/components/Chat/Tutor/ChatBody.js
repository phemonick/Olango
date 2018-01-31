import { GiftedChat } from 'react-native-gifted-chat';
import React, { Component } from 'react'
// import io from 'react-native-socket.io-client/socket.io'
window.navigator.userAgent = 'react-native'
 const io = require('react-native-socket.io-client/socket.io');
export default class ChatBody extends Component {

  constructor(props){
    
    super(props);
    this.socket = io.connect('https://chatapiendpoint.herokuapp.com/chats', {
      transports: ['websocket']// you need to explicitly tell it to use websockets
    })
    console.ignoredYellowBox = [
      'Setting a timer'
      ];
  this.state = {
    messages: [],
    };
  }
  componentDidMount(){
    // this.socket.emit('setLoggedUserEmail', 'matilda@gmail.com')
    // this.socket.on('returnAllChats', (data)=>{
    //   console.table(data)
    // })
    // socket.io.on('userConnected', (data)=>{console.log(data)})
    this.socket.on('chatMessage', (data)=> {
      console.log({componentDid: data})
      this.setState((previousState) => {
        return ({
          messages: GiftedChat.append(previousState.messages, data),
        })
      });
    })
  }
  componentWillMount() {
  this.socket.emit('setLoggedUserEmail', 'matilda@gmail.com')
  this.socket.on('returnAllChats', (data)=>{
    this.socket.emit('getChat', data[0]._id)
    this.socket.on('getChat',(data)=>{
      console.log(JSON.stringify(data[0].chatmessages))
      let loop = data[0].chatmessages;
      let updatedMessage=Object.assign([],this.state.messages)
      loop.map((data, current)=>{
        console.log(data[0])
        
        updatedMessage.push(data[0])
      })
      this.setState({
        messages: updatedMessage
      })
      // this.setState({
      //   messages: data.chatmessages
      // })
    })
  })
    this.setState({

      messages: [
        {
          //person message is sent to
          _id: 1,
          text: 'hi developer',
          //date should be from server
          createdAt: new Date(),
          user: {
            //sender Id
            _id: 'matilda@gmail.com',
            name: 'React Native',

          }
        },
        {
          _id: 2,
          text: 'hello developer',
          createdAt: new Date(),
          user: {
            _id: 1,
            name: 'femi Native',
          }, 
        },
      ],
    });
  }

  onSend(messages = []) {
    console.log(JSON.stringify(messages));
    let sent = messages[0]
    // this.socket.emit('chatMessage', messages)

    // this.setState((previousState) => {
    //   // sockect.io message will be emited to server
    //   // console.log(JSON.stringify(previousState))

    //   return ({
    //     messages: GiftedChat.append(previousState.messages, messages),
    //   })
    // });
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
        user={{
          _id: 'matilda@gmail.com',
        }}

      />
    );
  }

}
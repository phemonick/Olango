import { GiftedChat } from 'react-native-gifted-chat';
import React, { Component } from 'react'
import { View, AsyncStorage } from 'react-native'

export default class ForumBody extends Component {

  constructor(props){
    
    super(props);
  this.state = {
      userType: '1234',
      text: '',
    userdetails: {},
    messages: [],
    };
  }
  componentDidMount(){
      this.getEM()
    this.fetchForum()
}
async getEM(){
    try {
        const value = await AsyncStorage.getItem('@MySuperStore');
        if (value !== null){
          // We have data!!
          let data = JSON.parse(value)
          console.log(JSON.parse(value));
          this.setState({
              userdetails: data
          })
        }
      } catch (error) {
        // Error retrieving data
      }
}
  
  async fetchForum (){
      try{
        let response = await fetch(`https://olango-api.herokuapp.com/forums/5a5c56ce72257f0014c8c5c8`);
        let data = await response.json();
        console.log(data.messages)
        let fake = Object.assign([], this.state.messages)
        let previousChat = this.questionObj(data.messages)
        fake.push(...previousChat);
        console.log(fake)
        this.setState({
            messages: fake
        })
        
      }catch(err){
        console.log(err)
      }
  }
  questionObj(message){
      console.log({"message from start": message})
    let res = [];
    for(let i = 0; i< message.length; i++){
      let obj = {
        _id: new Date()*i,
        text: message[i].message,
        createdAt: message[i].timecreated,
        user: {
            _id: message[i].userName,
            name: this.state.userdetails.firstname
        }
      }
      res[i] = obj
    }
    return res
    
  }
  async postMessage(text, level){
    try{
            let response = await fetch('https://olango-api.herokuapp.com/forums/5a5c56ce72257f0014c8c5c8', {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'content-Type': 'application/json',
                },
                body: JSON.stringify({
                    
                    userType: "1234",
                    userName: this.state.userdetails.email,
                    message: text,
                    level: "beginners"
                
                })
            })
                let data =await response.json();
                let fake = Object.assign([], this.state.messages)
                let modified =[ data]
                console.log(modified)
                let previousChat = this.questionObj(modified)
                fake.push(...previousChat);
                console.log(fake)
                this.setState({
                    messages: fake
                })
}
catch( err){
    console.log(err)
}
  }
  
  componentWillMount() {
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
        // {
        //     "level": "ajayi",
        //     "timecreated": "2018-01-15T09:01:17.949Z",
        //     "message": "okay ",
        //     "userType": "123456",
        //     "userName": "boys.com"
        // },
      ],
    });
  }

  onSend(messages = []) {
    console.log(JSON.stringify(messages[0].text))
    let data = messages[0].text
    this.postMessage(data)
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
        user={{
          _id: this.state.userdetails.email,
        }}

      />
    );
  }

}
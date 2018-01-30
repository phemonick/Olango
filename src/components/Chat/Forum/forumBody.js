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
    token: '',
    userId: '',
    name: ''
    };
  }
  componentDidMount(){
    console.log(this.state.messages)
}
async getToken(){
  try {
      
      const value = await AsyncStorage.getItem('@MySuperStore')
      const response = await JSON.parse(value)
      console.log(response)
      if (value !== null){
          // We have data!!
          console.log(value);
          this.setState({
              token: response.token,
              userId: response._id,
              name: response.user
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

async testRoute(){
    await this.getToken();
  try{
      console.log({"state Token":this.state.token})
  
  let response = await fetch('https://chatapiendpoint.herokuapp.com/api/v1/chats', {
      headers: {
          'Authorization': this.state.token,
          'Accept': 'application/json',
          'content-Type': 'application/json',
      }
  })
  let res = await response.json()
  console.log(res);
  let fake = Object.assign([], this.state.messages)
  
  let format = this.questionObj(res.conversations)
  fake.push(...format)
  console.log({formatedMessage: format})
  console.log({fak:fake})
  this.setState({
    messages: fake
  })

  }catch(error){
      console.log(error)
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
    message.map((message)=>{
      // console.log({
      //   id : message[0]._id
      // })
      let obj = {
        _id: message[0]._id,
        text: message[0].body,
        createdAt: message[0].createdAt,
        user: {
          _id: message[0].author._id,
          name: message[0].author.fullname
        }
      }
      res.push(obj)
    })
    // for(let i = 0; i< message.length; i++){
    //   let obj = {
    //     _id: message[i]._id,
    //     text: message[i].body,
    //     createdAt: message[i].createdAt,
    //     user: {
    //         _id: message[i].author._id,
    //         name:  message[i].author.fullname
    //     }
    //   }
    //   res[i] = obj
    // }
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
    this.testRoute();
    // this.setState({

    //   messages: [
       
    //     {
    //       //person message is sent to
    //       _id: 1,
    //       text: 'hi developer',
    //       //date should be from server
    //       createdAt: new Date(),
    //       user: {
    //         //sender Id
    //         _id: 'matilda@gmail.com',
    //         name: 'React Native',

    //       }
    //     },
    //     {
    //       _id: 2,
    //       text: 'hello developer',
    //       createdAt: new Date(),
    //       user: {
    //         _id: 1,
    //         name: 'femi Native',
    //       }, 
    //     },
    //     // {
    //     //     "level": "ajayi",
    //     //     "timecreated": "2018-01-15T09:01:17.949Z",
    //     //     "message": "okay ",
    //     //     "userType": "123456",
    //     //     "userName": "boys.com"
    //     // },
    //   ],
    // });
  }

  onSend(messages = []) {
    console.log(JSON.stringify(messages))
    
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
        user={{
          _id: this.state.userId,
          name: this.state.name
        }}

      />
    );
  }

}
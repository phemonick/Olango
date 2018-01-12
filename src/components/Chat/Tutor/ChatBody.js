import { GiftedChat } from 'react-native-gifted-chat';
import React, {Component} from 'react'
export default class ChatBody extends Component {

  state = {
    messages: [],
  };

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
            _id: 2,
            name: 'React Native',
            
          },
          // message Id
          "_id":"ee1957fc-d780-40ac-90a8-e7af43bf00a3",
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
    this.setState((previousState) =>{
      // sockect.io message will be emited to server
      console.log(JSON.stringify(previousState)) 

      return ({
      messages: GiftedChat.append(previousState.messages, messages),
    })});
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
        user={{
          _id: 2,
        }}
        
      />
    );
  }

}
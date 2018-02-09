import { AsyncStorage } from 'react-native'
import { observable, action, computed } from 'mobx';
import { observer } from 'mobx-react/native'


export default class UsersStore{
     @observable UserList = []
    
    constructor(){
        // this.UserList = []
    }
    @action("fetching user data for userlist")
    async getChats(token){
        
        try{
            let response = await fetch('https://chatapiendpoint.herokuapp.com/api/v1/chats', {
      headers: {
          'Authorization': token,
          'Accept': 'application/json',
          'content-Type': 'application/json',
      }
  })
  let data =await response.json();
//   let fake = Object.assign([], this.UserList)
    let fake = []
  
  let format = this.questionObj(data.conversations)
  fake.push(...format)
  console.log({fak:fake})
 
  this.UserList = fake
  console.log({MyUsers: this.UserList})
//     return Promise.resolve({
//       data
//   })

        }catch(error){
            console.log("poor internet connection")
            return Promise.reject({
                message: "failed",
                error: error
            })
        }

    }
    questionObj(message){
        console.log({"message from start": message})
      let res = [];
      message.map((message)=>{
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
      return res
      
    }
   @computed get UsersIn() {
        console.log({'getting user states': this.UserList})
        console.log((this.UserList.slice()))
        let data = this.UserList.slice()
        return (
           data
        )
    }
}
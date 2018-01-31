import { observable, action } from 'mobx';
import { AsyncStorage } from 'react-native'

export default class AuthStore {
    @observable error ;
    @observable authUser

    constructor() {

        this.error = ''
        this.authUser=''
    }
    @action
   async signIn({email, password}) {
        // if(this.authUser) {
        //     return Promise.resolve(this.authUser)
        // }
        if( email ==='' && password === '') {
            this.error = 'invalid input in store';
            console.log(this.error)
            return null
        }
        try{
            console.log('password is'+ password)
            let response = await fetch('https://chatapiendpoint.herokuapp.com/api/v1/user/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'content-Type': 'application/json',
                },
                body: JSON.stringify({
                    
                    email: email,
                    password: password,
                   
                })
            })
            let res = await response.json()
            console.log(res.message)
            let payload = JSON.stringify(res)
            console.log({data: payload})
            if(res.message =='Login Errors'){
                console.log(res.errors[0].msg)               
                this.error = res.errors[0].msg
            }

            else if(res.message == 'Failed.') {
                console.log(res)
                this.error = res.error
            }
                
           else if(res.message == 'Success'){

                this.error = ''

                try {
                    
                    await AsyncStorage.setItem('@MySuperStore',payload).then((val)=>{
                        if(val){
                            console.log({"stored item error":val})
                            
                        }
                        else{
                            console.log({SUCCESS: payload})
                            this.authUser = payload
                        }
                    })
                    return Promise.resolve({
                        message: "Success",
                        payload: this.authUser
                    })
                    
                    
                  } catch (error) {
                    console.log('err', error)
                  }
                  this.props.navigation.navigate('Hom')     
            
            }
        }
        catch(err){
            // this.removeToken()
            console.log('There has been a problem with your fetch operation: ' + err);
            this.error='poor internet connection'
            
                
            
    
        }

    }

}
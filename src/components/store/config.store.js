import { AsyncStorage } from 'react-native'

export default class ConfigStore{

    constructor(){
        this.splashTime = 5000
        this.splashImg = require('../../images/bgImg.jpg')
        this.token = ''
    }

    async getEM(){
        try {
            const value = await AsyncStorage.getItem('@MySuperStore');
            if (value !== null){
                let data = JSON.parse(value)
                console.log(JSON.parse(value));
                console.log(data.user);
            }
            else{
               
              console.log('no token yet')
              // We have data!!
              this.props.navigation.navigate('SignIn')
            }
          } catch (error) {
            // Error retrieving data
          }
    }

    get SplashImg() {
        return this.splashImg
    }
    get SplashTime() {
        return this.splashTime
    }
}
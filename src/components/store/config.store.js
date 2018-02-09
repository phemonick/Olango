import { AsyncStorage } from 'react-native'

export default class ConfigStore{

    constructor(){
        this.getEM()
        this.splashTime = 5000
        this.splashImg = require('../../images/bgImg.jpg')
        this.token = ''
    }

    async getEM(){
        try {
            const value = await AsyncStorage.getItem('@MySuperStore');
            if (value !== null){
                let data = JSON.parse(value)
                this.token = data
                console.log(JSON.parse({authStore: value}));
                
            }
            else{
                console.log('no token yet')
              
              // We have data!!
              
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
    get Token() {
        return (this.token)
    }
}
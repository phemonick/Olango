export default class ConfigStore{

    constructor(){
        this.splashTime = 5000
        this.splashImg = require('../../images/bgImg.jpg')
    }
    get SplashImg() {
        return this.splashImg
    }
    get SplashTime() {
        return this.splashTime
    }
}
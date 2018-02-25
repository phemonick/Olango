import React, { Component } from 'react';
import { TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Button, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';

let score =0
let result = [0]
let question = 0
export default class Scheme extends Component {

  constructor(){
    super();
    this.state = {
        exercise: [],
        status: '',
        answer:'',
        quizFinish: false,
    }
}

  componentWillMount(){
   const { params } = this.props.navigation.state
    let items = params.exercise
    let questions=[]
    items.map((data, loc)=>{
        let obj = {
            answer: data.answer,
            questions: data.questions,
            subquestionsflow: data.subquestionsflow,
            number: loc+1
        }
        questions.push(obj)
    })
    console.log({question: questions})
    this.setState({
      exercise: questions
    })
  //  let questions = this.questionObj(items.answers, items.exercises, items.questions)
   
  }
  componentDidMount(){
    console.log(this.state.exercise);
  }
  submitText(){
    if(this.state.answer == this.state.status){
      score += 1
      result[question] = 1
      console.log(result)
      console.log( question)
      this._deckSwiper._root.swipeRight()
    }else{
      result[question] = 0
      console.log(result)
      this._deckSwiper._root.swipeRight()
    }
  }

  sum(){
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let answer = result.reduce(reducer)
    console.log(answer)
     alert(answer)
    return (
      navigate('Intermediates', {language: params.language} )
    )
  }

  next(){

  }

  questionObj(answers, exercises, questions){
    let res = [];
    for(let i = 0; i< exercises.length; i++){
      let obj = {
        exercise: exercises[i],
        question: questions[i],
        answer: answers[i]
      }
      res[i] = obj
    }
    console.log(res)
    this.setState({exercise: res})
  }

  render() {
    // console.log({myState:this.state.exercise})
    const { params } = this.props.navigation.state
    // console.log(exercise)
    let i = 1
    return (
      <Container style={styles.Container} >
        <Header style={styles.header}><Text style={styles.headerText}>{params.language} Exercises</Text></Header>
        <View>
          <DeckSwiper
            ref={(c) => this._deckSwiper = c}
            dataSource={this.state.exercise}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem style = {styles.card1}>
                     
                    <Text style={styles.quest}>{item.number}. {item.questions}</Text>
                    <View style={styles.body}>
                      <TextInput 
                      autoCorrect = {false}
                      onChangeText = {(text)=>{
                        this.setState({
                          status:text,
                          answer: item.answer})
                          question = item.number
                      } }
                      placeholder ='Input Answer'
                      underlineColorAndroid='transparent'
                        style = { styles.input }
                      />
                      <Text style = { styles.subquestion }> {item.subquestionsflow} </Text>
                    </View>
                </CardItem>

                <CardItem style = {styles.log} >
                <TouchableOpacity style={styles.submit} onPress={this.submitText.bind(this)} >
                      <Text style={styles.textApp}> Submit </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.finish} onPress={this.sum.bind(this)} >
                      <Text style={styles.textApp}> Finish </Text>
                    </TouchableOpacity>
                </CardItem>
                <CardItem>
                  <Text>{item.answer}</Text>
                </CardItem>  
              </Card>    
            }
          />
        </View>
        <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 70, left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}>
          <Button style={styles.button} iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
            <Icon name="arrow-back" />
            <Text>Back</Text>
          </Button>
          <Button style={styles.button} iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
            <Icon name="arrow-forward" />
            <Text>Next</Text>
          </Button>
        </View>
      </Container>
    );
  }
}
styles = StyleSheet.create({
  Container: {
    backgroundColor: '#34495e',
  },
  card1: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  quest: {
    // width: 50+'%'
    fontSize: 20,
    color: '#020E23'
  },
  input: {
    backgroundColor: 'rgba(255,255,255,1)',
    height: 40,
    width: 90+'%',
    textAlign: 'center',
    color: '#7f8c8d',
    fontSize: 20,
    borderWidth: 1,
    padding: 0,
    borderRadius: 6,
    borderColor: '#e67e22'
   
},
header: {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
},
headerText: {
  fontSize: 20,
  alignSelf: 'center',
  color: '#fff'
}, 
body: {
  display: 'flex',
  flexDirection: 'row',
  width: 100+'%',
  flexWrap: 'wrap',
 justifyContent: 'space-between',
  width: 100+ '%',
  marginTop: 20
},
subquestion: {
  fontSize: 20
},
log:{
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around'
},
submit: {
  backgroundColor: '#2ecc71',
        borderRadius: 6,
        paddingVertical: 5
},
finish: {
  backgroundColor: '#3498db',
        borderRadius: 6,
        paddingVertical: 5
},
textApp: {
  textAlign: 'center',
  color: '#fff',
  fontSize: 25,
  fontWeight: 'bold'
},
button: {
  padding: 10
}
})
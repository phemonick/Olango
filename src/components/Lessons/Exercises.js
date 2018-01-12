import React, { Component } from 'react';
import { TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Button, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
const Examples = [
  {
    question: '1',
    exercise: '	You learn French ?',
    answers: 'Apprenez-vous',
    subquestion: 'Français'
  },
  {
    question: '2',
    exercise: 'Today is  special ??',
    answers: 'Apprenez-vous',
    subquestion: 'Special'
  },
  {
    question: '3',
    exercise: 'You are learning French???',
    answers: 'Apprenez-vous',
    subquestion: 'le Français'
  }
];
let score =0
let result = [0]
let question = 0
export default class Exercises extends Component {

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
    this.setState({
      exercise: items
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
    }
  }

  sum(){
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let answer = result.reduce(reducer)
    console.log(answer)
    return (
      answer
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

    return (
      <Container>
        <Header style={styles.header}><Text style={styles.headerText}>{params.language} Exercises</Text></Header>
        <View>
          <DeckSwiper
            ref={(c) => this._deckSwiper = c}
            dataSource={this.state.exercise}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem style = {styles.card1}>
                  
                    <Body style={styles.body} >
                      
                        <Text style={styles.quest}>{item.exercise} ?</Text>
                        <TextInput 
                        onChangeText = {(text)=>{
                          this.setState({
                            status:text,
                            answer: item.answers,
          
                          })
                          question = item.question
                        } }
                        underlineColorAndroid='red'
                        
                          style = { styles.input }
                        />
                        <Text> {item.subquestion} </Text>
                    </Body>

                    <TouchableOpacity onPress={this.submitText.bind(this)} >
                      <Text> Submit </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.sum.bind(this)} >
                      <Text> Finish </Text>
                    </TouchableOpacity>
                  
                </CardItem>
                <CardItem >
                </CardItem>
                <CardItem>
                  <Text>{item.answer}</Text>
                </CardItem>  
              </Card>    
            }
          />
        </View>
        <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 50, left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}>
          <Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
            <Icon name="arrow-back" />
            <Text>Back</Text>
          </Button>
          <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
            <Icon name="arrow-forward" />
            <Text>Next</Text>
          </Button>
        </View>
      </Container>
    );
  }
}
styles = StyleSheet.create({
  card1: {

  },
  quest: {
    width: 50+'%'
  },
  input: {
    backgroundColor: 'rgba(255,255,255,1)',
    height: 50,
     width: 30+'%',
    textAlign: 'center',
    color: '#7f8c8d',
    fontSize: 20,
    borderRadius: 6,
   
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
  // justifyContent: 'space-between',
  width: 100+ '%'
}
})
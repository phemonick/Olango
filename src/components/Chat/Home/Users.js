import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Thumbnail, Left, Right, Body, Text, List, ListItem  } from 'native-base';

export default class User extends Component{



    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style ={styles.container}> 
                
                    <List style ={styles.body} >
                        <ListItem avatar style = {styles.list}>
                            <Left>
                                <Thumbnail source={require('./icons-24.png')} />
                            </Left>
                            <TouchableOpacity onPress={()=>navigate('Tutor') }  >
                                <Body>
                                    <Text>Kumar Pratik</Text>
                                    <Text note>Chat with English tutor</Text>
                                </Body>
                            </TouchableOpacity>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                        <ListItem avatar style = {styles.list}>
                            <Left>
                                <Thumbnail source={require('./icons-24.png')} />
                            </Left>
                            <TouchableOpacity  >
                                <Body>
                                    <Text>French</Text>
                                    <Text note>Chat with French tutor</Text>
                                </Body>
                            </TouchableOpacity>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                        <ListItem avatar style = {styles.list}>
                            <Left>
                                <Thumbnail source={require('./icons-24.png')} />
                            </Left>
                            <TouchableOpacity  >
                                <Body>
                                    <Text>Dr phemy</Text>
                                    <Text note>Chat with Spanish tutor</Text>
                                </Body>
                            </TouchableOpacity>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                    </List>
                    <ListItem avatar style = {styles.list}>
                            <Left>
                                <Thumbnail source={require('./icons-24.png')} />
                            </Left>
                            <TouchableOpacity  >
                                <Body>
                                    <Text>Dr Emeka</Text>
                                    <Text note>Chat with igbo tutor</Text>
                                </Body>
                            </TouchableOpacity>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                        <ListItem avatar style = {styles.list}>
                            <Left>
                                <Thumbnail source={require('./icons-24.png')} />
                            </Left>
                            <TouchableOpacity  >
                                <Body>
                                    <Text>Dr Wale</Text>
                                    <Text note>Chat with Yoruba tutor</Text>
                                </Body>
                            </TouchableOpacity>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#fff',
        width: 100+ '%',
        marginTop: 10
    },
    body: {
        width: 100+ '%',
        // display: 'flex',
        // alignItems: 'baseline'
    },
    list: {
        // backgroundColor: 'yellow',
        margin: 2
        
    }
})
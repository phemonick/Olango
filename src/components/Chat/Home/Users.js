import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Thumbnail, Left, Right, Body, Text, List, ListItem  } from 'native-base';
import { inject } from 'mobx-react'
import { observer } from 'mobx-react/native'
import { observable } from 'mobx'

@inject("stores")
export default class User extends Component{
     
    

    constructor(props){
        super(props)
        
    }
    componentWillMount(){
        this.getChats()
    }

    getChats(){
        const { users } = this.props.stores
        let {token} = this.props.stores.config.Token
        console.log(token)
        users.getChats(token)
    }

    


    render(){
        const { navigate } = this.props.navigation;
        const { users } = this.props.stores
        
        return(
            <View style ={styles.container}> 
                <FlatList
                    data = {users.UsersIn}
                    keyExtractor={(x,i)=> i}  
                    renderItem = { ({item})=> 
                    
                        
                            <List style ={styles.body} >
                                <ListItem avatar style = {styles.list}>
                                    <Left>
                                        <Thumbnail source={require('./icons-24.png')} />
                                    </Left>
                                    <TouchableOpacity onPress={()=>navigate('Tutor') }  >
                                        <Body>
                                            <Text>{item.user.name}</Text>
                                            <Text note>Chat with English tutor</Text>
                                        </Body>
                                    </TouchableOpacity>
                                    <Right>
                                        <Text note>3:43 pm</Text>
                                    </Right>
                                </ListItem>
                            </List>   
                    }
                 />
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
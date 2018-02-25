import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, FlatList, Image, StatusBar } from 'react-native'
import { Thumbnail, Left, Right, Body, Text, List, ListItem  } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Home extends Component {

    render(){
        const { navigate } = this.props.navigation
        return(
            <View style ={styles.container}> 
                <StatusBar  backgroundColor="#34495e"
                    networkActivityIndicatorVisible={false}
                    translucent={true}
                    barStyle="light-content" />
                    <View style={styles.header} >
                        <TouchableOpacity onPress={()=>navigate('DrawerToggle')} style={styles.ic} >
                            <Icon name="reorder" color={'#fff'} size={40} />
                        </TouchableOpacity>
                        <View style= {styles.logoContainer}>
                            <Image style = {styles.logo} source = {require('../../../images/olango.png')} />
                        </View>
                    </View >
                    <View >
                            <List style ={styles.body} >
                                <ListItem avatar style = {styles.list}>
                                    <Left>
                                        {/* <Thumbnail source={require('./icons-24.png')} /> */}
                                        <Icon name="person-outline" size={29} />
                                    </Left>
                                    {/* <TouchableOpacity onPress={()=>navigate('Tutor') }  > */}
                                        <Body>
                                            <TouchableOpacity onPress={()=>navigate('Tutor', {name: "spanish" }) }  >
                                            <Text>Spanish</Text>
                                            <Text note>Chat with Spanish tutor</Text>
                                            </TouchableOpacity>
                                        </Body>
                                    {/* </TouchableOpacity> */}
                                    <Right>
                                        <Text note>3:43 pm</Text>
                                    </Right>
                                </ListItem>
                            </List> 

                            <List style ={styles.body} >
                                <ListItem avatar style = {styles.list}>
                                    <Left>
                                        {/* <Thumbnail source={require('./icons-24.png')} /> */}
                                        <Icon name="person-outline" size={29} />
                                    </Left>
                                    {/* <TouchableOpacity onPress={()=>navigate('Tutor') }  > */}
                                        <Body>
                                            <TouchableOpacity onPress={()=>navigate('Tutor', {name: "Hausa" }) }  >
                                            <Text>Hausa</Text>
                                            <Text note>Chat with Hausa tutor</Text>
                                            </TouchableOpacity>
                                        </Body>
                                    {/* </TouchableOpacity> */}
                                    <Right>
                                        <Text note></Text>
                                    </Right>
                                </ListItem>
                            </List>   

                            <List style ={styles.body} >
                                <ListItem avatar style = {styles.list}>
                                    <Left>
                                        {/* <Thumbnail source={require('./icons-24.png')} /> */}
                                        <Icon name="person-outline" size={29} />
                                    </Left>
                                    {/* <TouchableOpacity onPress={()=>navigate('Tutor') }  > */}
                                        <Body>
                                            <TouchableOpacity onPress={ ()=>navigate('Tutor', {name: "german" }) }  >
                                            <Text>German</Text>
                                            <Text note>Chat with German tutor</Text>
                                            </TouchableOpacity>
                                        </Body>
                                    {/* </TouchableOpacity> */}
                                    <Right>
                                        <Text note></Text>
                                    </Right>
                                </ListItem>
                            </List>   

                            <List style ={styles.body} >
                                <ListItem avatar style = {styles.list}>
                                    <Left>
                                        {/* <Thumbnail source={require('./icons-24.png')} /> */}
                                        <Icon name="person-outline" size={29} />
                                    </Left>
                                    {/* <TouchableOpacity onPress={()=>navigate('Tutor') }  > */}
                                        <Body>
                                            <TouchableOpacity onPress={()=>navigate('Tutor', {name: "yoruba" }) }  >
                                            <Text>Yoruba</Text>
                                            <Text note>Chat with Yoruba tutor</Text>
                                            </TouchableOpacity>
                                        </Body>
                                    {/* </TouchableOpacity> */}
                                    <Right>
                                        <Text note></Text>
                                    </Right>
                                </ListItem>
                            </List>   

                            <List style ={styles.body} >
                                <ListItem avatar style = {styles.list}>
                                    <Left>
                                        {/* <Thumbnail source={require('./icons-24.png')} /> */}
                                        <Icon name="person-outline" size={29} />
                                    </Left>
                                    {/* <TouchableOpacity onPress={()=>navigate('Tutor') }  > */}
                                        <Body>
                                            <TouchableOpacity onPress={()=>navigate('Tutor', {name: "chinese" })}  >
                                            <Text>Chinese</Text>
                                            <Text note>Chat with Chinese tutor</Text>
                                            </TouchableOpacity>
                                        </Body>
                                    {/* </TouchableOpacity> */}
                                    <Right>
                                        <Text note></Text>
                                    </Right>
                                </ListItem>
                            </List>   

                            <List style ={styles.body} >
                                <ListItem avatar style = {styles.list}>
                                    <Left>
                                        {/* <Thumbnail source={require('./icons-24.png')} /> */}
                                        <Icon name="person-outline" size={29} />
                                    </Left>
                                    {/* <TouchableOpacity onPress={()=>navigate('Tutor') }  > */}
                                        <Body>
                                            <TouchableOpacity onPress={()=>navigate('Tutor', {name: "igbo" }) }  >
                                            <Text>Igbo</Text>
                                            <Text note>Chat with Igbo tutor</Text>
                                            </TouchableOpacity>
                                        </Body>
                                    {/* </TouchableOpacity> */}
                                    <Right>
                                        <Text note></Text>
                                    </Right>
                                </ListItem>
                            </List>   

                            <List style ={styles.body} >
                                <ListItem avatar style = {styles.list}>
                                    <Left>
                                        {/* <Thumbnail source={require('./icons-24.png')} /> */}
                                        <Icon name="person-outline" size={29} />
                                    </Left>
                                    {/* <TouchableOpacity onPress={()=>navigate('Tutor') }  > */}
                                        <Body>
                                            <TouchableOpacity onPress={()=>navigate('Tutor', {name: "french" }) }  >
                                            <Text>French</Text>
                                            <Text note>Chat with French tutor</Text>
                                            </TouchableOpacity>
                                        </Body>
                                    {/* </TouchableOpacity> */}
                                    <Right>
                                        <Text note></Text>
                                    </Right>
                                </ListItem>
                            </List>  
                    </View > 

                            
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: 100+ '%',
        paddingTop: 10
    },
    header: {
        padding: 10,
        flexDirection: 'row',
        backgroundColor: '#34495e',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ic: {
        flex: 1
    },
    logoContainer: {
        flex: 2,
        justifyContent: 'flex-start',
        alignItems: 'center',
        // backgroundColor: '#fff'
    },
    logo: {
        height: 40,
        width: 120,
        resizeMode: 'contain'
       
    },
    body: {
        width: '100%',
       
    }
})
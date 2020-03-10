import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { View, Text, Button, Header, Left, Right, Body, Title } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome';


export default class FarmerHome extends React.Component{
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={{backgroundColor: '#FFFFFF'}} >
                <Header>
                    <Left>
                        <Button transparent>
                        <Icon name="caret-left" size={30} color="white"/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Farmer</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                        <Icon name="navicon" size={30} color="white"></Icon>
                        </Button>
                    </Right>
                </Header>
                <View style={{flexDirection: 'row', alignItems:'center',justifyContent:'center', marginTop:40, padding:40}}>
                <Image source= {require('./images/user.png')} style={{backgroundColor:'transparent',position:'absolute', height:80, width:80}}>
                        </Image>
                </View>
                <View style={{alignItems:'center', justifyContent:'center', padding:20}}>
                    <Text style={{fontSize:18, fontWeight:'bold'}}>Juan Dela Cruz</Text>
                </View>
                <View style={{alignItems:'center', justifyContent:'center'}}>
                <Image source= {require('./logo.png')} style={{height:40,width:40}}>
                        </Image>
                </View>
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center',padding:20}}>
                <View style={{padding:10}}>
                    <Button style={{backgroundColor:'#DAEF83', height:120, width:140, borderRadius:10, flexDirection:'column'}}
                    onPress={() => navigate('Analysis')}>
                    <Image source= {require('./images/growth.png')} style={{backgroundColor:'transparent',height:80, width:80}}>
                        </Image>
                    <Text style={{color:'black', fontSize:15, fontWeight:'bold'}}>Analysis</Text>
                </Button>
                </View>
                <View style={{padding:10}}> 
                   <Button style={{backgroundColor:'#DAEF83',  height:120, width:140, borderRadius:10, flexDirection:'column'}}>
                   <Image source= {require('./images/farm.png')} style={{backgroundColor:'transparent',height:80, width:80}}
                   onPress={() => navigate('Farm')}>
                        </Image>
                    <Text style={{color:'black', fontSize:15, fontWeight:'bold'}}>Farm</Text>
                </Button> 
                </View>
                </View>
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                <View style={{padding:10}}>
                    <Button style={{backgroundColor:'#DAEF83', height:120, width:140, borderRadius:10,flexDirection:'column'}}
                    onPress={() => navigate('Market')}>
                    <Image source= {require('./images/market.png')} style={{backgroundColor:'transparent',height:80, width:80}}>
                        </Image>
                    <Text style={{color:'black', fontSize:15, fontWeight:'bold'}}>Market</Text>
                </Button>
                </View>
                <View style={{padding:10}}>
                   <Button style={{backgroundColor:'#DAEF83',  height:120, width:140, borderRadius:10, flexDirection:'column'}}
                   onPress={() => navigate('Activities')}>
                   <Image source= {require('./images/paper.png')} style={{backgroundColor:'transparent',height:80, width:80}}>
                        </Image>
                    <Text style={{color:'black', fontSize:15, fontWeight:'bold'}}>Activities</Text>
                </Button> 
                </View>
                </View>
            </View>
        )
    }
}

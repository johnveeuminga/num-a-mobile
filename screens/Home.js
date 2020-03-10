import React from 'react'
import { Text, Image, StyleSheet } from 'react-native'
import { Container, View, Button, Icon } from 'native-base'
import { SocialIcon } from 'react-native-elements'

class LoginHome extends React.Component{
    render(){
        const {navigate} =this.props.navigation;

        return(
            <Container>
                <View>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image source= {require('./logo.png')} style={style.img}>
                        </Image>
                    </View>

                    <View>
                         <Text style={style.text}>LOG IN AS:</Text>
                    </View>

                    <Button rounded style= {{ marginHorizontal: 33, marginVertical:7, backgroundColor: '#DAEF83', justifyContent:'center'}}>      
                            <Text style={{ textAlign: 'center', color:'black', fontWeight:'bold', fontSize:18 }}>
                            Farmer
                            </Text> 
                    </Button>
                    <Button rounded style= {{ marginHorizontal: 33, marginVertical:7, backgroundColor: '#DAEF83', justifyContent:'center'}}
                            onPress={() => navigate('LoginHome')}
                    >      
                            <Text style={{ textAlign: 'center', color:'black', fontWeight:'bold', fontSize:18 }}
                            onPress={() => navigate('LoginHome')}
                    >
                            Buyer
                            </Text> 
                    </Button>

                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Text>
                        <Text numberOfLines={1}>               
                            ________________________________________________
                        </Text>
                        </Text>
                        <View>
                            <Button transparent light style={{marginTop: 25}}>
                                <Text style= {style.create} >Create an Account?</Text>
                            </Button>
                        </View>   
                    </View>
                </View>   
            </Container>
        )
    }
}

const style = StyleSheet.create({
    img: {
        width: 200,
        height: 200,
        marginTop: 25,
     
    },
    text: {
        fontSize: 20,
        paddingTop: 25,
        textAlign: 'center'
    },
    btn: {
        backgroundColor: '#D9EF82',
        width: 250,
        height: 60,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnTxt: {
        fontSize: 19,
        fontWeight: 'bold',
    },
    create:{
        fontSize: 15
    },
    
})

export default LoginHome
import React from 'react'
import { Container, View, Text } from 'native-base'
import { StyleSheet } from 'react-native'



class Farmer extends React.Component{
    render(){
        return(
            <Container>
                <View style = {{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style = {style.txt}>
                        F A R M
                    </Text>

                    <Text style = {style.txt2}>
                        Recent Crop Planted
                    </Text>
                    <Text>
                        _________________________________________________
                    </Text>
                </View>
               
                    <View>
                        <Text style = {style.txt3}>
                            NAME OF PLANT
                        </Text>
                    </View>
               
                
            </Container>
        )
    }
}

const style = StyleSheet.create({

    txt:{
        padding: 25,
        fontSize: 25,
        fontWeight: 'bold'
    },
    txt2:{
        fontSize: 18,
        fontWeight: 'bold'

    },
    txt3:{
        padding: 10,
        marginLeft: 25
    }

})



export default Farmer
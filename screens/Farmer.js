import React from 'react'
import { Container, View, Text, Button } from 'native-base'
import { StyleSheet, FlatList } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';


const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Plant 1',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Plant 2',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Plant 3',
    },
  ];

  function Item({ id, title }) {
    return (
      
        <Text style = {style.txt4}>{title}</Text>
      
    );
  }

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
                        <ScrollView>
                            <FlatList
                            
                                data={DATA}
                                renderItem={({ item }) => (
                                <Item
                                    id={item.id}
                                    title={item.title}
                                />
                                )}
                            />
                        </ScrollView>
                        <View style = {{paddingBottom: 25}}> 
                            <Button rounded style = {{justifyContent: 'center', alignItems:'center', backgroundColor: '#3bb300', marginHorizontal:90}} >
                                <Text> + ADD CROP</Text>
                            </Button>
                        </View>
                      
                    </View>
               
               <View style = {{justifyContent: 'center', alignItems: 'center'}}> 
                   <Text style = {style.txt2}>
                       Recommended Crops
                   </Text>
                   <Text>
                        _________________________________________________
                    </Text>
               </View>

               <View >
                   <Text style = {style.txt4}>
                       Plant 4
                   </Text>
                   <Text style = {style.txt4}>
                       Plant 5
                   </Text>
                   <Text style = {style.txt4}>
                       Plant 6
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
    },
    txt4:{
        marginTop: 10,
        marginBottom: 10,
        fontSize: 20,
        paddingLeft: 25
    }

})



export default Farmer
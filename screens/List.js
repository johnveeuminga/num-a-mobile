import React from 'react'
import { Text, Form, Item, Input, Button } from 'native-base'
import { ScrollView } from 'react-native'
import { post } from '../utils/api'

class List extends React.Component {
    constructor() {
        super()

        this.state = {
            form: {},
        }
    }

    handleInputChange(key, value) {
        this.setState((state) => {
            return {
                ...state,
                form: {
                    ...state.form,
                    [key]: value
                }
            }
        })
    }
    
    handleFormSubmit() {
        const { form } = this.state
        
        post('list', form)
            .then((res) => {
                console.log(res)
            })
    }

    render() {
        return (
            <ScrollView style={{ paddingHorizontal: 15, paddingTop: 15}}>
                <Form>
                    <Item>
                        <Input 
                            placeholder="Name"
                            onChangeText={(value) => this.handleInputChange('name', value)}
                        />
                    </Item>
                    <Item>
                        <Input 
                            placeholder="Description"
                            onChangeText={(text) => this.handleInputChange('description', text)}
                        />
                    </Item>
                    <Button 
                        onPress={() => this.handleFormSubmit()}
                        block
                    >
                        <Text>Submit</Text>
                    </Button>
                </Form>
            </ScrollView>
        )
    }
}

export default List

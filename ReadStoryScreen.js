import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ReadStoryScreen extends React.Component {

    constructor() {
        super()
        this.state = {
            search: ''
        }
    }

    retriveStories = async(search) => {
        
    }

    render(){
        return(
            <View>
                <Text>Read some stories</Text>
            </View>
        )
    }
}
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {SearchBar} from 'react-native-elements'

export default class WriteStoryScreen extends React.Component {

    constructor() {
        super()
        this.state = {
            search: ''
        }
    }

    SearchFilterFunction = async(search) => {
        this.setState({search})
    }

    render(){
        return(
            <View>
                <Text>Write some stories</Text>
                <SearchBar 
          placeholder="Type here"
          onChangeText={this.SearchFilterFunction}
          value={search}
        />
            </View>
        )
    }
}
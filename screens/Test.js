
import React, { Component } from 'react';
import { SafeAreaView, View, FlatList,Linking, StyleSheet, Text, StatusBar, PermissionsAndroid, Image, Button, TouchableOpacity, Alert } from 'react-native';

import axios from 'axios';

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers.authorization = ' Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNjU2ZmZmMDFkNDhhOTFkNTJiZGZhNCIsImlhdCI6MTY1NTYzOTU2NywiZXhwIjoxNjU1ODEyMzY3fQ.qcgvl6aNGdj9wYwdrk8f4wVvZPBPvMrzkuRNlNJNBX8';
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });


export default class Test extends Component {
	constructor(props) {
		super(props);
	}

	handleChange(event) {
		
	}

	componentDidMount() {
        this.getData()
	}

	getData(){
        axios.get('https://qa.careeratlas.in/api/easyjobpost/recruiter/workbench_candidates',
        )
        .then(function (response) {
            console.log("get the data from response=====",response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
    }
	render() {
		

		return (
			     <View>
                <Text>Call Details</Text>
                </View>
		);
	}
}


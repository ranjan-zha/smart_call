
import React, { useState, useEffect} from 'react';
import { SafeAreaView, View, FlatList,Linking, StyleSheet, Text, StatusBar, PermissionsAndroid, Image, Button, TouchableOpacity, Alert } from 'react-native';
import CallLogs from 'react-native-call-log';
import call from 'react-native-phone-call';
const axios = require('axios');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNjU2ZmZmMDFkNDhhOTFkNTJiZGZhNCIsImlhdCI6MTY1NTUzODM2OSwiZXhwIjoxNjU1NzExMTY5fQ.DetBWWv9w_jxorbAq8ddR_jsP1YhnUo1A0yaKiSwWE4';

const CallDetails = (props) => {

    // console.log("props response=====>",props.route.params.otherParam);
    const [calldetails, setCalldetails] = useState([{}]);
    // const api = 'https://https://qa.careeratlas.in/api/easyjobpost/recruiter/workbench_candidates'; 

      const call = async ()=>{
          Linking.openURL(`tel:${919689667708}`);
      }

    const getLatestCallDetails = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
                {
                    title: 'Call Log Example',
                    message:
                        'Access your call logs',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log(CallLogs);
                CallLogs.load(1).then(c => setCalldetails(c));
            } else {
                console.log('Call Log permission denied');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.profileImg}>
                <Image
                    source={require('./3.jpg')}
                    style={{ width: 100, height: 100, borderRadius: 50, backgroundColor: 'grey' }}
                />
                <Text style={styles.heading}>Nihal Roy</Text>
                <Text style={styles.textd}>React Developer</Text>
                <Text style={styles.textd}>+91 9689667708</Text>
                <TouchableOpacity onPress={()=>{call()}}>
                    <Image
                    source={require('./call.png')}
                    style={{ width: 40, height: 40, borderRadius: 40, marginTop:15 }}
                    />
                </TouchableOpacity>

            </View>
            <View style={styles.details}>
                <Text style={styles.heading}>Call Details</Text>
                <Text style={styles.textd}>Name: {calldetails[0].name}</Text>
                <Text style={styles.textd}>Phone: {calldetails[0].phoneNumber}</Text>
                <Text style={styles.textd}>Duration: {calldetails[0].duration > 0 ? (parseInt(calldetails[0].duration) / 60).toFixed(2) + ' min' : null}</Text>
                <Text style={styles.textd}>Date: {calldetails[0].dateTime}</Text>
                <Text style={styles.textd}>Type: {calldetails[0].type}</Text>
            </View>
            <View style={styles.btnWrapper}>
                <View style={styles.CallDetailsbutton}>
                    <Button
                        title="Get Call details"
                        onPress={() => getLatestCallDetails()}
                    />
                </View>
                <View style={styles.CallDetailsbutton}>
                    <Button
                        title="Save Call details"
                        onPress={() => saveCallDetails()}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: '#fefefe',
    },
    details: {
        width: '100%',
        height: 230,
        marginTop: 20,
        paddingLeft: 20
    },
    textd: {
        fontSize: 20,
    },
    heading: {
        fontSize: 22,
        fontWeight: '600'
    },
    CallDetailsbutton: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: 20,
        fontWeight: '600',
        width: '40%',
        marginLeft: '8%'
    },
    btnWrapper: {
        display: 'flex',
        flexDirection: 'row',
    },
    profileImg:{
        padding:1,
        marginTop:20,
        alignItems:'center'
    }
});

export default CallDetails;
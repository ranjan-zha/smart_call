
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity, Alert} from 'react-native';
import { colors } from 'react-native-elements';
const axios = require('axios');

const DATA = [
  {
    id: '1',
    title: 'Nihal Roy',
  },
  {
    id: '2',
    title: 'Rahul Kumar',
  },
  {
    id: '3',
    title: 'Rakesh Raushan',
  },
];

const SPACING = 20;
const AVATAR_SIZE = 70;

const call = async ()=>{
      Alert.alert(
      "This alert was dismissed by tapping outside of the alert dialog."
    )
};
const Item = ({ title }) =>{
  const navigation = useNavigation();
  return (
  <View style={styles.item}>
      <Image
        source={require('./3.jpg')}
        style={{ width: AVATAR_SIZE, height: AVATAR_SIZE, borderRadius: AVATAR_SIZE, backgroundColor: 'grey' }}
      />
      <View style={styles.candidateName}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.jobtitle}>React Developer</Text>
      </View>
      <TouchableOpacity onPress={()=>{navigation.navigate('Call Details',{
            itemId: 86,
            otherParam: 'anything you want here',
          })}}>
        <Image
          source={require('./reightArrow.png')}
          style={{ width: 40, height: 40, borderRadius: 40, marginTop:15 }}
        />
      </TouchableOpacity>
  </View>
)
  };

const CandidateList = () => {
  // const [candidateList, setCandidateList] = useState([{}]);

      useEffect(() => {
        axios.get('https://qa.careeratlas.in/api/easyjobpost/recruiter/workbench_candidates', {
            headers: {
                "Accept": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNjU2ZmZmMDFkNDhhOTFkNTJiZGZhNCIsImlhdCI6MTY1NTUzODM2OSwiZXhwIjoxNjU1NzExMTY5fQ.DetBWWv9w_jxorbAq8ddR_jsP1YhnUo1A0yaKiSwWE4",
                'Content-Type': "application/json"
            }
        }
        )
            .then(function (response) {
                console.log("get the data from response=====", JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);


  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#fefefe',
    borderRadius: 8,
    display:'flex',
    flexDirection:'row',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight:'600',
    color:'#666'
  },
  candidateName:{
    width:220,
    paddingLeft: 15,
  },
  jobtitle:{
    fontSize: 16,
  }
});

export default CandidateList;
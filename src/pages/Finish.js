import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';

import {finishPage} from './styles';

import {useSelector} from 'react-redux'

const Finish = (props) => {
  const userScore = useSelector(global => global.score);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={finishPage.container}>
        <Text style={finishPage.text}>Your score is {userScore}</Text>
        <TouchableOpacity style={finishPage.again} onPress={()=>props.navigation.navigate('Intro')}><Text style={finishPage.againText}>Again?</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export {Finish};

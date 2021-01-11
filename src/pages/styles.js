import {StyleSheet, Dimensions} from 'react-native';
import { max } from 'react-native-reanimated';

export const introPage = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3949ab'
  },
  bannerText: {
    fontSize: 70,
    color: 'white',
    fontFamily: 'Pacifico-Regular',
    justifyContent:"center",
    alignItems:"center",
    textAlign:'center'

  },
  buttonContainer: {
    backgroundColor: '#fb8c00',
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20
  },
  buttonText: {
    fontSize: 40,
    color: 'white',
    fontFamily: 'Pacifico-Regular'
  }
});

export const finishPage = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3949ab',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 80,
    textAlign: 'center',
    fontFamily: 'IndieFlower-Regular'
  },
  again:{
    alignItems:"center",
    backgroundColor:"black",
    marginHorizontal:50,
    justifyContent:"center",
    borderRadius:20,
    
  },
  againText:{
    fontSize:30,
    color:"red",
   
  }
});

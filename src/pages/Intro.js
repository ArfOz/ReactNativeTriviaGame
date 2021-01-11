import React,{useState} from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import {useDispatch} from "react-redux";
import axios from "axios";
import {} from "../components";

const Intro =(props)=>{
    const [timerFlag, setTimerFlag] = useState(false);
    const [counterFlag, setCounterFlag] = useState(false);
    const [modalFlag, setModalFlag] = useState(false);
    const dispatch =useDispatch();

    const startGame = (selectedCategory) =>{
        // axios.get(`https://opentdb.com/api.php?amount=10&category=${selectedCategory.id}&type=boolean`)
        axios.get(`https://opentdb.com/api.php?`,{
            params:{
                amount:10,
                category:selectedCategory.id,
                type:"boolean",
                encode:"base64"
            },
        }).then((response)=>{
            const {
                data:{ results:questions},
            } = response;
            console.log(questions)
            dispatch({type:"SET_QUESTIONS", payload:{questions}});
        });

        setModalFlag(false);
        setTimerFlag(true);
        setCounterFlag(true);
    };
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1}}>
                <View>
                    <Text>Trivia Game</Text>
                </View>
                <View>
                    <TouchableOpacity>
                        <Text>Start</Text>
                    </TouchableOpacity>
                </View>
                            
            </View>
        </SafeAreaView>
    )
}
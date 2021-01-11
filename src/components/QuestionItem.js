import React,{useRef, useState} from "react";
import { SafeAreaView } from "react-native";
// import {} from ""
import {useSelector, useSelector} from "react-redux";
import {CountdownCircleTimer} from "react-native-countdown-circle-timer";
import { FlatList } from "react-native-gesture-handler";

const Questions = (props) =>{
    const listRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const questionList = useSelector((global) => global.questions);
    const dispatch = useDispatch();

    // const renderQuestion =({item}) =>(
    //     <QuestionItem questionObject ={item} onAnswer={answer}/>
    // );
    const answer=(result) =>{
        dispatch({type:"SET_SCORE", payload:{isTrue: result}});
        setCurrentIndex(newIndex);
    };
    
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1}}>
                <View style={{backgroundColor:"red", alignItems:"center", padding:"20"}}>
                    <CountdownCircleTimer
                     isPlaying
                     duration={15}
                     colors={[
                        ['#004777', 0.4],
                        ['#F7B801', 0.4],
                        ['#A30000', 0.2],
                      ]}>
                          {({ remainingTime, animatedColor }) => (
                                <Animated.Text style={{ color: animatedColor }}>
                                    {remainingTime}
                                </Animated.Text>
    )}
                    </CountdownCircleTimer>
                </View>
                <FlatList
                ref={listRef}
                keyExtractor={(_,i)=>i.toString()}
                data={questionList}
                horizontal
                scrollEnabled={false}
                renderItem={renderQuestion}
                />
            </View>
        </SafeAreaView>
    )
};

export {Questions}
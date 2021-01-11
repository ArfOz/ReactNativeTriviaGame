import React from "react";
import { SafeAreaView } from "react-native";

import {useSelector} from "react-redux";

const Finish = (props) =>{
    const userScore = useSelector(global => global.score);

    return(
        <SafeAreaView style={{flex:1}}>
            <View>
                <Text>Your score is {userScore}</Text>
            </View>
        </SafeAreaView>
    );
};

export {Finish}
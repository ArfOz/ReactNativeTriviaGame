import React,{useState,useEffect} from "react";
import {View, Text, TouchableOpacity, Flatlist} from "react-native";
import axios from "axios";
import Modal from "react-native-modal";

import {} from "./styles";

const CategorySelectModal = (props) =>{
    const [categoryList, setCategoryList] = useState([]);
    const fetchData = async() =>{
        const{
            data:{ trivia_categories},
        } = await axios.get("https://opentdb.com/api_category.php");
        setCategoryList(trivia_categories);
    };

    useEffect(()=>{
        fetchData();
    }, []);

    const renderCategories =({item}) =>(
        <TouchableOpacity>

        </TouchableOpacity>
    )

    return(
        <Modal>
            <View>
                <Flatlist/>
                <Text></Text>
            </View>
        </Modal>
    )
}

export {CategorySelectModal};
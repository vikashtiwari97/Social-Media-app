import React from "react";
import { Text } from 'react-native'
import style from "./style";
import PropTypes from "prop-types";   // only for mac command is npm install prop-types --save

const Title = (props)=>{
    return (
        <Text style={style.title}>
            {props.title}
        </Text>
    )
}

//only for mac no need to use for windows 
Title.PropTypes = {
    title : PropTypes.string.isRequired,
}

export default Title;
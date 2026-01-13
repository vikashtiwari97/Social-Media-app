import PropTypes from "prop-types";
import React from "react";
import { View, Image, Text } from "react-native"; 
import style from './style'
import UserProfile from '../UserProfileImage/UserProfile'

const StoryCards = (props) => {
    return (
        <View style={style.storyContainer}>
           <UserProfile profileImage={props.profileImage} imageDimensions={65} />
            <Text style={style.firstName} >{props.firstName}</Text>
        </View>
    );
}

StoryCards.propTypes = {
    firstName: PropTypes.string.isRequired,
    profileImage: PropTypes.any.isRequired, 
}

export default StoryCards;
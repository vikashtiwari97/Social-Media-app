import PropTypes from "prop-types";
import React from "react";
import { View, Image, Text } from "react-native"; 
import style from './style'

const UserProfile = (props) => {
    return (
           <View style={[style.userImageContainer , {borderRadius: props.imageDimensions}]}>
                 <Image 
                source={props.profileImage} 
                style={{width:props.imageDimensions , height: props.imageDimensions}}
            />
           </View>
    );
}

UserProfile.propTypes = {
    profileImage: PropTypes.any.isRequired, 
    imageDimensions: PropTypes.number.isRequired,
}

export default UserProfile;
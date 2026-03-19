import React from "react";
import PropTypes from "prop-types";
import { Text, View , Image } from "react-native";
import UserProfile from '../UserProfileImage/UserProfile';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBookBookmark, faEllipsis, faHeart, faMessage } from "@fortawesome/free-solid-svg-icons";

const UserPost = (props) => {
    return <View style={{marginTop:30, borderBottomWidth:1, paddingBottom:20 , borderBlockColor:'#EFF2F6'}}>
        <View style={{ flexDirection: 'row' , alignItems:'center' , justifyContent:'space-between' }}>
            <View style={{flexDirection: 'row'}}>
                <UserProfile profileImage={props.profileImage} imageDimensions={48} />
            <View style={{ justifyContent: 'center' , marginLeft : 10 }}>
                <Text style={{color:'#000' , fontSize: 16 , fontFamily:'Inter_18pt-Bold'}}>{props.firstName} {props.lastName}</Text>
                {props.location && <Text style={{color:'#79869F' , fontSize: 12 , fontFamily:'Inter_18pt-Light' , marginTop:5}} >{props.location}</Text>}
                
            </View>
            </View>
            <FontAwesomeIcon icon={faEllipsis} size={24} color="#79869F"/>
        </View>
        <View style={{alignItems:'center' , marginVertical:20 }}>
            <Image source={props.image} />
        </View>
        <View style={{marginLeft:10 , flexDirection:'row'}}>
            <View style={{flexDirection:'row'}} >
                <FontAwesomeIcon icon={faHeart} color={'#79869F'}/>
                <Text style={{marginLeft:3, color:'#79869F'}}>{props.likes}</Text>
            </View>
            <View style={{flexDirection:'row' , marginLeft:27}} >
                <FontAwesomeIcon icon={faMessage} color={'#79869F'}/>
                <Text style={{marginLeft:3, color:'#79869F'}}>{props.comments}</Text>
            </View>
            <View style={{flexDirection:'row' , marginLeft:27}} >
                <FontAwesomeIcon icon={faBookBookmark} color={'#79869F'}/>
                <Text style={{marginLeft:3, color:'#79869F'}}>{props.bookmarks}</Text>
            </View>
        </View>
    </View>;
}

UserPost.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.any.isRequired,
    likes: PropTypes.number.isRequired,
    profileImage: PropTypes.any.isRequired,
    comments: PropTypes.number.isRequired,
    bookmarks: PropTypes.number.isRequired
}
export default UserPost;
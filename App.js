import React from 'react';
import {
  SafeAreaProvider,
  SafeAreaView
} from 'react-native-safe-area-context';
import Title from './src/component/Title/Title'
import { View , TouchableOpacity, Text , FlatList } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import globalStyle from './src/assets/Styles/globalStyles';
import StoryCards from './src/component/Cards/storyCards'


const App = () => {
  const userStories = [
    {
      firstName : 'Vicky',
      id:1,
      profileImage: require('./src/assets/images/default_profile.png')
    },
    {
      firstName : 'Vikash',
      id:2,
      profileImage: require('./src/assets/images/default_profile.png')
    },
    {
      firstName : 'Mamta',
      id:3,
      profileImage: require('./src/assets/images/default_profile.png')
    },
    {
      firstName : 'Rita',
      id:4,
      profileImage: require('./src/assets/images/default_profile.png')
    },
    {
      firstName : 'Manjeet',
      id:5,
      profileImage: require('./src/assets/images/default_profile.png')
    },
    {
      firstName : 'Deepak',
      id:6,
      profileImage: require('./src/assets/images/default_profile.png')
    },
    {
      firstName : 'Pihu',
      id:7,
      profileImage: require('./src/assets/images/default_profile.png')
    },
    {
      firstName : 'Neelu',
      id:8,
      profileImage: require('./src/assets/images/default_profile.png')
    },
    {
      firstName : 'Ankit',
      id:9,
      profileImage: require('./src/assets/images/default_profile.png')
    },
  ]
  return (
    <SafeAreaProvider>
      <SafeAreaView>
            <View style={globalStyle.header} >
              <Title title={`Let's Explore`} />
              <TouchableOpacity style={globalStyle.messageIcon}>
              <FontAwesomeIcon icon={faEnvelope} size={20} color={'#898DAE'}/>
              <View style={globalStyle.notificationNumber}>
                <Text style={globalStyle.twoNumber}>2</Text>
              </View>
              </TouchableOpacity>
            </View>
            <View style={globalStyle.userStoryConatiner} >
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  data={userStories}
                  horizontal={true}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({item}) => ( 
                      <StoryCards firstName={item.firstName} profileImage={item.profileImage}/>
                  )}   
                />
            </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;

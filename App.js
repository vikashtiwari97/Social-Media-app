import React, { useState, useEffect } from 'react';
import {
  SafeAreaProvider,
  SafeAreaView
} from 'react-native-safe-area-context';
import Title from './src/component/Title/Title'
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import globalStyle from './src/assets/Styles/globalStyles';
import StoryCards from './src/component/Cards/storyCards';
import UserPost from './src/component/UserPost/UserPost'


const App = () => {
  const userStories = [
    {
      firstName: 'Vicky',
      id: 1,
      profileImage: require('./src/assets/images/default_profile.png')
    },
    {
      firstName: 'Vikash',
      id: 2,
      profileImage: require('./src/assets/images/default_profile.png')
    },
    {
      firstName: 'Mamta',
      id: 3,
      profileImage: require('./src/assets/images/default_profile.png')
    },
    {
      firstName: 'Rita',
      id: 4,
      profileImage: require('./src/assets/images/default_profile.png')
    },
    {
      firstName: 'Manjeet',
      id: 5,
      profileImage: require('./src/assets/images/default_profile.png')
    },
    {
      firstName: 'Deepak',
      id: 6,
      profileImage: require('./src/assets/images/default_profile.png')
    },
    {
      firstName: 'Pihu',
      id: 7,
      profileImage: require('./src/assets/images/default_profile.png')
    },
    {
      firstName: 'Neelu',
      id: 8,
      profileImage: require('./src/assets/images/default_profile.png')
    },
    {
      firstName: 'Ankit',
      id: 9,
      profileImage: require('./src/assets/images/default_profile.png')
    },
  ]

  const userPost = [
    {
      firstName: 'Vicky',
      lastName: 'Tiwari',
      location: 'Rohtak , Haryana',
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      image: require('./src/assets/images/postImage.png'),
      profileImage: require('./src/assets/images/default_profile.png'),
      id: 1,
    },
    {
      firstName: 'Rita',
      lastName: 'Devi',
      location: 'Rohtas , Natwar',
      likes: 1150,
      comments: 150,
      bookmarks: 45,
      image: require('./src/assets/images/postImage.png'),
      profileImage: require('./src/assets/images/default_profile.png'),
      id: 2,
    },
    {
      firstName: 'Manjeet',
      lastName: 'Tiwari',
      location: 'Rohtak, Haryana',
      likes: 1150,
      comments: 150,
      bookmarks: 45,
      image: require('./src/assets/images/postImage.png'),
      profileImage: require('./src/assets/images/default_profile.png'),
      id: 3,
    },
    {
      firstName: 'Vikash',
      lastName: 'Tiwari',
      location: 'Rohtak, Haryana',
      likes: 1150,
      comments: 150,
      bookmarks: 45,
      image: require('./src/assets/images/postImage.png'),
      profileImage: require('./src/assets/images/default_profile.png'),
      id: 4,
    },
    {
      firstName: 'Mamta',
      lastName: 'Ojha',
      location: 'BhajanPura , Delhi',
      likes: 1050,
      comments: 10,
      bookmarks: 5,
      image: require('./src/assets/images/postImage.png'),
      profileImage: require('./src/assets/images/default_profile.png'),
      id: 5,
    },

  ]

  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderData, setUserStoriesRenderData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);


  const userPostPageSize = 4;
  const [userPostCurrentPage, setUserPostCurrentPage] = useState(1);
  const [userPostRenderData, setUserPostRenderData] = useState([]);
  const [isLoadingUserPost, setIsLoadingUserPost] = useState(false);

  const pagination = (database, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  }


  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderData(getInitialData);
    setIsLoadingUserStories(false);
  }, []);




  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <FlatList
            ListHeaderComponent={
              <>
                <View style={globalStyle.header} >
                  <Title title={`Let's Explore`} />
                  <TouchableOpacity style={globalStyle.messageIcon}>
                    <FontAwesomeIcon icon={faEnvelope} size={20} color={'#898DAE'} />
                    <View style={globalStyle.notificationNumber}>
                      <Text style={globalStyle.twoNumber}>2</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={globalStyle.userStoryConatiner} >
                  <FlatList
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                      if (isLoadingUserStories) {
                        return;
                      }
                      setIsLoadingUserStories(true);
                      const contentToAppend = pagination(userStories, userStoriesCurrentPage + 1, userStoriesPageSize)
                      if (contentToAppend.length > 0) {
                        setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
                        setUserStoriesRenderData(prev => [...prev, ...contentToAppend])
                      }
                      setIsLoadingUserStories(false);
                    }}
                    showsHorizontalScrollIndicator={false}
                    data={userStoriesRenderData}
                    horizontal={true}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                      <StoryCards key={item.id} firstName={item.firstName} profileImage={item.profileImage} />
                    )}
                  />
                </View>
              </>
            }
            data={userPost}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={globalStyle.userPostContainer}>
                <UserPost
                  firstName={item.firstName}
                  lastName={item.lastName}
                  image={item.image}
                  likes={item.likes}
                  comments={item.comments}
                  bookmarks={item.bookmarks}
                  profileImage={item.profileImage}
                  location={item.location}
                />
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;

import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import YouTube from 'react-native-youtube';

const YoutubePlayer = ({videoId}) => {
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = videoId.match(regExp);
  const video = match && match[7].length == 11 ? match[7] : false;

  return (
    <YouTube
      videoId={video}
      apiKey="AIzaSyCF9RACHMolKDh33oEDIrtHgbsCxE_Jqh0"
      // onReady={e => this.setState({isReady: true})}
      onChangeState={e => console.log(e)}
      onChangeQuality={e => console.log(e)}
      onError={e => console.log(e)}
      onChangeFullscreen={e => console.log(e)}
      style={{alignSelf: 'stretch', height: 250}}
    />
  );
};

export default YoutubePlayer;

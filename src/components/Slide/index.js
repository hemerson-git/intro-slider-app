import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Slide({ item }) {
  return (
    <View style={styles.container} key={item.key}>
      <Image style={styles.image} source={item.image} />

      <Text style={styles.title}>{item.title}</Text>

      <Text style={styles.text}>{item.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    width: '100%',
    height: '73%',
    resizeMode: 'cover'
  },

  title: {
    paddingTop: 25,
    paddingBottom: 10,
    fontSize: 23,
    fontWeight: 'bold',
    color: '#009CFF',
    alignSelf: 'center'
  },

  text: {
    textAlign: 'center',
    color: '#b5b5b5',
    paddingHorizontal: 25,
    fontSize: 15,
  }
});

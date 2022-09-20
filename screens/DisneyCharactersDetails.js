import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function DisneyCharactersDetails({route}) {
  const {name, imageUri} = route.params
console.log(name, imageUri)
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: imageUri,
          }}
          resizeMode={'contain'}
        />
        <Text>Name: {name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7faf8',
    padding: 20,
  },
  imageContainer: {
    flex: 5,
    padding: 10,
  },
  actionContainer: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
  },
  navigationButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionContainerDivider: {
    flex: 3,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

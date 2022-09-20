import React, { memo, useEffect, useState } from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import HorizontalCard from '../components/HorizontalCard';
import { getDisneyCharactersData } from '../utils/actions';

function Home(props) {
  const [disneyCharacterData, setdisneyCharacterData] = useState("");
  useEffect(() => {
      async function fetchData() {
        setdisneyCharacterData(await getDisneyCharactersData())
      }
      fetchData()
  }, [setdisneyCharacterData])

  const handlePress = (name, imageUri) => {
    props.navigation.navigate("DisneyCharactersDetails",{name: name, imageUri: imageUri})
  }

  const renderItem = ({ item }) => (
    <HorizontalCard
      imageUri={item.imageUrl}
      name={item.name}
      key={item._id}
      handlePress={() => handlePress(item.name, item.imageUrl)}
    />
  );

  return (
    <View>
      <FlatList
        data={disneyCharacterData.data}
        renderItem={renderItem}
      />
    </View>
  );
}

export default memo(Home);

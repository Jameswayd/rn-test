import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DruginfoScreen = ({ route }) => {
  const navigation = useNavigation();
  const pageToAdd = route.params?.pageToAdd;

  const navigateToAcetaminephen = () => {
    navigation.navigate('Acetaminephen');
  };

  return (
    <View style={{ flex: 1,backgroundColor: 'white',}}>
      {pageToAdd && <Text style={{ color: 'black' }}>{pageToAdd}</Text>}
      <Button title="Acetaminophen" onPress={navigateToAcetaminephen} color="black" />
    </View>
  );
};

export default DruginfoScreen;

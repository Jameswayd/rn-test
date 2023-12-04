// CustomLink.js
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CustomLink = ({ toScreen, text }) => {
const navigation = useNavigation();

const handleLinkPress = () => {
    navigation.navigate(toScreen);
};

return (
    <TouchableOpacity onPress={handleLinkPress}>
        <Text>{text}</Text>
    </TouchableOpacity>
);
};

export default CustomLink;

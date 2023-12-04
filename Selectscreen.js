import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Selectscreen = () => {
  const [selected, setSelected] = useState('');
  const navigation = useNavigation();

  const navigateToPage = (page) => {
    switch (page) {
      case 'BMI':
        navigation.navigate('BMI'); 
        break;
      case '行走步數':
        navigation.navigate('行走步數');
        break;
      case '血壓':
        navigation.navigate('血壓'); 
        break;
      case '血糖':
        navigation.navigate('血糖'); 
        break;
      default:
        break;
    }
  };

  const handleSelect = (item) => {
    setSelected(item);
    navigateToPage(item);
  };

  return (
    <View style={styles.container}>
      <View style={styles.selectBar}>
        <Text style={styles.selectText}>選擇紀錄種類</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          <TouchableOpacity style={[styles.button, selected === 'BMI' && styles.selectedButton]} onPress={() => handleSelect('BMI')}>
          <Image source={require('./assets/BMIphoto.png')} style={styles.buttonImage} />
            <Text style={styles.buttonText}>BMI</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, selected === '行走步數' && styles.selectedButton]} onPress={() => handleSelect('行走步數')}>
          <Image source={require('./assets/steps.png')} style={styles.buttonImage} />
            <Text style={styles.buttonText}>行走步數</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={[styles.button, selected === '血壓' && styles.selectedButton]} onPress={() => handleSelect('血壓')}>
          <Image source={require('./assets/blood-pressure.png')} style={styles.buttonImage} />
            <Text style={styles.buttonText}>血壓</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, selected === '血糖' && styles.selectedButton]} onPress={() => handleSelect('血糖')}>
          <Image source={require('./assets/blood-sugar.png')} style={styles.buttonImage} />
            <Text style={styles.buttonText}>血糖</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF5FF',
  },
  selectBar: {
    marginTop: '15%',
    paddingTop: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECF5FF',
  },
  selectText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-20%',
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    width: 170,
    height: 170,
    margin: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain', // 調整圖片大小以完全容納在按鈕內
    shadowColor: 'rgba(70, 163, 255, 0.3)', // 陰影顏色
    shadowOffset: { width: 0, height: 2 }, // 陰影偏移量
    shadowOpacity: 0.8, // 陰影透明度
    shadowRadius: 4, // 陰影半徑
    //elevation: 2, // 安卓陰影效果
  },
  selectedButton: {
    borderColor: '#B7E1E1',
    borderWidth: 4,
  },
  buttonImage: {
    width: '60%',
    height: '60%',
    marginBottom:'10%',
    backgroundColor: 'white',
    resizeMode: 'contain', // 調整圖片大小以完全容納在按鈕內
    shadowColor: 'rgba(0, 0, 0, 0.1)', // 陰影顏色
    shadowOffset: { width: 0, height: 2 }, // 陰影偏移量
    shadowOpacity: 0.8, // 陰影透明度
    shadowRadius: 2, // 陰影半徑
    //elevation: 2, // 安卓陰影效果
  },
  buttonText: {
    color: '#528CAD',
    fontSize: 20,
  },
});
export default Selectscreen;

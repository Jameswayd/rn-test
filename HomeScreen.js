import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [selected, setSelected] = useState('');

  const handleSelect = (item) => {
    setSelected(item);
    //navigateToPage(item);
  };
  {/*
  const navigateToPage = (page) => {
    switch (page) {
      case '設定':
        navigation.navigate('Settings');
        break;
      case '健康數據紀錄':
        navigation.navigate('HealthData');
        break;
      case '藥品管理':
        navigation.navigate('Medication');
        break;
      case '預約約診功能':
        navigation.navigate('Appointment');
        break;
      default:
        break;
    }
  };
 */}
  return (
    <View style={styles.container}>
      <View style={styles.selectBar}>
        <Text style={styles.selectText}>Select function</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          <TouchableOpacity style={[styles.button, selected === '設定' && styles.selectedButton]} onPress={() => handleSelect('設定')}>
            <Image source={require('./assets/Setting.png')} style={styles.buttonImage} />
            <Text style={styles.buttonText}>設定</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, selected === '健康數據紀錄' && styles.selectedButton]} onPress={() => handleSelect('健康數據紀錄')}>
            <Image source={require('./assets/Heart.png')} style={styles.buttonImage} />
            <Text style={styles.buttonText}>健康數據紀錄</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={[styles.button, selected === '藥品管理' && styles.selectedButton]} onPress={() => handleSelect('藥品管理')}>
            <Image source={require('./assets/Medicine.png')} style={styles.buttonImage} />
            <Text style={styles.buttonText}>藥品管理</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, selected === '預約約診功能' && styles.selectedButton]} onPress={() => handleSelect('預約約診功能')}>
            <Image source={require('./assets/Calendar-Approved.png')} style={styles.buttonImage} />
            <Text style={styles.buttonText}>預約約診</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
export default HomeScreen;


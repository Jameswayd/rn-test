import React, { useState } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const frame = StyleSheet.create({
  labelContainer: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 15,
    alignSelf: 'flex-start',
  },
  labelText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const  Keto= () => {
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false);
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite); // 切換最愛狀態
    console.log(isFavorite ? '取消最愛' : '加入最愛');
    
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
        <View style={styles.column}>
          <View style={{ height: 5 }}></View>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginBottom: 8 }}>
          <View style={frame.labelContainer}>
            <Text style={styles.label}>健保藥品代碼:</Text>
          </View>
          <Text style={styles.label}>AC45965100</Text>



          <View style={{ flex: 1, flexDirection: 'row-reverse' }}>
            <TouchableOpacity onPress={toggleFavorite}>
            <Image
              source={require('../assets/love.png')}
              style={{ width: 50, height: 50, tintColor: isFavorite ? 'red' : 'black' }}
            />
            </TouchableOpacity>
          </View>



          </View>          
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
          <View style={frame.labelContainer}>
            <Text style={styles.label}>中文名稱:</Text>
          </View>
            <Text style={styles.label}>克多炎腸溶微粒膠囊
</Text>
        </View>


          <View style={{ flexDirection: 'row' , alignItems: 'center' , marginBottom: 8  }}>
            <View style={frame.labelContainer}>
              <Text style={styles.label}>英文名稱:</Text>
            </View>
            <Text style={styles.label}>Keto</Text>
          </View>

          <View style={{ flexDirection: 'row' , alignItems: 'center', marginBottom: 8  }}>
            <View style={frame.labelContainer}>
              <Text style={styles.label}>藥品劑型:</Text>
            </View>
            <Text style={styles.label}>口服</Text>
          </View>

          <View style={{ flexDirection: 'row' , alignItems: 'center', marginBottom: 8 }}>
            <View style={frame.labelContainer}>
              <Text style={styles.label}>藥品代碼:</Text>
            </View>
            <Text style={styles.label}>OKETO</Text>
          </View>

          <View style={{ flexDirection: 'row' , alignItems: 'center' , marginBottom: 8}}>
            <View style={frame.labelContainer}>
              <Text style={styles.label}>適應症:</Text>
            </View>
            <Text style={styles.label}></Text>
          </View>

          <View style={{ flexDirection: 'row' , alignItems: 'center', marginBottom: 8 }}>
            <View style={frame.labelContainer}>
              <Text style={styles.label}>副作用:</Text>
            </View>
            <Text style={styles.label}>胃腸道出血、潰瘍、急性腎衰竭、肝衰竭、過敏反應。
</Text>
          </View>

          <View style={{ flexDirection: 'row' , alignItems: 'center', marginBottom: 8 }}>
            <View style={frame.labelContainer}>
              <Text style={styles.label}>藥品警語:</Text>
            </View>
            <Text style={styles.label}>應留意是否有胃出血症狀。
</Text>
          </View>

          <View style={{ flexDirection: 'row' , alignItems: 'center' , marginBottom: 8}}>
            <View style={frame.labelContainer}>
              <Text style={styles.label}>懷孕分級:</Text>
            </View>
            <Text style={styles.label}>C/D級</Text>
          </View>

          <View style={{ flexDirection: 'row' , alignItems: 'center' , marginBottom: 8}}>
            <View style={frame.labelContainer}>
              <Text style={styles.label}>成份:</Text>
            </View>
            <Text style={styles.label}>Ketorolac 10mg。
</Text>
          </View>

          <View style={{ flexDirection: 'row' , alignItems: 'center' , marginBottom: 8}}>
            <View style={frame.labelContainer}>
              <Text style={styles.label}>用法用量:</Text>
            </View>
          <Text style={styles.label}>每次10mg，4~6小時1次。 　
</Text>
      
          </View>
          
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
            <View style={frame.labelContainer}>
              <Text style={styles.label}>藥品圖片:</Text>
            </View>
            <Image source={require('../assets/19.jpeg')} style={styles.image} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,  // 占滿整個螢幕
    padding: 0,  // 內邊距為 20 像素
    backgroundColor:'white',
  },
  row: {
    flexDirection: 'row',  // 排列方向為橫向
    marginBottom: 0,  // 底部留 20 像素的間距
  },
  column: {
    flex: 1,  // 佔據可用空間的 1/3
    marginLeft: 3,  // 左邊留 10 像素的間距
  },
  label: {
    fontSize: 16,  // 字體大小為 16
    fontWeight: 'bold',  // 字體粗體
    marginBottom: 5,  // 底部留 5 像素的間距
  },
  text: {
    fontSize: 16,  // 字體大小為 16
    marginBottom: 10,  // 底部留 10 像素的間距
  },
  image: {
    width: 280,  // 寬度為 200 像素
    height: 280,  // 高度為 200 像素
    resizeMode: 'contain',  // 圖片等比例縮放以適應容器
  },
});


export default Keto;
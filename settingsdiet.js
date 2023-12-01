import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';

const SetDietScreen = ({ navigation }) => {
    const [foodItems, setFoodItems] = useState([
        { type: 'vegetables', name: '蔬菜', recommended: '菠菜,花椰菜,      胡蘿蔔', intake: 0 },
        { type: 'fruits', name: '水果', recommended: '西瓜,香蕉,芒果', intake: 0 },
        { type: 'meat', name: '肉類', recommended: '豬排,牛肉,羊肉', intake: 0 },
        { type: 'rice', name: '米飯', recommended: '糙米,白米,五穀米', intake: 0 },
        { type: 'seafood', name: '海鮮', recommended: '鮭魚, 蝦子,海帶', intake: 0 },
        { type: 'dairy', name: '乳製品', recommended: '牛奶,起司,優格', intake: 0 },
    ]);

    const handleAdd = (type, amount) => {
        const updatedItems = foodItems.map((item) => {
            if (item.type === type) {
                const intake = parseInt(amount) || 0;
                return { ...item, intake };
            }
            return item;
        });
        setFoodItems(updatedItems);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {foodItems.map((item) => (
                <View key={item.type} style={styles.foodItem}>
                    {(item.type === 'vegetables' && <Image source={require('./assets/vegetables.png')} style={styles.foodImage} />) ||
                        (item.type === 'fruits' && <Image source={require('./assets/fruits.png')} style={styles.foodImage} />) ||
                        (item.type === 'meat' && <Image source={require('./assets/meat.png')} style={styles.foodImage} />) ||
                        (item.type === 'rice' && <Image source={require('./assets/rice.png')} style={styles.foodImage} />) ||
                        (item.type === 'seafood' && <Image source={require('./assets/seafood.png')} style={styles.foodImage} />) ||
                        (item.type === 'dairy' && <Image source={require('./assets/dairy.png')} style={styles.foodImage} />)}
                    <View style={styles.details}>
                        <Text style={styles.text_title}>{item.name}</Text>
                        <Text style={styles.text_content}>推薦食物: {item.recommended}</Text>
                        <Text style={styles.text_content}>目前設定用量: {item.intake}</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                keyboardType="numeric"
                                placeholder="輸入目標"
                                onChangeText={(text) => handleAdd(item.type, text)}
                            />
                        </View>
                    </View>
                </View>
            ))}
            <TouchableOpacity onPress={() => navigation.navigate('飲食管理')} style={styles.bottomButton}>
                <Text style={styles.buttonText2}>確認並回到上一頁</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        flexGrow: 1, // 填滿可用空間
        paddingTop: 10, // 適當的頂部間距
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconImage: {
        width: 40,
        height: 40,
    },
    dateText: {
        flex: 3,
        alignItems: 'center',
        fontSize: 25,
    },
    dateTimePicker: {
        flex: 6,
    },
    foodItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: '#ECF5FF',
        borderRadius: 30,
        marginLeft: 5,
        marginRight: 5,
    },
    foodImage: {
        width: 90,
        height: 90,
        marginRight: 20,
    },
    details: {
        flex: 1,
        alignItems: 'flex-start',
    },
    text_title: {
        fontSize: 25,
        color: 'black',
        fontFamily: 'Arial',
        marginBottom: 5,
    },
    text_content: {
        fontSize: 20,
        color: 'black',
        fontFamily: 'Arial',
        marginBottom: 1,
    },
    addButton: {
        position: 'absolute',
        right: 5,
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        backgroundColor: '#3D3D4C',
        borderRadius: 20,
        width: '20%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 15,
    },
    buttonText2: {
        color: '#FFFFFF',
        fontSize: 20,
    },
    bottomButton: {
        backgroundColor: '#3D3D4C',
        borderRadius: 30,
        marginTop: 10,
        padding: 10,
        width: '80%',
        alignItems: 'center',
        marginRight: '10%',
        marginLeft: '10%',
        marginBottom: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#3D3D4C', // Gray border color
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: 5,
    },
    input: {
        flex: 1,
        height: 40,
        marginLeft: 10,
        fontSize: 18,
        color: 'black',
    },
});

export default SetDietScreen;

import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Switch, Slider, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
    const [fontSize, setFontSize] = useState(20);
    const [reminderRegistration, setReminderRegistration] = useState(true);
    const [reminderMedication, setReminderMedication] = useState(true);
    const [updateData, setUpdateData] = useState(true);
    const [isNightMode, setIsNightMode] = useState(false);
    const [notificationInterval, setNotificationInterval] = useState(8); // 偏好通知間隔
    const [soundEnabled, setSoundEnabled] = useState(true); // 音效
    const [vibrationEnabled, setVibrationEnabled] = useState(true); // 震動
    const navigation = useNavigation();
    const [showTimePicker, setShowTimePicker] = useState(false); // State to manage time picker visibility
    const [selectedTime, setSelectedTime] = useState(new Date());

    useEffect(() => {
        navigation.setOptions({
            headerStyle: { backgroundColor: isNightMode ? 'black' : 'white' },
            headerTintColor: isNightMode ? 'white' : 'black',
        });
    }, [isNightMode, navigation]);

    const handleFontSizeChange = (value) => {
        setFontSize(value);
    };

    const toggleNightMode = () => {
        setIsNightMode(!isNightMode);
    };

    const handleTimePicker = () => {
        setShowTimePicker(true);
    };


    const handleTimeChange = (event, selected) => {
        setShowTimePicker(false);
        if (selected) {
            setSelectedTime(selected);
        }
    };


    const CustomSwitch = ({ value, onValueChange, label }) => {
        return (
            <View style={styles.switchContainer}>
                <Text style={{ fontSize, color: isNightMode ? 'white' : 'black' }}>{label}</Text>
                <Switch
                    value={value}
                    onValueChange={onValueChange}
                    thumbColor={value ? '#3D3D4C' : 'white'}
                    trackColor={{ false: '#f4f3f4', true: '#BEBEBE' }}
                />
            </View>
        );
    };
    return (
        <View style={styles.container}>
            <ScrollView style={isNightMode ? styles.containerNight : styles.container}>
                {/* 字體大小 */}
                <View style={[styles.settingItem, { backgroundColor: isNightMode ? 'black' : 'white' }]}>
                    <Text style={{ fontSize: fontSize, color: isNightMode ? 'white' : 'black' }}>調整字體大小</Text>
                    <Slider
                        style={{ width: '80%', marginBottom: 20 }}
                        minimumValue={10}
                        maximumValue={30}
                        step={1}
                        value={fontSize}
                        onValueChange={handleFontSizeChange}
                        minimumTrackTintColor={isNightMode ? 'gray' : '#3D3D4C'}
                        thumbTintColor={isNightMode ? 'gray' : '#3D3D4C'}
                    />
                </View>

                {/* 夜間模式 */}
                <View style={[styles.settingItem, { backgroundColor: isNightMode ? 'black' : 'white' }]}>
                    <CustomSwitch
                        value={isNightMode}
                        onValueChange={toggleNightMode}
                        label="夜間模式"
                    />
                </View>

                {/* 通知偏好設置 */}
                <View style={[styles.settingItem, { backgroundColor: isNightMode ? 'black' : 'white' }]}>
                    <Text style={{ fontSize: fontSize, color: isNightMode ? 'white' : 'black' }}>通知設置（小時）</Text>
                    <Slider
                        style={{ width: '80%', marginBottom: 20 }}
                        minimumValue={1}
                        maximumValue={12}
                        step={1}
                        value={notificationInterval}
                        onValueChange={(value) => setNotificationInterval(value)}
                        minimumTrackTintColor={isNightMode ? 'gray' : '#3D3D4C'}
                        thumbTintColor={isNightMode ? 'gray' : '#3D3D4C'}
                    />
                    <Text style={{ fontSize: fontSize, color: isNightMode ? 'white' : 'black', textAlign: 'right' }}>{notificationInterval} 小時</Text>
                    <TouchableOpacity onPress={handleTimePicker} style={{ marginTop: 20 }}>
                        <Text style={{ fontSize: fontSize, color: isNightMode ? 'white' : 'black' }}>
                            選擇的時間：{selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </Text>
                    </TouchableOpacity>

                    {showTimePicker && (
                        <DateTimePicker
                            value={selectedTime}
                            mode="time"
                            is24Hour={true}
                            display="spinner"
                            onChange={handleTimeChange}
                            textColor={isNightMode ? 'white' : 'black'}
                        />
                    )}
                </View>

                {/* 音效和震動提醒 */}
                <View style={[styles.settingItem, { backgroundColor: isNightMode ? 'black' : 'white' }]}>
                    <Text style={{ fontSize: fontSize, color: isNightMode ? 'white' : 'black' }}>通知</Text>
                    <CustomSwitch
                        value={soundEnabled}
                        onValueChange={(value) => setSoundEnabled(value)}
                        label="音效提醒"
                    />
                    <CustomSwitch
                        value={vibrationEnabled}
                        onValueChange={(value) => setVibrationEnabled(value)}
                        label="震動提醒"
                    />
                </View>

                {/* 提醒登記 */}
                <View style={[styles.settingItem, { backgroundColor: isNightMode ? 'black' : 'white' }]}>
                    <CustomSwitch
                        value={reminderRegistration}
                        onValueChange={(value) => setReminderRegistration(value)}
                        label="提醒登記"
                    />
                </View>

                {/* 提醒用藥 */}
                <View style={[styles.settingItem, { backgroundColor: isNightMode ? 'black' : 'white' }]}>
                    <CustomSwitch
                        value={reminderMedication}
                        onValueChange={(value) => setReminderMedication(value)}
                        label="提醒用藥"
                    />
                </View>

                {/* 資料更新 */}
                <View style={[styles.settingItem, { backgroundColor: isNightMode ? 'black' : 'white' }]}>
                    <CustomSwitch
                        value={updateData}
                        onValueChange={(value) => setUpdateData(value)}
                        label="資料同步更新"
                    />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    containerNight: {
        flex: 1,
        backgroundColor: 'black',
        paddingTop: 5,
    },
    settingsContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    settingItem: {
        width: '100%',
        marginBottom: 5,
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ccc',
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

export default SettingsScreen;

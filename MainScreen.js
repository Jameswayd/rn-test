import React, { useState } from 'react';
import { View, Button, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const buttonConfig = [
    {
        title: "Ergocafe",
        chineseTitle: "痛安錠",
        screenName: "Ergocafe",
    },
    {
        title: "Amiorone",
        screenName: "Amiorone",
    },
    {
        title: "Digoxin Lanoxin",
        screenName: "Digoxin",
    },
    {
        title: "Tifforly",
        screenName: "Tifforly",
    },
    {
        title: "50/850 Galvus MET",
        screenName: "Galvus",
    },
    {
        title: "SATA",
        screenName: "SATA",
    },
    {
        title: "Novamin",
        screenName: "Novamin",
    },
    {
        title: "Morphine",
        screenName: "Morphine",
    },
    {
        title: "Dexamethasoneoxin",
        screenName: "Dexamethasoneoxin",
    },
    {
        title: "Magnesium Sulfate",
        screenName: "Magnesium",
    },
    {
        title: "Progesterone",
        screenName: "Progesterone",
    },
    {
        title: "Atropine Sulfate",
        screenName: "Atropine",
    },
    {
        title: "Depot Testoestradiol",
        screenName: "Depot",
    },
    {
        title: "Gipamine",
        screenName: "Gipamine",
    },
    {
        title: "Pitressin",
        screenName: "Pitressin",
    },

    {
        title: "Gendobu",
        screenName: "Gendobu",
    },

    {
        title: "Glycopyrodyn",
        screenName: "Glycopyrodyn",
    },
    {
        title: "Vancomycin",
        screenName: "Vancomycin",
    },
    {
        title: "Keto",
        screenName: "Keto",
    },
    {
        title: "Acetaminophen",
        screenName: "Acetaminophen",
    },
    {
        title: "Anexate",
        screenName: "Anexate",
    },
    {
        title: "Secorine",
        screenName: "Secorine",
    },
    {
        title: "Tienam",
        screenName: "Tienam",
    },
    {
        title: "Lasix Rasitol",
        screenName: "Lasix",
    },
    {
        title: "Voren",
        screenName: "Voren",
    },
    {
        title: "Curam",
        screenName: "Curam",
    },
    {
        title: "Nasacort AQ",
        screenName: "Nasacort",
    },
    {
        title: "Actein",
        screenName: "Actein",
    },
    {
        title: "ForLAX 10gm",
        screenName: "ForLAX",
    },
    {
        title: "Levemir",
        screenName: "Levemir",
    },
    {
        title: "Dilantin",
        creenName: "Dilantin",
    },
    {
        title: "Ponstan",
        screenName: "Ponstan",
    },
    {
        title: "Transamin",
        screenName: "Transamin",
    },
    {
        title: "Negacide",
        screenName: "Negacide",
    },
    {
        title: "Euglucon",
        screenName: "Euglucon",
    },
    {
        title: "Asverin",
        screenName: "Asverin",
    },
    {
        title: "Codeine",
        screenName: "Asverin",
    },
    {
        title: "Homoclomin",
        screenName: "Codeine",
    },
    {
        title: "Bismuth",
        screenName: "Asverin",
    },
    {
        title: "Solaxin Sorin",
        screenName: "Asverin",
    },
    {
        title: "Nibiol",
        screenName: "Asverin",
    },
    {
        title: "Neuzyme、Suzyme",
        screenName: "Asverin",
    },
    {
        title: "CaCO3",
        screenName: "Asverin",
    },
    {
        title: "Aminophylline",
        screenName: "Asverin",
    },
    {
        title: "Tonful",
        screenName: "Asverin",
    },
    {
        title: "Benzbromarone",
        screenName: "Asverin",
    },
    {
        title: "Pariet",
        screenName: "Asverin",
    },
    {
        title: "Mestinon",
        screenName: "Asverin",
    },
    {
        title: "Bafen",
        screenName: "Asverin",
    },
    {
        title: "Fragivix",
        screenName: "Asverin",
    },
    {
        title: "Regrow",
        screenName: "Asverin",
    },
    {
        title: "Zeffix",
        screenName: "Asverin",
    },
    {
        title: "Sennapur",
        screenName: "Asverin",
    },
    {
        title: "Provera",
        screenName: "Asverin",
    },
    {
        title: "Pletaal",
        screenName: "Asverin",
    },
    {
        title: "Folina",
        screenName: "Asverin",
    },
    {
        title: "Rivotril",
        screenName: "Asverin",
    },
    {
        title: "Cephadol",
        screenName: "Asverin",
    },
    {
        title: "Butin",
        screenName: "Asverin",
    },
    {
        title: "Licodin",
        screenName: "Asverin",
    },
    {
        title: "Genclone",
        screenName: "Asverin",
    },
    {
        title: "Amtrel Tab",
        screenName: "Asverin",
    },
    {
        title: "Tapazole",
        screenName: "Asverin",
    },
    {
        title: "Coxine SR",
        screenName: "Asverin",
    },
    {
        title: "Erispan",
        screenName: "Asverin",
    },
    {
        title: "Androcur",
        screenName: "Asverin",
    },
    {
        title: "Minidiab",
        screenName: "Asverin",
    },
    {
        title: "Hytrin",
        screenName: "Asverin",
    },
    {
        title: "Calmday",
        screenName: "Asverin",
    },
    {
        title: "Moduretic",
        screenName: "Asverin",
    },
    {
        title: "Rytmonorm",
        screenName: "Asverin",
    },
    {
        title: "Coumadin",
        screenName: "Asverin",
    },
    {
        title: "Cytotec",
        screenName: "Asverin",
    },
    {
        title: "Glucobay",
        screenName: "Asverin",
    },
    {
        title: "Nitrostat NTG",
        screenName: "Asverin",
    },
    {
        title: "Silvinol",
        screenName: "Asverin",
    },

];

const MainScreen = () => {
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState('');
    const [filteredButtons, setFilteredButtons] = useState(buttonConfig);
    const handleSearch = () => {
        const filtered = buttonConfig.filter((button) =>
            button.title.toLowerCase().startsWith(searchText.toLowerCase()) ||
            (button.chineseTitle && button.chineseTitle.includes(searchText))
        );
        setFilteredButtons(filtered);
    };



    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10, marginTop: 20 }}>
                <TextInput
                    style={{
                        flex: 1,
                        backgroundColor: '#F2F2F2',
                        paddingVertical: 10,
                        paddingHorizontal: 15,
                        borderRadius: 20,
                        borderColor: '#3D3D4C',
                        fontSize: 16,
                    }}
                    placeholder="輸入藥品名稱"
                    onChangeText={(text) => setSearchText(text)}
                    value={searchText}
                />
                <TouchableOpacity onPress={handleSearch}>
                    <Image
                        source={require('./assets/search.png')}
                        style={{ width: 35, height: 37 }}
                    />
                </TouchableOpacity>
            </View>
    
            <ScrollView>
                {filteredButtons.map((button, index) => (
                    <Button
                        key={index}
                        title={button.title}
                        onPress={() => navigation.navigate(button.screenName)}
                        color="black"
                    />
                ))}
            </ScrollView>
        </View>
    );
};

export default MainScreen;

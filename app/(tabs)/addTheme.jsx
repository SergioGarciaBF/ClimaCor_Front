import {StyleSheet, Text, View, Image, Button, TextInput } from "react-native";
import {Colors} from './../../constants/Colors';
import {countries} from './../../constants/Climate';
{/**import { TextInput } from "react-native-gesture-handler";*/}
import { StatusBar } from "expo-status-bar";
import Dropdown from './../../components/Dropdown';

const formattedCountries = countries.map(c=>({
    value:c.label, 
    label: `${c.flag} ${c.label}`, 
}))

export default function addTheme() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.mainTitle}>Novo tema</Text>
            </View>
            {/** Campo de input */}
            <View> 
                <TextInput placeholder='Nome do tema' /> 
                <TextInput style={styles.input} />
            </View>

            <Dropdown data={formattedCountries} onChange={console.log} placeholder='Select countries'  />

            <View style={styles.button}>
                <Text>Adicionar outra cor</Text>
            </View>
            <View style={styles.button}>
                <Text>Salvar tema</Text>
            </View>

            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.blue,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#2C2F32',
        gap: 10,
      },
      mainTitle: {
        color: Colors.colorText,
        fontWeight: 'bold',
        marginTop: 12,
        fontSize: 24,
      },
      button: {
        color: Colors.colorText,
        fontFamily: 'Roboto',
        backgroundColor: Colors.white,
        borderRadius: 12,
        padding: 10,
        margin: 16,
        width: 160,
        alignItems:"center",
    },
    input:{
        borderWidth: 1.5,
        borderColor: Colors.stroke,
        paddingHorizontal: 10,
        paddingVertical: 12,
        width: 320,
        backgroundColor: Colors.white,
        borderRadius: 12,
    }
});
import {StyleSheet, Text, View, Image, Button } from "react-native";
import {Colors} from './../../constants/Colors';

export default function ThemeList() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.mainTitle}>Temas</Text>
            </View>
            <View style={styles.table}>
                <Text style={styles.secondaryTitle}>Nome do tema 1</Text>
                <View style={styles.colorBox}>
                    <View style={styles.colorCircle}></View>
                    <View style={styles.colorCircle}></View>
                    <View style={styles.colorCircle}></View>
                    <View style={styles.colorCircle}></View>
                    <View style={styles.colorCircle}></View>
                    <View style={styles.colorCircle}></View>
                    <View style={styles.colorCircle}></View>
                    <View style={styles.colorCircle}></View>
                </View> 
            </View>
            <View style={styles.table}>
                <Text style={styles.secondaryTitle}>Nome do tema 2</Text>
                <View style={styles.colorBox}>
                    <View style={styles.colorCircle}></View>
                    <View style={styles.colorCircle}></View>
                    <View style={styles.colorCircle}></View>
                    <View style={styles.colorCircle}></View>
                    <View style={styles.colorCircle}></View>
                    <View style={styles.colorCircle}></View>
                    <View style={styles.colorCircle}></View>
                    <View style={styles.colorCircle}></View>
                </View> 
            </View>
            <View style={styles.table}>
                <Text style={styles.secondaryTitle}>Nome do tema 3</Text>
                <View style={styles.colorBox}>
                    <View style={styles.colorCircle}></View>
                    <View style={styles.colorCircle}></View>
                    <View style={styles.colorCircle}></View>
                    <View style={styles.colorCircle}></View>
                    <View style={styles.colorCircle}></View>
                    <View style={styles.colorCircle}></View>
                    <View style={styles.colorCircle}></View>
                    <View style={styles.colorCircle}></View>
                </View> 
            </View>
            <View style={styles.button}>
                <Text>Criar novo tema</Text> 
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
      color: '#2C2F32'
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
    colorBox: {
        marginTop: 12,
        marginBottom: 12,
        flexDirection:"row",
        alignItems:"flex-start",

    },
    colorCircle: {
        height: 25,
        width: 25,
        backgroundColor: '#939393',
        borderRadius: 999,
        marginEnd: 10
    },
    table:{
        fontFamily: 'Roboto',
        backgroundColor: Colors.white,
        borderRadius: 12,
        padding: 10,
        margin: 16,
        width: 320,
    },
    secondaryTitle: {
        color: Colors.colorText,
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 'bold'
    },
    logo: {
      height: 100,
      width: 100,
      backgroundColor: 'green'
    },
    mainTitle: {
      color: Colors.colorText,
      fontWeight: 'bold',
      marginTop: 12,
      fontSize: 24,
    },
    navigator: {
      flexDirection: 'column',
      alignContent: 'flex-start',
      backgroundColor: 'white',
    }
  });
import {StyleSheet, Text, View, Image } from "react-native";
import {Colors} from './../../constants/Colors';

export default function Home() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.mainTitle}>Condição climática</Text>
            </View>
            <View>
                <Text style={styles.logo}>Placeholder</Text>
            </View>
            <View style={styles.table}>
                <Text style={styles.secondaryTitle}>Nome da Cidade</Text>
                <Text>DD/MM/YYYY</Text>
                <Text>Temperatura: XX °C</Text>
                <Text>Cor da lâmpada: nome da cor</Text>
            </View>
            <View style={styles.table}>
                <Text style={styles.secondaryTitle}>Mais informações</Text>
                <Text>Umidade: XX.X%</Text>
                <Text>Velocidade do vento: XX km/h</Text>
                <Text>Nascer do Sol: HH:MM</Text>
                <Text>Pôr do Sol: HH:MM</Text>
                <Text>Fase da Lua: Nome da Fase</Text>
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
      backgroundColor: '#EAEAEA',
      borderRadius: 12,
      margin: 16
    },
    mainTitle: {
      color: Colors.colorText,
      fontWeight: 'bold',
      marginTop: 12,
      fontSize: 24
    },
    navigator: {
      flexDirection: 'column',
      alignContent: 'flex-start',
      backgroundColor: 'white',
    }
  });
import {StyleSheet, Text, View, Image } from "react-native";

export default function HomeFailed() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.mainTitle}>Ops... Encontramos um problema</Text>
            </View>
            <View style={styles.table}>
                <Text style={styles.secondaryTitle}>Não é possível obter os dados meteorológicos no momento</Text>
                <Text>Estamos trabalhando para consertar esse erro. Por favor, tente novamente mais tarde.</Text>
            </View>
            <View style={styles.table}>
                <Text style={styles.secondaryTitle}>Não conseguimos conectar com a lâmpada.</Text>
                <Text>Estamos trabalhando para consertar esse erro. Por favor, tente novamente mais tarde.</Text>
            </View>
        </View>
      );
      
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#84b6f4',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#2C2F32'
    },
    table:{
        fontFamily: 'Roboto',
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 10,
        margin: 16,
        width: 320,
    },
    secondaryTitle: {
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
      color: '#2C2F32',
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
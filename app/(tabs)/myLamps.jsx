import {StyleSheet, Text, View, Image } from "react-native";

export default function MyLamps() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.mainTitle}>Lâmpadas</Text>
            </View>
            <View>
                <Text style={styles.secondaryTitle}>Lâmpadas conectadas</Text>
            </View>
            <View style={styles.table}>
                <Text style={styles.secondaryTitle}>Lâmpada X</Text>
                <Text>Conectada</Text>
                <Text>Nome do tema</Text>
            </View>
            <View style={styles.table}>
                <Text style={styles.secondaryTitle}>Lâmpada X</Text>
                <Text>Conectada</Text>
                <Text>Nome do tema</Text>
            </View>
            <View style={styles.table}>
                <Text style={styles.secondaryTitle}>Lâmpada X</Text>
                <Text>Conectada</Text>
                <Text>Nome do tema</Text>
            </View>
            <View>
                <Text style={styles.secondaryTitle}>Outras lâmpadas</Text>
            </View>
            <View style={styles.table}>
                <Text style={styles.secondaryTitle}>Lâmpada X</Text>
                <Text>Desconectada</Text>
                <Text>Nome do tema</Text>
            </View>
            <View style={styles.table}>
                <Text style={styles.secondaryTitle}>Lâmpada X</Text>
                <Text>Desconectada</Text>
                <Text>Nome do tema</Text>
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
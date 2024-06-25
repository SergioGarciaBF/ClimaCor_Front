import {StyleSheet, Text, View, Image } from "react-native";
import {Colors} from './../../constants/Colors';
import {Animated, ScrollView} from 'react-native';
import React, {useRef} from 'react';

export default function MyLamps() {
    const scrollOffsetY = useRef(new Animated.Value(0)).current;
    return (
        <ScrollView
        scrollEventThrottle={5}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
            [{nativeEvent: {contentOffSet: {y: scrollOffsetY}}}],
            {useNativeDriver: false,},
        )}> 
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
                <View style={styles.table}>
                    <Text style={styles.secondaryTitle}>Lâmpada X</Text>
                    <Text>Desconectada</Text>
                    <Text>Nome do tema</Text>
                </View>
            </View>
        </ScrollView>
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
      backgroundColor: 'green'
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
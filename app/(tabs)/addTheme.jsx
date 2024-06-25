import {StyleSheet, Text, View, Image, Button, TextInput } from "react-native";
import {Colors} from './../../constants/Colors';
import {climates} from '../../constants/Climates';
//import ColorPicker from './../../components/ColorPicker'; 
import {Animated, ScrollView} from 'react-native';
import React, {useRef} from 'react';

const formattedClimates = climates.map(c=>({
    value:c.label, 
    label: `${c.label}`, 
}))

export default function addTheme() {
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
                    <Text style={styles.mainTitle}>Novo tema</Text>
                </View>

                <View> 
                    <TextInput placeholder='Nome do tema' /> 
                    <TextInput style={styles.input} />
                </View>

                <View style={styles.condicaoCor}> 
                    <Text style={{flex: 10}}>Dia claro</Text>
                    <View style={styles.colorCircle}></View>
                </View>
                <View style={styles.condicaoCor}> 
                    <Text style={{flex: 10}}>Dia nublado</Text>
                    <View style={styles.colorCircle}></View>
                </View>
                <View style={styles.condicaoCor}> 
                    <Text style={{flex: 10}}>Noite limpa</Text>
                    <View style={styles.colorCircle}></View>
                </View>
                <View style={styles.condicaoCor}> 
                    <Text style={{flex: 10}}>Noite nublada</Text>
                    <View style={styles.colorCircle}></View>
                </View>
                <View style={styles.condicaoCor}> 
                    <Text style={{flex: 10}}>Neblina</Text>
                    <View style={styles.colorCircle}></View>
                </View>
                <View style={styles.condicaoCor}> 
                    <Text style={{flex: 10}}>Chuva</Text>
                    <View style={styles.colorCircle}></View>
                </View>
                <View style={styles.condicaoCor}> 
                    <Text style={{flex: 10}}>Tempestade</Text>
                    <View style={styles.colorCircle}></View>
                </View>
                <View style={styles.condicaoCor}> 
                    <Text style={{flex: 10}}>Granizo</Text>
                    <View style={styles.colorCircle}></View>
                </View>
                <View style={styles.condicaoCor}> 
                    <Text style={{flex: 10}}>Neve</Text>
                    <View style={styles.colorCircle}></View>
                </View>
                
                <View style={styles.button}>
                    <Text>Salvar tema</Text>
                </View>

                {/**<ColorPicker></ColorPicker> */}
                
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
    },
    condicaoCor:{
        display: "flex",
        flexDirection: "row",
        backgroundColor: Colors.white,
        borderRadius: 12,
        width: 320,
        paddingHorizontal: 10,
        paddingVertical: 12,
    },
    colorCircle: {
        height: 25,
        width: 25,
        backgroundColor: '#939393',
        borderRadius: 999,
        marginEnd: 10,
        flex: 1,
    },
});
import { StyleSheet, Text, View, Image } from "react-native";
import { Colors } from "./../../constants/Colors";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { getWeather, changeColor, switchLamp } from "../../scripts/api";
import { identifyGroup} from "../../scripts/functions";
import activeTheme from "../../configs/activeTheme.json";

export default function Home() {
  const [weather, setWeather] = useState({
    temperature: 0,
    humidity: 0,
    condition_code: 0,
    description: "",
    date: "",
    city_name: "",
    img_id: "",
    sunrise: "",
    sunset: "",
    moon_phase: "",
  });

  useEffect(() => {
    const intervalId = setInterval(() => { 
      console.log("Clima atualizado!");
      getWeather("Fortaleza,CE")
      .then((response) => response.json())
      .then((body) => {
        setWeather({
          temperature: body.results.temp,
          humidity: body.results.humidity,
          condition_code: body.results.condition_code,
          description: body.results.description,
          date: body.results.date,
          city: body.results.city,
          img_id: body.results.img_id,
          sunrise: body.results.sunrise,
          sunset: body.results.sunset,
          moon_phase: body.results.moon_phase
        });
      });
      const color = activeTheme.colors[identifyGroup(Number(weather.condition_code))];
      console.log(identifyGroup(Number(weather.condition_code)), color)
      switchLamp(true)
      changeColor(color)

    }, 5000)
  
    return () => clearInterval(intervalId); 
  }, [ ]);
  
  useEffect(() => {
    const intervalId = setInterval(() => { 
      console.log("Cor atualizada");
    }, 5000)
  
    return () => clearInterval(intervalId); 
   
  }, [ ]);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.mainTitle}>{weather.description}</Text>
      </View>
      <View>
        <Text style={styles.logo}>Placeholder</Text>
      </View>
      <View style={styles.table}>
        <Text style={styles.secondaryTitle}>{weather.city}</Text>
        <Text>{weather.date}</Text>
        <Text>Temperatura: {weather.temperature} °C</Text>
      </View>
      <View style={styles.table}>
        <Text style={styles.secondaryTitle}>Mais informações</Text>
        <Text>Umidade: {weather.humidity}%</Text>
        <Text>Nascer do Sol: {weather.sunrise}</Text>
        <Text>Pôr do Sol: {weather.sunset}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue,
    alignItems: "center",
    justifyContent: "center",
    color: "#2C2F32",
  },
  table: {
    fontFamily: "Roboto",
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 10,
    margin: 16,
    width: 320,
  },
  secondaryTitle: {
    color: Colors.colorText,
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "bold",
  },
  logo: {
    height: 100,
    width: 100,
    backgroundColor: "#EAEAEA",
    borderRadius: 12,
    margin: 16,
  },
  mainTitle: {
    color: Colors.colorText,
    fontWeight: "bold",
    marginTop: 12,
    fontSize: 24,
  },
  navigator: {
    flexDirection: "column",
    alignContent: "flex-start",
    backgroundColor: "white",
  },
});

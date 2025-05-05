import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import getWeather from "../services/weatherService";

const WeatherScreen = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    if (city.trim() !== "") {
      const data = await getWeather(city);
      setWeather(data);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather Search</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter city"
        value={city}
        onChangeText={setCity}
      />
      <Button title="Get Weather" onPress={fetchWeather} />
      {weather && (
        <View style={styles.result}>
          <Text>Temperature: {weather.temp}°C</Text>
          <Text>Condition: {weather.condition}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff3e0",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  result: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#e0f7fa",
    borderRadius: 5,
  },
});

export default WeatherScreen;

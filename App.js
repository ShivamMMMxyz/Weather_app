import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthScreen from "./src/screens/AuthScreen";
import WeatherScreen from "./src/screens/WeatherScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Weather" component={WeatherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



// import React from 'react';
// import { View, Button, StyleSheet } from 'react-native';

// const AuthScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Button title="Search Weather Here" onPress={() => navigation.navigate('WeatherScreen')} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//   },
// });

// export default AuthScreen;

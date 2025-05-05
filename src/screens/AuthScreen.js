import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AuthScreen = () => {
  const navigation = useNavigation();

  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Weather App</Text>
      <Button title="search weather here" onPress={() => navigation.navigate("Weather")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e3f2fd",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default AuthScreen;












// import React from "react";
// import { View, Text, Button, StyleSheet, ImageBackground } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// const AuthScreen = () => {
//   const navigation = useNavigation();

//   return (
//     <ImageBackground source={require("../assets/bg.webp")} style={styles.background}>
//       <View style={styles.container}>
//         <Text style={styles.title}>Welcome to Weather App</Text>
//         <Button title="Search Weather Here" onPress={() => navigation.navigate("Weather")} />
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     resizeMode: "cover", // Ensures the image covers the whole screen
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "rgba(0,0,0,0.3)", // Optional: Adds a dark overlay effect
//     width: "100%",
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//     color: "white", // Ensures the text is visible on the image
//     fontWeight: "bold",
//   },
// });

// export default AuthScreen;

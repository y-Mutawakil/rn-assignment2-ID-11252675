import { View, Text } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#121912"
      }}
    >
      <Text style={{
        color:"white",
        fontSize:24
        }}>My name is YourName</Text>
    </View>
  );
}

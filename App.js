import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  StatusBar,
  Pressable,
  ScrollView,
  Image,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={estilos.viewSafe}>
      <ScrollView style={estilos.scroll}>
        <StatusBar barStyle="dark-content" />
        <View style={estilos.container}>
          <TextInput style={estilos.input} placeholder="Título da foto/local" />

          <View>
            <Image></Image>
          </View>

          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>Tirar Foto</Text>
          </Pressable>

          <View></View>

          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>Localizar no mapa</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  viewSafe: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: "#f7f7f7",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginVertical: 25,
  },
  viewBotao: {},
  botao: {
    padding: 12,
    borderRadius: 2,
    backgroundColor: "blue",
    width: "95%",
    marginLeft: 10,
    marginVertical: 200,
  },
  textoBotao: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    textTransform: "uppercase",
  },
});

import React, { useState, useEffect } from "react";
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
/* Import da lib ImagePicker */
import * as ImagePicker from "expo-image-picker";
/* Import da lib MapView/Marker */
import MapView, { Marker } from "react-native-maps";
/* Import da lib Location */
import * as Location from "expo-location";

export default function App() {
  const [status, requestPermission] = ImagePicker.useCameraPermissions();
  const [foto, setFoto] = useState();


  /* Programação abaixo é dos recursos de câmera, tirar foto e da requisição de permissão de uso*/
  useEffect(() => {
    async function verificaPermissoes() {
      const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
      requestPermission(cameraStatus === "granted");
    }
    verificaPermissoes();
  }, []);

  const acessarCamera = async () => {
    const imagem = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    console.log(imagem);

    setFoto(imagem.assets[0].uri);
  };
  return (

    <SafeAreaView style={estilos.viewSafe}>
      <ScrollView style={estilos.scroll}>
        <StatusBar barStyle="dark-content" />
        <View style={estilos.container}>
          <Text style={estilos.titulo}>App 1 - Fotos de lugares visitados</Text>
          <TextInput style={estilos.input} placeholder="Título da foto/local" />

          <View style={estilos.viewFoto}>
          {foto && (
         <Image source={{ uri: foto }} style={{ width: 379, height: 250 }} />
          )}
          </View>

          <Pressable style={estilos.botao} onPress={acessarCamera}>
            <Text style={estilos.textoBotao}>Tirar Foto</Text>
          </Pressable>

          <View style={estilos.viewMapa}>
            <MapView style={estilos.map}
            mapType="satellite"
            userInterfaceStyle="dark" 
            />
          </View>

          <Pressable style={estilos.botao} onPress={novaLocalizacao}>
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
  titulo: {
    textAlign: "center",
    fontSize: 20,
    marginVertical: 8,
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
    marginVertical: 16,
  },
  textoBotao: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    textTransform: "uppercase",
  },
  viewFoto: {
    borderWidth: 1,
    height: 250,
    width: 379,
    marginLeft: 10,
    marginVertical: 8,
  },
  viewMapa: {
    borderWidth: 1,
    height: 250,
    width: 379,
    marginLeft: 10,
    marginVertical: 8,
  },
  map: {
    width: 379,
    height: 250
  }
});

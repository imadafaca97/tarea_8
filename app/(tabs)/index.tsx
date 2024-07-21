import {
  Image,
  StyleSheet,
  Platform,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Endpoints, Incidence } from "@/services/endpoints";

export default function HomeScreen() {
  const endpoints = new Endpoints;
  const [image, setImage] = useState("");
  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const selectPhoto = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const takePicture = async () => {
    const permissionsResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionsResult.granted === false) {
      return alert("No tienes permiso para tomar fotos");
    } else {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
      return result;
    }
  };

  const onChange = ({ type }: any, selectedDate: any) => {
    if (type === "set") {
      const currentDate = selectedDate;
      setDate(currentDate);
    } else {
      return false;
    }
  };
  const onSubmit = async () => {
    const payload: Incidence = {
      date: date.toLocaleDateString("de-DE"),
      title: title,
      description: description,
      photo: image,
    };
    await endpoints
      .registerIncidence(payload)
      .then(() => {
        alert("Se ha guardado");
        setImage("");
        setTitle("");
        setDate(new Date());
        setDescription("");
      })
      .catch(() => alert("Ha ocurrido un error"));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar incidencia</Text>
      <TextInput
        style={styles.TextInput}
        placeholder="Titulo"
        placeholderTextColor="#CFCFCF"
        value={title}
        onChangeText={(value) => setTitle(value)}
      />
      <TextInput
        style={{borderColor:"black", borderWidth: 1, padding: 5, width: '90%', borderRadius: 5, marginBottom: 10}}
        placeholder="Descripcion"
        multiline
        numberOfLines={4}
        value={description}
        placeholderTextColor="#CFCFCF"
        onChangeText={(value) => setDescription(value)}
      />
      <DateTimePicker
        mode="date"
        value={date}
        onChange={onChange}
        style={{ marginBottom: 20 }}
      />
      <View>
        <Image source={{uri: image}} style={styles.image} />
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.buttons} onPress={selectPhoto}>
            <Text style={{ color: "white" }}>Seleccionar foto</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons} onPress={takePicture}>
            <Text style={{ color: "white" }}>Tomar foto</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.submit} onPress={onSubmit}>
        <Text style={{ color: "white" }}>Enviar Todo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: "center",
  },
  TextInput: {
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    width: "90%",
    marginBottom: 10,
    paddingLeft: 5,
    borderRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  buttons: {
    height: 30,
    width: 140,
    backgroundColor: "#36454F",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  submit: {
    height: 50,
    width: "90%",
    backgroundColor: "#36454F",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  image: {
    width: 350,
    height: 300,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
  },
});

import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
} from "react-native";

interface Props {
  date: string;
  title: string;
  description: string;
  photo: string;
}
const CaseModal = ({ date, title, description, photo }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{ width: "100%" }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{title}</Text>
            <Text style={styles.modalText}>{description}</Text>
            <Text style={styles.modalText}>{date}</Text>
            <Image
              source={{uri: 'file:///var/mobile/Containers/Data/Application/09D82793-0AEF-4787-9C4A-266A048ABABB/Library/Caches/ExponentExperienceData/@anonymous/tarea_8-5e92b85b-6731-4868-922b-cbd4b6329eeb/ImagePicker/201A519A-BBDC-416B-BCA3-AA8944F55C21.png'}}
              style={{ width: 200, height: 200 }}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Cerrar Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable onPress={() => setModalVisible(true)} style={styles.items}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.buttonOpen}>
          <Text style={styles.textStyle}>Ver</Text>
        </View>
        <View
          style={{ height: 1, width: "100%", backgroundColor: "black" }}
        ></View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  items: {
    marginBottom: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#43464B",
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  buttonClose: {
    backgroundColor: "#36454F",
    marginTop: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default CaseModal;

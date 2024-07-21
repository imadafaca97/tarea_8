import CaseModal from "@/components/CaseModal";
import { Endpoints, Incidence } from "@/services/endpoints";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useCallback, useEffect, useState } from "react";
import {
  StyleSheet,
  Image,
  Platform,
  View,
  ScrollView,
  FlatList,
  Pressable,
  Text,
} from "react-native";

export default function ViewCases() {
  const [incidences, setIncidences] = useState<Incidence[]>([])
  const endpoints = new Endpoints;

  const getIncidences = useCallback(() => {
      endpoints.getIncidences().then((res: Incidence[]) => {
        console.log(res[0].photo)
        setIncidences(res)
      })
  },[])

  useEffect(() => {
    getIncidences();
  },[])

  const deleteIncidences = () => {
    endpoints.deleteIncidences().then(() => {
      alert("Se ha eliminado todo");
    })
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={incidences}
        renderItem={({ item }) => (
          <View style={styles.casesContainer}>
            <CaseModal
              date={item.date}
              title={item.title}
              description={item.description}
              photo={item.description}
            />
          </View>
        )}
      />
      <Pressable style={styles.delete} onPress={() => deleteIncidences()}>
        <Text style={{color: 'white'}}>ELIMINAR TODO</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  container: {
    paddingTop: 60,
    padding: 10,
    alignItems: "center",
    
  },
  casesContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  delete: {
    backgroundColor: '#FF0000',
    padding: 10,
    marginTop: 5,
    borderRadius: 5,
  }
});

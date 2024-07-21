import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, Text } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { View } from 'react-native';

export default function Register() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/foto.jpg')} style={styles.image} />
      <Text>Sebastian Santos</Text>
      <Text>2021-1096</Text>
      <Text>En el silencio de la noche, cuando la justicia descansa, mi devoción permanece despierta, protegiendo a los inocentes y buscando la verdad con cada latido de mi corazón.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 300,
    borderRadius: 5,
    resizeMode: 'stretch',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  container: {
    paddingTop: 60,
    padding: 10,
    alignItems: "center",
  },
});

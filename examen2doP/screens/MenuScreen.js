import { View, Button, StyleSheet } from 'react-native';

export default function MenuScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Ir a Screen 1"
        onPress={() => navigation.navigate('Screen1')}
      />

      <Button
        title="Ir a Screen 2"
        onPress={() => navigation.navigate('Screen2')}
      />

      <Button
        title="Ir a Screen 3"
        onPress={() => navigation.navigate('Screen3')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 15,
    padding: 20,
  },
});
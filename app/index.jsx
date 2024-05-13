import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

function App() {

  return (
    <View style={styles.container}>
      <Text>Welcome to Aora!</Text>
      <Link href="/profile" style={{ color: 'blue' }}>Go to Profile</Link>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
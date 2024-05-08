import { StyleSheet, Text, View } from 'react-native';

function RootLayout() {

  return (
    <View style={styles.container}>
      <Text>Welcome to Aora!</Text>
    </View>
  );
}

export default RootLayout;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
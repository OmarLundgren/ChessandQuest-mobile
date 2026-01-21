import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <WebView
            source={{ uri: 'https://chessandquest2-fsheevcjccemcyd3.norwayeast-01.azurewebsites.net/Player/SignIn' }} // <-- byt till er webapp URL
            style={{ flex: 1 }}
            originWhitelist={['*']}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            startInLoadingState={true}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

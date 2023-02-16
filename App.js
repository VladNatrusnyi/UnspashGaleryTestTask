import React from 'react';
import { Provider } from "react-redux";
import { store } from "./src/store";
import { RootNavigationStack } from "./src/navigation/RootNavigator";

export function App() {
  return (
    <Provider store={store}>
      <RootNavigationStack />
    </Provider>
  );
}


// const styles = StyleSheet.create({
//   wrapper: {
//     flex: 1
//   }
// })

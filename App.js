import { Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <View className="w-screen h-screen flex items-center justify-center">
        <Text className="text-red-500">
          Open up App.js to start working on your app!
        </Text>
      </View>
    </Provider>
  );
}

import { SafeAreaView, Platform, View, Image } from "react-native";
import React from "react";
import { StatusBar } from "react-native";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
      className="bg-white h-full"
    >
      <View className="p-5">
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        <GooglePlacesAutocomplete
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            console.log(JSON.stringify(data, null, 2));
            console.log(JSON.stringify(details, null, 2));
          }}
          fetchDetails={true}
          minLength={2}
          enablePoweredByContainer={false}
          returnKeyType={"search"}
          query={{
            key: GOOGLE_MAPS_API_KEY,
            language: "en",
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          placeholder="Where From?"
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

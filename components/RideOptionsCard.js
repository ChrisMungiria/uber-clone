import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../slices/navSlice";

const data = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-LUX-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

const CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
  const navigation = useNavigation();

  const [selected, setSelected] = useState(null);

  const travelTimeInformation = useSelector(selectTravelTimeInformation);
  return (
    <SafeAreaView className="bg-white flex-grow">
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("NavigateCard");
          }}
          className="absolute z-50 top-3 left-5 p-3 rounded-full"
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text className="text-center py-5 text-xl">
          Select a ride - {travelTimeInformation?.distance?.text}
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity
            onPress={() => {
              setSelected(item);
            }}
            className={`flex-row items-center justify-around w-5/6 mx-auto px-2 ${
              id === selected?.id && "border border-black rounded-lg"
            }`}
          >
            <Image
              style={{ width: 100, height: 100, resizeMode: "contain" }}
              source={{ uri: image }}
            />
            <View className="-ml-6">
              <Text className="text-xl font-semibold">{title}</Text>
              <Text>{travelTimeInformation?.duration?.text}</Text>
            </View>
            <Text className="text-xl">
              {new Intl.NumberFormat("en-gb", {
                style: "currency",
                currency: "KSH",
              }).format(
                (travelTimeInformation?.duration?.value *
                  CHARGE_RATE *
                  multiplier) /
                  10
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View className="mt-auto border-t border-gray-200">
        <TouchableOpacity
          className={`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}
          disabled={!selected}
        >
          <Text className="text-center text-white text-xl">
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

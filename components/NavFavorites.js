import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination:
      "Qwetu | Student Residences | WilsonView, Keri Road, Nairobi, Kenya",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "TUME Consulting, Rhapta Road, Nairobi, Kenya",
  },
];

const NavFavorites = () => {
  // TODO: When the pressable is clicked, set the origin/destination to the selected location
  // 1. Check if the orgin is set
  // 2. If the origin is set, set the destination
  // 3. If the origin is not set, set the origin
  // 4. If both the origin and destination are set, go to the next screen
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View className="bg-gray-200 h-px" />}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity className="flex-row items-center p-5">
          <Icon
            style={{ padding: 10 }}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
            className="mr-4 rounded-full bg-gray-300 p-3"
          />
          <View>
            <Text className="font-semibold text-lg">{location}</Text>
            <Text className="text-gray-500">{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavorites;

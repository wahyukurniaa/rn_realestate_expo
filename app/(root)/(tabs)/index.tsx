import {View,Text } from "react-native";
import {Link} from 'expo-router';
import "../../global.css"

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <View className="items-center justify-center">
            <Text className="text-xl font-bold text-blue-500">
                Welcome to Nativewind!
            </Text>
        </View>
        <Link href='../sign-in'>Sign In</Link>
        <Link href='./explore'>Explore</Link>
        <Link href='./profile'>Profile</Link>
        <Link href='./properties/1'>Properties</Link>
    </View>
  );
}

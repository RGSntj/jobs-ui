import { NativeBaseProvider } from "native-base";

import { NavigationContainer } from "@react-navigation/native";

import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_400Regular,
  Poppins_300Light,
} from "@expo-google-fonts/poppins";

import { THEME } from "./src/styles/theme";

import { Loading } from "./src/components/Loading";
import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_300Light,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <NavigationContainer>
        {fontsLoaded ? <Routes /> : <Loading />}
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

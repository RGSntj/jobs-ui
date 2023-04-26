import { NativeBaseProvider } from "native-base";

import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_400Regular,
  Poppins_300Light,
} from "@expo-google-fonts/poppins";

// screens and components
import { Loading } from "./src/components/Loading";
import { Home } from "./src/screens/Home";
import { Detail } from "./src/screens/Detail";

import { THEME } from "./src/styles/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_300Light,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      {fontsLoaded ? <Detail /> : <Loading />}
    </NativeBaseProvider>
  );
}

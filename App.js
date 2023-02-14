import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import AppLoading from "expo-app-loading";
import MockCesta from "./src/mocks/cesta";
import Cesta from "./src/pages/Cesta";

export default function App() {
  const [fontLoaded] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta {...MockCesta} />
    </SafeAreaView>
  );
}

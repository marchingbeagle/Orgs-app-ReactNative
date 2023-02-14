import React from "react";
import { StyleSheet, View } from "react-native";

import Header from "./components/header";
import Details from "./components/details";

export default function Cesta({ header, details }) {
  return (
    <>
      <Header {...header} />
      <View style={style.viewStyle}>
        <Details {...details} />
      </View>
    </>
  );
}

const style = StyleSheet.create({
  viewStyle: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

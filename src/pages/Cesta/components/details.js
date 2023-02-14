import React from "react";
import { View, Image, StyleSheet } from "react-native";

import FormattedText from "../../../components/text";

export default function Details({
  name_Cesta,
  logo_Fazenda,
  name_Fazenda,
  description,
  preco,
}) {
  return (
    <>
      <FormattedText style={style.name_Cesta}>{name_Cesta}</FormattedText>
      <View style={style.fazenda}>
        <Image source={logo_Fazenda} style={style.logo_Fazenda} />
        <FormattedText style={style.name_Fazenda}>{name_Fazenda}</FormattedText>
      </View>
      <FormattedText style={style.description}>{description}</FormattedText>
      <FormattedText style={style.preco}>{preco}</FormattedText>
    </>
  );
}

const style = StyleSheet.create({
  name_Cesta: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
  },

  fazenda: {
    paddingVertical: 12,
    flexDirection: "row",
  },

  logo_Fazenda: {
    height: 32,
    width: 32,
  },

  name_Fazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },

  description: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },

  preco: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
});

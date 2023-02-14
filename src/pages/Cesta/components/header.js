import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";

import Topo from "../../../../assets/topo.png";
import FormattedText from "../../../components/text";

export default function Header({ title }) {
  return (
    <>
      <Image source={Topo} style={style.Topo} />
      <FormattedText style={style.titles}>{title}</FormattedText>
    </>
  );
}

const width = Dimensions.get("screen").width;

const style = StyleSheet.create({
  Topo: {
    width: "100%",
    height: (578 / 768) * width,
  },

  titles: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    color: "white",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
    padding: 16,
  },
});

import Logo from "../../assets/logo.png";

import tomate from "../../assets/frutas/Tomate.png";
import brocolis from "../../assets/frutas/Brócolis.png";
import batata from "../../assets/frutas/Batata.png";
import pepino from "../../assets/frutas/Pepino.png";
import abobora from "../../assets/frutas/Abóbora.png";

const cesta = {
  header: {
    title: "Detalhes da cesta",
  },
  details: {
    name_Cesta: "Cesta de Verduras",
    logo_Fazenda: Logo,
    name_Fazenda: "Granja Schneider",
    description:
      "Uma cesta com produtos selecionados cuidadosamente da Granja Schneider diretamente para sua casa",
    preco: "R$ 40,00",
  },
  itens: {
    titulo: "Itens da cesta",
    lista: [
      {
        nome: "Tomate",
        imagem: tomate,
      },
      {
        nome: "Brócolis",
        imagem: brocolis,
      },
      {
        nome: "Batata",
        imagem: batata,
      },
      {
        nome: "Pepino",
        imagem: pepino,
      },
      {
        nome: "Abóbora",
        imagem: abobora,
      },
    ],
  },
};

export default cesta;

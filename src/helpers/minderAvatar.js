import RandomPic from "../images/minders/pic.png";
import SaraCardoso from "../images/minders/Sara.png";
import EdgarCosta from "../images/minders/Edgar.png";
import DiogoFerreira from "../images/minders/Diogo.png";
import VitorMineiro from "../images/minders/Vitor.png";
import MarcoEscaleira from "../images/minders/Marco.png";
import MehulIra from "../images/minders/Mehul.png";
import TiagoCaldas from "../images/minders/Caldas.png";
import CainaBrazil from "../images/minders/Caina.png";
import PedroTeixeira from "../images/minders/Pedro.png";
import LuisSimoes from "../images/minders/Luis.png";
import IrinaPrioteasa from "../images/minders/Irina.png";
import TiagoReis from "../images/minders/Tiago.png";

const getMinderProfilePic = name => {
    switch (name) {
      case "Sara Cardoso": return SaraCardoso;
      case "Edgar Costa": return EdgarCosta;
      case "Diogo Ferreira": return DiogoFerreira;
      case "Vitor Mineiro": return VitorMineiro;
      case "Marco Escaleira": return MarcoEscaleira;
      case "Mehul Irá": return MehulIra;
      case "Tiago Caldas": return TiagoCaldas;
      case "Cainã Brazil": return CainaBrazil;
      case "Pedro Teixeira": return PedroTeixeira;
      case "Luis Simões": return LuisSimoes;
      case "Irina Prioteasa": return IrinaPrioteasa;
      case "Tiago Reis": return TiagoReis;
      default:
        return RandomPic;
    }
  };

export default getMinderProfilePic;
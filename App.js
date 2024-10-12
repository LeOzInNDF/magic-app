import { SafeAreaView, View } from 'react-native';
import Pontos from './components/pontos';

import azul from "./assets/blue.jpg";
import verde from "./assets/green.jpg";

export default function App() {
  return (
    <SafeAreaView>
      <View>
        <Pontos Fundo={azul} rotacao={180} cor="azul" />
        <Pontos Fundo={verde} rotacao={0} cor="verde" />
      </View>
    </SafeAreaView>
  );
}
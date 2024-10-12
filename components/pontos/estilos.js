import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  rotacao: {
    rotation: 180,
  },
  areaPontos: {
    width: '100%',
    height: '50%',
  },
  FundoAzul: {
    backgroundColor: "#37beee",
  },
  FundoVerde: {
    backgroundColor: "#599a0f",
  },
  ImagemFundo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
  },
  textoPontos: {
    fontSize: 150,
    color: '#ffffff',
    textShadowColor: 'black',
    textShadowRadius: 5
  },
  areaNumero: {
    display: 'flex',
    alignItems: 'center',
  },
});

export default estilos;
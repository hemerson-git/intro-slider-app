import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Slide from './src/components/Slide';
import AsyncStorage from '@react-native-async-storage/async-storage';

const slides = [
  {
    key: '1',
    title: 'Fábrica de Aplicativos',
    text:
      'Aprenda a desenvolver apps do extremo zero, usando as tecnologias mais modernas do mercado',
    image: require('./src/assets/images/1.png'),
  },
  {
    key: '2',
    title: '100% na prática',
    text:
      'Aprenda a desenvolver apps do extremo zero, usando as tecnologias mais modernas do mercado',
    image: require('./src/assets/images/2.png'),
  },
  {
    key: '3',
    title: 'CURSO FOCADO NO MERCADO',
    text:
      'Aprenda a desenvolver apps do extremo zero, usando as tecnologias mais modernas do mercado',
    image: require('./src/assets/images/2.png'),
  },
];

export default function App() {
  const [showHome, setShowHome] = useState(false);

  useEffect (() => {
    (async () => {
      try {
        const hasFinishedIntro = await AsyncStorage.getItem('@hasFinishedIntro');

        if(hasFinishedIntro) {
          setShowHome(true);
        }
      } catch (e) {
        alert(e) 
      }
    })();
  }, [])
  
  async function storeIntroStatus() {
    try {
      await AsyncStorage.setItem('@hasFinishedIntro', 'true');
      setShowHome(true);
    } catch (e) {
      alert(e)
    }
  }

  if (showHome) {
    return (
      <View>
        <Text style={{fontSize: 25}}>Entrou na home</Text>
      </View>
    );
  } 
  
  return (
    <AppIntroSlider
      renderItem={Slide}
      data={slides}
      activeDotStyle={{
        backgroundColor: '#009cFF',
        width: 50,
      }}

      renderNextButton={ () => {}}
      renderDoneButton={() => <Text style={{fontSize: 20}}>Acessar!</Text>}
      onDone={storeIntroStatus}
    />
  );
}

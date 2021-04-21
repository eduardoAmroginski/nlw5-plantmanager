import React from 'react';
import { Dimensions } from 'react-native';
import AppLoading from 'expo-app-loading';
import Routes from './src/routes';
import { useFonts, Jost_400Regular, Jost_600SemiBold } from "@expo-google-fonts/jost";

const { height } = Dimensions.get('window');

export default function(){
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })

  if(!fontsLoaded){
    return <AppLoading />
  }

  return(
    <Routes />
  )


}

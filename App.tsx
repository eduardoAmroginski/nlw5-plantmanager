import React, { useEffect } from 'react';
import { Dimensions } from 'react-native';

import AppLoading from 'expo-app-loading';
import { useFonts, Jost_400Regular, Jost_600SemiBold } from "@expo-google-fonts/jost";
import * as Notifications from 'expo-notifications';

import Routes from './src/routes';
import { PlantProps } from './src/libs/storage';


const { height } = Dimensions.get('window');

export default function(){
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      async notification => {
        const data = notification.request.content.data.plant as PlantProps;
        console.log("Notificação: ", data);
      }
    )

    return () => subscription.remove();

    // async function nofications() {
    //  const data = await Notifications.getAllScheduledNotificationsAsync();

    //  console.log("########### Notificações agendadas ###########");
    //  console.log(data);
    // }
    // nofications();

    // async function removeAllNotifications() {
    //   await Notifications.cancelAllScheduledNotificationsAsync();
    // }
    // removeAllNotifications();
  }, [])



  if(!fontsLoaded){
    return <AppLoading />
  }

  return(
    <Routes />
  )


}

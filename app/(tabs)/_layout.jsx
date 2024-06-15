import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{headerShown:false}}>
        <Tabs.Screen name='home'
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color})=><FontAwesome name="home" size={24} color={color} />
        }}/>

        {/*Tela provisória - Ver depois como deixar a homefailed sendo um if da home */}
        <Tabs.Screen name='homeFailed'
        options={{
          tabBarLabel: 'HomeFailed',
          tabBarIcon: ({color})=><FontAwesome name="home" size={24} color={color} />
        }}/>

        <Tabs.Screen name='themeList'
        options={{
          tabBarLabel: 'Temas',
          tabBarIcon: ({color})=><Entypo name="round-brush" size={24} color={color} />
        }}/>

        <Tabs.Screen name='myLamps'
        options={{
          tabBarLabel: 'Lâmpadas',
          tabBarIcon: ({color})=><MaterialCommunityIcons name="lamps" size={24} color={color} />
        }}/>
        <Tabs.Screen name='addTheme'
        options={{
          tabBarLabel: 'Novo tema',
        }}/>
    </Tabs>
  );
}

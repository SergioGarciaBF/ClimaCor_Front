import React from 'react'
import { Tabs } from 'expo-router'

export default function TabLayout() {
  return (
    <Tabs>
        <Tabs.Screen name='home'/>
        <Tabs.Screen name='homeFailed'/>
        <Tabs.Screen name='themeList'/>
    </Tabs>
  );
}

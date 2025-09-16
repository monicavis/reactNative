// src/navigation/DashboardNavigator.tsx
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DashboardScreen from '../screens/DashboardScreen';
import CustomDrawerContent from './CustomDrawerContent';

const Drawer = createDrawerNavigator();

export default function DashboardNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawerContent} // ✅ pass component directly
      screenOptions={{headerShown: true}}>
      <Drawer.Screen name="Home" component={DashboardScreen} />
    </Drawer.Navigator>
  );
}

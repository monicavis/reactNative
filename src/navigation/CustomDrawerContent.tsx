// src/navigation/CustomDrawerContent.tsx
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from './AppNavigator';

type DashboardNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Dashboard'
>;

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = props => {
  const navigation = useNavigation<DashboardNavigationProp>();

  return (
    <>
      {props.state.routeNames.map((name: string, index: number) => (
        <TouchableOpacity
          key={index}
          style={{padding: 20, borderBottomWidth: 1, borderColor: '#ccc'}}
          onPress={() => props.navigation.navigate(name)}>
          <Text>{name}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={{padding: 20}}
        onPress={() => navigation.replace('Login')}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </>
  );
};

export default CustomDrawerContent;

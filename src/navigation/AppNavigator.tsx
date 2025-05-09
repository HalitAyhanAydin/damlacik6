import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginView } from '../views/LoginView';
import { RegisterView } from '../views/RegisterView';
import { HomeView } from '../views/HomeView';
import { AppointmentListView } from '../views/AppointmentListView';
import { AppointmentFormView } from '../views/AppointmentFormView';
import { NotificationSettingsView } from '../views/NotificationSettingsView';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#1a5f7a',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen 
        name="Login" 
        component={LoginView}
        options={{headerShown: false}}
      />
      <Stack.Screen 
        name="Register" 
        component={RegisterView}
        options={{headerShown: false}}
      />
      <Stack.Screen 
        name="Home" 
        component={HomeView}
        options={{title: 'Schengen Vize Randevu'}}
      />
      <Stack.Screen 
        name="AppointmentList" 
        component={AppointmentListView}
        options={{title: 'Müsait Randevular'}}
      />
      <Stack.Screen 
        name="AppointmentForm" 
        component={AppointmentFormView}
        options={{title: 'Randevu Formu'}}
      />
      <Stack.Screen 
        name="NotificationSettings" 
        component={NotificationSettingsView}
        options={{title: 'Bildirim Ayarları'}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator; 
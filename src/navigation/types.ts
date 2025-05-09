import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  AppointmentList: undefined;
  AppointmentForm: undefined;
  NotificationSettings: undefined;
};

export type NavigationProps<T extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  T
>;

export type LoginScreenProps = NavigationProps<'Login'>;
export type RegisterScreenProps = NavigationProps<'Register'>;
export type HomeScreenProps = NavigationProps<'Home'>;
export type AppointmentListScreenProps = NavigationProps<'AppointmentList'>;
export type AppointmentFormScreenProps = NavigationProps<'AppointmentForm'>;
export type NotificationSettingsScreenProps = NavigationProps<'NotificationSettings'>; 
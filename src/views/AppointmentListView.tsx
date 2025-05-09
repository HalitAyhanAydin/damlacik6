import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  AppointmentList: undefined;
  AppointmentForm: {appointmentId?: string};
  NotificationSettings: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'AppointmentList'>;

type Appointment = {
  id: string;
  country: string;
  city: string;
  consulate: string;
  date: string;
  time: string;
  type: string;
};

export const AppointmentListView: React.FC<Props> = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [appointments] = useState<Appointment[]>([
    {
      id: '1',
      country: 'Almanya',
      city: 'İstanbul',
      consulate: 'Almanya Başkonsolosluğu',
      date: '2024-05-15',
      time: '10:30',
      type: 'Schengen Vizesi',
    },
    {
      id: '2',
      country: 'Fransa',
      city: 'Ankara',
      consulate: 'Fransa Büyükelçiliği',
      date: '2024-05-20',
      time: '11:45',
      type: 'Schengen Vizesi',
    },
    {
      id: '3',
      country: 'İtalya',
      city: 'İzmir',
      consulate: 'İtalya Konsolosluğu',
      date: '2024-05-18',
      time: '09:15',
      type: 'Schengen Vizesi',
    },
  ]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    // Burada randevuları yeniden yükle
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const handleAppointmentPress = (appointmentId: string) => {
    navigation.navigate('AppointmentForm', {appointmentId});
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.content}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.header}>
          <Text style={styles.title}>Müsait Randevular</Text>
          <Text style={styles.subtitle}>
            Aşağıdaki randevulardan birini seçerek başvuru yapabilirsiniz
          </Text>
        </View>

        {appointments.map(appointment => (
          <TouchableOpacity
            key={appointment.id}
            style={styles.card}
            onPress={() => handleAppointmentPress(appointment.id)}>
            <View style={styles.cardHeader}>
              <Text style={styles.country}>{appointment.country}</Text>
              <Text style={styles.type}>{appointment.type}</Text>
            </View>

            <View style={styles.cardBody}>
              <Text style={styles.info}>
                <Text style={styles.label}>Şehir: </Text>
                {appointment.city}
              </Text>
              <Text style={styles.info}>
                <Text style={styles.label}>Konsolosluk: </Text>
                {appointment.consulate}
              </Text>
              <Text style={styles.info}>
                <Text style={styles.label}>Tarih: </Text>
                {appointment.date}
              </Text>
              <Text style={styles.info}>
                <Text style={styles.label}>Saat: </Text>
                {appointment.time}
              </Text>
            </View>

            <View style={styles.cardFooter}>
              <Text style={styles.actionText}>Randevu Al →</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a5f7a',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#1a5f7a',
  },
  country: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  type: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
  },
  cardBody: {
    padding: 15,
  },
  info: {
    fontSize: 16,
    color: '#444',
    marginBottom: 8,
  },
  label: {
    fontWeight: '600',
    color: '#1a5f7a',
  },
  cardFooter: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    padding: 15,
  },
  actionText: {
    color: '#1a5f7a',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'right',
  },
}); 
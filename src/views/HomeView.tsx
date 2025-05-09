import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  AppointmentList: undefined;
  AppointmentForm: undefined;
  NotificationSettings: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeView: React.FC<Props> = ({navigation}) => {
  const handleLogout = () => {
    navigation.replace('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <Text style={styles.welcome}>Schengen Vize Randevu</Text>
        <Text style={styles.description}>
          Boşalan randevuları takip edin, anında haberdar olun!
        </Text>

        <View style={styles.cardContainer}>
          {/* Ülke Seçim Kartı */}
          <TouchableOpacity 
            style={styles.card}
            onPress={() => navigation.navigate('AppointmentList')}>
            <Text style={styles.cardTitle}>Müsait Randevular</Text>
            <Text style={styles.cardText}>
              • Almanya{'\n'}
              • Fransa{'\n'}
              • İtalya{'\n'}
              • İspanya
            </Text>
            <Text style={styles.cardBadge}>4 yeni randevu</Text>
          </TouchableOpacity>

          {/* Randevu Takip Kartı */}
          <TouchableOpacity 
            style={styles.card}
            onPress={() => navigation.navigate('AppointmentForm')}>
            <Text style={styles.cardTitle}>Randevu Takibi</Text>
            <Text style={styles.cardText}>
              Takip ettiğiniz randevular:{'\n'}
              • Almanya Konsolosluğu - İstanbul{'\n'}
              • Fransa Konsolosluğu - Ankara
            </Text>
          </TouchableOpacity>

          {/* Bildirim Ayarları Kartı */}
          <TouchableOpacity 
            style={styles.card}
            onPress={() => navigation.navigate('NotificationSettings')}>
            <Text style={styles.cardTitle}>Bildirim Ayarları</Text>
            <Text style={styles.cardText}>
              • Anlık bildirimler aktif{'\n'}
              • E-posta bildirimleri aktif{'\n'}
              • SMS bildirimleri pasif
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Çıkış Yap</Text>
        </TouchableOpacity>
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
  welcome: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a5f7a',
    textAlign: 'center',
    marginVertical: 20,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  cardContainer: {
    gap: 15,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#eee',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a5f7a',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    color: '#444',
    marginBottom: 5,
    lineHeight: 24,
  },
  cardBadge: {
    position: 'absolute',
    right: 20,
    top: 20,
    backgroundColor: '#e74c3c',
    color: '#fff',
    padding: 5,
    borderRadius: 5,
    overflow: 'hidden',
    fontSize: 12,
  },
  logoutButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 20,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
}); 
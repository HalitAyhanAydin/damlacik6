import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Switch,
  TouchableOpacity,
  Alert,
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

type Props = NativeStackScreenProps<RootStackParamList, 'NotificationSettings'>;

export const NotificationSettingsView: React.FC<Props> = ({navigation}) => {
  const [settings, setSettings] = useState({
    pushNotifications: true,
    emailNotifications: true,
    smsNotifications: false,
    newAppointments: true,
    statusUpdates: true,
    reminderNotifications: true,
  });

  const handleSave = () => {
    Alert.alert('Başarılı', 'Bildirim ayarlarınız kaydedildi.', [
      {
        text: 'Tamam',
        onPress: () => navigation.goBack(),
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Bildirim Ayarları</Text>
          <Text style={styles.subtitle}>
            Hangi durumlarda bildirim almak istediğinizi seçin
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Bildirim Kanalları</Text>

          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>Anlık Bildirimler</Text>
              <Text style={styles.settingDescription}>
                Uygulama bildirimleri (push)
              </Text>
            </View>
            <Switch
              value={settings.pushNotifications}
              onValueChange={value =>
                setSettings({...settings, pushNotifications: value})
              }
              trackColor={{false: '#ddd', true: '#1a5f7a'}}
            />
          </View>

          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>E-posta Bildirimleri</Text>
              <Text style={styles.settingDescription}>
                E-posta ile bilgilendirme
              </Text>
            </View>
            <Switch
              value={settings.emailNotifications}
              onValueChange={value =>
                setSettings({...settings, emailNotifications: value})
              }
              trackColor={{false: '#ddd', true: '#1a5f7a'}}
            />
          </View>

          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>SMS Bildirimleri</Text>
              <Text style={styles.settingDescription}>SMS ile bilgilendirme</Text>
            </View>
            <Switch
              value={settings.smsNotifications}
              onValueChange={value =>
                setSettings({...settings, smsNotifications: value})
              }
              trackColor={{false: '#ddd', true: '#1a5f7a'}}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Bildirim Türleri</Text>

          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>Yeni Randevular</Text>
              <Text style={styles.settingDescription}>
                Yeni randevu müsaitliği olduğunda
              </Text>
            </View>
            <Switch
              value={settings.newAppointments}
              onValueChange={value =>
                setSettings({...settings, newAppointments: value})
              }
              trackColor={{false: '#ddd', true: '#1a5f7a'}}
            />
          </View>

          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>Durum Güncellemeleri</Text>
              <Text style={styles.settingDescription}>
                Randevu durumu değiştiğinde
              </Text>
            </View>
            <Switch
              value={settings.statusUpdates}
              onValueChange={value =>
                setSettings({...settings, statusUpdates: value})
              }
              trackColor={{false: '#ddd', true: '#1a5f7a'}}
            />
          </View>

          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingTitle}>Hatırlatmalar</Text>
              <Text style={styles.settingDescription}>
                Randevu tarihinden önce hatırlatma
              </Text>
            </View>
            <Switch
              value={settings.reminderNotifications}
              onValueChange={value =>
                setSettings({...settings, reminderNotifications: value})
              }
              trackColor={{false: '#ddd', true: '#1a5f7a'}}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Ayarları Kaydet</Text>
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
  section: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a5f7a',
    marginBottom: 15,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingInfo: {
    flex: 1,
    marginRight: 10,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    marginBottom: 4,
  },
  settingDescription: {
    fontSize: 14,
    color: '#666',
  },
  saveButton: {
    backgroundColor: '#1a5f7a',
    paddingVertical: 15,
    borderRadius: 8,
    marginVertical: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
}); 
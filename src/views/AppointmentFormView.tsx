import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
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

type Props = NativeStackScreenProps<RootStackParamList, 'AppointmentForm'>;

export const AppointmentFormView: React.FC<Props> = ({navigation, route}) => {
  const appointmentId = route.params?.appointmentId;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    passportNumber: '',
    birthDate: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleSubmit = () => {
    // Form validasyonu
    if (!formData.firstName || !formData.lastName || !formData.passportNumber) {
      Alert.alert('Hata', 'Lütfen zorunlu alanları doldurun');
      return;
    }

    // Randevu kaydı
    Alert.alert(
      'Başarılı',
      'Randevu başvurunuz alındı. En kısa sürede size dönüş yapılacaktır.',
      [
        {
          text: 'Tamam',
          onPress: () => navigation.navigate('Home'),
        },
      ],
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Randevu Formu</Text>
          <Text style={styles.subtitle}>
            Lütfen randevu başvurusu için gerekli bilgileri doldurun
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Ad *</Text>
            <TextInput
              style={styles.input}
              value={formData.firstName}
              onChangeText={text => setFormData({...formData, firstName: text})}
              placeholder="Adınız"
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Soyad *</Text>
            <TextInput
              style={styles.input}
              value={formData.lastName}
              onChangeText={text => setFormData({...formData, lastName: text})}
              placeholder="Soyadınız"
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Pasaport Numarası *</Text>
            <TextInput
              style={styles.input}
              value={formData.passportNumber}
              onChangeText={text =>
                setFormData({...formData, passportNumber: text})
              }
              placeholder="Pasaport numaranız"
              placeholderTextColor="#999"
              autoCapitalize="characters"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Doğum Tarihi</Text>
            <TextInput
              style={styles.input}
              value={formData.birthDate}
              onChangeText={text => setFormData({...formData, birthDate: text})}
              placeholder="GG/AA/YYYY"
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>E-posta</Text>
            <TextInput
              style={styles.input}
              value={formData.email}
              onChangeText={text => setFormData({...formData, email: text})}
              placeholder="E-posta adresiniz"
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Telefon</Text>
            <TextInput
              style={styles.input}
              value={formData.phone}
              onChangeText={text => setFormData({...formData, phone: text})}
              placeholder="Telefon numaranız"
              placeholderTextColor="#999"
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Adres</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={formData.address}
              onChangeText={text => setFormData({...formData, address: text})}
              placeholder="Açık adresiniz"
              placeholderTextColor="#999"
              multiline
              numberOfLines={4}
            />
          </View>

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Randevu Başvurusu Yap</Text>
          </TouchableOpacity>
        </View>
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
  form: {
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
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a5f7a',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#f8f9fa',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#000',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#1a5f7a',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
}); 
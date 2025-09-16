import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useFormik} from 'formik';
import * as Yup from 'yup';

type RootStackParamList = {
  Login: undefined;
  Dashboard: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen: React.FC<Props> = ({navigation}) => {
  const formik = useFormik({
    initialValues: {username: '', password: ''},
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: (values: {username: string; password: string}) => {
      const {username, password} = values;
      if (username === 'admin' && password === 'Admin@123') {
        navigation.replace('Dashboard'); // replace so user cannot go back to login with back button
      } else {
        Alert.alert('Error', 'Wrong username or password');
      }
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Groceries App Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          value={formik.values.username}
          onChangeText={formik.handleChange('username')}
        />
        {formik.touched.username && formik.errors.username && (
          <Text style={styles.error}>{formik.errors.username}</Text>
        )}

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
        />
        {formik.touched.password && formik.errors.password && (
          <Text style={styles.error}>{formik.errors.password}</Text>
        )}

        <TouchableOpacity
          style={styles.button}
          onPress={formik.handleSubmit as any}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  card: {
    width: '85%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {color: '#fff', textAlign: 'center', fontWeight: 'bold'},
  error: {color: 'red', marginBottom: 5},
});

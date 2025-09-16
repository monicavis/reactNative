// src/screens/DashboardHome.tsx
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const {width} = Dimensions.get('window');

const categories = [
  {id: '1', title: 'Groceries', image: require('../assets/grocery.jpg')},
  {id: '2', title: 'Fruits', image: require('../assets/fruit.jpg')},
  {id: '3', title: 'Stationery', image: require('../assets/stationery.jpg')},
  {id: '4', title: 'Dairy', image: require('../assets/dairy.jpg')},
];

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.overlay}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 10,
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    borderRadius: 12,
    overflow: 'hidden', // ✅ keeps text inside rounded corners
    marginBottom: 15,
    width: width / 2 - 20,
    height: 150,
    backgroundColor: '#ddd',
    elevation: 3,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // ✅ positions over image
    backgroundColor: 'rgba(0,0,0,0.3)', // semi-transparent overlay
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 8,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

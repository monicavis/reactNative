import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, justifyContent: 'center'},
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 12,
    marginVertical: 8,
    alignItems: 'center',
    elevation: 3,
  },
  cardText: {fontSize: 18, fontWeight: '500'},
});

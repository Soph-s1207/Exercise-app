import { StyleSheet } from 'react-native';

export const AppStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
      },
      title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
      },
      list: {
        gap: 15,
        alignItems: 'center',
      },
      card: {
        width: 350,
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      cardDesc: {
        color: 'gray',
        marginBottom: 10,
      },
      startButton: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
      },
      startButtonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
      },
});
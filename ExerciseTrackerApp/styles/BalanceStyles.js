import { StyleSheet } from 'react-native';

export const BalanceStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        elevation: 4,
        width: 350,
        alignSelf: 'center',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: -10,
      },
      circle: {
        width: 120,
        height: 120,
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        alignSelf: 'center',
      },
      timer: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      stats: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'gray',
        textAlign: 'center',
      },
      buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        marginVertical: 15,
      },
      controlButton: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
      },
      controlText: {
        color: 'white',
        fontWeight: 'bold',
      },
      start: {
        backgroundColor: 'green',
      },
      stop: {
        backgroundColor: 'red',
      },
      reset: {
        backgroundColor: 'gray',
      },
      attemptLabel: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 10,
      },
      attemptList: {
        alignItems: 'center',
        paddingBottom: 10,
      },
      attemptItem: {
        fontSize: 16,
        marginVertical: 2,
      },
      media: {
        backgroundColor: '#e0e0e0',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
      },
      bottomButtons: {
        marginTop: 20,
        gap: 10,
      },
      navButton: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
      },
      navButtonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
      },
});

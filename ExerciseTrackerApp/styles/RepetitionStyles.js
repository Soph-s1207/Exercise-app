import { StyleSheet } from 'react-native';

export const RepetitionStyles = StyleSheet.create({
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
      repCount: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      label: {
        fontSize: 14,
        color: 'gray',
        textAlign: 'center',
      },
      buttonGroupCircle: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        marginVertical: 10,
      },
      circleButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d4d3d3',
      },
      add: {
        backgroundColor: '#e0e0e0',
      },
      subtract: {
        backgroundColor: '#e0e0e0',
      },
      addText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'green',
      },
      subtractText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'red',
      },
      input: {
        width: '80%',
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 20,
        alignSelf: 'center',
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

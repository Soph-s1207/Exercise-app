import { StyleSheet } from 'react-native';

export const DurationStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        elevation: 4,
        width: 350,
        alignSelf: 'center',
      },
      header: {
        alignItems: 'flex-start',
      },
      backButton: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
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
      label: {
        fontSize: 14,
        color: 'gray',
        textAlign: 'center',
      },
      modeLabel: {
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modeToggle: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        marginBottom: 15,
      },
      modeButton: {
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginHorizontal: 5,
      },
      modeButtonActive: {
        backgroundColor: 'black',
      },
      modeText: {
        color: 'black',
        fontWeight: 'normal',
      },
      modeTextActive: {
        color: 'white',
        fontWeight: 'bold',
      },
      buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
      },
      controlButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginHorizontal: 5,
      },
      controlText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
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
      media: {
        backgroundColor: '#e0e0e0',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
      },
    });

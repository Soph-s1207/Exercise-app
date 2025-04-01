import React, { useState, useEffect } from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import { DurationStyles as styles } from '../styles/DurationStyles';

const DurationExercise = ({ route, navigation }) => {
  const { exercise, allExercises } = route.params;
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState("countUp");

  const suggested = allExercises.find(e => e.name === exercise.suggested);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prev) => mode === "countUp" ? prev + 1 : Math.max(prev - 1, 0));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, mode]);

  const formatTime = (time) => {
    const mins = String(Math.floor(time / 60)).padStart(2, "0");
    const secs = String(time % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{exercise.name}</Text>

      <View style={styles.circle}><Text style={styles.timer}>{formatTime(seconds)}</Text></View>
      <Text style={styles.label}>Time (MM:SS)</Text>
      <Text style={styles.modeLabel}>Timer Mode</Text>

      <View style={styles.modeToggle}>
        <TouchableOpacity onPress={() => setMode("countUp")}
          style={[styleLocal.modeButton, mode === "countUp" && styleLocal.modeButtonActive]}>
          <Text style={mode === "countUp" ? styleLocal.modeTextActive : styleLocal.modeText}>Count Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setMode("countDown")}
          style={[styleLocal.modeButton, mode === "countDown" && styleLocal.modeButtonActive]}>
          <Text style={mode === "countDown" ? styleLocal.modeTextActive : styleLocal.modeText}>Count Down</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonGroup}>
        <TouchableOpacity onPress={() => setIsActive(true)} style={[styleLocal.controlButton, { backgroundColor: 'green' }]}> 
          <Text style={styleLocal.controlText}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsActive(false)} style={[styleLocal.controlButton, { backgroundColor: 'red' }]}> 
          <Text style={styleLocal.controlText}>Stop</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setIsActive(false); setSeconds(0); }} style={[styleLocal.controlButton, { backgroundColor: 'gray' }]}> 
          <Text style={styleLocal.controlText}>Reset</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.media}><Text>Exercise Image/Video</Text></View>

      <View style={{ marginTop: 20, gap: 10 }}>
        <TouchableOpacity onPress={() => navigation.push(
          suggested.type === "repetition" ? "RepetitionExercise" : suggested.type === "duration" ? "DurationExercise" : "BalanceExercise",
          { exercise: suggested, allExercises }
        )} style={{ backgroundColor: '#007bff', padding: 10, borderRadius: 5 }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>SUGGESTED: GO TO {suggested.name.toUpperCase()}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.popToTop()} style={{ backgroundColor: '#007bff', padding: 10, borderRadius: 5 }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>HOME</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DurationExercise;

const styleLocal = StyleSheet.create({
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
  });
  
  
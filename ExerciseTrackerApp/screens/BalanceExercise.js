import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { BalanceStyles as styles } from '../styles/BalanceStyles';

const BalanceExercise = ({ route, navigation }) => {
  const { exercise, allExercises } = route.params;
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [bestTime, setBestTime] = useState(0);
  const [attempts, setAttempts] = useState([]);

  const suggested = allExercises.find(e => e.name === exercise.suggested);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const stopTimer = () => {
    setIsActive(false);
    setAttempts([...attempts, time]);
    if (time > bestTime) setBestTime(time);
  };

  const resetAttempts = () => {
    setAttempts([]);
    setBestTime(0);
  };

  const avgTime = () => {
    if (attempts.length === 0) return 0;
    return (attempts.reduce((a, b) => a + b, 0) / attempts.length).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{exercise.name}</Text>

      <View style={styles.circle}><Text style={styles.timer}>{time}s</Text></View>

      <Text style={styles.stats}>Best Time: {bestTime}s</Text>
      <Text style={styles.stats}>Average Time: {avgTime()}s</Text>

      <View style={styles.buttonGroup}>
        {!isActive ? (
          <TouchableOpacity onPress={() => setIsActive(true)} style={[styles.controlButton, styles.start]}>
            <Text style={styles.controlText}>Start</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={stopTimer} style={[styles.controlButton, styles.stop]}>
            <Text style={styles.controlText}>Stop</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={() => setTime(0)} style={[styles.controlButton, styles.reset]}>
          <Text style={styles.controlText}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={resetAttempts} style={[styles.controlButton, styles.reset]}>
          <Text style={styles.controlText}>Reset Attempts</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.attemptLabel}>Previous Attempts</Text>
      <FlatList
        data={attempts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.attemptItem}>{item}s</Text>}
        contentContainerStyle={styles.attemptList}
      />

      <View style={styles.media}><Text>Exercise Image/Video</Text></View>

      <View style={styles.bottomButtons}>
        <TouchableOpacity onPress={() => navigation.push(
          suggested.type === "repetition" ? "RepetitionExercise" : suggested.type === "duration" ? "DurationExercise" : "BalanceExercise",
          { exercise: suggested, allExercises }
        )} style={styles.navButton}>
          <Text style={styles.navButtonText}>SUGGESTED: GO TO {suggested.name.toUpperCase()}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.popToTop()} style={styles.navButton}>
          <Text style={styles.navButtonText}>HOME</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BalanceExercise;
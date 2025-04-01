import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { RepetitionStyles as styles } from '../styles/RepetitionStyles';

const RepetitionExercise = ({ route, navigation }) => {
  const { exercise, allExercises } = route.params;
  const [count, setCount] = useState(0);
  const [goal, setGoal] = useState("");

  const suggested = allExercises.find(e => e.name === exercise.suggested);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{exercise.name}</Text>

      <View style={styles.circle}><Text style={styles.repCount}>{count}</Text></View>
      <Text style={styles.label}>Reps Completed</Text>

      <View style={styles.buttonGroupCircle}>
        <TouchableOpacity style={[styles.circleButton, styles.add]} onPress={() => setCount(count + 1)}>
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.circleButton, styles.subtract]} onPress={() => setCount(Math.max(count - 1, 0))}>
          <Text style={styles.subtractText}>-</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter Rep Goals"
        value={goal}
        onChangeText={setGoal}
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

export default RepetitionExercise;
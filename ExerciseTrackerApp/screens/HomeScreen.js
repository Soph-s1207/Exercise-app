import React from "react";
import { View, FlatList } from "react-native";
import { Button, Text } from "react-native-elements";
import { AppStyles as styles } from '../styles/AppStyles';

const exercises = [
  { name: "Push Ups", type: "repetition", description: "Some description", suggested: "Bicycling" },
  { name: "Bicycling", type: "duration", description: "Some description", suggested: "Sit Ups" },
  { name: "Jumping Jacks", type: "repetition", description: "Some description", suggested: "Running" },
  { name: "Running", type: "duration", description: "Some description", suggested: "Balance" },
  { name: "Sit Ups", type: "repetition", description: "Some description", suggested: "Push Ups" },
  { name: "Balance", type: "balance", description: "Some description", suggested: "Jumping Jacks" },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text h3 style={styles.title}>My Exercises</Text>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.exerciseList}
        renderItem={({ item }) => (
          <Button
            title={item.name}
            containerStyle={{ marginVertical: 8 }}
            onPress={() => navigation.navigate(
              item.type === "repetition" ? "RepetitionExercise" : item.type === "duration" ? "DurationExercise" : "BalanceExercise",
              { exercise: item, allExercises: exercises }
            )}
          />
        )}
      />
    </View>
  );
};

export default HomeScreen;
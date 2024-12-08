import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

const App = () => {
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);

  const teamAName = "Tim A";
  const teamBName = "Tim B";

  const incrementScore = (team) => {
    if (team === "A" && teamAScore < 10) setTeamAScore(teamAScore + 1);
    if (team === "B" && teamBScore < 10) setTeamBScore(teamBScore + 1);
  };

  const decrementScore = (team) => {
    if (team === "A" && teamAScore > 0) setTeamAScore(teamAScore - 1);
    if (team === "B" && teamBScore > 0) setTeamBScore(teamBScore - 1);
  };

  const resetScores = () => {
    setTeamAScore(0);
    setTeamBScore(0);
  };

  const checkWinner = () => {
    if (teamAScore === 10) return `${teamAName} Menang!`;
    if (teamBScore === 10) return `${teamBName} Menang!`;
    return null;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Skor Pertandingan Futsal</Text>
      <View style={styles.scoreboard}>
        <View style={styles.team}>
          <Text style={styles.teamName}>{teamAName}</Text>
          <Text style={styles.score}>{teamAScore}</Text>
          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => incrementScore("A")}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => decrementScore("A")}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.team}>
          <Text style={styles.teamName}>{teamBName}</Text>
          <Text style={styles.score}>{teamBScore}</Text>
          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => incrementScore("B")}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => decrementScore("B")}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View>
        {checkWinner() && <Text style={styles.winner}>{checkWinner()}</Text>}
      </View>

      <TouchableOpacity style={styles.resetButton} onPress={resetScores}>
        <Text style={styles.resetButtonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  scoreboard: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  team: {
    alignItems: "center",
    flex: 1,
  },
  teamName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  score: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  winner: {
    fontSize: 20,
    color: "#D32F2F",
    fontWeight: "bold",
    marginVertical: 10,
  },
  resetButton: {
    backgroundColor: "#FF5722",
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  resetButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default App;

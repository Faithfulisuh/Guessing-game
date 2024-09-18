import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const statusList = [styles, correct];

  score = 20;

  const [numInput, setNumInput] = useState("");
  const [status, setStatus] = useState(statusList[0]);
  const [start, setStart] = useState();
  const [show, setShow] = useState("secret number");
  const [hint, setHint] = useState();
  const [scoreNum, setScoreNum] = useState();

  function startGame() {
    setStart(true);
    setShow("secret number");
    setStatus(statusList[0]);
    setNumInput("");
    setHint("Start guessing...");
    score = 20;
    setScoreNum(score);
    num = Math.trunc(Math.random() * 20) + 1;
    console.log(num);
  }

  function handleNum() {
    console.log("This is num", num);
    console.log("This is numInput", numInput);

    //When there is no input
    if (!numInput) {
      setHint("No number!");

      //When player wins
    } else if (numInput === num) {
      setStatus(statusList[1]);
      setShow(num);
      setHint("CORRECT NUMBER!!!, YOU WON 🎉");

      //When guess is too high
    } else if (numInput > num) {
      if (score > 1) {
        setHint("Too high! Try again");
        score--;
        setScoreNum(score);
        console.log("This is the score", score);
      } else {
        setHint("🥺 You lost the game!");
        setScoreNum(0);
      }

      //When guess is low
    } else if (numInput < num) {
      if (score > 1) {
        setHint("Too low! Try again");
        score--;
        setScoreNum(score);
        console.log("This is the score", score);
      } else {
        setHint("🥺 You lost the game!");
        setScoreNum(0);
      }
    }
  };

  return (
    <SafeAreaView style={status.container}>
      <View style={styles.all}>
        <View style={status.top}>
          <Text style={styles.title}>GUESS MY NUMBER</Text>
          <View style={styles.breakLine}></View>
          <View style={status.secretNumberContainer}>
            <Text style={status.secretNumberText}>{show}</Text>
          </View>
        </View>
        <Text style={styles.textIntruction}>
          -- Pick a number between 1 and 20 --
        </Text>
        <View style={status.guessAndScore}>
          <Text style={styles.guessingText}>{hint}</Text>
          <Text style={styles.scoreStyle}>
            Score: <Text style={styles.scoreNumber}>{scoreNum}</Text>
          </Text>
        </View>
        <KeyboardAvoidingView style={styles.lastItem}>
          <TextInput
            keyboardType="numeric"
            style={status.input}
            value={numInput}
            onChangeText={(text) => setNumInput(parseInt(text))}
          />
          <TouchableOpacity onPress={() => handleNum()}>
            <View style={status.checkButton}>
              <Text style={styles.check}>CHECK</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => startGame()}
            style={styles.startButton}
          >
            <Text style={styles.check}>START</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  all: {
    alignItems: "center",
  },
  top: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#353535",
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  title: {
    marginTop: 150,
    textAlign: "center",
    fontSize: 32,
    fontWeight: "900",
    color: "white",
  },
  breakLine: {
    // {postion: "relative",
    // top: 70,
    // width: "100%",
    // height: 2,
    // backgroundColor: "white",}
  },
  secretNumberContainer: {
    width: 183,
    height: 60,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 37,
  },
  secretNumberText: {
    color: "black",
    fontSize: 20,
    fontWeight: "700",
  },
  textIntruction: {
    color: "white",
    fontSize: 20,
    marginVertical: 7,
  },
  guessAndScore: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    width: "100%",
    marginVertical: 20,
  },
  guessingText: {
    color: "white",
    fontSize: 20,
  },
  scoreStyle: {
    color: "white",
    fontSize: 20,
  },
  scoreNumber: {
    fontSize: 27,
    fontWeight: "700",
  },
  lastItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: 70,
    height: 70,
    backgroundColor: "#D9D9D9",
    borderRadius: 20,
    marginTop: 20,
    marginRight: 20,
    padding: 10,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  checkButton: {
    width: 70,
    height: 50,
    backgroundColor: "#A6DFE9",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  check: {
    color: "black",
    fontSize: 15,
    fontWeight: "900",
  },
  startButton: {
    width: 70,
    height: 50,
    backgroundColor: "#A6DFE9",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginLeft: 10,
  },
  startText: {
    color: "black",
    fontSize: 15,
    fontWeight: "900",
  },
});

const correct = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#57BC32",
  },
  top: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#486545",
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  secretNumberContainer: {
    width: 100,
    height: 60,
    backgroundColor: "#000",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 37,
  },
  secretNumberText: {
    color: "white",
    fontSize: 40,
    fontWeight: "700",
  },
  guessAndScore: {
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: 30,
    width: "100%",
    marginVertical: 20,
  },
  input: {
    width: 70,
    height: 70,
    backgroundColor: "#000",
    borderRadius: 20,
    marginTop: 20,
    marginRight: 20,
    padding: 10,
    color: "white",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  checkButton: {
    width: 70,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  startButton: {
    width: 70,
    height: 50,
    backgroundColor: "#A6DFE9",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  startText: {
    color: "black",
    fontSize: 15,
    fontWeight: "900",
  },
});

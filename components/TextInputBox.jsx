import { useState } from "react";
import { View, TextInput, Button } from "react-native";
import styles from "../style";

const TextInputBox = ({ setTodos }) => {
  const handleAddNew = (newTodo) => {
    if (newTodo.trim().length !== 0) {
      const randomNumber = Math.floor(Math.random() * 1_000_000_000) + 1;
      setTodos((prev) => [...prev, {title: newTodo.trim(), id: randomNumber} ]);
      setCurrentInput("");
    } else {
      alert("Please enter your todo");
    }
  };

  const [currentInput, setCurrentInput] = useState("");

  return (
    <View
      style={styles.inputContainer}
    >
      <TextInput
        style={styles.inputBox}
        value={currentInput}
        onChangeText={(text) => setCurrentInput(text)}
        placeholder="Enter your todo here"
      />
      <View
        style={styles.btnContainer}
      >
        <Button
          title="Add new"
          color="#f37933ff"
          onPress={() => handleAddNew(currentInput)}
        />
      </View>
    </View>
  );
};

export default TextInputBox;

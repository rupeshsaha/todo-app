import { useState } from "react";
import { View, TextInput, Button } from "react-native";

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
      style={{
        position: "relative",
        width: "100%",
        display: "flex",
        gap: 10,
      }}
    >
      <TextInput
        style={{
          width: "100%",
          borderWidth: 2,
          borderColor: "#ccc",

          height: 50,
          paddingHorizontal: 20,
          paddingRight: 50, 
          fontSize: 16,
        }}
        value={currentInput}
        onChangeText={(text) => setCurrentInput(text)}
        placeholder="Enter your todo here"
      />

      <Button title="Add new" onPress={() => handleAddNew(currentInput)} />
    </View>
  );
};

export default TextInputBox;

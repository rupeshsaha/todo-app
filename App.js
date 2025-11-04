import { Text, View } from "react-native";
import TextInputBox from "./components/TextInputBox";
import TodosContainer from "./components/TodosContainer";
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([{id:1,title:"Hello World"}]);

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        paddingTop: 50,
        paddingBottom: 50,
        paddingLeft: 10,
        paddingRight: 10,
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 30,
        }}
      >
        <TextInputBox setTodos={setTodos} />
        <TodosContainer todos={todos} setTodos={setTodos} />
      </View>
    </View>
  );
};

export default App;

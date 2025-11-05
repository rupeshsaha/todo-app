import { Text, View } from "react-native";
import TextInputBox from "./components/TextInputBox";
import TodosContainer from "./components/TodosContainer";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";

const App = () => {
  const [todos, setTodos] = useState([{id:1,title:"Hello World"}]);

  return (
    <SafeAreaView
      style={styles.safeareaview}
    >
      <Text style={styles.headingText}>Todo App</Text>
      <View
        style={styles.container}
      >
        <TextInputBox setTodos={setTodos} />
        <TodosContainer todos={todos} setTodos={setTodos} />
      </View>
    </SafeAreaView>
  );
};

export default App;

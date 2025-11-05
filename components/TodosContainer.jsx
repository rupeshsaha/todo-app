import { View, Text, ScrollView, StyleSheet, TextInput } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import styles from "../style";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {  useState } from "react";

const TodosContainer = ({ todos, setTodos }) => {

  const [selectedTodo, setSelectedTodo] = useState({});
  const [inputValue, setInputValue] = useState();

 

  const handleEdit = (todo) => {
    setSelectedTodo(todo)
    setInputValue(todo.title)

  }

  const handleSave = (todo) => {
    const updatedTodos = todos.map((item) =>
      item.id === todo.id ? { ...item, title: inputValue } : item
    );
    setTodos(updatedTodos);
    setSelectedTodo({});
    setInputValue('');
  }

  const handleDelete = (id) => {
    if (!id) return;
    const todosAfterDeleted = todos.filter((todo) => todo.id !== id);
    setTodos(todosAfterDeleted);
  };

  return (
    <ScrollView style={{ width: "100%", display: "flex", gap: 30 }}>
      {todos.map((todo) => (
        <View key={todo.id} style={styles.card}>
          

          {selectedTodo.id !== todo.id ? (<>
          <Text style={styles.card_title}>{todo.title}</Text>
            <View style={styles.actionBtnContainer}>
              <FontAwesome
                name="pencil-square-o"
                size={20}
                color="black"
                onPress={() => handleEdit(todo)}
                />
              <AntDesign
                onPress={() => handleDelete(todo.id)}
                name="delete"
                size={20}
                color="red"
                />
            </View>
                </>
          ) : (<>
              <TextInput autoFocus value={inputValue} onChangeText={setInputValue} style={styles.card_title} />
            <AntDesign name="check" size={24} color="green" onPress={() => handleSave(todo)} />
          </>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

export default TodosContainer;

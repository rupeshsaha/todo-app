import { View, Text, ScrollView } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const TodosContainer = ({ todos, setTodos }) => {

  const handleDelete = (id) => {
    if (!id) return;
    const todosAfterDeleted = todos.filter((todo) => todo.id !== id);
    setTodos(todosAfterDeleted);
  };

  return (
    <ScrollView style={{ width: "100%", display: "flex", gap: 30 }}>
      {todos.map((todo) => (
        <View
          key={todo.id}
          style={{
            height: "auto",
            minHeight: 50,
            maxHeight: 100,
            width: "100%",
            marginBottom: 15,
            display: "flex",
            flexDirection:"row",
            justifyContent: "space-between",
            alignItems:"center",
            paddingHorizontal: 12,
            borderWidth: 1,
            borderRadius: 10,
          }}
        >
          <Text style={{ fontSize: 18, maxWidth:"85%" }}>{todo.title}</Text>
         
          
          <AntDesign onPress={()=>handleDelete(todo.id)} name="delete" size={24} color="red" />
          
        </View>
      ))}
    </ScrollView>
  );
};

export default TodosContainer;

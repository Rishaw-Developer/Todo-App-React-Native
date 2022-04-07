import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  onPress,
} from "react-native";

const Height = window.innerHeight;
const Width = window.innerWidth;

export default function Todo() {
  const [todos, setTodos] = useState([]);

  const [todoTitle, setTodoTitle] = useState("");

  const DeleteTheTodo = (id) => {
    let newTodo = todos.filter((a, i) => {
      return i !== id;
    });

    setTodos(newTodo);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          width: Width,
          marginTop: 30,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextInput
          style={{
            width: Width - 10,
            borderRadius: 10,
            outline: "none",
            padding: 20,
            fontSize: 20,
            backgroundColor: "gray",
            color: "white",
            fontWeight: 500,
            fontFamily: "cursive",
          }}
          value={todoTitle}
          onChange={(e) => {
            setTodoTitle(e.target.value);
          }}
          placeholder="Enter the todo"
        />
        <View style={{ width: Width - 50, marginTop: 10, borderRadius: 10 }}>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<AddIcon />}
            onClick={() => {
              setTodos([...todos, todoTitle]);
            }}
          >
            AddNow
          </Button>
        </View>
      </View>
      <View
        style={{
          margin: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {todos.length === 0 ? (
          <Text style={{ fontSize: 30 }}>No Todos Found</Text>
        ) : (
          todos.map((a, i) => {
            return (
              <ScrollView>
                <View
                  style={{
                    marginTop: 20,
                    display: "flex",
                    backgroundColor: "#4615b2",
                    borderRadius: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    padding: 10,
                    width: Width - 15,
                  }}
                >
                  <Text
                    key={i}
                    style={{
                      fontSize: 20,
                      textAlign: "center",
                      color: "white",
                      fontWeight: 800,
                      fontFamily: "cursive",
                    }}
                  >
                    {a}
                  </Text>
                  <IconButton
                    style={{ color: "white" }}
                    onClick={() => DeleteTheTodo(i)}
                  >
                    <DeleteIcon style={{ color: "#E42217" }} />
                  </IconButton>
                </View>
              </ScrollView>
            );
          })
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Width,
  },
});

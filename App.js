import React from 'react';
import { StyleSheet, Text, View, StatusBar, Dimensions, TextInput, Platform } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import ToDo from "./ToDo";

const { height, width } = Dimensions.get("window");

export default class App extends React.Component {
  state = {
    newToDo:""
  }
  render() {
    const { newToDo} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <Text style={styles.title}>kawai to do </Text>
        <View style={styles.card}>
        <TextInput 
          style={styles.input} 
          placeholder={"NEW TO DO "} 
          value={newToDo} 
          onChangeText={this._controllNewTodo}
          placeholderTextColor={"#999"} 
          returnKeyType={"done"}
          autoCorrect={false}
          autoCapitalize={"none"}
          />
          <ScrollView contentContainerStyle={styles.toDos}>
            <ToDo text={"Hello I'm a To Do"}/>
          </ScrollView>

        </View>
      </View>
    );
  }
  _controllNewTodo = text => {
    this.setState({
      newToDo: text
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F23657",
    alignItems: "center"
  },
  title: {
    color: "white",
    fontSize: 30,
    marginTop: 50,
    fontWeight: "900",
    marginBottom: 50
  },
  card: {
    backgroundColor: "white",
    flex: 1,
    width: width - 50,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      ios:{
        shadowColor:"rgb(50, 50, 50)",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0
        }
      },
      android:{
        elevation: 3
      }

    }),

  },
  input:{
    padding:20,
    borderBottomColor:"#bbb",
    borderBottomWidth: 1,
    fontSize: 20,  
    
  },
  
  toDos:{
    alignItems:"center"
  }


});

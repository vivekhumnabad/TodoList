import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
 import ToDoList from './containers'
class TodoApp extends Component {


    render() {
        return (
            <View style={styles.container}>
                     <ToDoList />
             </View>
        );
    }
}
export default TodoApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40

    }
});
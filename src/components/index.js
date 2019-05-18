import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    SectionList, TextInput, Image
} from "react-native";
import styles from './styles';


export default class TodoList extends Component {
    state = {
        text: ''
    }

    addTodo = (text) => {
        console.log('adding ', text)
         this.props.addTodo(text)
        this.setState({ text: '' })
    }

    deleteTodo = (item ,index, section) => {
        console.log('deleting ', item)
        this.props.removeTodo(item,index,section)
    }

    doneTodo = (item,index) => {
        console.log('doneTODO ', item)
        this.props.doneTodo(item,index)
    }

    undoDoneTodo = (item,index) => {
        console.log('undoDoneTODO ', item)
        this.props.undoDoneTodo(item,index)
    }



    renderItem = ({ item, index, section }) => {
 
        const sectionalIndex = section.title =='TODO'?0:1
        const imageName = sectionalIndex == 0 ? 'checkBoxEmpty' : "checked-checkbox"
        return (
            <View style={styles.settingsCellView}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity style={{ marginRight: 10 }} onPress={() => sectionalIndex == 0 ? this.doneTodo(item,index) : this.undoDoneTodo(item,index)}>
                        <Image source={{ uri: imageName }} style={{ padding: 10, width: 20, height: 20 }} />
                    </TouchableOpacity>
                    <Text style={styles.settingsCellTextStyle}>{item.trim()}</Text>
                    <TouchableOpacity style={{ position: 'absolute', right: 20 }} onPress={() => this.deleteTodo(item, index, sectionalIndex)}>
                        <Image source={{ uri: 'close' }} style={{ padding: 10, width: 20, height: 20 }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.seperatorStyle} />
            </View>
        );
    }

    renderSectionHeader = ({ section: { title } }) => (
        <View style={styles.sectionHeaderView}>
            <Text style={styles.sectionTextStyle}>{title}</Text>
        </View>
    )

    addTodoList() {
        if (this.props.todos ) {
            return (
                <SectionList
                    renderItem={this.renderItem}
                    renderSectionHeader={this.renderSectionHeader}
                    sections={ [
                        { title: 'TODO', data: this.props.todos },
                        { title: 'COMPLETED', data: this.props.completedTasks },
                    ]}
                    keyExtractor={(item, index) => item + index}
                />
            );
        }
        return null
    }

    render() {
        return (
            <View style={{ flexDirection: 'column', }}>
                <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                    <TextInput
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}
                        placeholder="Eg. Add New Item"
                        style={{ borderWidth: 1, borderColor: '#f2f2e1', backgroundColor: '#eaeaea', height: 50, flex: 1, padding: 5 }}
                    />
                    <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
                        <View style={{ height: 50, backgroundColor: '#eaeaea', alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={{ uri: 'addButton' }} style={{ padding: 10, width: 25, height: 25 }} />
                        </View>
                    </TouchableOpacity>
                </View>
                {this.addTodoList()}
            </View>

        );
    }
}


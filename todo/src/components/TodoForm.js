import React, { Component } from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Input from './Input';
import { setTodoText, addTodo, updateTodo } from '../actions';

class TodoForm extends Component {
  onChangeText(text) {
    this.props.dispatchSetTodoText(text);
  }

  onPress() {
    const { todo } = this.props;
    if (todo.id) return this.props.dispatchUpdateTodo(todo);
    const { text } = todo;
    this.props.dispatchAddTodo(text);
  }

  render() {
    const { text, id } = this.props.todo
    return (
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Input
            onChangeText={text => this.onChangeText(text)}
            value={text}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.onPress()}
            title={id ? 'Save' : 'Add'}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	formContainer: {
		flexDirection: 'row',
	},
	inputContainer: {
		flex: 4
	},
	buttonContainer: {
		flex: 1
	}
});

const mapStateToProps = state => {
    return {
        todo: state.editingTodo
    }
}

export default connect(
	mapStateToProps,
	{
		dispatchSetTodoText: setTodoText,
		dispatchAddTodo: addTodo,
		dispatchUpdateTodo: updateTodo
	}
)(TodoForm);

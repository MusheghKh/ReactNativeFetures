import React, { Component } from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import { bindActionCreators, dispatch } from 'redux';
import { connect } from 'react-redux';
import * as todoActions from '../actions/todo/todoActions';
import * as visibilityActions from '../actions/todo/visibilityActions';
import * as modalVisibilityActions from '../actions/todo/modalVisibilityActions';
import { VisibilityFilters } from '../actions/todo/actionTypes';
import TitleBar from '../components/todo/title-bar';
import TodoList from '../components/todo/todo-list';
import AddTodo from '../components/todo/add-todo';
import Filters from '../components/todo/filters';

import store from '../store';

@connect(state => ({
	todos: state.todos.filter(todo => {
		switch(state.filter) {
			case VisibilityFilters.COMPLETED:
				return todo.completed;
			case VisibilityFilters.INCOMPLETE:
				return !todo.completed;
			case VisibilityFilters.ALL:	
			default:
				return true;
		}
	}),
	filter: state.filter,
	addModalVisible: state.addModal.visible
}))

class TodosScreen extends Component {
	render() {
		const { todos, filter, dispatch, addModalVisible } = this.props;

		return (
			<View style={styles.container}>
        <TitleBar
          activeFilter={filter}
          {...bindActionCreators(modalVisibilityActions, dispatch)} />
        <TodoList
          activeFilter={filter}
          todos={todos}
          {...bindActionCreators(todoActions, dispatch)} />
        <Filters
          activeFilter={filter}
          {...bindActionCreators(visibilityActions, dispatch)} />
        <Modal
          onRequestClose={bindActionCreators(modalVisibilityActions.hideModal, dispatch)}
          animationType={'fade'}
          transparent={false}
          visible={addModalVisible}>
          <AddTodo
            {...bindActionCreators(todoActions, dispatch)}
            {...bindActionCreators(modalVisibilityActions, dispatch)} />
        </Modal>
      </View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },

  list: {
    flex: 1
  },

  add: {
    flex: 1
  }
});

export default TodosScreen;
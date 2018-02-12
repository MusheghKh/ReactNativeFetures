import React, { Component } from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { bindActionCreators, dispatch } from 'redux';
import { connect } from 'react-redux';
import * as todoActions from '../actions/todo/todoActions';
import * as visibilityActions from '../actions/todo/visibilityActions';
import { VisibilityFilters } from '../actions/todo/actionTypes';
import TodoList from '../components/todo/todo-list';
import Filters from '../components/todo/filters';

import store from '../store';

@connect(state => ({
  loading: state.loading,
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
	}).filter(todo => todo.name.toLowerCase().includes(state.searchFilter)),
	filter: state.filter
}))

class TodosScreen extends Component {
	render() {
		const { todos, filter, dispatch, loading } = this.props;

		return (
			<View style={styles.container}>
        <TodoList
          activeFilter={filter}
          todos={todos}
          loading={loading}
          {...bindActionCreators(todoActions, dispatch)} />
        <Filters
          activeFilter={filter}
          loading={loading}
          {...bindActionCreators(visibilityActions, dispatch)} />
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
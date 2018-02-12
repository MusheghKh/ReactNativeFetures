import React, { Component } from 'react';
import { TouchableHighlight, StyleSheet, View, Text, ListView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import CompleteToggle from './complete-toggle';
import AddTodoRow from './add-todo-row';
import { VisibilityFilters } from '../../actions/todo/actionTypes';
import LoadingSpinner from '../../helpers/loading-spinner';
import Icon from 'react-native-vector-icons/FontAwesome';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }),
      loading: this.props.loading
    };
  }

  componentDidMount() {
    this.props.getAllTodos();
    this.setState({
      loading: this.state.loading
    });
  }

  componentWillReceiveProps (nextProps) {
    const { todos, loading } = nextProps;

    if (todos !== this.props.todos) {
      this.setState({ dataSource: this.state.dataSource.cloneWithRows(todos), loading });
    }
  }

  renderHeader = () => (<SearchBar placeholder="Type Here..." lightTheme round onChangeText={input => this.props.searchFilter(input)}/>);

  renderRow = todo => {
    const { completeTodo, incompleteTodo, removeTodo } = this.props;
    if(this.state.loading) {
      return null;
    }

    return (
      <TouchableHighlight
        underlayColor="#e4f2d9"
        key={todo.id}
        style={styles.row}
        onPress={() => {
          if (todo.completed) {
            incompleteTodo(todo.id);
          } else {
            completeTodo(todo.id);
          }
        }}>
        <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
          <CompleteToggle
            style={styles.toggle}
            checked={todo.completed}
            onChecked={() => completeTodo(todo.id)}
            onUnchecked={() => incompleteTodo(todo.id)} />
          <Text style={styles.text}>{todo.name}</Text>
          <Icon name="trash" size={15} onPress={() => removeTodo(todo.id)} />
        </View>
      </TouchableHighlight>
    )
  }

  renderFooter = () => {
    const { addTodo, activeFilter } = this.props;

    if(this.state.loading) {
      return (<LoadingSpinner loading={this.state.loading}/>);
    }

    return (<AddTodoRow addTodo={name => addTodo(name, activeFilter === VisibilityFilters.COMPLETED)} />);
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.state.dataSource}
        renderHeader={this.renderHeader}
        renderRow={this.renderRow}
        renderFooter={this.renderFooter} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  row: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20
  },

  templateRow: {
    paddingLeft: 30
  },

  text: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10
  }
});

export default TodoList;
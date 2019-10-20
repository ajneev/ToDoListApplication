import React, { Component } from "react";
import axios from "axios";

import ToDoListSearch from "../components/ToDoListSearch";
import ToDoForm from "../components/ToDoForm";
import ToDoListBlock from "../components/ToDoListBlock";

class ToDoList extends Component {
  state = {
    task: "",
    list: [],
    filterText: undefined
  };

  componentDidMount() {
    this.fetchList();
  }

  // To Fetch All Lists which is not deleted  from Database
  // Uses Axios API call to backend controller
  fetchList = () => {
    axios
      .get("api/ToDoList")
      .then(response => {
        this.setState({ list: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  // To Save a new Task into Database
  // Uses Axios API call to backend controller
  saveData = t => {
    axios
      .post("api/ToDoList/saveTask", { description: t })
      .then(response => {
        this.fetchList();
      })
      .catch(error => {
        console.log(error);
      });
  };

  // To Mark an existing Task as Completed into Database
  // Uses Axios API call to backend controller
  completeTask = taskId => {
    axios
      .post(`api/ToDoList/completeTask/${taskId}`)
      .then(response => {
        this.fetchList();
      })
      .catch(error => {
        console.log(error);
      });
  };

  // To revert an existing Completed Task as Uncompleted in the Database
  // Uses Axios API call to backend controller
  revertTask = taskId => {
    axios
      .post(`api/ToDoList/revertCompleteTask/${taskId}`)
      .then(response => {
        this.fetchList();
      })
      .catch(error => {
        console.log(error);
      });
  };

  // To delete a task
  // Doesnot delete a record of task in the Database
  // Instead mark it as delete for future reference from DB.
  // Uses Axios API call to backend controller
  deleteTask = taskId => {
    axios
      .post(`api/ToDoList/deleteTask/${taskId}`)
      .then(response => {
        this.fetchList();
      })
      .catch(error => {
        console.log(error);
      });
  };

  // On Search of a Task - Calls on Key Input
  handleChangeOnSearch = e => {
    this.setState({ filterText: e.target.value });
  };

  render() {
    let { list, filterText, task } = this.state;

    let newList = list;
    // For Search : Task Value Input
    // Front End Search Only for exact pattern in Task Description
    if (newList && filterText) {
      newList = newList.filter(ev =>
        ev.task.toLowerCase().includes(filterText.toLowerCase())
      );
    }

    return (
      <div>
        <div>
          <ToDoForm task={task} saveData={this.saveData} />
          <ToDoListSearch
            filterText={filterText}
            handleChangeOnSearch={this.handleChangeOnSearch}
          />
          <ToDoListBlock
            list={newList}
            completeTask={this.completeTask}
            revertTask={this.revertTask}
            deleteTask={this.deleteTask}
          />
        </div>
      </div>
    );
  }
}

export default ToDoList;

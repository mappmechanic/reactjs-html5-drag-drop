import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AddProject from './Components/AddProject';
import NumberDisplay from './Components/NumberDisplay';
import TaskBucket from './Components/TaskBucket';

class App extends Component {
  constructor(){
    super();
    this.onProjectAdd = this.onProjectAdd.bind(this);
    this.onTaskMove = this.onTaskMove.bind(this);
  }

  state = {
    toDo: ['Project1','Project2','Project3','Project4'],
    inProgress:['Project5','Project6','Project7'],
    done:['Project8','Project9','Project10','Project11','Project12']
  }

  onProjectAdd(projectName){
    let newToDo = this.state.toDo.slice();
    newToDo.push(projectName);
    this.setState({
      toDo: newToDo
    })
  }

  onTaskMove(fromKey, task, toKey){
    if(fromKey !== toKey){
      const fromList = this.state[fromKey].slice();
      const toList = this.state[toKey].slice();
      fromList.splice(fromList.indexOf(task),1);
      toList.push(task);
      this.setState({
        [fromKey]: fromList,
        [toKey]: toList
      });
    }
  }

  render() {
    const { toDo, inProgress, done } = this.state;

    return (
      <div className="App">
        <header>
          <AddProject onProjectAdd={this.onProjectAdd} />
          <div className="totalProjects">
            <span>TOTAL</span>
            <NumberDisplay no={toDo.length + inProgress.length + done.length} label="PROJECTS" />
          </div>
        </header>
        <div className="buckets">
          <TaskBucket stateKey="toDo" label="To Do" taskList={toDo} onTaskMove={this.onTaskMove} />
          <TaskBucket stateKey="inProgress" label="In Progress" taskList={inProgress} onTaskMove={this.onTaskMove} />
          <TaskBucket stateKey="done" label="Done" taskList={done} onTaskMove={this.onTaskMove} />
        </div>
      </div>
    );
  }
}

export default App;

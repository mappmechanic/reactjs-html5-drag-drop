import React from 'react';
import NumberDisplay from './NumberDisplay';

const TaskBucket = ({ taskList, label, onTaskMove, stateKey }) => {
    const onDrop = (event) => {
        event.preventDefault();
        onTaskMove(event.dataTransfer.getData("fromKey"),event.dataTransfer.getData("task"), stateKey);
    };

    const onDragStart = event => {
        event.dataTransfer.setData('fromKey',stateKey);
        event.dataTransfer.setData('task',event.target.innerText);
    }

    const allowDrop = event => {
        event.preventDefault();
    }

    return (
        <div 
            onDrop={onDrop} 
            onDragOver={allowDrop}
            className="taskBucket">
            <header>
                <div className="label">{label}</div>
                <div className="noDisplay">
                    <NumberDisplay no={taskList.length} label="PROJECTS" />
                </div>
            </header>
            <div className="taskList">
                {taskList.map((task, index) => {
                    return (
                        <div 
                        draggable="true" 
                        key={`task${index}`} 
                        onDragStart={onDragStart}
                        className="listItem">
                            {task}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default TaskBucket;
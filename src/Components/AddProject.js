import React, { Component } from 'react';

class AddProject extends Component {
    render(){
        const { onProjectAdd } = this.props;
        return (
            <div className="addProject">
                <div>add project</div> 
                <div><input type="text" placeholder="type in task & press enter" ref={(i) => this.projectName = i} onKeyPress={(event) => {
                    if(event.charCode == 13){
                        onProjectAdd(this.projectName.value);
                        this.projectName.value = '';
                    }
                }} /></div>
            </div>
        );
    }
} 

export default AddProject;
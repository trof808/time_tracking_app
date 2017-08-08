import React, { Component } from 'react';
import Timer from '../components/Timer';
import TimerForm from '../components/TimerForm';

class EditableTimer extends Component {
    state = {
        editFormOpen: false,
    }
    toggleTimerForm = () => {
        this.setState({ editFormOpen: !this.state.editFormOpen })
    }
    render() {
        if(this.state.editFormOpen) {
            return (
                <TimerForm
                    id={this.props.id}
                    title={this.props.title}
                    project={this.props.project} 
                    hideTimerForm={this.toggleTimerForm}
                />
            )
        } else {
            return (
                <Timer 
                    id={this.props.id}
                    title={this.props.title}
                    project={this.props.project} 
                    elapsed={this.props.elapsed}
                    runningSince={this.props.runningSince} 
                    showTimerForm={this.toggleTimerForm}
                />
            )
        }
        
    }
}

export default EditableTimer;
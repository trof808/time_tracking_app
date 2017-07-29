import React, { Component } from 'react';
import Timer from '../components/Timer';
import TimerForm from '../components/TimerForm';

class EditableTimer extends Component {
    render() {
        if(this.props.editFromOpen) {
            return (
                <TimerForm
                    title={this.props.title}
                    project={this.props.project} />
            )
        } else {
            return (
                <Timer 
                    title={this.props.title}
                    project={this.props.project} 
                    elapsed={this.props.elapsed}
                    runningSince={this.props.runningSince} />
            )
        }
        
    }
}

export default EditableTimer;
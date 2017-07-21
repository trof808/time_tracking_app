import React, { Component } from 'react';
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';

class TimerDashboard extends Component {
    render() {
        return (
            <div>
                <EditableTimerList />
                <ToggleableTimerForm />
            </div>
        )
    }
}

export default TimerDashboard;
import React, { Component } from 'react';
import TimerList from './TimerList';
import ToggleableTimerForm from '../components/ToggleableTimerForm';

class TimerDashboard extends Component {
    render() {
        return (
            <div>
                <TimerList />
                <ToggleableTimerForm />
            </div>
        )
    }
}

export default TimerDashboard;
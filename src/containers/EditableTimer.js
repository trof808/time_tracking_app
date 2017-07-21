import React, { Component } from 'react';
import Timer from '../components/Timer';
import TimerForm from '../components/TimerForm';

class EditableTimer extends Component {
    render() {
        return (
            <div>
                <Timer />
                <TimerForm />
            </div>
        )
    }
}

export default EditableTimer;
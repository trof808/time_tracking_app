import React, { Component } from 'react';
import TimerForm from '../components/TimerForm';

class ToggleableTimerForm extends Component {

    state = {
        isOpen: false
    }

    hideCreateForm = () => {
        this.setState({ isOpen: false })
    }

    render() {
        if(this.state.isOpen) {
            return(
                <TimerForm 
                    hideCreateForm={this.hideCreateForm} 
                />
            )
        } else {
            return (
                <div className='ui basic content center aligned segment'> 
                    <button className='ui basic button icon' onClick={() => { this.setState({ isOpen: true }) }}>
                        <i className='plus icon' /> 
                    </button>
                </div>
            );
        }
    }
}

export default ToggleableTimerForm;
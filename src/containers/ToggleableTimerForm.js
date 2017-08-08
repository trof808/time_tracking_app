import React, { Component } from 'react';
import TimerForm from '../components/TimerForm';
import hlpers from '../other/helpers';

class ToggleableTimerForm extends Component {

    state = {
        isOpen: false
    }

    hideCreateForm = () => {
        this.setState({ isOpen: false })
    }
    openCreateForm = () => {
        this.setState({ isOpen: true })
    }
    handleFormSubmit = (timer) => {
        this.props.onFormSubmit(timer);
        this.setState({ isOpen: false })
    }

    render() {
        if(this.state.isOpen) {
            return(
                <TimerForm
                    onFormSubmit={this.handleFormSubmit}
                    hideCreateForm={this.hideCreateForm} 
                />
            )
        } else {
            return (
                <div className='ui basic content center aligned segment'> 
                    <button className='ui basic button icon' onClick={this.openCreateForm}>
                        <i className='plus icon' /> 
                    </button>
                </div>
            );
        }
    }
}

export default ToggleableTimerForm;
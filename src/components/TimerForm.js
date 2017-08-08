import React, { Component } from 'react';

class TimerForm extends Component {

    state = {
        title: this.props.title || '',
        project: this.props.project || ''
    }
    
    handleSubmit = () => {
        this.props.onFormSubmit({
            id: this.props.id,
            title: this.state.title,
            project: this.state.project
        })

        // this.props.title ? this.props.hideTimerForm() : this.props.hideCreateForm()
    }

    handleCancel = () => {
        this.props.title ? this.props.hideTimerForm() : this.props.hideCreateForm()
    }

    handleTitleChange = (e) => {
        this.setState({ title: e.target.value })
    }

    handleProjectChange = (e) => {
        this.setState({ project: e.target.value })
    }

    render() {
        const submitText = this.props.title ? 'Update' : 'Create';
        return (
            <div className="ui centered card">
                <div className="content">
                    <div className="ui form">
                        <div className="field">
                            <label>Title</label>
                            <input type="text" defaultValue={this.state.title} onChange={this.handleTitleChange}/>
                        </div>
                        <div className="field">
                            <label>Project</label>
                            <input type="text" defaultValue={this.state.project} onChange={this.handleProjectChange}/>
                        </div>
                        <div className="ui two bottom attached buttons">
                            <button className='ui basic blue button' onClick={this.handleSubmit}> 
                                {submitText}
                            </button>
                            <button className='ui basic red button' onClick={this.handleCancel}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TimerForm;
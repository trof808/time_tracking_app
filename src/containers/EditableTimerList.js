import React, { Component } from 'react';
import EditableTimer from './EditableTimer';

class EditableTimerList extends Component {
    render() {
        return (
            <div id="timers">
                <EditableTimer
                    title="learn React"
                    project="Web Domination"
                    elapsed="8986300"
                    runningSince={null}
                    editFromOpen={false} />
                <EditableTimer
                    title="Learn Angular"
                    project="World Domination"
                    elapsed="3890985"
                    runningSince={null}
                    editFromOpen={true} />
            </div>
        )
    }
}

export default EditableTimerList;
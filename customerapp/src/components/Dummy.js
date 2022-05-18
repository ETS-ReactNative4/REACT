import { Component } from "react";

export default class Dummy extends Component{
    state = {
        "name": "Harry"
    };

    doTask() {
        console.log(this.state.name);
    }

    doAnother(evt) {
        console.log(evt);
    }
    render() {
        return <div>
            <button onClick={this.doTask}>Call DoTask 1</button>
            <button onClick={this.doTask.bind(this)}>Call DoTask 2</button>
            <button onClick={() => this.doTask()}>Call DoTask 3</button>
            <button onClick={(evt) => this.doAnother(evt)}>Call DoTask 3</button>
        </div>
    }

}
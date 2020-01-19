import React, { Component } from 'react';
import FlipMove from 'react-flip-move';

class ListItems extends Component {
    constructor(props) {
        super(props);

        this.createTask = this.createTask.bind(this);
    }

    delete(key) {
        this.props.delete(key);
    }

    createTask(item) {
        return <li onClick={() => this.delete(item.key)}
                    key={item.key}>{item.text}</li>
    }

    render() {
        const listTasks = this.props.tasks;
        const myList = listTasks.map(this.createTask);

        return (
            <ul className="myList">
                <FlipMove duration={250} easing='ease-out'>
                    {myList}
                </FlipMove>
                
            </ul>
        );
    }
};

export default ListItems;
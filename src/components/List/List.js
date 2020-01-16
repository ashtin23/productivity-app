import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list : [
                "Run credit for John Doe",
                "Organize files for Jane Smith",
                "Buy a Monster"
            ]
        };
    }

    render() {
        const listItems = this.state.list.map((item) =>
          <li key={item}>{item}</li>  
        );

        return (
        <ul>{listItems}</ul>
        );
    }
}

export default List;
import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list : [],
        };
        this.onAddItem = this.onAddItem.bind(this);
    }

    onAddItem(e) {
        e.preventDefault();
        if (this._inputElement.value !== '') {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

            this._inputElement.value = '';
        }
        console.log(this.state.items);
    }

    render() {
        // const listItems = this.state.list.map((item) =>
        //   <li key={item}>{item}</li>  
        // );

        return (
            <div className="listMain">
                <div className="header">
                    <form className="Input" onSubmit={this.onAddItem}>
                        <input 
                            ref={(a) => this._inputElement = a}
                            placeholder={"enter text"}
                        />
                        <button type ="submit">Add</button>
                    </form>
                </div>
            </div>
            
        );
    }
}

export default List;
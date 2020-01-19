import React, { Component } from 'react';
import ListItems from '../ListItems/ListItems';
import Title from '../Title/Title';
import "./List.css";

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items : []
        };
        
        this.onAddItem = this.onAddItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    onAddItem(e) {
        e.preventDefault();
        if (this._inputElement.value !== "") {
          var newItem = {
            text: this._inputElement.value,
            key: Date.now()
          };
       
          this.setState((prevState) => {
            return { 
              items: prevState.items.concat(newItem) 
            };
          });
         
          this._inputElement.value = "";
        }
         
        console.log(this.state.items);
        
      }

      deleteItem(key) {
          const filteredItems = this.state.items.filter(function (item) {
              return (item.key !== key)
          });

          this.setState({
              items: filteredItems
          })
      }

    render() {
        return (
            <div className="listMain">
                <Title />
                <div className="header">
                    <form onSubmit={this.onAddItem}>
                        <input 
                            ref={(a) => this._inputElement = a}
                            placeholder="enter text">
                        </input>
                        <button type ="submit">Add</button>
                    </form>
                </div>
                <ListItems tasks={this.state.items}
                            delete={this.deleteItem} />
            </div>
            
        );
    }
}

export default List;
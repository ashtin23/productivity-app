import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }
    }

    onChangeValue = e => {
        this.setState({
            value: e.target.value
        });
    }

    onAddItem = () => {
        //should i keep this state here, or move it to the same spot as list?
    }

    render() {
        return (
            <div className="Input">
            <form>
                <input 
                    type="text"
                    value={this.state.value}
                    onChange={this.onChangeValue}
                />
                <button 
                    type ="submit" 
                    onClick={this.onAddItem}
                    disabled={this.state.value}
                >
                    Add
                </button>
            </form>
            </div>
        );
    }
}

export default Input;
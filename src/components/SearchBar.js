import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: ''
    };

    onFormSubmit = (e) => {
        e.preventDefault();

        //when you are using props in a class component you use this
        this.props.onSubmit(this.state)
    }
    //we create the function that is going to handle the event on the input
    //in the onChange it is not necessary to use the parenthesis because that would mean the function will be executed the moment the component is rendered and we dont want that. We want it to be called when the user types something on the input field.

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form" action="">
                    <div className="field">
                        <label htmlFor="">Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })}
                            />
                    </div> 
                </form>
            </div>
        )
    }
}

export default SearchBar;
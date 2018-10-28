import React, { Component } from 'react';

export default class SearchBox extends Component {
    handlerSearch = (event) => {
        event.preventDefault();        
        const value = event.target.input.value; 
        alert(`${value}`);
    }
    render() {
        const onSearch = this.props.onSearch || this.handlerSearch;
        return (
            <form className="form-inline my-2 my-lg-0" onSubmit={onSearch}>
                <input id='input' className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        );
    }
}
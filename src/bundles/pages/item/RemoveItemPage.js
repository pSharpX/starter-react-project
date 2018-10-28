import React, { Component } from 'react';
import RemoveItemForm from '../../item/RemoveItemForm';

export default class RemoveItemPage extends Component {
    render() {
        return (
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-8 col-sm-12 col-md-8"><RemoveItemForm /></div>
                    <div className="col-4 col-sm-12 col-md-4">
                    </div>
                </div>
            </div>
        );
    }
}
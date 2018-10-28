import React, { Component } from 'react';
import styled from "styled-components";
import UpdateItemForm from '../../item/UpdateItemForm';
import { ScrollBox, ScrollAxes, FastTrack } from 'react-scroll-box'; // ES6
import ItemList from '../../item/ItemList';

const ScrollBoxContainer = styled.div`
    position: relative;    
    overflow-y: overlay;
    margin-right: -25px;
`;

export default class UpdateItemPage extends Component {
    render() {
        const ItemId = this.props.match.params.id;
        return (
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-8 col-sm-12 col-md-8"><UpdateItemForm ItemId={ItemId} /></div>
                    <div className="col-4 col-sm-12 col-md-4">
                        <ScrollBoxContainer>
                            <ScrollBox style={{ height: '800px' }} disableScrollX={true} captureWheel={true} propagateWheelScroll={true}>
                                <ItemList DefaultViewMode="list-view" ShowViewModeToolbar={false} />
                            </ScrollBox>
                        </ScrollBoxContainer>
                    </div>
                </div>
            </div>
        );
    }
}
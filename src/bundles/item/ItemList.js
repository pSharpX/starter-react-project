import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Item from './Item';
import TableView from './TableView';
import ListView from './ListView';
import API from '../core/api';
import CardView from './CardView';
import CircleLoader from '../common/components/Loader/CircleLoader';
import { connect } from 'react-redux';
import * as actions from '../core/actions/actions';

export class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewMode: props.DefaultViewMode,
            option1: props.DefaultViewMode === 'table-view',
            option2: props.DefaultViewMode === 'list-view',
            option3: props.DefaultViewMode === 'card-view',
            items: [],
            loading: false,
        };
    }
    componentDidMount = () => {
        const { viewMode } = this.state;
        const { onFetchItems } = this.props;
        onFetchItems();
        // this.setState({
        //     loading: true,
        // });
        // API.get(`item/`)
        //     .then(res => {
        //         const items = res.data;
        //         setTimeout(() => {
        //             this.setState({
        //                 items,
        //                 loading: false,
        //             });
        //         }, 1e3);
        //     })
        //     .catch((error) => {
        //         this.setState({
        //             loading: false
        //         });
        //     });
    }
    componentDidUpdate = (prevProps, prevState) => {
        const { viewMode } = this.state;
    }
    handlerViewModeChange = (event) => {
        const viewMode = event.target.value;
        this.setState({
            viewMode,
            option1: viewMode === 'table-view',
            option2: viewMode === 'list-view',
            option3: viewMode === 'card-view',
        });
    }
    render() {
        const { DefaultViewMode, ShowViewModeToolbar } = this.props;
        // const { items, viewMode, loading } = this.state;
        const { viewMode } = this.state;
        const items = this.props.all;
        const loading = this.props.fetching;
        //const viewMode = this.state.viewMode || DefaultViewMode;
        const Collection = items.map((item, key) => <Item key={item.Id} ViewMode={viewMode} Input={item} />);
        const cardViewContainer = <CardView pose={loading ? "off" : "on"}>{Collection}</CardView>;
        const tableViewContainer = <TableView>{Collection}</TableView>;
        const listViewContainer = <ListView>{Collection}</ListView>;
        const viewModeToolbar = (
            <div className="d-flex justify-content-end mb-2">
                {/*justify-content-between*/}
                <div className="btn-group btn-group-sm btn-group-toggle">
                    <label className={`btn btn-success ${this.state.option1 ? 'active' : ''}`} htmlFor="option1">
                        <input type="radio" name="options" id="option1" value="table-view" onChange={this.handlerViewModeChange} checked={this.state.option1} />
                        <FontAwesomeIcon icon="table" />
                    </label>
                    <label className={`btn btn-success ${this.state.option2 ? 'active' : ''}`} htmlFor="option2">
                        <input type="radio" name="options" id="option2" value="list-view" onChange={this.handlerViewModeChange} checked={this.state.option2} />
                        <FontAwesomeIcon icon="list-ul" />
                    </label>
                    <label className={`btn btn-success ${this.state.option3 ? 'active' : ''}`} htmlFor="option3">
                        <input type="radio" name="options" id="option3" value="card-view" onChange={this.handlerViewModeChange} checked={this.state.option3} />
                        <FontAwesomeIcon icon="th-list" />
                    </label>
                </div>
            </div>
        );
        let viewContainer = cardViewContainer;
        if (viewMode === 'card-view')
            viewContainer = cardViewContainer;
        else if (viewMode === 'table-view')
            viewContainer = tableViewContainer;
        else if (viewMode === 'list-view')
            viewContainer = listViewContainer;
        else
            viewContainer = cardViewContainer;
        return (
            <div className="container">
                <CircleLoader Loading={loading}>
                    {ShowViewModeToolbar && viewModeToolbar}
                    {viewContainer}
                </CircleLoader>
            </div>
        );
    }

    static defaultProps = {
        DefaultViewMode: "card-view",
        ShowViewModeToolbar: true
    }
}
// ItemList.defaultProps = {
//     DefaultViewMode: "card-view",
//     ShowViewModeToolbar: true
// };
const mapStateToProps = ({ items, auth }) => ({ ...items, ...auth });
const mapDispatchToProps = (dispatch) => ({
    onFetchItems: () => { dispatch(actions.fetchItems()) }
});
export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
import React from 'react';
import { connect } from 'react-redux';



import { Link } from 'react-router-dom';

import './Allitems.css';
import Search from '../../components/search/search'

import { detailItem, getItem } from '../../redux/actions/items.action'



class AllItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        }
    }
    componentDidMount() {

        this.props.getItem()
    }
    handleChange(event) {
        event.preventDefault()
        this.setState({ search: event.target.value });
    }

    render(props) {
        let filteredItems = this.props.items.filter((item) => {
            return item.model.toLowerCase().includes(this.state.search.toLowerCase())
        })
        return (
            <div className="row">
                <Search handleSearch={this.handleChange.bind(this)} search={this.state.search} />
                <div className="row">

                    {filteredItems.map(item => (
                        <Link to={'/items/' + item.id} key={item.id}>
                            <div className="col s2">
                                <div className="card hoverable">
                                    <h6 className="product-title">{item.model}</h6>
                                    <div className="card-image imgCard" style={{ backgroundImage: `url(${item.path})` }}>
                                    </div>
                                    <div className="card-content">
                                        <p>{item.price} €</p>
                                    </div>
                                </div>
                            </div>
                        </Link>))}
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    items: state.item.items,

})


const mapDispatchToProps = dispatch => ({
    getItem: (tag) => dispatch(getItem(tag)),
    detailItem: (id) => dispatch(detailItem(id)),

})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AllItems);
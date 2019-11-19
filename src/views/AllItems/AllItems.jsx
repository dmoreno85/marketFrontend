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


                                <div class="card ">
                                    <h6 className="product-title">{item.model}</h6>
                                    <div className="card-image imgCard" style={{backgroundImage:`url(${item.path})`}}>
                                        {/* <img src="https://picsum.photos/200" className="responsive-img" /> */}
                                        {/* <img src={item.path} className=" imgCard"/> */}
                                    </div>
                                    <div className="card-content">
                                        <p>{item.price} €</p>
                                    </div>
                                    {/* <div className="card-action">
          <a href="#">This is a link</a>
        </div> */}
                                </div>






                                {/* <Card style={{ width: '18rem' }}  >
                                <Card.Title>{item.model}</Card.Title>
                                <Card.Img variant="top" src={item.path} style={{ backgroundSize: 'cover', maxWidth: '115px', height: '200px' }} />
                                <Card.Body>
                                    <Card.Text>{item.price} €</Card.Text>
                                </Card.Body>
                            </Card> */}
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
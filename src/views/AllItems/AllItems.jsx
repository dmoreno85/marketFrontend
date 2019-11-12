import React from 'react';
import { connect } from 'react-redux';



import { Link } from 'react-router-dom';
import { CardDeck, Card } from 'react-bootstrap'
import './Allitems.css';
import Search from '../../components/search/search'
import { getItem } from '../../redux/actions/items.action'
import { detailItem } from '../../redux/actions/items.action'



class AllItems extends React.Component {

    componentDidMount() {

        this.props.getItem()
    }

    render(props) {

        return (
            <div>
                <Search />
                <CardDeck>

                    {this.props.items.map(item => (
                        <Link to={'/items/' + item.id} key={item.id}>

                            <Card style={{ width: '18rem' }}  >
                                <Card.Title>{item.model}</Card.Title>
                                <Card.Img variant="top" src={item.path} style={{ backgroundSize: 'cover', maxWidth: '115px', height: '200px' }} />
                                <Card.Body>

                                    <Card.Text>{item.price} €</Card.Text>


                                </Card.Body>
                            </Card>
                        </Link>))}

                </CardDeck>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    items: state.item.items,

})


const mapDispatchToProps = dispatch => ({
    getItem: (tag) => dispatch(getItem(tag)),
    detailItem: (id) => dispatch(detailItem(id))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AllItems);
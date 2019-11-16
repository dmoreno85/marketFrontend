import React from 'react';
import { connect } from 'react-redux';
import { detailItem } from '../../redux/actions/items.action'
import { Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class DetailsItem extends React.Component {
    constructor(props) {
        super(props);
        this.id = this.props.match.params.id;
    }
    componentDidMount(id) {
        // console.log(this.props.detailItem(this.id))
        this.setState({ item: this.props.detailItem(this.id) })
        //  console.log(this.props.match.params.id)
    }
    render(props) {
        const item = this.props.data.item;
        return (
          <div>
    
                <Card style={{ width: '18rem', display: 'flex' }}>
                     <Card.Body>
                        <Card.Title>{item.model}</Card.Title>
                        <Card.Img variant="top" src={item.path} style={{ backgroundSize: 'cover', maxWidth: '115px', height: '200px' }} />
                    </Card.Body>
                     <Card.Body>
                        <Card.Text>Display: {item.display}"</Card.Text>
                        <Card.Text>ROM: {item.rom} gb</Card.Text>
                        <Card.Text>RAM: {item.ram}</Card.Text>
                        <Card.Text>Core: {item.core} to {item.gh}gh</Card.Text>
                        <Card.Text>Camera: {item.mp} megapixels</Card.Text>
                        <Card.Text>Color: {item.color} </Card.Text>
                        <Card.Text>In Stock: {item.stockUnits}</Card.Text>
                        <Card.Text>Price: {item.price} €</Card.Text>
                        <Link to={'/register' + item.id}>
                        <Button variant="primary">Purchase</Button>
                        </Link>
                    </Card.Body>


                </Card>
            
                </div>
        );
    }

}

const mapStateToProps = state => ({
    data: state.item,

})


const mapDispatchToProps = dispatch => ({
    detailItem: (id) => dispatch(detailItem(id))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailsItem);


import React from 'react';
import { connect } from 'react-redux';
import { detailItem } from '../../redux/actions/items.action'
import { Card, Button } from 'react-bootstrap'

class DetailsItem extends React.Component {
    constructor(props) {
        super(props);
        this.id = this.props.match.params.id;
    }
    componentDidMount(id) {
        console.log(this.props.detailItem(this.id))
        this.setState({ item: this.props.detailItem(this.id) })
        //  console.log(this.props.match.params.id)
    }
    render(props) {
        const item = this.props.data.item;
        return (
            <div className='DetailsItem'>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item.path} />
                    <Card.Body>
                        <Card.Title>{item.model}</Card.Title>
                        <Card.Text>Color: {item.color} </Card.Text>
                        <Card.Text>Price: {item.price} €</Card.Text>
                        
                        <Card.Text>In Stock: {item.stockUnits}</Card.Text>
                        <Button variant="primary">Purchase</Button>
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


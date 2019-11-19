import React from 'react';
import { connect } from 'react-redux';
import { detailItem } from '../../redux/actions/items.action'
import M from 'materialize-css'
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
          
     <div class="col s12 m7 container center-align">
    <h2 class="header">Details Product</h2>
    <div class="card horizontal">
      <div class="card-image">
        <img src={item.path} className="responsive-img"/>
      </div>
      <div class="card-stacked">
      <span class="card-title center-align">{item.model}</span>
        <div class="card-content left-align container ">
        <p>Display: {item.display}"</p>
        <p>ROM: {item.rom} gb</p>
        <p>RAM: {item.ram}</p>
        <p>Core: {item.core} to {item.gh}gh</p>
        <p>Camera: {item.mp} megapixels</p>
        <p>Color: {item.color}</p>
        <p>In Stock: {item.stockUnits}</p>
        <p>Price: {item.price} €</p>
        </div>
        
        {/* <Link to={"/login" + item.id}> */}
        <div class="card-action green accent-3 container center-align">
          <Link to={"/login/" + item.id}> <span>PURCHASE</span></Link>
        </div>
        {/* <button className="btn waves-effect waves-light" type="submit" name="action">Purchase
    <i class="material-icons right">send</i>
  </button> */}
  {/* </Liknk> */}
      </div>
    </div>
  



                {/* <Card style={{ width: '18rem', display: 'flex' }}>
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


                </Card> */}
            
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


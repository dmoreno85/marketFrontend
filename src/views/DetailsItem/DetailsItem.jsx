import React from 'react';
import { connect } from 'react-redux';
import { detailItem } from '../../redux/actions/items.action'
import Login from '../Login/Login'
import { Link } from 'react-router-dom'

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
                        <img src={item.path} className="responsive-img" />
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
                        {/* <div class="card-action green accent-3 container center-align">
                            <Link to={"/login/" + item.id}> <span>PURCHASE</span></Link>
                        </div> */}
                        {/* <button className="btn waves-effect waves-light" type="submit" name="action">Purchase
    <i class="material-icons right">send</i>
  </button> */}
                        {/* </Liknk> */}


 <div className="container section">
     <a href="#idModal" className=" btn modal-trigger blue">Purchase</a>
     <div id="idModal" className="modal">
         <div className="modal-contet">
         <Login/>
        
         </div>

     </div>
 
  </div>
                    </div>
                </div>
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


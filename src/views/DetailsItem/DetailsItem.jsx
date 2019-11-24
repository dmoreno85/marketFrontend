import React from 'react';
// import { Link } from 'react-route
import { connect } from 'react-redux';
import { detailItem, addItemToProducts, getItemToProducts } from '../../redux/actions/items.action'
import { loginUser, userEmail } from '../../redux/actions/user.action'
import { Modal, Button } from 'react-materialize';


class DetailsItem extends React.Component {
    constructor(props) {
        super(props);
        this.id = this.props.match.params.id;
        this.state = {
            email: "",
            password: "",
            error: "",
            succes: false,
            products: [],
        }
        this.res = this.props.res
        // this.product= this.props.data.item

    }
    handleInputEmail = event => {
        this.setState({
            email: event.target.value
        });
    };

    handleInputpassword = event => {
        this.setState({
            password: event.target.value
        });
    };

    submitForm = async (event) => {
        event.preventDefault();

        this.props.loginUser(this.state.email, this.state.password)
            .then(() => {

                this.props.history.push('/congrats/' + this.state.email)
            }
            ).catch(() => {

                alert('Email or Password invalid')
            })
    };

    // handleCarritoClick = (product) => {
    //     console.log(JSON.stringify(product));
    //     this.props.addItemToProducts(product);
    // }
    handleCarritoClick = (product) => {
        console.log(JSON.stringify(product));
        this.props.addItemToProducts(product);
    }

    componentDidMount(id) {
        this.props.getItemToProducts(this.id)

        this.setState({ item: this.props.detailItem(this.id) })

        console.log(this.props.match.params)
    }
    componentDidUpdate(id) {
        getItemToProducts(this.id)
        //console.log(getItemToProducts)
    }

    render() {
        const item = this.props.data.item;
        // console.log(this.id)
        return (

            <div className="col s12 m7 container center-align">
                <h2 className="header">Details Product</h2>
                <div className="card horizontal">
                    <div className="card-image">
                        <img src={item.path} className="responsive-img" alt="smartphone" />
                    </div>
                    <div className="card-stacked">
                        <span className="card-title center-align">{item.model}</span>
                        <div className="card-content left-align container ">
                            <p>Display: {item.display}"</p>
                            <p>ROM: {item.rom} gb</p>
                            <p>RAM: {item.ram}</p>
                            <p>Core: {item.core} to {item.gh}gh</p>
                            <p>Camera: {item.mp} megapixels</p>
                            <p>Color: {item.color}</p>
                            <p>In Stock: {item.stockUnits}</p>
                            <p>Price: {item.price} €</p>
                            {/* <button onClick={() => this.handleCarritoClick(this.product)}>Añadir Carrito</button> */}
                            {console.log(this.props.data)}
                        </div>
                        <div>
                            <Button href="#modal1" className="modal-trigger pink darken-4">PURCHASE</Button>
                            <Modal id="modal1" className="container section modalDetail" >

                                <div className="section container" >
                                    <div className="row">
                                        <form className="col s12" onSubmit={this.submitForm} >
                                            <h3>LOGIN</h3>
                                            <div className="row ">
                                                <div className="input-field col s12 ">
                                                    <input type="email" id="email" className="validate" value={this.state.email}
                                                        onChange={this.handleInputEmail} />
                                                    <label htmlFor="email">Email</label>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <input type="password" id="password" className="validate" value={this.state.password}
                                                        onChange={this.handleInputpassword} />
                                                    <label htmlFor="password">Password</label>
                                                </div>
                                            </div>
                                            <div className="row container col s6 ">
                                                <button className="btn pink darken-4" type="submit" >Submit</button>
                                            </div>
                                            {/* <div className="error">{
                        user.login ?
                            <div>{user.login.message}</div> : null
                    }</div> */}
                                        </form>
                                    </div>
                                </div>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    data: state.item,
    user: state.userToken,


})


const mapDispatchToProps = dispatch => ({
    detailItem: (id) => dispatch(detailItem(id)),
    loginUser: loginUser(dispatch),
    userEmail: (email) => dispatch(userEmail(email)),
    addItemToProducts: (product) => dispatch(addItemToProducts(product)),
    getItemToProducts: (id) => dispatch(getItemToProducts(id))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailsItem);


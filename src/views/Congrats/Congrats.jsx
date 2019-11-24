import React from 'react';

import { connect } from 'react-redux';
import { userEmail } from '../../redux/actions/user.action'
import { detailItem } from '../../redux/actions/items.action'

// import { createStore } from 'redux'
// import todoApp from '../../redux/reducers'
// let store = createStore(todoApp)

class Congrats extends React.Component {
    constructor(props) {
        super(props)
        this.user = this.props.match.params.email;
        this.id = this.props.match.params.id;
        this.state = {
            user: ""
        }

    }
    componentDidMount(id) {
        // console.log(this.props.detailItem(this.id))
        // this.setState({ userEmail: this.props.userEmail(this.email) })
        //  console.log(store.getState())
        this.props.userEmail(this.user)
        //this.setState({ item: this.props.detailItem(this.id) })
        // this.props.detailItem(this.id)
        // console.log(this.id)

    }
    render(props) {
        console.log(JSON.stringify(this.props.data.carrito))
        const userProps = this.props.user.userEmail

        return (
            <div className=" col s12 m7 container center-align Congrats">
                {/* <h1>Congrats</h1>
        <h1>{userProps.user}</h1>
    <p>{this.props.data.item.model}</p> */}
 
                <div className="card horizontal hoverable">
                    <div className="card-image">
                        <img src={this.props.data.item.path} className="responsive-img" alt="smartphone" />
                    </div>
                    <div className="card-stacked">
                        <h6 className="header">Congratulations <h5>{userProps.user}</h5>
     your purchase has been made successfully!! </h6>
                        <div className="card-content  center-align">
                        <p className="card-title center-align">{this.props.data.item.model}</p>
                        <p className="card-title center-align">{this.props.data.item.price} €</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}


const mapStateToProps = state => ({
    user: state.userToken,
    data: state.item

})
const mapDispatchToProps = dispatch => ({
    // userEmail:(email)=>dispatch(userEmail(email)),
    userEmail: userEmail(dispatch),
    detailItem: (id) => dispatch(detailItem(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps

)(Congrats);


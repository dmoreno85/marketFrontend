import React from 'react';

import { connect } from 'react-redux';
import {userEmail } from '../../redux/actions/user.action'
import {detailItem} from '../../redux/actions/items.action'

// import { createStore } from 'redux'
// import todoApp from '../../redux/reducers'
// let store = createStore(todoApp)

class Congrats extends React.Component {
    constructor(props) {
        super(props)
        this.user = this.props.match.params.email;
        this.id = this.props.match.params.id;
        this.state={
            user:""
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
            <div className="Congrats">
                <h1>Congrats</h1>
        <h1>{userProps.user}</h1>
    <p>{this.props.data.item.model}</p>
            </div>
        )


    }


}


const mapStateToProps = state=> ({
    user:state.userToken,
    data:state.item

})
const mapDispatchToProps = dispatch => ({
    // userEmail:(email)=>dispatch(userEmail(email)),
    userEmail:userEmail(dispatch),
    detailItem: (id) => dispatch(detailItem(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps

)(Congrats);


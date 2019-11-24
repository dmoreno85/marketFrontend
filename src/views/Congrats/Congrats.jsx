import React from 'react';

import { connect } from 'react-redux';
import { userEmail } from '../../redux/actions/user.action'
import { detailItem } from '../../redux/actions/items.action'

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
        this.props.userEmail(this.user)
    }
    render(props) {
        //  console.log(JSON.stringify(this.props.data.carrito))
        const userProps = this.props.user.userEmail

        return (
            <div className=" col s12 m7 container center-align Congrats">
                <div className="card horizontal hoverable">
                    <div className="card-image">
                        <img src={this.props.data.item.path} className="responsive-img" alt="smartphone" />
                    </div>
                    <div className="card-stacked">
                        <span className="header textSize">Congratulations <h5>{userProps.user}</h5>
                            your purchase has been made successfully!! </span>
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
    userEmail: userEmail(dispatch),
    detailItem: (id) => dispatch(detailItem(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps

)(Congrats);


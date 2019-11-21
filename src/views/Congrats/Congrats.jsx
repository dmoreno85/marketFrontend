import React from 'react';

import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions/user.action'

class Congrats extends React.Component {
    constructor(props) {
        super(props)


    }
    // console.log(loginUser);
    render() {
        console.log(this.props.user)

        return (
            <div className="Congrats">
                <h1>Congrats</h1>
            </div>
        )


    }


}


const mapStateToProps = state => ({
    user: state.user

})


export default connect(
    mapStateToProps,

)(Congrats);


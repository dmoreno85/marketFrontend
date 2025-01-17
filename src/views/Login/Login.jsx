import React from 'react';
// import { Link } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'

import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions/user.action'
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            error: "",
            succes: false,
        }
        this.res = this.props.res

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
    //   componentWillReceiveProps(nextProps){
    //     if(nextProps.user.login.isAuth){
    //       this.props.history.push('/user')
    //     }
    //   }

    submitForm = async (event) => {
        event.preventDefault();
        // this.props.dispatch(loginUser(this.state))
        this.props.loginUser(this.state.email, this.state.password)
            .then(() => {

                this.props.history.push('/congrats')
            }
            ).catch(() => {
                // console.log('login invalid');
                alert('Email or Password invalid')


            })
    };


    // login(email, password){
    //     this.props.getToken(email, password)
    // }

    render(props) {
        // let user=this.props.user
        // console.log(this.res)
        return (

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

        );
    }

}



const mapStateToProps = state => ({
    user: state.user

})


const mapDispatchToProps = dispatch => ({
    loginUser: loginUser(dispatch)



})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

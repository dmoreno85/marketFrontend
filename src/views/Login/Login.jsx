import React from 'react';
import M from 'materialize-css'
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

    submitForm = (email, password) => {
        // event.preventDefault();
        // this.props.dispatch(loginUser(this.state))
        this.props.loginUser(this.state.email, this.state.password)
    };


    // login(email, password){
    //     this.props.getToken(email, password)
    // }

    render() {
        // let user=this.props.user
        return (

            <div className="section container" >
                <div className="row">
                    <form className="col s12 card-panel"onSubmit={this.submitForm} >
                        <h3>LOGIN</h3>

                        <div className="row  ">

                            <div className="input-field col s12 ">
                                <input type="email" id="email" className="validate"   value={this.state.email}
                            onChange={this.handleInputEmail}/>
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                        <div className="row  ">

                            <div className="input-field col s12">
                                <input type="password" id="password" className="validate"   value={this.state.password}
                            onChange={this.handleInputpassword}/>
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="row container col s6"><button className="btn " type="submit">Submit</button></div>
      {/* <div className="error">{
                        user.login ?
                            <div>{user.login.message}</div> : null
                    }</div> */}

                    </form>
                </div>











                {/* <form onSubmit={this.submitForm}>
                    <h2>Log in here</h2>
                    <div className="form_element">
                        <input
                            type="email"
                            placeholder="Enter your mail"
                            value={this.state.email}
                            onChange={this.handleInputEmail}
                        />
                    </div>
                    <div className="form_element">
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={this.state.password}
                            onChange={this.handleInputpassword}
                        />
                    </div>
                    <button type="submit">Log in</button>
              
                </form> */}


            </div>

        );
    }

}



const mapStateToProps = state => ({
    user: state.user

})


const mapDispatchToProps = dispatch => ({
    loginUser: (email, password) => dispatch(loginUser(email, password)),


})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

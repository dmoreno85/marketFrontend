import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';

import './header.css'


class header extends React.Component {
  constructor(props) {
    super(props);

    this.goBack = this.goBack.bind(this);
  }

  redirectToHome = () => {
    const { history } = this.props;
    if (history) history.goBack();
  }

  goBack() {
    this.props.history.goBack();
  }

  render() {
    // const { history } = this.props;
    return (


      <div className="navbar-fixed">

        <nav className="teal darken-4 ">
          <div className="container">
            <div className="nav-wrapper left">
              <Link to="/" className="brand-logo ">MarketPlace</Link>
            </div>
            {/* <div className="right">
          { history? <button onClick={this.goBack}>Go Back</button> : null}
          </div> */}
            <div className="right">
              <ul id="nav-mobile" className="" >
                {/* <li><Link to="/">Home</Link></li> */}

                <li><Link to="/" className="dropdown-trigger" data-target="id_drop">Menu
                 <i className="material-icons right">person_outline</i></Link></li>
              </ul>
              <ul className="dropdown-content" id="id_drop">
                <li><Link to="/login/">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
              </ul>
            </div>
          </div>
        </nav>

      </div>

    );
  }

}

export default withRouter(header);
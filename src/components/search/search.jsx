import React from 'react'
import PropTypes from 'prop-types'
class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = { search: '' };
    }

    render() {

        return (
            <div>

                <div className="">
                    <form className=" col s12">
                        <div className=" row container">
                            <div className="input-field col s6">
                                <i className="material-icons prefix">search</i>
                                <input type="text"
                                    placeholder="Search"
                                    className="search"
                                    onChange={(event) => this.props.handleSearch(event)}
                                    value={this.props.search}
                                    id="search"
                                />
                                {/* <label for="icon_prefix2">First Name</label> */}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}
Search.propTypes = { handleSearch: PropTypes.func.isRequired }

export default Search;
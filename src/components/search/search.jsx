import React from 'react'
import PropTypes from 'prop-types'
class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = { search: '' };

    }

    render() {

        return (
            <div className="container section ">
                {/* <i className="material-icons left">
search
</i> */}
                <input type="text"
                    placeholder="Search"
                    className="search"
                    onChange={(event) => this.props.handleSearch(event)}
                    value={this.props.search}
                    id="search"
                />
                   {/* <label htmlFor="search">Search</label> */}
            </div>
        )
    }

}
Search.propTypes = { handleSearch: PropTypes.func.isRequired }

export default Search;
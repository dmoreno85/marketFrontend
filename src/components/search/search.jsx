import React from 'react'
import PropTypes from 'prop-types'
import {Form, Button, FormControl} from 'react-bootstrap'

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = { search: '' };

        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        // console.log(e.target.value)
        this.setState({ search: e.target.value });
    }

    // handleSubmit(event) {
      
    //     event.preventDefault();
    // }


    render() {
        const {handleSearch} = this.props
        const {search} = this.state

        return (
           <div> <Form inline>
           <FormControl type="text" 
           placeholder="Search"
            className="mr-sm-2"
             onChange={this.handleChange}
             value={this.state.search}/>
           <Button variant="outline-success" onClick={()=>handleSearch(search)}>Search</Button>
         </Form></div>
        )
    }

}
Search.propTypes = {handleSearch: PropTypes.func.isRequired}

export default Search;
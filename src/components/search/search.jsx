import React from 'react'
import {Form, Button, FormControl} from 'react-bootstrap'

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }


    render() {
        return (
           <div> <Form inline>
           <FormControl type="text" placeholder="Search" className="mr-sm-2" />
           <Button variant="outline-success">Search</Button>
         </Form></div>
        )
    }


}

export default Search;
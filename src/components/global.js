import React, { Component } from 'react';
import { FormGroup, FormControl} from 'react-bootstrap';
import { FaBookOpen } from 'react-icons/fa';
import { FcSearch } from 'react-icons/fc';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
import Gallary from './Gallary';

 
class Global extends Component {


    constructor(props)
    {
        super(props);
        this.state = {
            query:'',
            items:[]
        }
    }

    search()
    {
        const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=";
        console.log('Search', this.state.query);
        fetch(BASE_URL+ this.state.query, {method: 'GET'} )
            .then(Response => Response.json())
           .then(json => {
            let {items} = json;
            this.setState({items})
           });
    }

    render() {
        return (
            <div className='Global'>
            <h2>Book Explorer! <FaBookOpen/></h2>
            <FormGroup>
                <InputGroup>
                    <FormControl placeholder="search for a book"
                   onChange={event => this.setState({query: event.target.value})}
                   onKeyPress={event => {
                    if(event.key === 'Enter')
                    {
                        this.search();
                    }
                   }}
                   />

                <h1> <InputGroup  onClick ={ ()=> this.search() }> <FcSearch/></InputGroup></h1>
                   
                   
                   
                   
                   

                   

                </InputGroup>
            </FormGroup>
            <Gallary items={this.state.items}/>
            </div>
        )
    }
}
 
export default Global;
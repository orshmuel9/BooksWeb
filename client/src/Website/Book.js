import React, {useState} from 'react'
import booksUtil from './booksUtil'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import Jumbotron from 'react-bootstrap/Jumbotron'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Books(props){
    const [name,setName] =useState(props.match.params.name);
    const [pages,setPages] =useState(props.match.params.pages);
    const [author,setAuthor] =useState(props.match.params.author);
    const goback =()=>{
        props.history.push("/");
    }
    const deletebook =async () =>{
        await booksUtil.deletebook(props.match.params.id);
        props.history.push("/");
    }
    const update =async ()=>{
        let book={
            name:name,
            pages:pages,
            author:author
        }
        await booksUtil.updatebook(book,props.match.params.id);
        props.history.push("/");

    }
    return(
        <div>
            <Jumbotron>
                <h1>Book page</h1>
            </Jumbotron>
            name:<TextField id="standard-basic"  defaultValue={props.match.params.name} onChange={e=>setName(e.target.value)}/> <br/>
            pages:<TextField id="standard-basic"  defaultValue={props.match.params.pages} onChange={e=>setPages(e.target.value)}/> <br/>
            author :<TextField id="standard-basic"  defaultValue={props.match.params.author} onChange={e=>setAuthor((e.target.value))}/> <br/>
            <br/>
            <Button variant="contained" onClick={goback}>
                go back
            </Button>
            <Button color="primary" startIcon={<SaveIcon/>} variant="contained" onClick={update}>
                update
            </Button>
            <Button color="secondary" startIcon={<DeleteIcon />} variant="contained" onClick={deletebook} >
                delete
            </Button>

        </div>
    )
}
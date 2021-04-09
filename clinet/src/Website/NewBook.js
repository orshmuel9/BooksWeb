import React, {useState} from 'react'
import booksUtil from './booksUtil'
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import TextField from '@material-ui/core/TextField';
import Jumbotron from 'react-bootstrap/Jumbotron'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function NewBook(props){
    const [name,setName] = useState("");
    const [pages,setPages] = useState("");
    const [author,setAuthor] =useState("");
    const goback =()=>{
        props.history.push("/");
    }
    const add= async ()=>{
        let book={
            name:name,
            pages:pages,
            author:author
        }
        await booksUtil.addbook(book);
        props.history.push("/");
    }
    return(
        <div>
            <Jumbotron>
                <h1>Add Book</h1>
            </Jumbotron>
            name :<TextField id="standard-basic"  onChange={e=>setName(e.target.value)} /><br/>
            pages: <TextField id="standard-basic" onChange={e=>setPages(e.target.value)}/> <br/>
            author: <TextField id="standard-basic" onChange={e=>setAuthor(e.target.value)}/> <br/> <br/>
            <Button variant="contained" onClick={goback} >
                go back
            </Button>
            <Button variant="contained" startIcon={<CloudUploadIcon />} color="primary" onClick={add} >
                add book
            </Button>
        </div>
    )
}
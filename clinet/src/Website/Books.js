import React, {useState,useEffect} from 'react'
import booksUtil from './booksUtil'
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {Link} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Jumbotron from 'react-bootstrap/Jumbotron'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Books(props){
    const [books,setBooks] =useState([]);
    const [serch,setSerch] =useState("");

    // use effect get all books
    useEffect(()=>{
        const getdata=async ()=>{
            let newbooks=await booksUtil.gelallbooks()
            setBooks(newbooks)
        }
        getdata()
    },[])
    
    //מעבר לADD BOOD
    const add= ()=>{
        props.history.push("/NewBook")
    }
    let obj=books.map((book,index)=>{
        if(book.name.includes(serch)==true||book.name.toLowerCase().includes(serch)==true)
        {
            return <li key={index}>
                <Link to={`/Book/${book._id}/${book.name}/${book.pages}/${book.author}`}>
                {book.name}
                </Link>
                </li>
        }
    })
    return(
        <div >
            <Jumbotron>
                <h1>Welcome to the libary</h1>
            </Jumbotron>
            <Button onClick={add} variant="contained" startIcon={<CloudUploadIcon />} color="primary">
                Add Book 
            </Button>
            <br />
            <br />
            search book: <TextField id="standard-basic" onChange={e=>setSerch(e.target.value)} /> <br/> <br/>
            list of books : 
            <ul>
                {obj}
            </ul>
        </div>
    )
}
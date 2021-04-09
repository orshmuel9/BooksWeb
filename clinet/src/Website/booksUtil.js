import axios from 'axios' ;

const gelallbooks =async ()=>{
    let data=await axios.get("http://localhost:8000/api/books");
    let books=data.data;
    return books;
}
const getbyid= async(id)=>{
    let data=await axios.get(`http://localhost:8000/api/books/${id}`);
    let book=data.data;
    return book;
}
const addbook=async (book)=>{
    let data=await axios.post("http://localhost:8000/api/books",book);
    let newbook=data.data;
    return newbook;
}
const updatebook=async (book,id)=>{
    let data=await axios.put(`http://localhost:8000/api/books/${id}`,book);
    let updatedbook=data.data;
    return updatedbook;
}
const deletebook=async (id) =>{
    let data=await axios.delete(`http://localhost:8000/api/books/${id}`);
    let deletebook=data.data;
    return deletebook;
}

export default {gelallbooks,getbyid,addbook,updatebook,deletebook}
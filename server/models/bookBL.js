const Book =require('./bookSchema');


// get all books
const getAllBooks =() =>{
    return new Promise((resolve,reject)=>{
        Book.find({},(err,booksdata)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(booksdata);
            }
        })
    })
}
// get by id
const getBookById =(id)=>{
    return new Promise((resolve,reject)=>{
        Book.findById(id,(err,bookdata)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(bookdata);
            }
        })
    })
}
// add book
const addBook=(book)=>{
    return new Promise((resolve,reject)=>{
        let newbook= new Book({
            name:book.name,
            pages:book.pages,
            author:book.author
        })
        newbook.save((err)=>{
            if(err){
                reject(err)
            }
            else{
                resolve("book created!")
            }
        })
    })
}

// update book
const updateBook=(book,id)=>{
    return new Promise((resolve,reject)=>{
        Book.findByIdAndUpdate(id,{name:book.name,pages:book.pages,author:book.author},(err)=>{
            if(err){
                reject(err)
            }
            else{
                resolve("updated book")
            }
        })
    })
}

// delete book
const deleteBook=(id)=>{
    return new Promise((resolve,reject)=>{
        Book.findByIdAndDelete(id,(err)=>{
            if(err){
                reject(err)
            }
            else{
                resolve("book deleted")
            }
        })
    })
}

module.exports = {getAllBooks,getBookById,addBook,updateBook,deleteBook}
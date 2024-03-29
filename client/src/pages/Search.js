import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import SaveBtn from "../components/SaveBtn";
import ViewBtn from "../components/ViewBtn";
import CardBody from "../components/CardBody";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import "../app.css"

function Search() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBookResults(searchTerm)
      .then(res => {
        const bookResults = res.data.items;
        const results = bookResults.map(book => {
            const { imageLinks = null } = book.volumeInfo

            const smallThumbnail = imageLinks ? imageLinks.smallThumbnail : null
            return {
                id: book.id,
                title: book.volumeInfo.title,
                authors: book.volumeInfo.authors,
                description: book.volumeInfo.description,
                image: smallThumbnail,
                link: book.volumeInfo.previewLink
            };
        });
        setBooks(results)
        }
      )
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { value } = event.target;
    setSearchTerm( value.replace(/\s/g, '') );
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  function handleSearchSubmit(event) {
    event.preventDefault();
    if (searchTerm) {
      loadBooks();
    }
  };

  function handleBookSave(book) {
   
    let booksArray = books
    let index = books.indexOf(book);
   booksArray.splice(index, 1);
  


    API.saveBook({
          _id : book.id,
          title: book.title,
          author: book.authors,
          description: book.description,
          img: book.image,
          link: book.link
    })

    reRenderBook(booksArray)
    
  };

  function reRenderBook(array) {
   
        const results = array.map(book => {
            return {
                id: book.id,
                title: book.title,
                authors: book.authors,
                description: book.description,
                image: book.image,
                link: book.link
            };
        });
        setBooks(results)
        };
      
  



    return (
      <div className="mainBody">
      
      
        
          <Jumbotron>
            <div className="jumboText">
            <h1>Google Book Worm</h1>
            <h5>Type a book title in the search engine and let our Book Worm find the perfect book for you.</h5>
            <h5>Click save to build your reading list!</h5>
            </div>
          </Jumbotron>
       

        <Container fluid>
       <Row>
        <Col size="md-12">
          <form className="d-flex">
            <Input
              onChange={handleInputChange}
              name="title"
              placeholder='ex. "Catcher In The Rye"'
            />
            <FormBtn
              onClick={handleSearchSubmit}
            >
              <i className="fa fa-search"></i>
            </FormBtn>
          </form>
        </Col>
        <Col size="md-12">
          <Card>
            <h4 className="text-center searchTitle">Search Results</h4>
            {books.length >0? (
            <List>
              {books.map(book => (
                <ListItem key={book.id}>
                    <Card>
                    <SaveBtn
                        handleBookSave={handleBookSave}
                        bookData={book}
                      >
                        Save <i className="fa fa-bookmark"></i>
                      </SaveBtn>
                      <ViewBtn
                        link={book.link}
                      />
                      <CardBody
                        key={book.id}
                        title={book.title}
                        authors={book.authors}
                        image={book.image}
                        description={book.description}
                      />
                    </Card>
                </ListItem>
              ))}
            </List>
          ) : (
            <p className="display-message text-center mt-5">No Results to Display</p>
          )}
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
    );
  }


export default Search;

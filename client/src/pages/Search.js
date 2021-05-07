import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import SaveBtn from "../components/SaveBtn";
import ViewBtn from "../components/ViewBtn";
import CardBody from "../components/CardBody";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import "../app.css"

function Search() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveBook({
        title: formObject.title,
        author: formObject.author,
        synopsis: formObject.synopsis
      })
        .then(res => loadBooks())
        .catch(err => console.log(err));
    }
  };

    return (
      <div className="mainBody">
      
      
        <div className="hero">
          <Jumbotron>
            <div className="jumboText">
            <h1>Google Book Worm</h1>
            <h5>Feed your inner book worm! Search for and save books of interest.</h5>
            </div>
          </Jumbotron>
        </div>

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
              // onClick={handleSearchSubmit}
            >
              <i className="fas fa-search"></i>
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
                        // handleSaveSubmit={handleSaveSubmit}
                        bookData={book}
                      >
                        Save <i className="fas fa-bookmark"></i>
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

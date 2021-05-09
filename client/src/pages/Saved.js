import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Card from "../components/Card";
import DeleteBtn from "../components/DeleteBtn";
import ViewBtn from "../components/ViewBtn";
import CardBody from "../components/CardBody";
import { List, ListItem } from "../components/List";
import "../app.css"

function Saved(props) {
  const [books, setBooks] = useState([])

  //Leftover from activity. Needs to be redone

  // Load all books from database
  useEffect(() => {
    API.getBooks()
    .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  }, [])

  // // Deletes a book from the database with a given id, then reloads books from the db
  // function handleDeleteSubmit(id) {
  //   API.deleteBook(id)
  //   // Filter to return true - if the current book id doesn't include the id that we're deleting, we're going to keep it)
  //   setBooks(books.filter((book) => {
  //       return book._id != id;
  //   }))
  // }

  return (
   <div className="mainBody">
    
      <div className="hero">
        <Jumbotron>
        <div className="jumboText">
            <h1>Google Book Worm</h1>
            <h5>Enjoy your personal reading list!</h5>
            </div>
        </Jumbotron>
      </div>

<Container fluid>
      <Row>
      <Col size="md-12">
      <Card>
            <h4 className="text-center searchTitle">My Book List</h4>
            {books.length >0? (
            <List>
              {books.map(book => (
                <ListItem key={book._id}>
                    <Card>
                    <DeleteBtn
                        // handleBookSave={handleBookSave}
                        // bookData={book}
                      >
                       
                      </DeleteBtn>
                      <ViewBtn
                        link={book.link}
                      />
                      <CardBody
                        key={book._id}
                        title={book.title}
                        authors={book.author}
                        image={book.img}
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
        {/* <Card>
          <h4 className="text-center savedTitle">Saved Books</h4>
          {books.length > 0 ? (
          <List> 
            {books.map(book => (
              <ListItem key={book.id}>
                  <Card>
                  <DeleteBtn
                      // handleDeleteSubmit={handleDeleteSubmit}
                      id={book._id}
                    />
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
          <p className="display-message text-center mt-5">Nothing Saved Yet</p>
        )}
        </Card> */}
      </Col>
    </Row>
  </Container>
  </div>
    );
  }


export default Saved;

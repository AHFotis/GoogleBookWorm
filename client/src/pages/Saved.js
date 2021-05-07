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
  const [books, setBook] = useState({})

 
  // useEffect(() => {
  //   API.getBook()
  //     .then(res => setBook(res.data))
  //     .catch(err => console.log(err));
  // }, [])

  return (
    <Container fluid>
    
      <div className="hero">
        <Jumbotron>
        <div className="jumboText">
            <h1>Google Book Worm</h1>
            <h5>Enjoy your personal reading list!</h5>
            </div>
        </Jumbotron>
      </div>

      <Row>
      <Col size="md-12">
        <Card>
          <h4 className="text-center savedTitle">Saved Books</h4>
          {books.length >0? (
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
        </Card>
      </Col>
    </Row>
  </Container>
    );
  }


export default Saved;

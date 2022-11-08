
import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import projects from './projects.json';

function Portfolio() {
  const [show] = useState(true);


    return(
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>Portfolio</Alert.Heading>
        <p>
       Assignments & Projects
        </p>
        <hr />
        <section className="container m-2 p-2 d-flex flex-wrap">
        {projects.map((element,key) =>{
          return(<Card className="m-2 p-2" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={process.env.PUBLIC_URL + element.image} />
          <Card.Body>
            <Card.Title>{element.title}</Card.Title>
            <Card.Text>
             {element.description}
            </Card.Text>
            <Button variant="primary"><a rel="noreferrer noopener" className="text-white text-center" href={element.github} target="_blank">Github</a></Button>
            <Button variant="primary"><a rel="noreferrer noopener" className="text-white text-center" href={element.live} target="_blank">Deployment</a></Button>
          </Card.Body>
        </Card>)
        })}
        </section>
        {/* <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me y'all!
          </Button> */}
        {/* </div> */}
      </Alert>

      {/* {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>} */}
    </>
    )
}


export default Portfolio;



import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';


function About() {
  const [show] = useState(true);


    return(
    <>
      <Alert show={show} variant="warning">
        <Alert.Heading>Orsha Goines</Alert.Heading>
        <p>
       Get to know me
        </p>
        <hr />
        <p>
          Full stack web developer, passionate and fighter. Determined to get all the task assigned to be completed with accuracy.
        </p>
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


export default About;


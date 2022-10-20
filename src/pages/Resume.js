
import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function Resume() {
  const [show, setShow] = useState(true);


    return(
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>Resume</Alert.Heading>
        <p>
       Write About Myself Here
        </p>
        <hr />
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


export default Resume;



import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';


function Resume() {
  const [show] = useState(true);


    return(
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>Orsha Goines</Alert.Heading>
        <p>
      Resume
        </p>
        <hr />
        <div className="container">
        <iframe src="https://docs.google.com/document/d/1axkkUS_BPcSLGcEdqr1dKNpQ1KUNsPH5UvoMDnxZhwQ/edit?usp=sharing"
        className="resume-doc" title="resume"></iframe>
        </div>
      </Alert>

      {/* {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>} */}
    </>
    )
}


export default Resume;


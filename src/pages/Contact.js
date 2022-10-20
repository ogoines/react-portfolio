
import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function Contact() {
  const [show, setShow] = useState(true);


    return(
    <>
      <Alert show={show} variant="primary">
        <Alert.Heading>Orsha Goines</Alert.Heading>
      <h6>Contact</h6>
        <hr />
        {/* <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me y'all!
          </Button> */}
        {/* </div> */}
      </Alert>
        <section className="container border border-success text-center">
            <h6>  Check my work</h6>
            <ul>
                <li>
                <p>
        <a href="" target="_blank">Linked In</a></p>
                </li>
                <li>
                    <p>
                    <a href="" target="_blank">github</a>
                    </p>

                </li>
            </ul>
       
    
      
        

        </section>
      {/* {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>} */}
    </>
    )
}


export default Contact;


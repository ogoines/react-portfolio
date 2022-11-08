
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
                    <a href="https://www.linkedin.com/in/orsha-goines-32a0a11a4" rel="noreferrer noopener" target="_blank">Linked In</a></p>
                </li>
                <li>
                    <p>
                    <a href="https://github.com/ogoines" rel="noreferrer noopener" target="_blank">github</a>
                    </p>

                </li>
            </ul>
            <section className='container'>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdfwVUPN8o8yEXEWRZ8wvbhTBNb-rulg5LFnWMrxOZgXFOuLw/viewform?embedded=true" width="640" height="947" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </section>
       
    
      
        

        </section>
      {/* {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>} */}
    </>
    )
}


export default Contact;


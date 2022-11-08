import React, { useState } from "react";
import { Alert } from "react-bootstrap";

function Home() {
    const [show] = useState(true);
    return (<>
        <Alert show={show} variant="warning">
            <Alert.Heading>Orsha Goines</Alert.Heading>
            <p>
                motivational quote
            </p>
            <p></p>
            <hr />
            <div id="carouselExampleIndicators" className="carousel slide m-5 p-5" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={process.env.PUBLIC_URL + "/about/ymcame.png"} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={process.env.PUBLIC_URL + "/about/race.jpg"} className="d-block w-100" alt="..." />

                    </div>
                    <div className="carousel-item">
                        <img src={process.env.PUBLIC_URL + "/about/myself_1.jpg"} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </Alert>

    </>)
}

export default Home;
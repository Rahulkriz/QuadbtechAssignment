import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Modal, Form, Button } from "react-bootstrap";

const Summary = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    tickets: "",
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
    setShowModal(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "tickets") {
      // ensure value is not negative
      setFormValues({ ...formValues, [name]: Math.max(value, 0) });
    } else {
      setFormValues({ ...formValues, [name]: value });
    }
  };

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  }, [id]);

  return (
    <div>
      <div
        className="card-header custom text-white text-center mx-auto p-2"
        style={{ margin: "0px" }}
      >
        <h4> Movie Summary </h4>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000",
          height: "95vh",
        }}
      >
        <div
          className="bg-success p-2 text-dark bg-opacity-10"
          style={{
            marginLeft: "20%",
            marginRight: "20%",
            fontSize: "30px",
            border: "2px solid gray ",
            padding: "10px",
            color: "white",
          }}
        >
          <p style={{ color: "#fff" }}>{movie.summary}</p>
          <button
            className="btn btn-primary btn-lg btn-primary"
            onClick={() => setShowModal(true)}
          >
            Book Now
          </button>
        </div>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Book Now - {movie.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicTickets">
              <Form.Label>Number of Tickets</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter number of tickets"
                name="tickets"
                value={formValues.tickets}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              onClick={() => {
                window.alert("Your ticket is confirmed.Thank you");
              }}
              style={{ marginTop: "5px" }}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Summary;

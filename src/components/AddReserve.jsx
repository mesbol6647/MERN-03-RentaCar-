
import { useState, useEffect } from "react";
import { useContext} from 'react'
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { SearchContext } from '../context/SearchProvider';
import {toastErrorNotify, toastSuccessNotify} from "../helper/ToastNotify"

function AddReserve({ show, handleClose, }) {  
  const { startDate, endDate, setStartDate, setEndDate } = useContext(SearchContext);  
  const [carId, setCarId] = useState("");
  const [amount, setAmount] = useState("");
 


  useEffect(() => {
    if (show) {
      // URL'deki roomId'yi al
      const url = window.location.href;
      const id = url.substring(url.lastIndexOf('/') + 1);
      setCarId(id);
    }
  }, [show]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleReserve();
    handleClose();
  };

  
  const handleReserve = async () => {
    try {
      console.log("Preparing to send POST request...");
      // console.log("Request body:", { carId, startDate,endDate, amount });
      console.log("Request body:", {  startDate,endDate, amount });

      const response = await axios.post("https://be-06-rentacar-api.vercel.app/reservations", {
        //carId,
        startDate,
        endDate,
        amount,
       
      });

      console.log("POST request successful:", response.data);

      if (response.data.success) {
        console.log("Reservation successfully created.");
      } else {
        console.log("Failed to create reservation:", response.data.message);
      }
      toastSuccessNotify("Reserve is Success")
    } catch (error) {
      if (error.response) {
        console.error("POST request failed with response:", error.response.data);
      } else if (error.request) {
        console.error("POST request made but no response received:", error.request);
      } else {
        console.error("Error in setting up the POST request:", error.message);
      }
      toastErrorNotify("Reserve is failed")
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reservations</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form onSubmit={handleSubmit}>
          {/* <Form.Group className="mb-3" controlId="roomId">
              <Form.Label>Room Number:{carId}</Form.Label>
              <Form.Control
                // type="hidden"
                placeholder="Enter room ID"
                value={carId}
                onChange={(e) => setCarId(e.target.value)}
              />
            </Form.Group>           */}
            
            <Form.Group className="mb-3" controlId="amount">
              <Form.Label>amount($/gece)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter amount"
                value={amount} 
                onChange={(e) => setAmount(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="startDate">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="endDate">
              <Form.Label>Departure Date</Form.Label>
              <Form.Control
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </Form.Group>

            <div className="text-center">
              <Button className="me-2" variant="success"  onClick={handleReserve}>
                Save
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddReserve;



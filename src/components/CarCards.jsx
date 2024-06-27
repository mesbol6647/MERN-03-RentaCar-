// import { carData } from "../helper/data";
// import { useState } from "react";
// import Container from "react-bootstrap/Container";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import { Button } from "react-bootstrap";
// import ListGroup from "react-bootstrap/ListGroup";
// import "../pages/Cars.css";
// import { useNavigate } from "react-router-dom";

// const CarCards = ({data}) => {
//     const {_id, year, pricePerDay, plateNumber,images,brand, model} = data;
//   const navigate=useNavigate()

//   const handleClick = () => {
    
//     navigate('/rent-car')
//   };

// //   const data = carData();

//   return (
//     <Container className="p-2 cursor-pointer block rounded-lg p-4 shadow-sm shadow-indigo-100" onClick={()=>navigate(`/rooms/${_id}`, {state:data})} >
//       <h3 className="display-6 fw-bold text-center" style={{ color: "#be123c" }}>
//         Our Cars
//       </h3>
//       <Row className="justify-content-center">        
//           <Col key={_id} xs={12} sm={6} md={4} lg={4} style={{ marginTop: "20px" }}>
//             <div className="car-card">
//               <img
//                 src={images}
//                 alt={model}
//                 className="img-thumbnail tour-img"
                
//               />
//               <h4>{brand} {model}</h4>
//               <ListGroup className="mb-4">
//                 <ListGroup.Item>Plate Number: {plateNumber}</ListGroup.Item>
//                 <ListGroup.Item>Year: {year}</ListGroup.Item>
//                 <ListGroup.Item>Price: {pricePerDay}</ListGroup.Item>
//               </ListGroup>
//               <div className="rent-button-container">
//                 <Button
//                  style={{ backgroundColor:"#be123c ", padding: "5px 50px", border:"none", fontSize:"1.2rem" }}
//                  onClick={()=>handleClick()}
//                  >Rent</Button>
//               </div>
//             </div>
//           </Col>
      
//       </Row>
//     </Container>
//   );
// };

// export default CarCards;

// import React from 'react';
// import { Col, Row, ListGroup, Button, Container } from 'react-bootstrap'; 
//  import { useState } from "react"; 

//  import "../pages/Cars.css";
//  import { useNavigate } from "react-router-dom";

// const CarCards = ({ data }) => {
//     const {_id, year, pricePerDay, plateNumber,images,brand, model} = data;
//   const navigate=useNavigate()

//    const handleClick = () => {
    
//      navigate('/rent-car')
//    };

//   return (
//     <Container className="p-2">
//       <Row className="justify-content-center">
//         <Col key={data.id} xs={12} sm={6} md={4} lg={4} style={{ marginTop: "20px" }}>
//           <div className="car-card">
//             <img
//               src={data.image}
//               alt={data.tur_adi}
//               className="img-thumbnail tour-img"
//             />
//             <h4>{data.brand} {data.model}</h4>
//             <ListGroup className="mb-4">
//               <ListGroup.Item>Plate Number: {data.plateNumber}</ListGroup.Item>
//               <ListGroup.Item>Year: {data.year}</ListGroup.Item>
//               <ListGroup.Item>Price: {data.pricePerDay}</ListGroup.Item>
//             </ListGroup>
//             <div className="rent-button-container">
//               <Button
//                 style={{ backgroundColor: "#be123c", padding: "5px 50px", border: "none", fontSize: "1.2rem" }}
//               >
//                 Rent
//               </Button>
//             </div>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default CarCards;


import React from 'react';
import { Button, Card } from 'react-bootstrap';

const CarCards = ({ data }) => {
  return (
  
    
    <Card className="mb-4">
      <Card.Img variant="top" src={data.images} alt={`${data.brand} ${data.model}`} />
      <Card.Body>
      <div>
              <Card.Title>{data.brand} {data.model}</Card.Title>
              <Card.Text>Plate Number: {data.plateNumber}</Card.Text>
              <Card.Text>Year: {data.year}</Card.Text>
              <Card.Text>Price: {data.pricePerDay} per day</Card.Text>
            </div>
            <div className="mt-3">
              <Button className="float-right ml-2">Rent Now</Button>
              <Button variant="danger" className="float-right">Rent Details</Button>
            </div>
      </Card.Body>
    </Card>
  
  );
};

export default CarCards;


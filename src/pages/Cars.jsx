    // import {carData} from "../helper/data"    
    // import {useState} from "react";
    // import Container from "react-bootstrap/Container";
    // import Col from "react-bootstrap/Col";
    // import Row from "react-bootstrap/Row";
    // import ListGroup from "react-bootstrap/ListGroup";
    // import "./Cars.css"
  
    
    // const Cars = () => {
    //   const [show, setShow] = useState(false);
    //   const [selectedtourName,setSelectedTourName]=useState("")
    
     
    //   const handleClick = (tourName) =>{
    //     setShow(true);
    //     setSelectedTourName(tourName)
    //   } 
    //   const data=carData()
     
    
    //   return (
       
    //     <Container className="p-2">
    //       <h3 className="display-6 fw-bold text-center" style={{ color: "rgb(166,18,189)" }}>
            
    //         Our Cars
    //       </h3>
    //       <Row className="justify-content-center ">
    //         {data.map((item) => {
    //           return (
    //             <Col xs={12} sm={6} md={4} lg={4}>
    //               <img
    //                 src={item.image}
    //                 alt={item.tur_adi}
    //                 className="img-thumbnail tour-img"
    //                 onClick={()=>handleClick(item.tur_adi)}
    //                 // width="300px"
    //                 // style={{ aspectRatio: '1 / 1' }}

    //               />
    //               <h4>{item.brand} {item.model} </h4>
    //               <ListGroup className="mb-4">
    //                 <ListGroup.Item>Plate Number: {item.plateNumber} </ListGroup.Item>
    //                 <ListGroup.Item>Year: {item.year} </ListGroup.Item>
    //                 <ListGroup.Item>Price: {item.pricePerDay} </ListGroup.Item>
                   
    //               </ListGroup>
    //             </Col>
    //           );                                                        
    //         })}
    //       </Row>         
    //     </Container>   
    //   );    
    // };
    
    // export default Cars


    import { carData } from "../helper/data";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import "./Cars.css";

const Cars = () => {
  const [show, setShow] = useState(false);
  const [selectedTourName, setSelectedTourName] = useState("");

  const handleClick = (tourName) => {
    setShow(true);
    setSelectedTourName(tourName);
  };

  const data = carData();

  return (
    <Container className="p-2">
      <h3 className="display-6 fw-bold text-center" style={{ color: "#be123c" }}>
        Our Cars
      </h3>
      <Row className="justify-content-center">
        {data.map((item) => (
          <Col key={item.id} xs={12} sm={6} md={4} lg={4} style={{ marginTop: "20px" }}>
            <div className="car-card">
              <img
                src={item.image}
                alt={item.tur_adi}
                className="img-thumbnail tour-img"
                onClick={() => handleClick(item.tur_adi)}
              />
              <h4>{item.brand} {item.model}</h4>
              <ListGroup className="mb-4">
                <ListGroup.Item>Plate Number: {item.plateNumber}</ListGroup.Item>
                <ListGroup.Item>Year: {item.year}</ListGroup.Item>
                <ListGroup.Item>Price: {item.pricePerDay}</ListGroup.Item>
              </ListGroup>
              <div className="rent-button-container">
                <Button style={{ backgroundColor:"#be123c ", padding: "5px 50px", border:"none", fontSize:"1.2rem" }}>Rent</Button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cars;

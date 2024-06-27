// import React, { useContext, useState } from 'react';
// import axios from 'axios';
// import { useLocation } from "react-router-dom";
// import { SearchContext } from '../context/SearchProvider';
// import SearchCar from '../components/SearchCar'
// import CarCards from '../components/CarCards';

// import "../components/searchcar.css";


// const RentAcar = () => {
//   const location = useLocation();
//   const { startDate, endDate, setStartDate, setEndDate } = useContext(SearchContext);
//   const [cars, setCars] = useState([]);
//   const [error, setError] = useState(null);
//   // const [startDate, setStartDate] = useState('');
//   // const [endDate, setEndDate] = useState('');
//   const handleSearch=async(e)=>{
//     e.preventDefault()
//     console.log("Start Date:", startDate);
//     console.log("End Date:", endDate);
//     try {
//       const response=await axios.get("https://be-06-rentacar-api.vercel.app/cars", {
//         params:{
//           startDate:startDate,
//           endDate:endDate
//         }
//        });
//       console.log(response.data);
//       setCars(response.data.data)
//     } catch (error) {
//       console.error("Error fetching rooms:", error);
//       setError("Error fetching rooms");
      
//     }
//   };
//   return (
   
//     <div className='rentcar'>
//       <SearchCar
//       startDate={startDate}
//       setStartDate={setStartDate}
//       endDate={endDate}
//       setEndDate={setEndDate}
//       handleSearch={handleSearch}
//       />
//       {cars.map((data)=>( 
//         <CarCards key={data.id} data={data}/>
//       ))}
      
//     </div>
    
    
//   )
// }

// export default RentAcar

import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import { SearchContext } from '../context/SearchProvider';
import SearchCar from '../components/SearchCar';
import CarCards from '../components/CarCards';
import "../components/searchcar.css";
import { Col, Row, ListGroup, Button, Container } from 'react-bootstrap'; 

const RentAcar = () => {
  const location = useLocation();
  const { startDate, endDate, setStartDate, setEndDate } = useContext(SearchContext);
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    try {
      const response = await axios.get("https://be-06-rentacar-api.vercel.app/cars", {
        params: {
          startDate: startDate,
          endDate: endDate
        }
      });
      console.log(response.data);
      setCars(response.data.data);
    } catch (error) {
      console.error("Error fetching cars:", error);
      setError("Error fetching cars");
    }
  };

  return (
    <div className={`rentcar ${cars.length > 0 ? 'no-background' : ''}`}>
      {!cars.length && (
        <SearchCar
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          handleSearch={handleSearch}
        />
      )}
      {cars.length > 0 ? (
        // <div className="car-container">
        //   {cars.map((data) => (
        //     <CarCards key={data.id} data={data} />
        //   ))}
        // </div>
        <Row>
        {cars.map((data) => (
          <Col key={data.id} xs={12} sm={6} md={4} lg={3}>
            <CarCards data={data} />
          </Col>
        ))}
      </Row>
      ) : (
        <div className="background-content">
          <p>Search for cars available on your selected dates.</p>
        </div>
      )}
    </div>
  );
};

export default RentAcar;


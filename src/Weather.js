import React, {useState,useEffect} from "react";
import Button from 'react-bootstrap/Button';
import {Row, Col,Container} from 'react-bootstrap';

export const TemperatureInCelcius=()=>
{
    return (<div><Button variant="outline-danger" size="lg">Temperature in Celcius</Button><Button variant="outline-success">click</Button>
    <Container>
    <Row>
      <Col xs lg="2">1 of 2</Col>
      <Col>2 of 2</Col>
    </Row>
    <Row>
      <Col>1 of 3</Col>
      <Col>2 of 3</Col>
      <Col>3 of 3</Col>
    </Row>
  </Container>
    </div>)
}
const Weather=()=>{
    const [temp,setTemp]= useState(0);
    
    //similar to componentdidMoount and componentDidUpdate:
    
        useEffect(()=>{
        //update the document title using the browser API
       for(let i=0;i<5;i++)
    {
        setTemp(temp);
        console.log("useEffect");
   }
        
        //specify how to clean up after this effect
        //return ()=> clearInterval(timeID);
    },[]);

return (<div><h2>It is {temp}.</h2></div>)
}



export default Weather;
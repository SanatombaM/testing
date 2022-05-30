import React, {useState,useEffect} from "react";
import Button from 'react-bootstrap/Button';
import {Row, Col,Container} from 'react-bootstrap';
import axios from 'axios';

// export const TemperatureInCelcius=()=>
// {
//     return (<div><Button variant="outline-danger" size="lg">Temperature in Celcius</Button><Button variant="outline-success">click</Button>
//     <Container>
//     <Row>
//       <Col xs lg="2">1 of 2</Col>
//       <Col>2 of 2</Col>
//     </Row>
//     <Row>
//       <Col>1 of 3</Col>
//       <Col>2 of 3</Col>
//       <Col>3 of 3</Col>
//     </Row>
//   </Container>
//     </div>)
// }
export const TemperatureInCelcius = () => {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => setUsers(response.data));
  }, []);
  return (
    <div>
      <h2>The JSON below is loaded from an external API!</h2>
      <code>{JSON.stringify(users)}</code>
    </div>
  );
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
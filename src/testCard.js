import {Button,Card} from 'react-bootstrap'
const WeatherList=()=>
{

  const places=["imphal","thoubal","senapati","karong","moreh"]
  return (<div>{places.map((place)=>
    <Card style={{width:'18rem'}}>
    <Card.Img variant="top" src="./cold-bg.jpg"/>
  <Card.Body>
    <Card.Title>Photos</Card.Title>
    <Card.Text>
      {place}
    </Card.Text>
    <Button variant="primary">Press</Button>
  </Card.Body>
  </Card>)}</div>);

}
export default WeatherList;
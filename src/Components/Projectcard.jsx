import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../css/projectcard.css';

function Projectcard({ img, title, link, github }) {

  return (
    <Card style={{ width: '18rem',height: '185px' }} className="carditem m-3 align-items-center">
      <Card.Img className='img' variant="top" src={img} alt={title} style={{ width: '17rem', height: '15rem', objectFit: 'contain', position: 'relative', top: '-1%' }} />
      <div className='px-4 cardtext py-2'>
        <Card.Title className='' /*>tyle={{fontFamily: 'Roboto, sans-serif'}}*/>{title}</Card.Title>
        <div className='info'>
          {/* <hr /> */}
          Some quick example text to build on the card
        </div>
        <div className="btns mt-2 d-flex justify-content-between">
          <Button className='btn' variant="light" style={{fontWeight:'600'}} href={link} >Preview</Button>
          <Button className='btn' variant="light" style={{fontWeight:'600'}} href={github} >Github</Button>
        </div>
      </div>
    </Card>
  );
}

export default Projectcard;
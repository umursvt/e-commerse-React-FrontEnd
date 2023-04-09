import Card from 'react-bootstrap/Card';

function BasicExample({ item }) {
  return (
    <Card
      className=" w-full transform hover:scale-110  transition-transform shadow-md "
      style={{ width: '18rem' }}
    >
      <Card.Img className="product-image" variant="top" src={item.img} />
      <Card.Body>
        <Card.Title className=" text-white shadow-md rounded text-center p-1 bg-green-700 ">
          {item.title}
        </Card.Title>
        <Card.Text>{item.desc}</Card.Text>
        <button className=" button ">Buy Now</button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;

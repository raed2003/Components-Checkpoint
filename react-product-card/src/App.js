import React from 'react';
import { Card } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import product from './product';

const firstName = "Raedchokri"; 

const App = () => {
  return (
    <div className="app">
      <Card style={{ width: '18rem', margin: 'auto', marginTop: '20px' }}>
        <Image productImage={product.image} />
        <Card.Body>
          <Name productName={product.name} />
          <Price productPrice={product.price} />
          <Description productDescription={product.description} />
        </Card.Body>
      </Card>
      <p className="greeting">Hello, {firstName ? firstName : 'there'}!</p>
      {firstName && <img src='https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg' />}
    </div>
  );
};

export default App;


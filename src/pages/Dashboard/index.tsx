import React, { useState, useMemo } from 'react';

import { Container } from './styles';

const foods = ['batata-palha', 'batata palito', 'batata assada'];

const Dashboard: React.FC = () => {
  const [counter, setCounter] = useState(1);

  const automaticHtml = useMemo(() => {
    return foods.map(food => (
      <>
        {counter % 2 !== 0 ?? <p>test</p>}
        <div>
          <p>{food}</p>
        </div>
        {setCounter(counter + 1)}
      </>
    ));
  }, []);

  return (
    <>
      <Container>
        <h1>Hello World</h1>
        <p>Template</p>
        <br />
        <br />
        {automaticHtml}
      </Container>
    </>
  );
};
export default Dashboard;

import React, { useMemo } from 'react';

import { Container } from './styles';

const foods = [
  'batata-palha',
  'batata palito',
  'batata assada',
  'batata frita',
  'batata-cozida',
  'batata batata',
];

const Dashboard: React.FC = () => {
  const automaticHtml = useMemo(() => {
    return foods.map((food, index) => (
      <>
        {/* {index % 2 === 0 && <div>} */}
        {index % 2 === 0 && <p>test</p>}
        <div>
          <p>{food}</p>
        </div>
        {/* {index % 2 !== 0 && </div>} */}
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

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

const newFoods = foods.reduce((acc, curr, index) => {
  if (index && (index + 1) % 2 === 0) {
    acc.push([foods[index - 1], foods[index]]);
  }
  return acc;
}, [] as Array<string[]>);

const Dashboard: React.FC = () => {
  const automaticHtml = useMemo(() => {
    return newFoods.map(item => (
      <div key={item.join()}>
        {item[0]}, {item[1]}
      </div>
    ));
  }, []);
  // const automaticHtml = useMemo(() => {
  //   return newFoods.map((newFoods, index) => (
  //     <>
  //       {/* {index % 2 === 0 && <div>} */}
  //       {index % 2 === 0 && <p>test</p>}
  //       <div>
  //         <p>{newFoods}</p>
  //       </div>
  //       {/* {index % 2 !== 0 && </div>} */}
  //     </>
  //   ));
  // }, []);

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

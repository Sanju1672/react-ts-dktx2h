import * as React from 'react';
import styles from './style.css';
import styled from 'styled-components';

const AppTileWrap = styled.div`
display :flex;
background-color: #fdfbfb;
align-items:center;
border-radius : 18px;
justify-content: center;
width: 200px;
height:220px;
`;
const Heading = styled.div`
display:flex;
flex-direction: column;
padding:10px;
text-align:center;
`;
const Image = styled.img`
  width :parseInt('20px',10);
  height :parseInt('20px', 10);
`;
const Flex = styled.div`
display:flex;
flex-direction:column;
text-align:justify;
`;
const agilepoint = {
  imgUrl: 'https://resources.agilepoint.com/hubfs/AgilePoint%20Icon-02.png',
  imgSize: 60,
};

export default function AuthenticationAppTile() {
  return (
    <React.Fragment>
      <Heading>
        <h1> Select Authentication Providers for Your Mobile App </h1>
        <h4> Please note that by default you can select only one provider</h4>
      </Heading>
      <AppTileWrap>
        <img
          src={agilepoint.imgUrl}
          style={{
            width: agilepoint.imgSize,
            height: agilepoint.imgSize,
          }}
        />
        <Flex> Agilepoint</Flex>
      </AppTileWrap>
    </React.Fragment>
  );
}

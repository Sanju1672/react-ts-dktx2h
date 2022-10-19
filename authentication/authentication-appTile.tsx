import * as React from 'react';
import './style.css';
import styled from 'styled-components';

const AppTileWrap = styled.div`
display :flex;
background-color: lightgrey;
align-items:center;
border-radius : 18px;
justify-content: center;
width: 200px;
height:250px;
`;

const Image = styled.img`
  width :20px;
  height :20px;
`;
const agilepoint = {
  imgUrl: 'https://resources.agilepoint.com/hubfs/AgilePoint%20Icon-02.png',
  imgSize: 60,
};

export default function AuthenticationAppTile() {
  return (
    <React.Fragment>
      <AppTileWrap>
        <h1> Select Authentication Providers for Your Mobile App </h1>
        <h4> Please note that by default you can select only one provider</h4>
        <img
          src={agilepoint.imgUrl}
          style={{
            width: agilepoint.imgSize,
            height: agilepoint.imgSize,
          }}
        />
        <div> Agilepoint</div>
      </AppTileWrap>
    </React.Fragment>
  );
}

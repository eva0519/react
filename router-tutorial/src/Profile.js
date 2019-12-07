import React from 'react';
import WithRouterSample from './WithRouterSample';
import {withRouter} from 'react-router-dom';

const data = {
  velopert:{
    name:'김민준',
    decription:'리액트를 좋아하는 개발자'
  },
  gildong:{
    name:'홍길동',
    decription:'고전 소설 홍길동전의 주인공'
  }
}

const Profile = ({match}) => {
  const {username} = match.params;
  const profile = data[username];
  if(!profile){
    return <div>존재하지 않는 사용자입니다.</div>
  }

  return (
    <div>
      <h3>
        {username}({profile.name})  
      </h3>    
      <p>{profile.decription}</p>
      <WithRouterSample/>
    </div>
  );
};

export default withRouter(Profile);
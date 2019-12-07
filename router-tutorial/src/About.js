import React from 'react';
import qs from 'qs';  // 쿼리 파싱용 라이브러리 설치해야함

const About = ({location}) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix:true  //이 설정을 통해 문자열 맨 앞의 ? 를 생략. location.search의 값은 path 뒤에 붙는 값들이다. 헤쉬 빼고.
  });
  const showDetail = query.detail === 'true'; //쿼리의 파싱 결과값은 무조건 문자열이기에 parseint나 정확한 문자열 'true'등으로 체크해야함
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
      {showDetail && <p>detail 값을 true로 설정하셨군요!</p>}
    </div>
  );
};

export default About;
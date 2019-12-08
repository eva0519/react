import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

const NewsPage = ({match}) => {
  //카테고리가 선택되지 않았으면 기본값 all로 사용. match.params 값은 라우터 컴포넌트의 :category? 를 가르킴. ? 는 선택적인 의미.
  const category = match.params.category || 'all';
  
  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
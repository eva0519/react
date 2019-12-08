import React from "react";
import styled from "styled-components";
import {NavLink} from 'react-router-dom';

const categories = [
  {
    name: "all",
    text: "전체보기"
  },
  {
    name: "business",
    text: "비즈니스"
  },
  {
    name: "entertainment",
    text: "엔터테인먼트"
  },
  {
    name: "health",
    text: "건강"
  },
  {
    name: "science",
    text: "과학"
  },
  {
    name: "sports",
    text: "스포츠"
  },
  {
    name: "technology",
    text: "기술"
  }
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;
//NavLink 루터 속성이므로 Link와 비슷한데 스타일이 적용된 링크라고 보면됨. 고로 to 프롭 등으로 주소 지정이 가능
const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  &.active {
      font-weight:600;
      border-bottom: 2px solid #22b8cf;
      color:#22b8cf;
      &:hover {
        color:#3bc9db;
     }
  }

  & + & {
    margin-left: 1rem;
  }
`;

const Categories = () => {
  return (
    <CategoriesBlock>
      {categories.map(c => (
        <Category
          key={c.name}
          activeClassName='active'
          exact={c.name==='all'}   //전체보기 카테고리를 / path로 설정했으니 exact가 true 여야 다른 url이 열렸을때 같이 안열림.
          to={c.name === 'all' ? '/' : `/${c.name}`} // c.name이 all이면 /으로 설정 나머진 map함수 순서대로 url파라미터 배정
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;

import React, {createContext, useState} from 'react';

const ColorContext = createContext({
  state: {color:'black', subcolor:'red'},
  actions: {
    setColor:()=>{},
    setSubcolor:()=>{}
  }
});

const ColorProvider = ({children}) => {
  const [color, setColor] = useState('black');
  const [subcolor, setSubcolor] = useState('red');

  const value = {
    state: {color, subcolor},
    action: {setColor,setSubcolor}
  };
  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};
//const ColorConsumer = ColorContext.Consumer 같은 의미
const { Consumer: ColorConsumer } = ColorContext;
//객체 비구조화 할당 문법대로라면 칼라콘텍스트 안의 콘슈머 객체를 칼라콘슈머로 바꿔서 정의한다는 의미.

//ColorProvider와 ColorConsumer 내보내기
export { ColorProvider, ColorConsumer };

export default ColorContext;
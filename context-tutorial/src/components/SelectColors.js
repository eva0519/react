import React, {Component} from "react";
import ColorContext from '../contexts/color';

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

class SelectColors extends Component {
  static contextType = ColorContext;
  // static contextType을 설정하면 this.context 조회시 현재 context.value 값을 가르킴
  // 단점으로는 하나의 클래스에서 하나의 Context 밖에 사용하지 못함. 함수형으로 만드려면 useContext 를 사용하는 것이 편하다.
  handleSetColor = color => {
    this.context.actions.setColor(color);
  }
  handleSetSubcolor = color => {
    this.context.actions.setSubcolor(color);
  }

  render() {
    return (
      <div>
        <h2>색상을 선택하세요.</h2>
          <div style={{ display: "flex" }}>
            {colors.map(color => (
              <div
                key={color}
                style={{
                  background: color,
                  width: "24px",
                  height: "24px",
                  cursor: "pointer"
                }}
                onClick={() => this.handleSetColor(color)}
                onContextMenu={e => {
                  e.preventDefault(); //마우스 오른쪽 클릭시 메뉴가 뜨는것을 무시. 컨텍스트메뉴는 원래 우클릭시 뜨는 메뉴바임.
                  this.handleSetSubcolor(color)
                }}
              />
            ))}
          </div>
        <hr />
      </div>
    );
  }
};

export default SelectColors;

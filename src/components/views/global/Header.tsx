import React from 'react';
import css from '../../../styles/styles.css';

const {HeaderContainer, HeaderCss} = css;

const buttonCss = {
  display: 'block',
  padding: '10px 14px 12px',
  borderRadius: '6px',
  backgroundColor: '#b0f347',
  cursor: 'pointer',
  marginLeft: '10px'
};

export const Header = () => (
  <HeaderContainer>
    <HeaderCss.Logo>FINMANAGER</HeaderCss.Logo>
    <HeaderCss.MenuContainer>
      <button style={buttonCss}>Главная</button>
      <button style={buttonCss}>Статистика</button>
      <button style={buttonCss}>Планирование</button>
    </HeaderCss.MenuContainer>
  </HeaderContainer>
);


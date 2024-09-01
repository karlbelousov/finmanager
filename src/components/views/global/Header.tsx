import React from 'react';
import css from '../../../styles/styles.css';
import { Link } from 'react-router-dom';

const {HeaderContainer, HeaderCss} = css;

const buttonCss = {
  display: 'block',
  padding: '10px 14px 12px',
  borderRadius: '6px',
  backgroundColor: '#b0f347',
  cursor: 'pointer',
  marginLeft: '10px',
  color: 'inherit',
  textDecoration: 'none'
};

export const Header = () => (
  <HeaderContainer>
    <HeaderCss.Logo>FINMANAGER</HeaderCss.Logo>
    <HeaderCss.MenuContainer>
      <Link style={buttonCss} to={'/main'}>Главная</Link>
      <Link style={buttonCss} to={'/stat/расход'}>Статистика</Link>
      <Link style={buttonCss} to={'/plan'}>Планирование</Link>
    </HeaderCss.MenuContainer>
  </HeaderContainer>
);


import styled from 'styled-components';

const css = {
  HeaderContainer: styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 100%;
    height: 80px;
    background-color: #202634;
    padding: 0 30px;
  `,
  FooterContainer: styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 100%;
    height: 80px;
    background-color: #e5e5e5;
  `,
  HeaderCss: {
    Logo: styled.div`
      font-size: 30px;
      color: #80f347;
    `,
    MenuContainer: styled.div`
      display: flex;
      align-items: center;
      position: relative;
    `
  }
};

export default css;


import styled from 'styled-components';

const css = {
  DataContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
    position: relative;
    width: 800px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0px 0px 3px grey;
    margin: 40px auto 40px;
    padding: 20px;
  `,
  ContentLine: styled.div`
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
  `,
  ContentCell: styled.span<{width: string}>`
    display: block;
    position: relative;
    width: ${(props) => props.width};
    font-size: 14px;
    text-align: center;
  `
};

export default css;

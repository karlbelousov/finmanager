import styled from 'styled-components';

export const css = {
  FormContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
    position: relative;
    width: 600px;
    height: auto;
    min-height: 60px;
    border-radius: 8px;
    box-shadow: 0px 0px 3px grey;
    margin: 40px auto 40px;
    padding: 20px;
  `,
  Input: styled.input`
    display: block;
    position: relative;
    width: 100%;
    height: 40px;
    outline: none;
    border: none;
    background-color: rgb(229, 229, 229);
    border-radius: 4px;
    padding-left: 14px;
  `,
  Button: styled.span<{ backgroundColor: string}>`
    display: block;
    position: relative;
    width: 220px;
    height: 44px;
    line-height: 42px;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    background-color: ${(props) => props.backgroundColor};
  `
};

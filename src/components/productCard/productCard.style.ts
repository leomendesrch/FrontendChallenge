import { styled } from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.40);
  backdrop-filter: blur(10px);
  width: 256px;
  border-radius: 0 0 4px 4px;
  cursor: pointer;
  img{
  width: 256px;
  height: 300px;
  flex-shrink: 0;
  border-radius: 4px 4px 0 0 ;
  }
  
  h3{
    color: var(--darker-text);
    font-size: 16px;
    font-weight: 300;
    line-height: 150%;
  }

  div{
    padding: 8px 12px;
    display: flex;
    flex-direction: column;
    align-items: start;
    div{
      width: 228px;
      height: 1px;
      flex-shrink: 0;
      margin: 8px 0;
      background-color: var(--shapes);
      padding: 0px;
      }
    }


  p{
    color: var(--darker-text-2);
    font-size: 14px;
    font-weight: 600;
    line-height: 150%;
  }

`
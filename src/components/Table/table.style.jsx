import styled from 'styled-components';
const cRem = (size) => `${parseInt(size, 10) / 16}rem`

export const TableContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 30px rgba(192, 192, 192, 0.25);
  border-radius: 6px;
  flex-grow: 3;
  table {
    width: 100%;
    text-align: left;
    
    border-spacing: 0px;
    thead{
       background-color:#F3F6F9;
       padding: 0 16px;
    }
      th,
      td {
        padding: ${cRem(15)} ${cRem(25)};
        font-weight: 500;
        font-size: 16px;
        color: #25213B;
        opacity: 0.5;
      }
      td {
        opacity: 1;
      }
    }
  }
`;

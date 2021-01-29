import styled from "styled-components";
const cRem = (size) => `${parseInt(size, 10) / 16}rem`;

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
       padding: 0 16px;
       tr {
        background-color:#F3F6F9;
       }
    }
    tbody{
      tr{
        background: #FFFFFF;
        box-shadow: inset 0px -1px 0px rgba(183, 183, 183, 0.25);
      }
    }
    
    th,
    td {
      padding: ${cRem(15)} ${cRem(25)};
    }
    th {
      color: #899198;
      font-weight: 500;
      font-size: 12px;
    }
    td{
      color: #25213B;
    }
  }
`;

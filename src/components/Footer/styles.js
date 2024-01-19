import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  background-color: #f7f7f7;
  padding: 50px 0;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;

  .hr-90 {
    width: 70%;
    height: 0.5px;
    background-color: #717171;
    margin: 20px auto;
  }
`;

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 150px;

  ul {
    list-style: none;
    font-weight: 700;

    h3 {
      margin-bottom: 20px;
    }

    li {
      margin-bottom: 30px;
      color: #717171;
      cursor: pointer;
    }
  }
`;

export const Copywrite = styled.div`
text-align: center;
max-width: 60%;
margin: auto;
`;

import styled from "styled-components";


export const MapContainer = styled.div`
  width: 100rem;
  height:auto;
  display:block;
  margin: 1rem auto;
  box-shadow: 0px 1rem 2rem 0px rgba(0,0,0,0.75);

  @media screen and (max-width: 426px) {
        width: auto;
        height: auto;
        font-size: 1rem;
  }

  @media screen and (max-width: 768px) {
        width: auto;
        height: auto;
  }

`;
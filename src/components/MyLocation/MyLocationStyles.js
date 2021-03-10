import styled from 'styled-components';


export const LocationButton = styled.button`
    height: 3rem;
    width: 16rem;
    background-color: #e5195f;
    color: snow;
    padding: 0 1rem;
    border: none;
    border-radius: 5px;
    font-size: 1.4rem;
    cursor: pointer;
    letter-spacing: 1px;
    display:block;
    margin: 2rem auto;
    

    &:hover {
    transform: scale(1.05);
    transition: all .2s ease-in-out;
    }

    &:active {
    background-color: #f5a3bf;
    }
    

    @media screen and (max-width: 426px) {
        margin: 2rem auto;
    }
`
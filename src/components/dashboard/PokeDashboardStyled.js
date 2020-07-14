import styled from 'styled-components';

const Dashboard = styled.div`

    @media (min-width: 370px) {
        .totalPokemons {
            padding: 0;
            margin: 10px 0 -20px 40px;
        }
    }
    @media (max-width: 360px) {
        .totalPokemons {
            padding: 0;
            margin: 10px 0 -20px 40px;
        }
    }

    @media (max-width: 320px) {
        .totalPokemons {
            padding: 0;
            margin: 10px 0 -20px 40px;
            font-size: 2rem;
        }
    }
`;

export {
    Dashboard
};
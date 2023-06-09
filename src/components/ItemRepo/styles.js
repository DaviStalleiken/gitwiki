import { styled } from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;
    
    h3 {
        font-size: 32px;
        color: #fafafa;
    }

    p {
        font-size: 16px;
        color: #fafafa60;
        margin-bottom: 20px;
    }

    a {
        color: #ADD8E6;
        text-decoration: none;
    }

    a.remover {
        color: #ff8000;
        margin-top: 20px;
    }

    a:hover {
        text-decoration: underline;
    }

    hr {
        color: #fafafa60;
        margin-top: 20px 0;
    }
`
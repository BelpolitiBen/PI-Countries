import styled from "styled-components";

export const StyledLanding = styled.div`
    #myVideo {
        position: fixed;
        right: 0;
        bottom: 0;
        min-width: 100%;
        min-height: 100%;
    }

    .content {
        position: fixed;
        bottom: 0;
        background: rgba(11, 22, 34, 0.5);
        color: ${({ theme }) => theme.colors.mainText};
        width: 100%;
        padding: 20px;
    }

    #myBtn {
        width: 200px;
        font-size: 18px;
        padding: 10px;
        border: none;
        background: ${({ theme }) => theme.colors.secondaryBackground};
        color: ${({ theme }) => theme.colors.overlayText};
        border-radius: 0.5rem;
        box-shadow: 0 4px 30px ${({ theme }) => theme.colors.shadow};
        cursor: pointer;
        :hover {
            transform: scale(0.98);
            color: ${({ theme }) => theme.colors.lightBlue};
        }
    }
`;

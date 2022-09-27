import styled from "styled-components";

/*  */

export const StyledSidebar = styled.div`
    display: flex;
    --animation-duration: 300ms;
    --animation-timing-curve: ease-in;

    .sidebar {
        flex-shrink: 0;
        width: 72px;
        overflow-x: hidden;
        border-right: 1px solid ${({ theme }) => theme.colors.shadow};
        display: flex;
        flex-direction: column;
        height: calc(100vh);
        padding-top: 1rem;
        align-items: center;
        justify-content: stretch;
        transition: width var(--animation-duration)
            var(--animation-timing-curve);
        position: sticky;
        left: 0;
        top: 0;
    }

    .sidebar .hidden-sidebar {
        opacity: 0;
        width: 0;
        white-space: nowrap;
        transition: opacity var(--animation-duration)
            var(--animation-timing-curve);
    }
    .sidebar .hover {
        display: none;
    }
    .sidebar .hover:hover {
        display: flex;
    }
    .sidebar.open .hidden-sidebar {
        width: 100%;
        height: auto;
        opacity: 1;
        display: block;
    }

    .middle-sidebar {
        flex-grow: 1;
        overflow-y: auto;
        overflow-x: hidden;
        width: 100%;
    }
    .bottom-sidebar {
        width: 100%;
    }

    .sidebar-list {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        list-style: none;
    }

    .sidebar-icon {
        width: 24px;
        height: 24px;
        flex-shrink: 0;
        margin-right: 19px;
    }

    .sidebar-link {
        display: flex;
        width: 100%;
        align-items: center;
        color: ${({ theme }) => theme.colors.overlayText};
        text-decoration: none;
        font-weight: 600;
        font-size: 14px;
        padding-left: 25px;
        height: 48px;
    }
    .sidebar-link.menu {
        background-color: ${({ theme }) => theme.colors.mainBackground};
        border: none;
        :hover {
            background-color: ${({ theme }) =>
                theme.colors.secondaryBackground};
            cursor: pointer;
        }
    }

    .sidebar-list-item {
        width: 100%;
        fill: ${({ theme }) => theme.colors.secondaryText};
        position: relative;
    }

    .sidebar-list-item.active {
        fill: ${({ theme }) => theme.colors.lightBlue};
        background-color: ${({ theme }) => theme.colors.secondaryBackground};
    }
    .sidebar-list-item.active::before {
        content: "";
        background-color: ${({ theme }) => theme.colors.lightBlue};
        height: 100%;
        left: 0;
        position: absolute;
        width: 4px;
    }
    .sidebar-list-item:hover {
        background-color: ${({ theme }) => theme.colors.secondaryBackground};
    }

    .sidebar.open {
        width: 255px;
    }

    .sidebar.open .sidebar-link {
        justify-content: flex-start;
    }

    .sidebar.open .sidebar-icon {
        margin-right: 1.2rem;
    }
`;

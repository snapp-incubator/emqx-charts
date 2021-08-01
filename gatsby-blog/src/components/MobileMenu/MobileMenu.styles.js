import styled, {createGlobalStyle} from 'styled-components'

export const OverrideGlobalStyle = createGlobalStyle`
    body {
        overflow: ${props => props.menuOpen ? "hidden": "auto"}
    }
`

export const Wrapper = styled.div`
    display: block;
    position: fixed;
    left: ${props => props.menuOpen ? "0px": "-320px"};
    width: 320px;
    background: ${props => props.theme.colors.menuBackground};
    height: 100%;
    top: 0px;
    padding: 0 0 0 20px;
    transition: all 0.3s esae;
    z-index: 10;
    box-shadow: 2px 0px 10px 0px rbga(0 0 0 0.3);
    box-sizing: border-box;

    @media screen and (min-width: 768) {
        display: none;
    }
`

export const Nav = styled.ul`
    position: absolute;
    width: 100%;
    top: 100px;
    list-style-type: none;
    padding: 0px;
    font-family: 'Nunito Regular', Arial;
    font-size: 1.2rem;
    a {
        text-decoration: none;
        color: ${props => props.theme.colors.textDark};
    }
    li {
        transition: all 0.5s ease;
        cursor: pointer;
        margin: 10px 0;
        .active {
            font-weight: 800;
        }
        :hover {
            opacity: 0.7;
        }
    }
`
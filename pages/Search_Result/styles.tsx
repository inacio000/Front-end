import styled from "styled-components";

export const SearchResultSection = styled.div`
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    margin: 100px auto;

    @media(max-width: ${({theme}) => theme.desktop}) {
        padding: 0 55px;
    }

    @media(max-width: ${({theme}) => theme.tablet}) {
        padding: 0 60px;
    }
    
`

export const ResoultSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: center;
    margin: 0 auto;
    padding: 0;

    @media(max-width: ${({theme}) => theme.tablet}) {
        width: 100%;
        display: flex;
        align-items: flex-start;
        float: left;
    }

    @media(max-width: ${({theme}) => theme.mobile}) {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
`

export const Resoult = styled.div `
    max-width: 1400px;
    width: 100%;
    margin: 0px auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    h1 {
        font-size: 26px;
        font-weight: 500;
        text-align: left;
    }

    span {
        font-weight: 600;
        color: ${({theme}) => theme.colors.primary};
    }
    
    button {
        box-shadow: 4px 4px 8px rgba(0,0,0,0.1);
        background-color: ${({theme})=> theme.colors.standard.white};
        color: black;
    }

    @media(max-width: ${({theme}) => theme.mobile}) {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 56px;

        h1 {
            text-align: center;
        }

       span {
        display: block;
        text-align: center;
       }

        p {
            display: none;
        }
        
        button {
            margin: auto;
            border: 1px solid #000;
        }

    }
    
`

export const Title = styled.div`
    display: flex; 
    margin-top: 15px;
    span {
        color: ${({theme}) => theme.colors.primary};
    }
    
    span {
        margin: 10px;
    }
    h1 {
        margin-top: 80px;
        font-size: 26px;
        font-weight: bold;
    }

`

export const CardFlexLayout = styled.ul`
    /* list-style: none; */
    display: grid;
    grid-template-columns: repeat(4, 2fr);
    gap: 2.5em;

    @media(max-width: ${({theme}) => theme.tablet}) {
        margin: auto;
        grid-template-columns: repeat(2, 2fr);
        gap: 2.5em;
        border: 1px solid #000;
	}

    @media(max-width: ${({theme}) => theme.mobile}) {
        width: 100%;
        grid-template-columns: repeat(1, 2fr);
        gap: 2.5em;
	}
`
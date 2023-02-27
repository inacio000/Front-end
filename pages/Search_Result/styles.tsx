import styled from "styled-components";

interface marginProps {
    marginTop: any;
    marginBottom: any;
}

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

    @media(max-width: ${({theme}) => theme.smallerDevices}) {
        padding: 0;
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

    @media(max-width: ${({theme}) => theme.smallerDevices}) {
        padding: 0 26px;
    }
    
`

export const Resoult = styled.div `
    max-width: 1400px;
    width: 100%;
    margin: 89px auto 0;
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
        }

    }
    
`

export const ContainerFlex = styled.div`
    width: 1400px;
    margin-top: 0 auto;
    display: block;

    @media(max-width: ${({theme}) => theme.desktop}) {
		width: 85%;
	}

    @media(max-width: ${({theme}) => theme.tablet}) {
		width: 80%;
	}

    @media(max-width: ${({theme}) => theme.mobile}) {
		width: 100%;
	}
`

export const Title = styled.div<marginProps>`
    display: flex; 
    gap: .5rem;
    margin-top: ${props => props.marginTop || "133px"};
    margin-bottom: ${props => props.marginBottom || "0px"};
    span {
        color: ${({theme}) => theme.colors.primary};
    }
    
    h1 {
        font-size: 26px;
        font-weight: bold;
    }

    @media(max-width: ${({theme}) => theme.smallerDevices}) {
        padding: 0 26px;
    }

`

export const CardFlexLayout = styled.ul`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 55px;

    @media(max-width: ${({theme}) => theme.desktop}) {
        width: 118%;
        grid-template-columns: repeat(4, 1fr);
    }

    @media(max-width: ${({theme}) => theme.tablet}) {
        grid-template-columns: repeat(4, 1fr);
	}

    @media(max-width: 1125px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media(max-width: ${({theme}) => theme.mobile}) {
        width: 100%;
        grid-template-columns: repeat(1, 1fr);
	}
`
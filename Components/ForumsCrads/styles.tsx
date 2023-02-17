import styled from "styled-components";

export const ForumBox = styled.section`
    display: flex;

    width: 100%;
    height: 200px;
    margin: auto;
    margin-top: 5px;
    margin-bottom: 50px;
    border-radius: 25px;
    padding: 30px 15px;
    box-shadow: 4px 4px 8px rgba(0,0,0,0.1);
    background: ${({theme})=> theme.colors.standard.white};
    border: 2px solid #000;

    @media(max-width: ${({theme}) => theme.tablet}) {
		margin: auto;
        width: 100%;
        height: 230px;
        padding-top: 30px;
        padding-bottom: 0;
        padding-left: 10px;
        padding-right: 10px;
        display: flex;
        justify-content: center;
        margin-bottom: 60px;
	}

    @media(max-width: ${({theme}) => theme.mobile}) {
        width: 100%;
        height: 230px;
        padding: 0;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 10px;
        padding-right: 10px;
        display: flex;
        justify-content: center;
        margin-bottom: 60px;
        border-radius: 0;
    }

`

export const AvatarBox = styled.div`
    padding: 5px 10px;
    margin-right: 5px;
`

export const Avatar = styled.img`
    width: 75px;
    height: 75px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 5px 5px 8px rgba(0,0,0,0.1);
`

export const Flex = styled.div`
    padding: 5px;

    h2 {
        font-size: 24px;
        padding-bottom: 5px;
    }
    
    p {
        font-size: 20px;
        padding-bottom: 5px;    
    }
`

export const Flex1 = styled.div`
    padding-right: 30px

`

export const CardFooter = styled.div`
    display: flex;
    margin-top: 10px;
    button {
        display: flex;
        flex-direction: row;
        align-items: center;
        background: none;
        border: none;
        margin-right: 1em;
        cursor: pointer;

        svg {
            margin-right: .2em;
            font-size: 20px;
            opacity: 0.5;
        }
    }
`
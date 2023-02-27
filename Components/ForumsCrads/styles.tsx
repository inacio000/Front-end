import styled from "styled-components";

export const ForumBox = styled.section`
    display: flex;

    width: 100%;
    height: 214px;
    margin: 0 auto 59px;
    border-radius: 25px;
    padding: 30px 15px;
    box-shadow: 4px 4px 8px rgba(0,0,0,0.1);
    background: ${({theme})=> theme.colors.standard.white};

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
        height: auto;
        padding: 0;
        padding: 31px 20px 34px;
        display: flex;
        justify-content: center;
        margin-bottom: 60px;
    }

    @media(max-width: ${({theme}) => theme.smallerDevices}) {
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
    padding: 0 0 0 21px;

    h2 {
        font-size: 20px;
    }
    
    p {
        font-size: 16px;
    }
`

export const Flex1 = styled.div`

    h2 {
        font-size: 24px;
    }

    @media(max-width: ${({theme}) => theme.mobile}) {

        h2 {
            font-size: 15px;
        }

        p {
            display: none;
        }
    }

`

export const CardFooter = styled.div`
    display: flex;
    margin-top: 21px;

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

export const DescriptionMobile = styled.div`
    display: none;

    @media(max-width: ${({theme}) => theme.mobile}) {
        display: block;
    }
`
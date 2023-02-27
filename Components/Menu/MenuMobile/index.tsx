import React from "react";
import { Avatar, Flex, Flex2, Links, Logo, Logo1, Main, NavBar, NavBar_Expanded, SocialMedias, ToggleIcon, ToggleIcon1 } from "./styles";
import { useState } from "react";
import {FaAngleRight, FaFacebook, FaTwitter, FaWhatsapp} from "react-icons/fa"
import { useAuth } from "../../../context/AppContext";
import { Nav } from "../styles";
import { Container } from "../../../styles/Container";
import Button from "../../Button";


export const MenuMobile = () => {

    const [ismenuOpen, setIsMenuOpen] = useState(false)

    const { user, logout } = useAuth()

    const handleToggle = () => {
        setIsMenuOpen(!ismenuOpen)
    }


    return (
        <>
            <Main>
                {
                    ismenuOpen ?
                        <NavBar_Expanded>
                            <Flex>
                                <Logo>
                                    Omunga
                                </Logo>
                            </Flex>
                            <ToggleIcon onClick={handleToggle}>
                                {ismenuOpen? <span>x</span>:<span>open</span>}
                            </ToggleIcon>
                            <Links>
                                <li>Home</li>
                                <li>Artigo</li>
                                <li>Forum</li>
                                <li>Sobre</li>
                                <a href="./login">
                                    <Button Text="Entrar" Icon={<FaAngleRight />} />
                                </a>
                            </Links>
                            <SocialMedias>
                                <FaFacebook/>
                                <FaTwitter/>
                                <FaWhatsapp/>
                            </SocialMedias>
                        </NavBar_Expanded>
                    :
                        <NavBar>
                            <Container display="">
                                <Nav>
                                    <Flex>
                                        <Logo1>
                                            Omunga
                                        </Logo1>
                                    </Flex>
                                    <Flex2>
                                        <Flex2>
                                            {
                                                user ?
                                                    <Avatar src={user?.image} onClick={() => logout()} />
                                                : null
                                            }
                                        </Flex2>
                                        <ToggleIcon1 onClick={handleToggle}>
                                            {ismenuOpen? <span>x</span>:<span>open</span>}
                                        </ToggleIcon1>
                                    </Flex2>
                                </Nav>
                            </Container>
                        </NavBar>
                }
            </Main>
        </>
    )
}
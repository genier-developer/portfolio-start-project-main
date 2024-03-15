import React from 'react';
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {S} from "./Header_Styles"
import logo from '../../components/logo/colorLogo.png'

export const Header = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <img src={logo} alt={'logo'} height={'40px'}/>
                    {width < breakpoint ?
                        <MobileMenu/>
                        : <DesktopMenu/>
                    }
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};


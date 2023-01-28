import React from 'react';
import {Divider, Heading, Paragraph, Link} from "theme-ui";

import {AppFlex} from "../flex";
import AppContainer from "../container/AppContainer";
import {ZIndex} from "../../../constants";

const TopNav = (): JSX.Element => {

    const currentPath = window.location.pathname;
    const links = [
        {
            href: '/',
            title: 'Home'
        },
        {
            href: '/about/',
            title: 'About Me'
        }
    ];

    return (
        <AppContainer sx={{my: 'auto'}}>
            <AppFlex direction={'column'} variant={'unpadded'}>
                <AppFlex direction={'row'} sx={{mt: 4, zIndex: ZIndex.top}}>
                    <Paragraph>
                        <Heading as={'h1'} sx={{color: 'primary'}}>Max Harney</Heading>
                    </Paragraph>

                    <AppFlex sx={{ml: 'auto', mt: 'auto'}} direction={'row'} variant={'slim'}>
                        {links.map((link) => (
                            <Link href={link.href} variant={link.href === currentPath ? 'navActive' : 'nav'}>
                                {link.title}
                            </Link>
                        ))}
                    </AppFlex>
                </AppFlex>

                <Divider sx={{backgroundColor: 'primary', mx: 0, mt: 0}}/>
            </AppFlex>
        </AppContainer>
    );
}

export default TopNav;


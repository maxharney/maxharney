import React from 'react';
import {AppFlex} from "../flex";
import {Divider, Heading, Paragraph} from "theme-ui";
import AppContainer from "../container/AppContainer";

const TopNav = (): JSX.Element => {

    return (
        <AppContainer sx={{my: 'auto'}}>
            <AppFlex direction={'column'} variant={'unpadded'}>
                <AppFlex direction={'row'} sx={{mt: 4}}>
                    <Paragraph>
                        <Heading as={'h1'}>Max Harney</Heading>
                    </Paragraph>

                    <AppFlex sx={{ ml: 'auto'}}>
                        testing...
                    </AppFlex>
                </AppFlex>

                <Divider sx={{backgroundColor: '', mx: 0}}/>
            </AppFlex>
        </AppContainer>
    );
}

export default TopNav;


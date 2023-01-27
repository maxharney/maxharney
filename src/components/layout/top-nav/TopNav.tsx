import React from 'react';
import {AppFlex} from "../flex";
import {Divider, Heading} from "theme-ui";
import AppContainer from "../container/AppContainer";

const TopNav = (): JSX.Element => {

    return (
        <AppContainer sx={{my: 'auto'}}>
            <AppFlex direction={'column'} variant={'unpadded'}>
                <AppFlex direction={'row'} sx={{mt: 4}}>
                    <Heading variant={"eyebrow"}>Max Harney</Heading>
                </AppFlex>

                <Divider sx={{borderColor: 'muted'}}/>
            </AppFlex>
        </AppContainer>
    );
}

export default TopNav;


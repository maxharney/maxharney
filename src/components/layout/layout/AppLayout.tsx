import React, {PropsWithChildren} from 'react';

import {AppFlex} from "../flex";
import {TopNav} from "../top-nav";
import AppContainer from "../container/AppContainer";

const AppLayout = ({children}: PropsWithChildren<unknown>): JSX.Element => {

    return (
        <AppContainer variant={'fullScreen'} sx={{backgroundColor: 'background'}}>
            <AppFlex>
                <TopNav/>

                <AppContainer>
                    {children}
                </AppContainer>
            </AppFlex>
        </AppContainer>
    );
}

export default AppLayout;
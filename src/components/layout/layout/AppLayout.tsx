import React, {PropsWithChildren} from 'react';
import AppContainer from "../container/AppContainer";
import SynthWaveLayout from "./SynthWaveLayout";
import {TopNav} from "../top-nav";
import {ZIndex} from "../../../constants";

const AppLayout = ({children}: PropsWithChildren<unknown>): JSX.Element => {
    return (
        <SynthWaveLayout>
            <AppContainer variant={'fullScreen'} sx={{ zIndex: ZIndex.top }}>
                <TopNav />
                <AppContainer sx={{ py: 4 }}>
                    {children}
                </AppContainer>
            </AppContainer>
        </SynthWaveLayout>
    );
}

export default AppLayout;
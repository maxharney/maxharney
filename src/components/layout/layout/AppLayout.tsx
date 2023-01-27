import React, {PropsWithChildren} from 'react';
import AppContainer from "../container/AppContainer";
import SynthWaveLayout from "./SynthWaveLayout";

const AppLayout = ({children}: PropsWithChildren<unknown>): JSX.Element => {
    return (
        <SynthWaveLayout>
            <AppContainer variant={'fullScreen'}>
                <AppContainer>
                    {children}
                </AppContainer>
            </AppContainer>
        </SynthWaveLayout>
    );
}

export default AppLayout;
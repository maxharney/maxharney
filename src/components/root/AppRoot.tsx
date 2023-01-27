import React, {PropsWithChildren} from "react";
import {ThemeProvider} from "theme-ui";
import {roboto} from "@theme-ui/presets";

import {AppLayout} from "../layout";

import '../../assets/css/styles.css';

const AppRoot = ({children}: PropsWithChildren<unknown>): JSX.Element => {

    return <ThemeProvider theme={roboto}>
        <AppLayout>
            {children}
        </AppLayout>
    </ThemeProvider>;
};

export default AppRoot;
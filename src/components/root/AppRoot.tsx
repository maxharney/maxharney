import React, {PropsWithChildren} from "react";
import {ThemeProvider, Theme} from "theme-ui";

import {AppLayout} from "../layout";
import { vapor } from '../../themes';

import '../../assets/css/styles.css';

const AppRoot = ({children}: PropsWithChildren<unknown>): JSX.Element => {

    return <ThemeProvider theme={vapor}>
        <AppLayout>
            {children}
        </AppLayout>
    </ThemeProvider>;
};

export default AppRoot;
import React, {PropsWithChildren} from 'react';
import {Container, ThemeUIStyleObject} from "theme-ui";

export type AppContainerVariant = "default" | "fullScreen";

const VariantStyle: Record<AppContainerVariant, ThemeUIStyleObject> = {
    default: {
        maxWidth: '1280px',
        mx: 'auto'
    },
    fullScreen: {
        height: '100vh',
        width: '100%'
    }
}


interface AppContainerProps {
    variant?: AppContainerVariant;
    sx?: ThemeUIStyleObject
}

const AppContainer = ({variant = "default", sx, children}: PropsWithChildren<AppContainerProps>): JSX.Element => {

    return (
        <Container sx={{
            ...VariantStyle[variant],
            ...sx
        }}>
            {children}
        </Container>
    );
};

export default AppContainer;


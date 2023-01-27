import {Flex, ThemeUIStyleObject} from "theme-ui";
import React, {PropsWithChildren} from "react";

export type AppFlexVariant = "default" | "unpadded" | "slim" | "thick";
export type AppFlexDirection = "column" | "row";

export interface AppFlexProps {
    direction?: AppFlexDirection;
    variant?: AppFlexVariant;
    sx?: ThemeUIStyleObject;
}

const VariantStyle: Record<AppFlexVariant, ThemeUIStyleObject> = {
    unpadded: {
        gap: 0
    },
    slim: {
        gap: 2
    },
    default: {
        gap: 4
    },
    thick: {
        gap: 6
    }
};

const DirectionStyle: Record<AppFlexDirection, ThemeUIStyleObject> = {
    column: {
        flexDirection: 'column'
    },
    row: {
        flexDirection: 'row'
    }
};

const AppFlex = ({
                     direction = "column",
                     variant = "default",
                     sx,
                     children
                 }: PropsWithChildren<AppFlexProps>): JSX.Element => {

    const appFlexStyle = {
        ...DirectionStyle[direction],
        ...VariantStyle[variant],
        ...sx
    };

    return <Flex sx={appFlexStyle}>{children}</Flex>
};

export default AppFlex;
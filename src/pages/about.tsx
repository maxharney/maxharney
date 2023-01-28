import * as React from "react"
import type {PageProps} from "gatsby"
import {Card, Image, Paragraph} from 'theme-ui';
import {alpha} from "@theme-ui/color";

import {AppFlex, AppRoot, DocumentHead} from "../components";

// @ts-ignore
import Face from '../assets/images/face.png';
import '../assets/css/styles.css';

const imageWidth = 256;

const AboutPage: React.FC<PageProps> = () => {
    return (
        <AppRoot>
            <AppFlex direction={'row'}>
                <Card sx={{ backgroundColor: alpha('white', 0.25), p: 4 }}>
                    <Paragraph>
                        ABOUT PAGE
                    </Paragraph>
                </Card>
                {/*<AppFlex variant={'slim'}>*/}
                {/*    <Paragraph>*/}
                {/*        The standard Lorem Ipsum passage, used since the 1500s*/}
                {/*        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut*/}
                {/*        labore*/}
                {/*        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi*/}
                {/*        ut*/}
                {/*        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse*/}
                {/*        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in*/}
                {/*        culpa qui officia deserunt mollit anim id est laborum."*/}
                {/*    </Paragraph>*/}
                {/*</AppFlex>*/}
            </AppFlex>
        </AppRoot>
    )
}

export default AboutPage

export const Head = () => <DocumentHead title={"About Me"}/>;

import * as React from "react"
import type {PageProps} from "gatsby"
import {Image, Paragraph} from 'theme-ui';
import {alpha} from "@theme-ui/color";

import {AppFlex, AppRoot, DocumentHead} from "../components";

// @ts-ignore
import Selfie from '../assets/images/selfie.png';
import '../assets/css/styles.css';

const imageWidth = 256;

const IndexPage: React.FC<PageProps> = () => {
    return (
        <AppRoot>
            <AppFlex direction={'row'}>
                <AppFlex variant={'slim'}>
                    <Paragraph>
                        The standard Lorem Ipsum passage, used since the 1500s
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum."
                    </Paragraph>
                </AppFlex>


                <Image src={Selfie}
                       sx={{
                           height: '100%',
                           minWidth: `${imageWidth}px`,
                           maxWidth: `${imageWidth}px`,
                           backgroundImage: (theme) => `linear-gradient(
                                to bottom, 
                                ${alpha('yellow', 0.5)(theme)}, 
                                ${alpha('pink', 0.9)(theme)}
                            )`,
                           borderRadius: 8,
                           borderWidth: 4,
                           borderColor: alpha('darkblue', 0.7),
                           borderStyle: 'solid'
                       }}/>
            </AppFlex>
        </AppRoot>
    )
}

export default IndexPage

export const Head = () => <DocumentHead/>;

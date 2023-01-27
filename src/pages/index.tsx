import * as React from "react"
import type {PageProps} from "gatsby"
import {AppRoot, DocumentHead} from "../components";

import '../assets/css/styles.css';

const IndexPage: React.FC<PageProps> = () => {
    return (
        <AppRoot>
            Hello World
        </AppRoot>
    )
}

export default IndexPage

export const Head = () => <DocumentHead />;

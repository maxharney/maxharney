import {base, bulma} from '@theme-ui/presets';
import {Theme} from "theme-ui";

const navLinkStyle = {
    fontSize: 3,
    fontWeight: 700,
    textDecoration: 'none',
    color: 'text',
    px: 4,
    pt: 1,
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    '&:hover': {
        backgroundColor: 'text',
        color: 'darkblue'
    }
}

const vapor: Theme = {
    ...base,
    config: {
        initialColorModeName: 'light'
    },
    colors: {
        text: '#FBFAF5',
        primary: '#FBFAF5',
        lightblue: '#5cecffff',
        darkblue: '#0a0c37ff',
        yellow: '#f4ff61ff',
        orange: '#ff9900ff',
        pink: '#ff61c6ff',
        mutedblue: '#375971ff'
    },
    links: {
        nav: {
            ...navLinkStyle
        },
        navActive: {
            ...navLinkStyle,
            backgroundColor: 'text',
            color: 'darkblue'
        }
    }
};

export default vapor;
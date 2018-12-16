import { injectGlobal }         from 'styled-components';

// Montserrat
import montserratRegular            from './assets/fonts/montserrat-Regular.otf';
import montserratExtraLight          from './assets/fonts/montserrat-ExtraLight.otf';

// Nexa
import nexaLight            from './assets/fonts/nexa-Light.ttf';
import nexaRegular          from './assets/fonts/nexa.ttf';



injectGlobal`
    :root {
        --fixation-transition: opacity 200ms ease-in;
    }

    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Avenir', 'Gill Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        margin: 0;
    }

    a, a:visited, a:hover {
    	text-decoration: none;
    }

    textarea, input {
      transition: border .5s ease-in-out;
    }

    textarea:focus, input:focus {
    	border-color: none;
    }

    textarea:focus, input:focus, button:focus, button {
        outline: blue;
    }

    button {
    	border: none;
    }

    .rbc-calendar {
        box-sizing: border-box;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        position: absolute;
    }

    /* CSS Stylesheet for Flow Presentation */


    /* Montserrat */
    @font-face {
    font-family: 'Montserrat';
    src: url(${montserratRegular}) format('truetype');
    font-weight: 400;
    }

    @font-face {
    font-family: 'Montserrat';
    src: url(${montserratExtraLight}) format('truetype');
    font-weight: 200;
    }

    /* Nexa */
    @font-face {
    font-family: 'Nexa';
    src: url(${nexaLight}) format('truetype');
    font-weight: 300;
    }

    @font-face {
    font-family: 'Nexa';
    src: url(${nexaRegular}) format('truetype');
    font-weight: 400;
    }


    @keyframes fadeIn {
    	from {
    		opacity: 0;
    	}

    	to {
    		opacity: 1;
    	}
    }

    @keyframes scale {
        0% {
            transform: scale(1);
            opacity: 1;
        } 45% {
            transform: scale(0.1);
            opacity: 0.7;
        } 80% {
            transform: scale(1);
            opacity: 1;
        }
    }
`

/*
 *  Root of xapiens.club: Web framework build on
 *  Firebase + ReactJS, written in JS ES6 compiled with babelJS,
 *  Bundled with webpack and NPM.
 *  written by Siranush Babakhanova.
 */

// Libararies
import React                    from 'react';
import styled                   from 'styled-components';
import { Link } from 'react-router-dom';


// Components
import Button                   from './Button';
import Brandname                from './Brandname';


/**
 * Root of App.
 * NOTE: default signifies that this is the only class exported from this file.
 * The majority of the web application's logic and state variables are housed in this
 * component. It is the topmost component in the App tree.
 */
 export default class Navigation extends React.Component {
     constructor(props) {
         super(props);
         this.state = {
             viewport: {
                 width: window.innerWidth,
                 height: window.innerHeight
             }
         };
     }

     componentWillMount() {
         // console.log("-----Root");

     }

     render() {
         let navigation = [
             {
                 text: 'About',
                 page: () => {return '/about'}
             },
             {
                 text: 'People',
                 page: () => {return '/people'}
             },
             {
                 text: 'Calendar',
                 page: () => {return '/calendar'}
             },
             {
                 text: 'Opportunities',
                 page: () => {return '/opportunities'}
             },
             {
                 text: 'Sponsorship',
                 page: () => {return '/sponsorship'}
             }
         ]

         return(
             <Container>

                 <Button
                     margin={false}
                     hover={true}
                     radius={50}
                     height={70}
                     width={120}
                     fontColor={'#2B0E4C'}
                     leftcolor={'#FFFFFF'}
                     rightcolor={'#FFFFFF'}>
                     // <Brandname/>
                     <Illustration
                         src="https://firebasestorage.googleapis.com/v0/b/xapiens-website.appspot.com/o/logoo.png?alt=media&token=388eea1b-c414-44f6-83f1-e85a9b955dbc"
                         alt='Xapiens logo' />
                     <Link to={navigation.page()}/>
                 </Button>
                 {
                     navigation.map(navigation => {
                         return (
                             <Button
                                 key={navigation.text}
                                 margin={false}
                                 hover={true}
                                 radius={50}
                                 height={70}
                                 width={120}
                                 fontColor={'#2B0E4C'}
                                 leftcolor={'#FFFFFF'}
                                 rightcolor={'#FFFFFF'}>
                                 <Link to={navigation.page()}>
                                     {navigation.text}
                                 </Link>
                             </Button>
                         );
                     })
                 }

             </Container>
         );
     }

     componentDidMount() {
         // console.log("++++++Root");
         window.addEventListener("resize", this.rerender);

     }

     componentWillUnmount() {
         window.removeEventListener("resize", this.rerender);
     }

     // ========== Methods ===========

     /**
      * Function attached to a listener connected to window element
      * Rerenders entire app when visitor adjusts browser size
      */
    rerender = () => {
        this.setState({
            viewport: {
                height: window.innerHeight,
                width: window.innerWidth
            }
        });
    }
 }

 // =============== STYLED COMPONENTS ==================
  const Container = styled.div`
     position: relative;
     background-image: ${props => `url(${props.background})`};
     background-position: 50%;
     background-size: cover;
     background-repeat: no-repeat;
     min-width: 100vw;
     height: 90px;
     z-index: 1;
     display: flex;
     align-items: center;
     justify-content: space-around;
     position: fixed;
     top: 0;
     box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
     background-color: white;
     margin-bottom: 5%;
  `;
  const Illustration = styled.img`
     position: relative;
     height: 90vh;
  `;

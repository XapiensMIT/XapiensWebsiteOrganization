/*
 *  Root of xapiens.club: Web framework build on
 *  Firebase + ReactJS, written in JS ES6 compiled with babelJS,
 *  Bundled with webpack and NPM.
 *  written by Siranush Babakhanova.
 */

// Libraries
import React                    from 'react';
import firebase                 from 'firebase';
import config                   from '../../firebase_config.json';
import uuid                     from 'uuid';
import initReactFastclick       from 'react-fastclick';
import styled                   from 'styled-components';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

// Components
import Button                   from './Button';
import Brandname                from './Brandname';

// Pages
import HomePage                 from './Homepage';
import About                    from './About';
import People                   from './People';
import Opportunities            from './Opportunities';
import Sponsorship              from './Sponsorship';
import Contact                  from './Contact';


// Initialize Firebase
firebase.initializeApp(config);

// Initializing to enable Touch Tap events. It is global
// Used by Material UI
initReactFastclick();

/**
 * Root of App.
 * NOTE: default signifies that this is the only class exported from this file.
 * The majority of the web application's logic and state variables are housed in this
 * component. It is the topmost component in the App tree.
 */
 export default class Root extends React.Component {
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
         return(
             <Container>

                 <BrowserRouter>
                     <Switch>

                         <Route path={`/about`} render={(props) => {
                             return (
                                 <About {...props} />
                             );
                         }}/>
                         <Route path={`/people`} render={(props) => {
                             return (
                                 <People {...props} />
                             );
                         }}/>
                         <Route path={`/opportunities`} render={(props) => {
                             return (
                                 <Opportunities {...props} />
                             );
                         }}/>
                         <Route path={`/sponsorship`} render={(props) => {
                             return (
                                 <Sponsorship {...props} />
                             );
                         }}/>
                         <Route path={`/contact`} render={(props) => {
                             return (
                                 <Contact {...props} />
                             );
                         }}/>
                         <Route path={`/`} render={(props) => {
                             return (
                                 <HomePage {...props} />
                             );
                         }}/>
                     </Switch>
                 </BrowserRouter>

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
     min-height: 100vh;
  `;

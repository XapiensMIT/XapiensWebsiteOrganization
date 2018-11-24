// Libararies
import React                    from 'react';
import styled                   from 'styled-components';
import { Link }                 from 'react-router-dom';
import { render }               from 'react-dom'
import moment                   from 'moment'
import BigCalendar              from 'react-big-calendar'


// Components
import Button                   from './Button';
import Brandname                from './Brandname';
import Navigation               from './Navigation';
import Footer                   from './Footer';
import { getEvents }            from './gcal'

// a localizer for BigCalendar
BigCalendar.momentLocalizer(moment)

// this weird syntax is just a shorthand way of specifying loaders
require('style!css!react-big-calendar/lib/css/react-big-calendar.css')

export default class Calendar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            events: [],
            viewport: {
                width: window.innerWidth,
                height: window.innerHeight
            }
        };
    }

    componentWillMount() {
        getEvents((events) => {
          this.setState({events})
        })
    }

    render() {
        const localizer = BigCalendar.momentLocalizer(moment)
        const MyCalendar = props => (
            <BigCalendar
              localizer={localizer}
              events={this.state.events}
              startAccessor="start"
              endAccessor="end"
            />
        )

        return(
            <Container
                background={"https://firebasestorage.googleapis.com/v0/b/xapiens-website.appspot.com/o/resources%2Fwhite-13.jpg?alt=media&token=e231f298-ff5f-4a13-896a-b3712a0e4287"}>
                <Navigation/>
                <Header> Calendar </Header>
                <Block>
                    {
                        <MyCalendar/>
                    }
                </Block>
                <Footer/>

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
 `;
 const Block = styled.div`
    display: flex;
    direction: column;
    -webkit-flex-direction: column;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    height: 80vh;
    width: 100vw;
    margin-top: 120px;
    align-items: center;
    padding: 90px;
 `;

 const Header = styled.div`
    font-family: "Montserrat";
    font-weight: 400;
    color: ${props => props.theme.violet};
    text-align: center;
    font-size: 3em;
 `;
 const Subheader = styled.div`
    font-family: "Montserrat";
    font-weight: 200;
    color: ${props => props.theme.violet};
    text-align: center;
    font-size: 2em;

 `;
 const TextBody = styled.div`
    font-family: "Nexa";
    font-weight: 300;
    color: ${props => props.theme.violet};
    text-align: center;
    font-size: 1.2em;
    max-width: 75ch;
    margin-top: 45px;
    margin-bottom: 45px;
 `;


 const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
 `;
 const ExternalLink = styled.a`
     text-decoration: none;
 `;

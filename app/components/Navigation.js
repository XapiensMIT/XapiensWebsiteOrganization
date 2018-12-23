// Libraries
import React                    from 'react';
import styled                   from 'styled-components';
import { Link } from 'react-router-dom';

// Components
import Button                   from './Button';
import Brandname                from './Brandname';

// images
import Xapiens_logo                     from '../assets/images/logoo.png';


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
                <Link to={'/about'}>
                    <Illustration
                        src={Xapiens_logo}
                        alt='Xapiens logo' />
                </Link>
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
    height: 70px;
 `;

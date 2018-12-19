// Libraries
import React                    from 'react';
import styled                   from 'styled-components';
import { Link } from 'react-router-dom';

// Components
import Button                   from './Button';
import Brandname                from './Brandname';
import Navigation               from './Navigation';
import Footer                   from './Footer';


export default class About extends React.Component {
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
            <Container
                background={"https://firebasestorage.googleapis.com/v0/b/xapiens-website.appspot.com/o/resources%2Fwhite-13.jpg?alt=media&token=e231f298-ff5f-4a13-896a-b3712a0e4287"}>
                <Navigation/>
                <Block>
                    <Header> Sponsorship </Header>
                    <TextBody>
                        We would like to invite organizations to support the continued success of the Xapiens Group at MIT. In the past 2 month, we have hosted over 10 events, engaged with hundred of members of the community, and strengthened the bonds between MIT and the surrounding industry in human augmentation. Your support will help us to continue these programs and build new ones.<br />
                    </TextBody>
                    <Subheader>
                        Benefits to Sponsors
                    </Subheader>
                    <TextBody>
                        We are happy to work with our sponsors to create custom events at MIT. These may consist of:<br/><br/>

	keynote talks from management or scientists<br/>
	breakout sessions to engage in smaller groups<br/>
	educational workshops<br/>
	product demos<br/><br/>

We will acknowledge your sponsorship on our website, emails, and all events that your contribution goes towards.<br/><br/>

Help us as we build a more vibrant human augmentation community by connecting industry, academia and MIT. We would love to hear from you if you are interested in learning more and supporting our organization.<br/>


                    </TextBody>
                    <Box>
                        <Button
                            margin={true}
                            hover={true}
                            radius={50}
                            height={70}
                            width={120}
                            fontColor={'#FFFFFF'}
                            leftcolor={'#7D3DF4'}
                            rightcolor={'#A6EEF0'}>
                            <Link to={'/contact'}>
                                Become a sponsor
                            </Link>

                        </Button>
                    </Box>
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
    width: 100vw;
    margin-top: 120px;
    align-items: center;
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

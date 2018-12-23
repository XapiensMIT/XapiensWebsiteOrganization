// Libraries
import React                    from 'react';
import styled                   from 'styled-components';
import { Link } from 'react-router-dom';

// Components
import Button                   from './Button';
import Navigation               from './Navigation';
import Footer                   from './Footer';

// images
import white_background         from '../assets/images/white_background.jpg';


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
                background={white_background}>
                <Navigation/>
                <Block>
                    <Header> Opportunities </Header>
                    <Subheader>
                        Xapiens
                    </Subheader>
                    <TextBody>
                    Xapiens is recruiting!<br /><br />
Become an officer and join us in developing and shaping the future of Xapiens. Several position are to be filled :<br /><br />
Digital media officer (one position)<br />
Develop and maintain the website, manages slack channels and Facebook page, curate and upload ontent regularly.
Industry outreach (one or more positions)
Organize professional development events such as interview/CV workshops, discussions with representatives from local industry/startups/other human enhancement related- businesses, and site visits.<br /><br />
Academic outreach (one or more positions)<br />
Organize seminar and invite academic speakers whose research have a link, direct or indirect, with human enhancement.<br /><br />
Content/ Group management<br />
Responsibilities include managing and curate the database of information that the members regularly generates. Examples of data are books, videos, articles, papers, people of interest, companies, researchers, topics of interest, events etc…<br /><br />
Kick-off event committee<br />
Planning of a one-day conference as our kick-off event (spring 2019). Speaker, panels and workshop around the theme of Transhumanism.<br /><br />
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
                                Contact us for more information
                            </Link>

                        </Button>
                    </Box>
                    <Subheader>
                        Nano-Cybernetic Biotrek
                    </Subheader>
                    <TextBody>
                    The Nano-Cybernetic Biotrek research group at Media Lab is an adventurous scientific voyage, fusing engineering, applied physics, and biology to bridge the gap between nanotechnology and synthetic biology. The group’s two major research directions are to<br /><br />

develop novel nanoelectronic computational devices employing ingenious device physics and smart nano-materials for achieving extreme energy efficiency and scalability;<br /><br />
 merge such next generation technologies with organic-matter creating unique nanomachine-bio hybrid systems, to achieve unprecedented possibilities for probing/sensing and modulating (for therapeutics) our brain and body at a single cell or sub-cellular precision remotely.<br /><br />
The long-term goal of the group, going beyond probing and modulation, is to enable incorporation of functionalities, not otherwise allowed by biology, for enhancing and transcending us beyond our biological limitations.<br /><br />
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
                            <ExternalLink href='https://www.media.mit.edu/groups/nano-cybernetic-biotrek/overview/'>
                                Nano-Cybernetic Biotrek
                            </ExternalLink>

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
    min-height: 100vh;
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

// Libararies
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
                    <Header>Vision</Header>
                    <TextBody>
                      <p>Xapiens aims to provide a community for students who have an interest in transhumanism through social events, seminars, technical projects and outreach programs. We aim to empower the members of the MIT community to learn, participate and make an impact in the many fields of human enhancement.</p>

                      <p>Xapiens brings together students from every discipline and develops their technical and leadership skills by providing opportunities to present their work, attend seminars and conferences, and connect with relevant professionals. Through meeting academic and professional leaders of the field, Xapiens aims to help student to become equipped with the skill sets that will help them in their future transhumanism-related careers in industry, academia or business.</p>

                      <p>We endeavor to foster an open discussion around the topic of human enhancement, stimulate the research and development among students, and establish democratized open access to the available technology and expertise to the wider public by serving as a local alias in the field of human enhancement.</p>

                      <p>At this moment most of the expertise and interest of Xapiens lies in the space of Brain - Machine Interfaces, however, we are interested to also make connections and learn more about other types of physical augmentation, ethics and philosophy of human enhancement, human augmentation of space exploration, gerontechnology.</p>
                    </TextBody>
                    <Subheader>
                        Topics of interest of Xapiens
                    </Subheader>
                    <TextBody>
                        Physical and Cognitive Augmentation<br />
                        Ethics and Philosophy of Human Enhancement<br />
                        Human Augmentation for Space Exploration<br />
                        Aging<br />
                        Emotional Augmentation and Politics<br />
                        Human Inteligence - Artificial Inteligence Interfaces<br />
                        Future of humans as species<br />

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
                                Become a member
                            </Link>

                        </Button>
                    </Box>
                    <TextBody>
                        Below are the links to our constitution document and branding report.<br /><br />
                        <ExternalLink href='https://www.dropbox.com/s/ywi6y8v80n86ceu/Constitution.pdf?dl=0'>
                            Constitution
                        </ExternalLink>
                        <br/>
                        <ExternalLink href='https://www.behance.net/gallery/69718893/Xapiens-at-MIT'>
                            Branding report
                        </ExternalLink>
                    </TextBody>
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

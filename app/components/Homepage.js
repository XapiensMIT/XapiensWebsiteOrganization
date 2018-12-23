// Libraries
import React                    from 'react';
import styled                   from 'styled-components';
import { Link } from 'react-router-dom';

// Components
import Button                   from './Button';
import Navigation               from './Navigation';
import Footer                   from './Footer';

// images
import background               from '../assets/images/background.png';
import right_plant              from '../assets/images/right_plant.png';
import left_plant               from '../assets/images/left_plant.png';
import vitruvian_cyborg         from '../assets/images/vitruvian_cyborg.png';
import space                    from '../assets/images/space.png';
import brain                    from '../assets/images/brain.png';
import victoria                 from '../assets/images/victoria.png';


export default class HomePage extends React.Component {
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
        let blocks = [
            {
                xposition: 'right',
                prefix: 'intro',
                heading: 'Transcend Limitations',
                writing: 'Calling all enthusiasts of human enhancement! Xapiens is MIT’s first interdisciplinary collective seeking to research the technical and ethical issues surrounding the use of technology to overcome the limitations of the human mind & body. We build on each other’s knowledge and network with cutting edge labs and industries. Join us and transcend your limitations!',
                illustration:
                {
                    xposition: 'left',
                    source: vitruvian_cyborg,
                    alt: 'Vitruvian Cyborg graphic design by Siranush Babakhanova'
                 },
                buttonText: 'Subscribe and join',
                supplementaryImage: right_plant,
                page: () => {return '/contact'}
            },
            {
                xposition: 'left',
                prefix: 'interest areas',
                heading: 'From Brain to Space',
                writing: 'Cognitive and physical augmentation, ethics and philosophy, human augmentation for space exploration and aging, hive mind and many more topics - you can learn and research in a friendly and collaborative environment and network with greatest minds on Earth who devoted themselves to try to tackle questions in these fields.',
                illustration:
                {
                    xposition: 'right',
                    source: space,
                    alt: 'beyond the cradle cyborg looking into the deep space'
                 },
                buttonText: 'Learn more',
                supplementaryImage: left_plant,
                page: () => {return '/about'}
            },
            {
                xposition: 'right',
                prefix: 'activities',
                heading: 'Seminars & Workshops',
                writing: 'We will help you to grow professionally - connect to a network of influential specialists, distinguished principle investigators (PIs), prominent industry leaders and give opportunity to work with them on a number of projects as well as give the access to get acquainted to their newest discoveries and patents. You will also have access to field trips to see their work on place.',
                illustration:
                {
                    xposition: 'left',
                    source: brain,
                    alt: 'neurotechnology and electronics, a brain as a chip golden and violet'
                 },
                buttonText: 'Learn more',
                supplementaryImage: right_plant,
                page: () => {return '/opportunities'}
            },
            {
                xposition: 'left',
                prefix: 'opportunities',
                heading: 'Grants & Awards',
                writing: 'We will help you to foster your research and fund your efforts in the field. Join us and apply to our Xapiens Grant program. Form a team of Xapiensites to participate in National and International Competitions. Your project will be featured on the next conference we host and you will be granted an opportunity to get awarded upon completion of your project.',
                illustration:
                {
                    xposition: 'right',
                    source: victoria,
                    alt: 'Victoria Modesta, bionic artist, human augmentation example'
                 },
                buttonText: 'Learn more',
                supplementaryImage: left_plant,
                page: () => {return '/opportunities'}
            }
        ];

        return(
            <Container
                background={background}>
                <Navigation/>
                <Content>
                    {
                        blocks.map(block => {
                            return (
                                <Block
                                    key={block.heading}
                                    xPosition={block.xposition}>
                                    <Illustration
                                        xPosition={block.illustration.xposition}
                                        src={block.illustration.source}
                                        alt={block.illustration.alt} />
                                    <Card
                                        xPosition={block.xposition}>
                                        <Prefix> {block.prefix} </Prefix>
                                        <Header> {block.heading} </Header>
                                        <TextBody> {block.writing} </TextBody>
                                        <Image
                                            xPosition={block.xposition}
                                            src={block.supplementaryImage} />
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
                                                <Link to={block.page()}>
                                                    {block.buttonText}
                                                </Link>
                                            </Button>
                                        </Box>
                                    </Card>
                                </Block>
                            );
                        })
                    }
                </Content>
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
    flex-direction: ${props => props.xPosition == "right" ? "row" : "row-reverse"};
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100vw;
    height: 100vh;
    padding-right: ${props => props.xPosition == "right" ? "10%" : "0%"};
    padding-left: ${props => props.xPosition == "left" ? "10%" : "0%"};
    padding-top: 10%;
    padding-bottom: 10%;
 `;
 const Content = styled.div`
    margin-top: 90px;
 `;
 const Card = styled.div`
    position: relative;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    background-color: white;
    padding: 30px 30px;
    width: 70%;
    margin-top: 10%;
    margin-bottom: 10%;
    border-radius: 45px;
 `;
 const Header = styled.div`
    font-family: "Montserrat";
    font-weight: 400;
    color: ${props => props.theme.violet};
    text-align: left;
    font-size: 3.7em;
 `;
 const TextBody = styled.div`
    font-family: "Nexa";
    font-weight: 300;
    color: ${props => props.theme.violet};
    text-align: left;
    font-size: 1.2em;
    margin-top: 3%;
    max-width: 75ch;
 `;
 const Prefix = styled.div`
    font-family: "Montserrat";
    font-weight: 200;
    color: ${props => props.theme.violet};
    text-align: left;
    font-size: 120%;
    text-transform: uppercase;
 `;
 const Image = styled.img`
    position: absolute;
    left: ${props => props.xPosition == "left" ? 0 : "auto"};
    right: ${props => props.xPosition == "right" ? 0 : "auto"};
    height: 140%;
    transform: translateX(${props => props.xPosition == "right" ? "45%" : "-55%" });
    transform: translateY(-70%);
 `;
  const Illustration = styled.img`
     position: relative;
     height: 90vh;
  `;
 const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 25px;
 `;
 const ExternalLink = styled.a`
     text-decoration: none;
 `;

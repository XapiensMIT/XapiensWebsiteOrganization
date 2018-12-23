// Libraries
import React                    from 'react';
import styled                   from 'styled-components';
import { Link }                 from 'react-router-dom';

// Components
import Button                   from './Button';
import Brandname                from './Brandname';


export default class Footer extends React.Component {
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
        let leftfooter = [
            {
                text: 'About',
                internal: true,
                page: () => {return '/about'}
            },
            {
                text: 'Vision',
                internal: true,
                page: () => {return '/about'}
            },
            {
                text: 'Constitution',
                internal: false,
                page: () => {return 'https://www.dropbox.com/s/ywi6y8v80n86ceu/Constitution.pdf?dl=0'}
            },
            {
                text: 'Branding',
                internal: false,
                page: () => {return 'https://www.behance.net/gallery/69718893/Xapiens-at-MIT'}
            },
            {
                text: 'People',
                internal: true,
                page: () => {return '/people'}
            },
            {
                text: 'Founders',
                internal: true,
                page: () => {return '/people'}
            },
            {
                text: 'Board',
                internal: true,
                page: () => {return '/people'}
            },
            {
                text: 'Advisors',
                internal: true,
                page: () => {return '/people'}
            }
        ]
        let midfooter = [
            {
                text: 'Opportunities',
                internal: true,
                page: () => {return '/opportunities'}
            },
            {
                text: 'Conference',
                internal: true,
                page: () => {return '/opportunities'}
            },
            {
                text: 'Industry Talks',
                internal: true,
                page: () => {return '/opportunities'}
            },
            {
                text: 'Seminars',
                internal: true,
                page: () => {return '/opportunities'}
            },
            {
                text: 'Jobs',
                internal: true,
                page: () => {return '/opportunities'}
            },
            {
                text: 'Grants',
                internal: true,
                page: () => {return '/opportunities'}
            },
            {
                text: 'Membership',
                internal: true,
                page: () => {return '/opportunities'}
            }
        ]
        let rightfooter = [
            {
                text: 'Sponsorship',
                internal: true,
                page: () => {return '/sponsorship'}
            },
            {
                text: 'Contact us',
                internal: true,
                page: () => {return '/contact'}
            },
            {
                text: 'Facebook',
                internal: true,
                page: () => {return '/contact'}
            },
            {
                text: 'Twitter',
                internal: true,
                page: () => {return '/contact'}
            },
            {
                text: 'Slack',
                internal: true,
                page: () => {return '/contact'}
            },
            {
                text: 'Email',
                internal: true,
                page: () => {return '/contact'}
            },
            {
                text: 'Mail',
                internal: true,
                page: () => {return '/contact'}
            },
            {
                text: 'Youtube',
                internal: true,
                page: () => {return '/contact'}
            }
        ]
        return(
            <Container>
                <Box>
                    <TextBody>
                        Xapiens is MIT’s first interdisciplinary collective seeking to explore the technical and ethical issues surrounding the use of technology to overcome the limitations of the human mind & body.
                    </TextBody>
                    <Button
                        margin={false}
                        hover={true}
                        radius={50}
                        height={120}
                        width={120}
                        fontColor={'#2B0E4C'}
                        leftcolor={'#FFFFFF'}
                        rightcolor={'#FFFFFF'}>
                        <Brandname/>
                    </Button>
                </Box>
                <LeftFoot>
                    {
                        leftfooter.map(leftfooter => {
                            if (leftfooter.internal) {
                                return (
                                    <Link
                                        key={leftfooter.text}
                                        to={leftfooter.page()}>
                                        {leftfooter.text}
                                    </Link>
                                );
                            } else {
                                return (
                                    <ExternalLink href={leftfooter.page()}>
                                        {leftfooter.text}
                                    </ExternalLink>
                                );
                            }
                        })
                    }
                </LeftFoot>
                <MidFoot>
                    {
                        midfooter.map(midfooter => {
                            if (midfooter.internal) {
                                return (
                                    <Link
                                        key={midfooter.text}
                                        to={midfooter.page()}>
                                        {midfooter.text}
                                    </Link>
                                );
                            } else {
                                return (
                                    <ExternalLink href={midfooter.page()}>
                                        {midfooter.text}
                                    </ExternalLink>
                                );
                            }
                        })
                    }
                </MidFoot>
                <RightFoot>
                    {
                        rightfooter.map(rightfooter => {
                            if (rightfooter.internal) {
                                return (
                                    <Link
                                        key={rightfooter.text}
                                        to={rightfooter.page()}>
                                        {rightfooter.text}
                                    </Link>
                                );
                            } else {
                                return (
                                    <ExternalLink href="http://google.com">
                                        {rightfooter.text}
                                    </ExternalLink>
                                );
                            }
                        })
                    }
                </RightFoot>
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
 const Container = styled.div`=
    background-image: ${props => `url(${props.background})`};
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    min-width: 100vw;
    height: 300 px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: white;
    padding: 5%;
    margin-top: 5%;
    box-shadow: 0 0px 20px rgba(0,0,0,0.19), 0 0px 6px rgba(0,0,0,0.23);
 `;

 const LeftFoot = styled.div`
    display: flex;
    direction: column;
    -webkit-flex-direction: column;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    background-color: white;
    width: 25vw;
 `;

 const MidFoot = styled.div`
    display: flex;
    direction: column;
    -webkit-flex-direction: column;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    background-color: white;
    width: 25vw;
 `;
 const RightFoot = styled.div`
    display: flex;
    direction: column;
    -webkit-flex-direction: column;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    background-color: white;
    width: 25vw;
 `;
 const Box = styled.div`
    display: flex;
    direction: column;
 `;
 const TextBody = styled.div`
    font-family: "Nexa";
    font-weight: 300;
    color: ${props => props.theme.violet};
    text-align: left;
    font-size: 1em;
    max-width: 75ch;
    margin-top: 5px;
    margin-bottom: 5px;
 `;
 const ExternalLink = styled.a`
     text-decoration: none;
 `;

// Libraries
import React            from 'react';
import PropTypes        from 'prop-types';
import styled           from 'styled-components';


/**
 * The Button component is a Compoud Component (with any Icon class) used to
 */
const Button = ({margin, hover, height, width, fontColor, leftcolor, rightcolor, radius, handleClick, children, ...props}) => {
    if (typeof children === 'object') {
        children = React.Children.map(children, (child) => {
            return React.cloneElement(child, {hover: hover});
        });
    }

    return (
        <Container
            {...props}
            margin={margin}
            hover={hover}
            radius={radius}
            height={height}
            width={width}
            fontColor={fontColor}
            leftcolor={leftcolor}
            rightcolor={rightcolor}
            onClick={handleClick}
            >
            {children}
        </Container>
    );
}

// ============= PropTypes ==============

Button.propTypes = {
    fontColor: PropTypes.string.isRequired,
    leftcolor: PropTypes.string.isRequired,
    rightcolor: PropTypes.string.isRequired,
    radius: PropTypes.number.isRequired,
    hover: PropTypes.bool.isRequired,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    height: PropTypes.number.isRequired,
    // handleClick: PropTypes.func.isRequired, // commented this out because it throws a warning whenever react restarts
    margin: PropTypes.bool.isRequired
};

// ============= Styled Components ==============

const Container = styled.button`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: ${props => props.margin ?
        "5px"
    :
        "5px"
    };
    padding: ${props => `${props.height/4}px`};
    background: ${props => `linear-gradient(to right, ${props.leftcolor}, ${props.rightcolor})}`};
    min-width: ${props => typeof props.width == 'number' ? `${props.width}px` : props.width};
    height: ${props => `${props.height}px`};
    box-shadow: ${props => props.hover && props.leftcolor!='#FFFFFF' && props.rightcolor!='#FFFFFF'?
        "0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.149)"
    :
        "none"
    };
    border-radius: ${props => `${props.radius}px`};
    cursor: pointer;
    font-size: 1.4em;
    white-space: nowrap;
    font-family: "Nexa";
    font-weight: 400;
    transition: font-size 0.3s, color 0.3s, box-shadow 400ms cubic-bezier(0.4,0.0,0.2,1), background 0.3s;

    &:hover {
        box-shadow: ${props => props.hover && props.leftcolor!='#FFFFFF' && props.rightcolor!='#FFFFFF'?
            "0 1px 3px 0 rgba(60,64,67,0.302), 0 4px 8px 3px rgba(60,64,67,0.149)"
        :
            "none"
        };

        font-size: ${props => props.hover ?
            "1.45em"
        :
            "1.4em"
        };
    }

    & > a {
        text-decoration: none;
        color: ${props => props.fontColor};
    }
`;


export default Button;

// Libraries
import React            from 'react';
import PropTypes        from 'prop-types';
import styled           from 'styled-components';


/**
 * The Icon component is a component used to
 */
const Brandname = ({props}) => {
    return (
        <Container
            viewBox="0 0 24 24">
            <g>
                    	<g>

                    			<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="745.0676" y1="523.442" x2="759.8425" y2="523.442" gradientTransform="matrix(22.7754 -22.7754 -22.7754 -22.7754 -4873.0352 29829.4648)">
                    			<stop  offset="0" style={{
                                    stopColor: "#7A1ED3"
                                }} />
                    			<stop  offset="1" style={{
                                    stopColor: "#6CC9F4"
                                }} />
                    		</linearGradient>
                    		<path fill="url(#SVGID_1_)" d="M282.599,559.136c-22.008,11.205-56.786,35.731-74.978,66.334
                    			c-15.179,25.534-16.039,59.921-14.283,72.025c1.132,7.804,5.116,17.563,5.215,32.247c0.037,5.502-2.456,16.577-15.357,35.185
                    			c-8.641,12.464-31.915,39.795-32.966,45.753c-4.101,23.226,22.513,17.877,28.617,26.16c6.53,8.861,2.893,20.832,4.393,37.632
                    			c1.256,14.058,7.89,31.049,10.029,56.717c2.123,25.478,5.255,33.266,18.981,39.507c11.612,5.279,36.986,6.893,111.46-11.256
                    			c37.799-9.212,129.749-30.281,155.655-44.964c55.443-31.424,97.931-140.474,97.931-140.474l-80.147,0.131V696.39h-77.743v-77.743
                    			h-77.743l-0.238-77.518C341.423,541.129,304.607,547.932,282.599,559.136z"/>

                    			<linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="744.6929" y1="525.074" x2="759.4678" y2="525.074" gradientTransform="matrix(22.2051 -22.2051 -22.2051 -22.2051 -4734.6621 29102.793)">
                    			<stop  offset="0" style={{
                                    stopColor: "#7A1ED3"
                                }}/>
                    			<stop  offset="1" style={{
                                    stopColor: "#6CC9F4"
                                }}/>
                    		</linearGradient>
                    		<rect x="451.773" y="542.223" fill="url(#SVGID_2_)" width="55.498" height="55.498"/>

                    			<linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="744.7641" y1="521.1514" x2="759.5389" y2="521.1514" gradientTransform="matrix(22.2833 -22.2833 -22.2833 -22.2833 -4747.6304 29208.3809)">
                    			<stop  offset="0" style={{
                                    stopColor: "#7A1ED3"
                                }}/>
                    			<stop  offset="1" style={{
                                    stopColor: "#6CC9F4"
                                }}/>
                    		</linearGradient>
                    		<rect x="538.423" y="618.647" fill="url(#SVGID_3_)" width="77.743" height="77.743"/>

                    			<linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="745.0399" y1="523.1081" x2="759.8148" y2="523.1081" gradientTransform="matrix(23.0776 -23.0776 -23.0776 -23.0776 -4947.5542 30214.0273)">
                    			<stop  offset="0" style={{
                                    stopColor: "#7A1ED3"
                                }}/>
                    			<stop  offset="1" style={{
                                    stopColor: "#6CC9F4"
                                }}/>
                    		</linearGradient>
                    		<rect x="581.222" y="500.755" fill="url(#SVGID_4_)" width="40.374" height="40.374"/>
                    	</g>
                    	<g>
                    		<text transform="matrix(1 0 0 1 664.8088 763.9554)" fill="#2B0E4C" fontFamily="'ModernSans'" fontSize="293.3634">Xapiens</text>

                    			<text transform="matrix(1 0 0 1 1385.8082 918.6741)" opacity="0.5" fill="#2B0E4C" fontFamily="'ModernSans'" fontSize="131.6437">at MIT</text>
                    	</g>
            </g>
        </Container>
    );
}

// ============= PropTypes ==============

Brandname.propTypes = {
};

// ============= Styled Components ==============

const Container = styled.svg`
    height: 100%;
    transition: opacity 0.3s;

    & path {
        transition: fill 0.3s;
    };
`;


export default Brandname;

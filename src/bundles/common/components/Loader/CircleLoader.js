import React from 'react';
import { render, ReactDOM } from "react-dom";
import posed, { PoseGroup } from "react-pose";
import styled from "styled-components";

const CircleDiv = posed.div({
    attention: {
        scale: 1.3,
        transition: {
            type: 'spring',
            stiffness: 200,
            damping: 0
        }
    }
});

const StyledCircleDiv = styled(CircleDiv)`
    background-color: blue;
    width: 200px;
    height: 200px;
`;

const CircleLoader = (props) => {
    const { Loading, children } = props;
    if(Loading)
        return <StyledCircleDiv className="rounded-circle">Loading</StyledCircleDiv>
    return children;
};

export default CircleLoader;
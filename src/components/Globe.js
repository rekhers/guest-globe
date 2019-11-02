import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';

/*
*   
* This function builds the actual thing
*
*/
export default function Globe() {

    const svgContainer = useRef(null);

    useEffect(() => {
        const svg = d3.select(svgContainer.current);
        console.log(svg);
        svg.attr('width', '300px')
            .attr('height', '330px')
            .style('background-color', 'blue');
    })

    return (
        <svg ref={svgContainer} width="300" height="300"></svg>
    )
}
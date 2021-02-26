import React from 'react';
import Body from './Body';
import SiteGrid from './SiteGrid';
import Shopping from './Shopping';
import Bestsellers from './Bestsellers';


function Home() {
    return (
        <div>
            <Body />
            <SiteGrid />
            <Shopping />
            <Bestsellers />
        </div>
    );
}

export default Home;

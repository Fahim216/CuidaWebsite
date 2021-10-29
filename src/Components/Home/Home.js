import React from 'react';
import Header from "./../Header/Header";
import Service from "./../Service/Service";
import Team from "./../OurTeam/Team";
import Skills from "./../Skills/Skills";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <Team></Team>
            <Skills></Skills>
        </div>
    );
};

export default Home;
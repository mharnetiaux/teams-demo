import React from "react";
import {Link} from "react-router-dom";
import SVG from 'react-inlinesvg';
import Icon from '../../icon/teams-icon.svg';
import TeamsContent from './teams/TeamsContent';
import Page from "./Page";

const Teams = () => (
    <Page>
        <h2 className="page-title">Teams</h2>
        <Link to={{pathname:'/contact', state:{prev:'true'}}} className="contact"><SVG src={Icon}/></Link>
        <TeamsContent/>
    </Page>
);


export default Teams;
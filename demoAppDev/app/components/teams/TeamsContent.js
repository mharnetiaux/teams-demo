import React, {Component} from 'react';
import {Link} from "react-router-dom";
import SVG from 'react-inlinesvg';
import ALERT from '../../../icon/teams-alert.svg';
import IMPORTANT from '../../../icon/important.svg';

class TeamsContent extends Component {

    constructor() {
        super(...arguments);
        this.state = {
            teams: [
                {
                    open: false,
                    alert: true,
                    team: "Intensive Care Unit",
                    icon: "/images/intensive-care-unit.png",
                    arrow: "/images/arrow-open.png",
                    menu: "/images/ellipses.png",
                    links: [
                        {
                            route: "General",
                            alert: false,
                            color: "black"
                        },
                        {
                            route: "Announcements",
                            alert: true,
                            color: "black"
                        },
                        {
                            route: "Staffing",
                            alert: false,
                            color: "black"
                        },
                        {
                            route: "15 more channels",
                            alert: false,
                            color: "purple"
                        }
                    ]
                },
                {
                    open: false,
                    alert: false,
                    team: "Contoso Hospital",
                    icon: "/images/contoso-hospital.png",
                    arrow: "/images/arrow-open.png",
                    menu: "/images/ellipses.png",
                    links: [
                        {
                            route: "General",
                            alert: false,
                            color: "black"
                        },
                        {
                            route: "Announcements",
                            alert: false,
                            color: "black"
                        },
                        {
                            route: "IDT",
                            alert: false,
                            color: "black"
                        },
                        {
                            route: "Safety",
                            alert: false,
                            color: "black"
                        }
                    ]
                },
                {
                    open: false,
                    alert: false,
                    team: "Patient Safety",
                    icon: "/images/patient-safety.png",
                    arrow: "/images/arrow-open.png",
                    menu: "/images/ellipses.png",
                    links: [
                        {
                            route: "General",
                            alert: false,
                            color: "black"
                        },
                        {
                            route: "Avoidable Deaths",
                            alert: false,
                            color: "black"
                        },
                        {
                            route: "Mortality review",
                            alert: false,
                            color: "black"
                        },
                        {
                            route: "2 more channels",
                            alert: false,
                            color: "purple"
                        }
                        
                    ]
                }
            ]
        }
    }
    
    /// Get each individual team and render its contents
    getTeams() {
        return this.state.teams.map((item, key)=>{
            const teamLinks = item.links.map((link, key)=>{
                return (
                    <Link key={key} className="team-link" to={{pathname:"/" + link.route, state:{prev:'true'}}}>
                        <span className={link.color==="black" ? "teams-text": "teams-text purple"}>{link.route}</span>
                        <span className={link.alert ? "teams-alert yes" : "teams-alert no"}>
                            <SVG src={IMPORTANT}/>
                            <SVG src={ALERT}/>
                        </span>
                    </Link>
                )
            });
            
            return (
                <section className={item.open ? "teams-content open": "teams-content closed"} key={key}>
                    <a className="team-info">
                        <img className="arrow" src={item.arrow}/>
                        <span className="team">
                            <img src={item.icon} width="" height=""/>
                        </span>
                        <span>{item.team}</span>
                        <span className="team-menu">
                            <img src={item.menu}/>
                        </span>
                    </a>
                    <section className="team-links" key={key}>
                        {teamLinks}
                    </section>
                </section>
            )
        });
    }
    
    /// Open close individual Team Menu
    toggleTeam() {
        const team = document.getElementsByClassName("teams-content");
        for(let name of team){
            name.onclick = () => {
                name.classList.toggle("closed");
            }
        }
    }

    /// Invoke necessary functions after (THIS) React Component has rendered
    componentDidMount(){
        this.toggleTeam();
    }

    render() {
        return(
            <section className="page-content">{this.getTeams()}</section>
        );
    }
}

export default TeamsContent;
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
                    open: true,
                    alert: true,
                    team: "Intensive Care Unit",
                    icon: "/images/northwest-traders.png",
                    arrow: "/images/arrow-open.png",
                    menu: "/images/ellipses.png",
                    links: [
                        {
                            route: "General",
                            alert: false
                        },
                        {
                            route: "Announcements",
                            alert: true
                        },
                        {
                            route: "Staffing",
                            alert: false
                        },
                        {
                            route: "Safety",
                            alert: false
                        },
                        {
                            route: "Neonatal ICU",
                            alert: false
                        },
                        {
                            route: "Onboarding",
                            alert: false
                        },
                        {
                            route: "12 more channels",
                            alert: false
                        }
                    ]
                },
                {
                    open: true,
                    alert: false,
                    team: "Contoso Hospital",
                    icon: "/images/tailspin_toys.png",
                    arrow: "/images/arrow-open.png",
                    menu: "/images/ellipses.png",
                    links: [
                        {
                            route: "General",
                            alert: false
                        },
                        {
                            route: "Announcements",
                            alert: false
                        },
                        {
                            route: "IDT",
                            alert: false
                        },
                        {
                            route: "Safety",
                            alert: false
                        }
                    ]
                },
                {
                    open: true,
                    alert: false,
                    team: "Patient Safety",
                    icon: "/images/account-team.png",
                    arrow: "/images/arrow-open.png",
                    menu: "/images/ellipses.png",
                    links: [
                        {
                            route: "General",
                            alert: false
                        },
                        {
                            route: "Avoidable Deaths",
                            alert: false
                        },
                        {
                            route: "Mortality review",
                            alert: false
                        },
                        {
                            route: "Preventing Falls",
                            alert: false
                        },
                        {
                            route: "Sepsis Plans",
                            alert: false
                        }
                    ]
                }
            ]
        }
    }
    
    getTeams() {
        return this.state.teams.map((item, key)=>{

            const teamLinks = item.links.map((link, key)=>{
                return (
                    <Link key={key} className="team-link" to={{pathname:"/" + link.route, state:{prev:'true'}}}>
                        <span className="teams-text">{link.route}</span>
                        <span className={link.alert ? "teams-alert yes" : "teams-alert no"}>
                            <SVG src={IMPORTANT}/>
                            <SVG src={ALERT}/>
                        </span>
                    </Link>
                )
            });


            return (
                <section className={item.open ? "teams-content open": "teams-content closed"} key={key}>
                    <a className="team-info"><img className="arrow" src={item.arrow}/><span className="team"><img src={item.icon} width="" height=""/></span><span>{item.team}</span><span className="team-menu"><img src={item.menu}/></span></a>
                    <section className="team-links" key={key}>
                        {teamLinks}
                    </section>
                </section>
            )
        });
    }

    render() {

        return(
            <section className="page-content">{this.getTeams()}</section>
        );
    }
}

export default TeamsContent;
import React, {Component} from 'react';
import {Link} from "react-router-dom";
import SVG from 'react-inlinesvg';
import ALERT from '../../../icon/teams-alert.svg';

class TeamsContent extends Component {

    constructor() {
        super(...arguments);
        this.state = {
            teams: [
                {
                    open: true,
                    alert: true,
                    team: "Northwind Traders",
                    icon: "/images/northwest-traders.png",
                    arrow: "/images/arrow-open.png",
                    menu: "/images/ellipses.png",
                    links: [
                        {
                            route: "Marketing",
                            alert: false
                        },
                        {
                            route: "Overview",
                            alert: true
                        },
                        {
                            route: "Performance",
                            alert: false
                        },
                        {
                            route: "32 more channels",
                            alert: false
                        }
                    ]
                },
                {
                    open: false,
                    alert: false,
                    team: "Tailspin Toys",
                    icon: "/images/tailspin_toys.png",
                    arrow: "/images/arrow-closed.png",
                    menu: "/images/ellipses.png",
                    links: []
                },
                {
                    open: true,
                    alert: false,
                    team: "Account Teams",
                    icon: "/images/account-team.png",
                    arrow: "/images/arrow-open.png",
                    menu: "/images/ellipses.png",
                    links: [
                        {
                            route: "General",
                            alert: false
                        },
                        {
                            route: "Accounting",
                            alert: false
                        },
                        {
                            route: "Finance",
                            alert: false
                        }

                    ]
                }
            ]
        }
    }

    render() {

        const teamItems = this.state.teams.map((item, key)=>{

            const teamLinks = item.links.map((link, key)=>{
                return (
                    <Link key={key} className="team-link" to={{pathname:"/" + link.route, state:{prev:'true'}}}>
                        <span className="teams-text">{link.route}</span>
                        <span className={link.alert ? "teams-alert yes" : "teams-alert no"}>
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
        
        return(
            <section className="page-content">{teamItems}</section>
        );
    }
}

export default TeamsContent;
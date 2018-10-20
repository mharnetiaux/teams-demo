import React, {Component} from 'react';
import {Link} from "react-router-dom";

class TeamsContent extends Component {

    constructor() {
        super(...arguments);
        this.state = [
            {
                open: true,
                alert: true,
                team: "Northwind Traders",
                icon: "/images/northwest-traders.png",
                arrow: "/images/arrow-down.png",
                menu: "/images/ellipses.png",
                links: ["Marketing", "Overview", "Performance", "32 more channels"]
            }
        ]
    }

    render() {

        const teamItems = this.state.map((item, key)=>{
            
            const teamLinks = item.links.map((link, key)=>{
                return (
                    <Link className="team-link" to={{pathname:"/" + link, state:{prev:'true'}}}>{link}</Link>
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
            [teamItems]
        );
    }
}

export default TeamsContent;
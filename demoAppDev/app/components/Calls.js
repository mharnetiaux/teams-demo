import React from "react";
import Header from "./Header";

const header = {
    title: "Calls",
    alert: {
        on: true,
        image: "/icon/urgent-white.svg",
        content: "URGENT! Darrell Salyer's blood sugar is hi..."
    },
    links:['menu','search','phone']
},

Calls = () => (
    <section className="page calls transition-item">
        <Header title={header.title} alert={header.alert} links={header.links}/>
    </section>
);


export default Calls;
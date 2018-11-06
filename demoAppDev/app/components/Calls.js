import React from "react";
import Header from "./Header";

const header = {
    title: "Calls",
    links:['menu','search','phone']
},

Calls = () => (
    <section className="page calls transition-item">
        <Header title={header.title} links={header.links}/>
    </section>
);


export default Calls;
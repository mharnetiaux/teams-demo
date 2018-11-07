import React from "react";
import Header from "./Header";

const header = {
    title: "Calls",
    links:['menu','search','phone']
},

Calls = () => (
    <section className="page calls">
        <Header title={header.title} links={header.links}/>
    </section>
);


export default Calls;
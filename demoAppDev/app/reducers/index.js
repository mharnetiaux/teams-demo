export default (state, action) => {
    const date = new Date();
    console.log(action.stage);
    switch (action.type) {
        case "SET_CHAT_HISTORY": 
            switch(action.stage){
                case 0:{
                    return {
                        callAlert: false,
                        chatHistory: [
                            {
                                read: true,
                                type: "",
                                name: "Ruth Franklin",
                                time: date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
                                message: "Might be the dexamethasone. Will...",
                                priorityIcon: "/icon/urgent.svg",
                                priority: "",
                                avatar: "/images/profile_1.png",
                                response: {
                                    message: "Might be the dexamethasone. Will order additional tests.",
                                    read: true,
                                    urgent: false
                                },
                                received: [
                                    {
                                        name: "Ruth F.",
                                        pic: "/images/profile-small.png",
                                        priority: "URGENT!",
                                        message: "Darell Salyer's blood sugar is high. I'm updating his diagnosis to prediabetic. Need to evaluate treatment plan.",
                                        urgent: true,
                                        urgentImg: "../../../icon/urgent.svg"
                                    }
                                ]
                            },
                            {
                                read: true,
                                type: "",
                                name: "Bernadette Guibord",
                                time: "8:16 AM",
                                message: "Can you please send the file over ...",
                                priorityIcon: "/icon/urgent.svg",
                                priority: "",
                                avatar: "/images/profile_2.png",
                                response: {
                                    message: "Word up!!!",
                                    read: true,
                                    urgent: false
                                },
                                received: [
                                    {
                                        name: "Bernadette Guibord",
                                        pic: "/images/profile_2.png",
                                        priority: "",
                                        message: "Can you please send the file over for Darrel Salyer?",
                                        urgent: false,
                                        urgentImg: "../../../icon/urgent.svg"
                                    }
                                ]
                            },
                            {
                                read: true,
                                type: "",
                                name: "Laurence Gilbertson",
                                time: "Yesterday",
                                message: "great, talk to you tomorrow?",
                                priorityIcon: "/icon/urgent.svg",
                                priority: "",
                                avatar: "/images/profile_3.png",
                                response: {
                                    message: "Dr.Gilbertson, are you available?",
                                    read: true,
                                    urgent: false
                                },
                                received: [
                                    {
                                        name: "Laurence Gilbertson",
                                        pic: "/images/profile_3.png",
                                        priority: "",
                                        message: "great, talk to you tomorrow?",
                                        urgent: false,
                                        urgentImg: "../../../icon/urgent.svg"
                                    }
                                ]
                            },
                            {
                                read: true,
                                type: "",
                                name: "Cassandra Dunn",
                                time: "Thursday",
                                message: "Thank you!",
                                priorityIcon: "/icon/urgent.svg",
                                priority: "",
                                avatar: "/images/profile_4.png",
                                response: {
                                    message: "Might be the dexamethasone. Will order additional tests.",
                                    read: true,
                                    urgent: false
                                },
                                received: [
                                    {
                                        name: "Ruth F.",
                                        pic: "/images/profile_4.png",
                                        priority: "",
                                        message: "Darell Salyer's blood sugar is high. I'm updating his diagnosis to prediabetic. Need to evaluate treatment plan.",
                                        urgent: false,
                                        urgentImg: "../../../icon/urgent.svg"
                                    }
                                ]
                            },
                            {
                                read: true,
                                type: "",
                                name: "Pete. Krystal, Darren + 4",
                                time: "Monday",
                                message: "Rita: See attached Image",
                                priorityIcon: "/icon/urgent.svg",
                                priority: "",
                                avatar: "/images/profile_5.png",
                                response: {
                                    message: "Might be the dexamethasone. Will order additional tests.",
                                    read: true,
                                    urgent: false
                                },
                                received: [
                                    {
                                        name: "Pete. Krystal, Darren + 4",
                                        pic: "/images/profile_5.png",
                                        priority: "",
                                        message: "Rita: See attached Image",
                                        urgent: false,
                                        urgentImg: "../../../icon/urgent.svg"
                                    }
                                ]
                            },
                            {
                                read: true,
                                type: "",
                                name: "Edmee Plant",
                                time: "5/20",
                                message: "The sales team are owning that problem.",
                                priorityIcon: "/icon/urgent.svg",
                                priority: "",
                                avatar: "/images/profile_6.png",
                                response: {
                                    message: "Might be the dexamethasone. Will order additional tests.",
                                    read: true,
                                    urgent: false
                                },
                                received: [
                                    {
                                        name: "Edmee Plant",
                                        pic: "/images/profile_6.png",
                                        priority: "",
                                        message: "The sales team are owning that problem.",
                                        urgent: false,
                                        urgentImg: "../../../icon/urgent.svg"
                                    }
                                ]
                            }
                        ],
                        composeHistory: {
                            name: "Ruth Franklin",
                            message: "Order a CT scan of Darell Salyer's left lung before today's IDT.",
                            urgent: true
                        }
                    }
                }
                case 2:{
                    return {
                        callAlert: false,
                        chatHistory: [
                            {
                                read: true,
                                type: "",
                                name: "Bernadette Guibord",
                                time: date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
                                message: "Need a consult.",
                                priorityIcon: "/icon/urgent.svg",
                                priority: "",
                                avatar: "/images/profile_2.png",
                                response: {
                                    message: "Need a consult.",
                                    read: true,
                                    urgent: false
                                },
                                received: [
                                    {
                                        name: "Bernadette Guibord",
                                        pic: "/images/profile_2.png",
                                        priority: "",
                                        message: "Can you please send the file over for Darrel Salyer?",
                                        urgent: false,
                                        urgentImg: "../../../icon/urgent.svg"
                                    }
                                ]
                            },
                            {
                                read: true,
                                type: "",
                                name: "Ruth Franklin",
                                time: date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
                                message: "Might be the dexamethasone.",
                                priorityIcon: "/icon/urgent.svg",
                                priority: "",
                                avatar: "/images/profile_1.png",
                                response: {
                                    message: "Might be the dexamethasone. Will order additional tests.",
                                    read: true,
                                    urgent: false
                                },
                                received: [
                                    {
                                        name: "Ruth F.",
                                        pic: "/images/profile-small.png",
                                        priority: "URGENT!",
                                        message: "Darell Salyer's blood sugar is high. I'm updating his diagnosis to prediabetic. Need to evaluate treatment plan.",
                                        urgent: true,
                                        urgentImg: "../../../icon/urgent.svg"
                                    }
                                ]
                            },
                            {
                                read: true,
                                type: "",
                                name: "Laurence Gilbertson",
                                time: date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
                                message: "Order a CT scan of Darell Salyer's left lung before today's IDT.",
                                priorityIcon: "/icon/urgent.svg",
                                priority: "",
                                avatar: "/images/profile_3.png",
                                response: {
                                    message: "Dr.Gilbertson, are you available?",
                                    read: true,
                                    urgent: false
                                },
                                received: [
                                    {
                                        name: "Laurence Gilbertson",
                                        pic: "/images/profile_3.png",
                                        priority: "",
                                        message: "great, talk to you tomorrow?",
                                        urgent: false,
                                        urgentImg: "../../../icon/urgent.svg"
                                    }
                                ]
                            },
                            
                            {
                                read: true,
                                type: "",
                                name: "Cassandra Dunn",
                                time: "Thursday",
                                message: "Thank you!",
                                priorityIcon: "/icon/urgent.svg",
                                priority: "",
                                avatar: "/images/profile_4.png",
                                response: {
                                    message: "Might be the dexamethasone. Will order additional tests.",
                                    read: true,
                                    urgent: false
                                },
                                received: [
                                    {
                                        name: "Ruth Franklin",
                                        pic: "/images/profile_4.png",
                                        priority: "",
                                        message: "Darell Salyer's blood sugar is high. I'm updating his diagnosis to prediabetic. Need to evaluate treatment plan.",
                                        urgent: false,
                                        urgentImg: "../../../icon/urgent.svg"
                                    }
                                ]
                            },
                            {
                                read: true,
                                type: "",
                                name: "Pete. Krystal, Darren + 4",
                                time: "Monday",
                                message: "Rita: See attached Image",
                                priorityIcon: "/icon/urgent.svg",
                                priority: "",
                                avatar: "/images/profile_5.png",
                                response: {
                                    message: "Might be the dexamethasone. Will order additional tests.",
                                    read: true,
                                    urgent: false
                                },
                                received: [
                                    {
                                        name: "Pete. Krystal, Darren + 4",
                                        pic: "/images/profile_5.png",
                                        priority: "",
                                        message: "Rita: See attached Image",
                                        urgent: false,
                                        urgentImg: "../../../icon/urgent.svg"
                                    }
                                ]
                            },
                            {
                                read: true,
                                type: "",
                                name: "Edmee Plant",
                                time: "5/20",
                                message: "The sales team are owning that problem.",
                                priorityIcon: "/icon/urgent.svg",
                                priority: "",
                                avatar: "/images/profile_6.png",
                                response: {
                                    message: "Might be the dexamethasone. Will order additional tests.",
                                    read: true,
                                    urgent: false
                                },
                                received: [
                                    {
                                        name: "Edmee Plant",
                                        pic: "/images/profile_6.png",
                                        priority: "",
                                        message: "The sales team are owning that problem.",
                                        urgent: false,
                                        urgentImg: "../../../icon/urgent.svg"
                                    }
                                ]
                            }
                        ],
                        composeHistory: {
                            name: "Ruth Franklin",
                            message: "Order a CT scan of Darell Salyer's left lung before today's IDT.",
                            urgent: true
                        }
                    }
                }
                case 1:{
                    return {
                        callAlert: false,
                        chatHistory: [
                            {
                                read: true,
                                type: "",
                                name: "Laurence Gilbertson",
                                time: date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
                                message: "Order a CT scan of Darrel Salyer's left lung before today's IDT.",
                                priorityIcon: "/icon/urgent.svg",
                                priority: "",
                                avatar: "/images/profile_3.png",
                                response: {
                                    message: "Dr.Gilbertson, are you available?",
                                    read: true,
                                    urgent: false
                                },
                                received: [
                                    {
                                        name: "Laurence Gilbertson",
                                        pic: "/images/profile_3.png",
                                        priority: "",
                                        message: "great, talk to you tomorrow?",
                                        urgent: false,
                                        urgentImg: "../../../icon/urgent.svg"
                                    }
                                ]
                            },
                            {
                                read: true,
                                type: "",
                                name: "Ruth Franklin",
                                time: date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
                                message: "Might be the dexamethasone.",
                                priorityIcon: "/icon/urgent.svg",
                                priority: "",
                                avatar: "/images/profile_1.png",
                                response: {
                                    message: "Might be the dexamethasone. Will order additional tests.",
                                    read: true,
                                    urgent: false
                                },
                                received: [
                                    {
                                        name: "Ruth F.",
                                        pic: "/images/profile-small.png",
                                        priority: "URGENT!",
                                        message: "Darell Salyer's blood sugar is high. I'm updating his diagnosis to prediabetic. Need to evaluate treatment plan.",
                                        urgent: true,
                                        urgentImg: "../../../icon/urgent.svg"
                                    }
                                ]
                            },
                            {
                                read: true,
                                type: "",
                                name: "Bernadette Guibord",
                                time: "8:16 AM",
                                message: "Can you please send the file over ...",
                                priorityIcon: "/icon/urgent.svg",
                                priority: "",
                                avatar: "/images/profile_2.png",
                                response: {
                                    message: "Word up!!!",
                                    read: true,
                                    urgent: false
                                },
                                received: [
                                    {
                                        name: "Bernadette Guibord",
                                        pic: "/images/profile_2.png",
                                        priority: "",
                                        message: "Can you please send the file over for Darrel Salyer?",
                                        urgent: false,
                                        urgentImg: "../../../icon/urgent.svg"
                                    }
                                ]
                            },
                            {
                                read: true,
                                type: "",
                                name: "Cassandra Dunn",
                                time: "Thursday",
                                message: "Thank you!",
                                priorityIcon: "/icon/urgent.svg",
                                priority: "",
                                avatar: "/images/profile_4.png",
                                response: {
                                    message: "Might be the dexamethasone. Will order additional tests.",
                                    read: true,
                                    urgent: false
                                },
                                received: [
                                    {
                                        name: "Ruth Franklin",
                                        pic: "/images/profile_4.png",
                                        priority: "",
                                        message: "Darell Salyer's blood sugar is high. I'm updating his diagnosis to prediabetic. Need to evaluate treatment plan.",
                                        urgent: false,
                                        urgentImg: "../../../icon/urgent.svg"
                                    }
                                ]
                            },
                            {
                                read: true,
                                type: "",
                                name: "Pete. Krystal, Darren + 4",
                                time: "Monday",
                                message: "Rita: See attached Image",
                                priorityIcon: "/icon/urgent.svg",
                                priority: "",
                                avatar: "/images/profile_5.png",
                                response: {
                                    message: "Might be the dexamethasone. Will order additional tests.",
                                    read: true,
                                    urgent: false
                                },
                                received: [
                                    {
                                        name: "Pete. Krystal, Darren + 4",
                                        pic: "/images/profile_5.png",
                                        priority: "",
                                        message: "Rita: See attached Image",
                                        urgent: false,
                                        urgentImg: "../../../icon/urgent.svg"
                                    }
                                ]
                            },
                            {
                                read: true,
                                type: "",
                                name: "Edmee Plant",
                                time: "5/20",
                                message: "The sales team are owning that problem.",
                                priorityIcon: "/icon/urgent.svg",
                                priority: "",
                                avatar: "/images/profile_6.png",
                                response: {
                                    message: "Might be the dexamethasone. Will order additional tests.",
                                    read: true,
                                    urgent: false
                                },
                                received: [
                                    {
                                        name: "Edmee Plant",
                                        pic: "/images/profile_6.png",
                                        priority: "",
                                        message: "The sales team are owning that problem.",
                                        urgent: false,
                                        urgentImg: "../../../icon/urgent.svg"
                                    }
                                ]
                            }
                        ],
                        composeHistory: {
                            name: "Ruth Franklin",
                            message: "Order a CT scan of Darell Salyer's left lung before today's IDT.",
                            urgent: true
                        }
                    }
                }
                case -1:{
                    return {
                        callAlert: true,
                        chatHistory: [
                            {
                                read: false,
                                type: "urgent",
                                name: "Ruth Franklin",
                                time: date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
                                message: "Darell Salyer's blood sugar is high ...",
                                priorityIcon: "/icon/urgent.svg",
                                priority: "- URGENT",
                                avatar: "/images/profile_1.png",
                                response: {
                                    message: "Might be the dexamethasone. Will order additional tests.",
                                    read: true,
                                    urgent: false
                                },
                                received: [
                                    {
                                        name: "Ruth F.",
                                        pic: "/images/profile-small.png",
                                        priority: "URGENT!",
                                        message: "Darell Salyer's blood sugar is high. I'm updating his diagnosis to prediabetic. Need to evaluate treatment plan.",
                                        urgent: true,
                                        urgentImg: "../../../icon/urgent.svg"
                                    }
                                ]
                            },
                            {
                                read: true,
                                type: "",
                                name: "Laurence Gilbertson",
                                time: "9:16 AM",
                                message: "great, talk to you tomorrow?",
                                priorityIcon: "/icon/urgent.svg",
                                priority: "",
                                avatar: "/images/profile_3.png",
                                response: {
                                    message: "Dr.Gilbertson, are you available?",
                                    read: true,
                                    urgent: false
                                },
                                received: [
                                    {
                                        name: "Laurence Gilbertson",
                                        pic: "/images/profile_3.png",
                                        priority: "",
                                        message: "great, talk to you tomorrow?",
                                        urgent: false,
                                        urgentImg: "../../../icon/urgent.svg"
                                    }
                                ]
                            },
                            {
                                read: true,
                                type: "",
                                name: "Bernadette Guibord",
                                time: "Yesterday",
                                message: "Can you please send the file over ...",
                                priorityIcon: "/icon/urgent.svg",
                                priority: "",
                                avatar: "/images/profile_2.png",
                                response: {
                                    message: "Need a consult.",
                                    read: true,
                                    urgent: false
                                },
                                received: [
                                    {
                                        name: "Bernadette Guibord",
                                        pic: "/images/profile_2.png",
                                        priority: "",
                                        message: "Can you please send the file over for Darrel Salyer?",
                                        urgent: false,
                                        urgentImg: "../../../icon/urgent.svg"
                                    }
                                ]
                            },
                            {
                                read: true,
                                type: "",
                                name: "Cassandra Dunn",
                                time: "Thursday",
                                message: "Thank you!",
                                priorityIcon: "/icon/urgent.svg",
                                priority: "",
                                avatar: "/images/profile_4.png",
                                response: {
                                    message: "Might be the dexamethasone. Will order additional tests.",
                                    read: true,
                                    urgent: false
                                },
                                received: [
                                    {
                                        name: "Ruth F.",
                                        pic: "/images/profile_4.png",
                                        priority: "",
                                        message: "Darell Salyer's blood sugar is high. I'm updating his diagnosis to prediabetic. Need to evaluate treatment plan.",
                                        urgent: false,
                                        urgentImg: "../../../icon/urgent.svg"
                                    }
                                ]
                            },
                            {
                                read: true,
                                type: "",
                                name: "Pete. Krystal, Darren + 4",
                                time: "Monday",
                                message: "Rita: See attached Image",
                                priorityIcon: "/icon/urgent.svg",
                                priority: "",
                                avatar: "/images/profile_5.png",
                                response: {
                                    message: "Might be the dexamethasone. Will order additional tests.",
                                    read: true,
                                    urgent: false
                                },
                                received: [
                                    {
                                        name: "Pete. Krystal, Darren + 4",
                                        pic: "/images/profile_5.png",
                                        priority: "",
                                        message: "Rita: See attached Image",
                                        urgent: false,
                                        urgentImg: "../../../icon/urgent.svg"
                                    }
                                ]
                            },
                            {
                                read: true,
                                type: "",
                                name: "Edmee Plant",
                                time: "5/20",
                                message: "The sales team are owning that problem.",
                                priorityIcon: "/icon/urgent.svg",
                                priority: "",
                                avatar: "/images/profile_6.png",
                                response: {
                                    message: "Might be the dexamethasone. Will order additional tests.",
                                    read: true,
                                    urgent: false
                                },
                                received: [
                                    {
                                        name: "Edmee Plant",
                                        pic: "/images/profile_6.png",
                                        priority: "",
                                        message: "The sales team are owning that problem.",
                                        urgent: false,
                                        urgentImg: "../../../icon/urgent.svg"
                                    }
                                ]
                            }
                        ],
                        composeHistory: {
                            name: "Ruth Franklin",
                            message: "Order a CT scan of Darell Salyer's left lung before today's IDT.",
                            urgent: true
                        }
                    }
                }
                default: return state;
            }
            

        default: 
            return state;
    }
};
import { v4 as uuidv4 } from 'uuid';



export const cardData = [
    {
        id: uuidv4(),
        image:[
            "https://i.postimg.cc/BvbH2Wzz/4.jpg",
            "https://i.postimg.cc/1zbn68wg/IMAGE-5.jpg",
            "https://i.postimg.cc/PrdLmspM/IMAGE-1.jpg",
            "https://i.postimg.cc/28YW2LJh/BB.jpg",
            "https://i.postimg.cc/sDPYr4ST/penang-hill-railway-train-malaysia-transportation-passenger-93103703.jpg",
            "https://i.postimg.cc/sXSBJ34T/ls-02cb04dc.jpg",
            "https://i.postimg.cc/sf7SY4n3/g1.jpg"
        ],
        title:"Penang Hill Funicular Railway Ticket (For Non-Malaysian Only)",
        desc:"Take advantage of Penang Hill's well-known funicular train ride to make your vacation Instagramable. Featuring a century-old virgin rainforest, Penang Hill is a collection of hills standing taller than 700 meters above sea level.",
        type:"bookTypeOne",
        pricing: {
            fastLane:{
                adult:80,
                child:40,
                senior:80,
            },
            normalLane:{
                adult:30,
                child:15,
                senior:30,
            }
        },

    },
    
]

export const preferenceData = [
    
    {
        id: uuidv4(),
        title: "Fast Lane Tickets",
        price: 80,
        details:[
            "Skip queues with a fast lane upgrade."
        ]
    },  
    {
        id: uuidv4(),
        title: "Normal Lane Ticket",
        price: 30,
        details:[
            "Standard Admission ticket"
        ]
    },

]




export const cardHighLightsDetails = [
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/BnF2MHXD/teddyville-7-min.jpg",
        title:"TeddyVille Museum",
        desc:"Discover Penang's history and culture through teddy bears dressed as famous Penangites like Tan Sri P. Ramlee, Dato Jimmy Choo, Dato Nicole David, and Dato Lee Chong Wei."
    },
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/6QNnSqvP/curtis-crest-tree-top-walk-at-the-habitat-penang-hill-1.jpg",
        title:"The Habitat Penang",
        desc:"Discover the rejuvenating magic of Penang's 130-million-year-oldrainforest for a holistic well-being boost."
    },  
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/d08mtrFv/skydeck-3.jpg",
        title:"SkyDeck Penang Hill",
        desc:"Visit the open-air deck at Penang Hill Food Centre for a romanticgesture: attach a love lock with a scenic view of Georgetown. Perfect for couples or singles seeking a great 'grammoment. Lovelocks are available on-site or bring your own."
    },   
]



export const thingsTodo = [
    {
        id: uuidv4(),
        desc:"Get a ride on the Penang train, an engineering marvel and the world's steepest funicular railway and be immersed in magnificent scenery.",
        image: "https://i.postimg.cc/mgbQ21yB/D8k-DCQy-Sbmdj14no-Y5-Vg-funicular-railway.jpg"
    },
    {
        id: uuidv4(),
        desc:"Rise early to catch the first funicular trip up the hill and be rewarded by breathtakingviews during clear weather or behold fine, white mist swirling around the hills.",
        image: "https://i.postimg.cc/BvzDgY9n/IMAGE-2.jpg"
    },
    {
        id: uuidv4(),
        desc:"Witness splendid 180⁰ views of George Town and providing a magical backdropagainst the evening sky for an unforgettable, refreshing and enriching experience.",
        image: "https://i.postimg.cc/3JZv6J56/IMAGE-3-jpg.jpg"
    },
    
]


export const addQues = [
    {
        id: uuidv4(),
        ques:"Operating Hours ?",
        ans:[
            "Daily: 6:30 am to 10 pm", 
            "Last trip from Upper Station to Lower Station."
        ]
    },
    {
        id: uuidv4(),
        ques:"Child Policy",
        ans:[
            "Adult age is 13 to 59 years old.",
            "Child age is 4 to 12 years old.",
            "Senior Citizen age 60 and above."
        ]
    },
    {
        id: uuidv4(),
        ques:"Important Information",
        ans:[
            "It is advised to pack light clothing and wear comfortable shoes.",
            "Please note that the following are not permitted: pets, luggage, smoking, foodand drink.",
        ]
    },
    {
        id: uuidv4(),
        ques:"Refund/Cancellation Policy",
        ans:[
            "No cancellation and refund are allowed once purchased",
            "Please note: This activity is eligible to Non-Malaysian Passport Holders only.",
            "For local Malaysian, you may buy your tickets at the ticketing counter with cheaper rate."
        ]
    },
    {
        id: uuidv4(),
        ques:"Redemption Guide",
        ans:["Upon arrival, show your ticket/e-voucher at the counter"]
    },
    {
        id: uuidv4(),
        ques:"Ticket Validity",
        ans:["The ticket can only be used for same-day return travel."]
    },
]



export const homeFAQ = [
    {
        id: uuidv4(),
        ques:"Should I make advance online ticket booking Penang Hill Funicular Railway ?",
        ans:"Highly recommended, advance online booking are welcome to fasten your visitingand ticket redemption at counter."
    },
    {
        id: uuidv4(),
        ques:"How the e-ticket redemption works ?",
        ans:"Display the QR e-ticket on your mobile phone at the redemption point."
    },
    {
        id: uuidv4(),
        ques:"Where is the e-ticket Redemption Point ?",
        ans:"Redeem your ticket at Penang Hill Lower Station counter."
    },
    {
        id: uuidv4(),
        ques:"The best time to visit Penang Hill ?",
        ans:"Rise early to catch the first 6.30am funicular trip up the hill and be rewardedbybreath taking views during clear weather or behold fine, white mist swirling aroundthe hills."
    },
    {
        id: uuidv4(),
        ques:"What is the Operation Hours ?",
        ans:"Daily: 6:30 am to 10 pm (last trip from Upper Station to Lower Station)."
    },
]


export const helpCenterBookingFAQ = [
    {
        id: uuidv4(),
        ques:"How do I make a booking on Malaysia Experience?",
        ans:"Making a booking is easy! Simply browse through our experiences, select the one you love, choose your preferred date and time, and follow the easy booking steps. Your adventure in Malaysia is just a few clicks away!"
    },
    {
        id: uuidv4(),
        ques:"Is it safe to book through Malaysia Experience?",
        ans:"Absolutely! We prioritize your safety and security. Our booking platform uses industry-standard encryption to safeguard your personal information, ensuring a worry-free booking experience"
    },
    {
        id: uuidv4(),
        ques:"Can I book for a group?",
        ans:"Of course! We welcome group bookings. When selecting an experience, you can specify the number of participants, and our system will guide you through the process to ensure everyone has a fantastic time."
    },
]

export const helpCenterCancellationFAQ = [
    {
        id: uuidv4(),
        ques:"What is the cancellation policy?",
        ans:"We understand plans can change. Our cancellation policy varies depending on the experience and the timing of your cancellation. You can find specific details on the experience page during the booking process."
    },
    {
        id: uuidv4(),
        ques:"How do I cancel or request a refund?",
        ans:"If you need to cancel, log in to your Malaysia Experience account, go to your bookings, and follow the cancellation instructions. Refund eligibility depends on the cancellation policy of the specific experience. We're here to help, so feel free to reach out to our customer support for assistance."
    },
    {
        id: uuidv4(),
        ques:"What happens if the experience is canceled by Malaysia Experience?",
        ans:"In the rare event that we have to cancel an experience, you will be notified promptly, and a full refund will be processed. Your satisfaction and safety are our top priorities."
    },
]


export const termsandconditiondata = [
    {
        id: uuidv4(),
        title: "Limited License",
        list:["You are granted a non-exclusive, non-transferable license to access and use our Website in accordance with these Terms."]
    },
    {
        id: uuidv4(),
        title: "Our Relationship",
        list:["We serve as an intermediary for purchasing goods/services and do not create any other relationship with users"]
    },
    {
        id: uuidv4(),
        title: "Legal Compliance:",
        list:["You agree to comply with all applicable laws and regulations. We may take appropriate action for non-compliance."]
    },
    {
        id: uuidv4(),
        title: "Eligibility and Registration",
        list:["You certify being at least 18 years old or having parental permission if aged 13 to 18. Registration in violation of these terms is unauthorized."]
    },
    {
        id: uuidv4(),
        title: "DMCA Compliance",
        list:["If you believe your work is infringed, provide required information to support@travelvago.com."]
    },
    {
        id: uuidv4(),
        title: "Intellectual Property",
        list:["Our trademarks and Website content are protected. Your use does not grant ownership rights."]
    },
    {
        id: uuidv4(),
        title: "Linking",
        list:["You may link to our Website, following guidelines provided."]
    },
    {
        id: uuidv4(),
        title: "Links to Other Websites",
        list:["We provide links for convenience, but we do not endorse or have an affiliation with Third Party Websites."]
    },
    {
        id: uuidv4(),
        title: "Data Protection",
        list:["We collect and use personal data as necessary. More details in our privacy policy.https://www.travelvago.com/privacy-policy"]
    },
    {
        id: uuidv4(),
        title: "Warranty Disclaimer",
        list:["We reserve the right to change Website content without notice. We are not responsible for errors, interruptions, or technical malfunctions."]
    },
    {
        id: uuidv4(),
        title: "Limitation of Liability",
        list:["We and our affiliates are not liable for any loss or damage resulting from Website use."]
    },
    {
        id: uuidv4(),
        title: "Arbitration",
        list:["Any legal controversy will be settled by binding arbitration. Each party bears one-half of arbitration fees."]
    },
]
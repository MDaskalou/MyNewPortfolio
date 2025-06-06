import MyFirstWebsiteImg from '../assets/public/img/MyFirstWebsite.png';
import BookingSystemSAImg from '../assets/public/img/BookingSystemSA.png';



const myProjectsData = [
    {
        title: "My First Website",
        description:
            "One year ago, I began my studies to become a software developer. Although our main focus is backend development with C# and .NET, we've also had the opportunity to learn frontend technologies. What you see here is the very first website I've ever created — and it's a project I'm truly proud of.",
        image: MyFirstWebsiteImg,
        link: "https://github.com/MDaskalou/MyPortfolio",
    },
    {
        title: "Booking System for a Hospital",
        description:
            "This is the biggest project I'm working on so far. It's designed to let departments within Sahlgrenska book time directly instead of calling. I learned authentication, MediatR, services, APIs and more.",
        image: BookingSystemSAImg,
        link: "https://github.com/MDaskalou/BookingSystemSA",
    },
];
export default myProjectsData;


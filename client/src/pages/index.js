import React from "react";

const Home = React.lazy(()=> import("./home/Home"));
const About = React.lazy(()=> import("./About"));
const Blog = React.lazy(()=> import("./Blog"));
const Contact = React.lazy(()=> import("./Contact"));
const Portfolio = React.lazy(()=> import("./Portfolio"));
const Project = React.lazy(()=> import("./Project"));
const Services = React.lazy(()=> import("./Services"));
const Testimonials = React.lazy(()=> import("./Testimonials"));
const Images = React.lazy(()=> import("./Images"));
const Admin = React.lazy(()=> import("./admin/Admin"));


const RoutesPage = [
    {
        linkLabel: "Home",
        path: "/",
        component: Home,
        isNavbarLink: true,
    },
    {
        linkLabel: "About",
        path: "/About",
        component: About,
        isNavbarLink: true,
    },
    {
        linkLabel: "Services",
        path: "/Services",
        component: Services,
        isNavbarLink: true,
    },
    {
        linkLabel: "Portfolio",
        path: "/Portfolio",
        component: Portfolio,
        isNavbarLink: true,
    },
    {
        linkLabel: "Testimonials",
        path: "/Testimonials",
        component: Testimonials,
        isNavbarLink: true,
    },
    {
        linkLabel: "Blog",
        path: "/Blog",
        component: Blog,
        isNavbarLink: true,
    },
    {
        linkLabel: "Contact",
        path: "/Contact",
        component: Contact,
        isNavbarLink: true,
    },
    {
        linkLabel: "Project",
        path: "/Project/:category",
        component: Project,
        isNavbarLink: false,
    },
    {
        linkLabel: "Images",
        path: "/Images/:category/:project_name",
        component: Images,
        isNavbarLink: false,
    },
    {
        linkLabel: "Admin",
        path: "/ControlPage/",
        component: Admin,
        isNavbarLink: false,
    },

];

export {RoutesPage};
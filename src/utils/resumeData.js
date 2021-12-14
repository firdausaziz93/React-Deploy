import React from "react";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { AssignmentOutlined, GitHub, WebOutlined } from "@material-ui/icons";

export default {
  name: "Firdaus Aziz",
  title: "Full Stack Developer",

  birthday: "20th March 1993",
  email: "muhammad93firdaus@gmail.com",
  address: "Kajang, Selangor",
  phone: "01151381227",

  socials: {
    Facebook: {
      link: "https://www.facebook.com/firdaus.azis.14/",
      text: "Firdaus Aziz",
      icon: <FacebookIcon />,
    },
    Instagram: {
      link: "https://www.instagram.com/muhammad_firdaus_azis/",
      text: "Firdaus Aziz",
      icon: <InstagramIcon />,
    },
    LinkedIn: {
      link: "https://www.linkedin.com/in/muhammad-firdaus-65bb48212/",
      text: "Firdaus Aziz",
      icon: <LinkedInIcon />,
    },
  },

  about:
    "I’m Muhammad Firdaus and currently seeking for job to acquire more knowledge with over two-years experiences in IT industry. Perceptive Systems Analyst adapt at designing innovative IT solutions and enhancing existing systems with new features. Committed to improving business productivity and efficiency. I would like to be a part of a company where I could use and enhance my skills and gain work experience for the future development of myself.",

  experiences: [
    {
      title: "PROGRAMMER \nMAJLIS SUKAN NEGARA, BUKIT JALIL",
      date: "SEPTEMBER 2020–PRESENT",
      desc: " Writing well designed, testable, efficient code by using software development practice \n Maintained current system by updating the code and upload to the server \n Perform debugging on web page \n Made modification to the database structure for the system using \n Involved extensively in Unit Testing and User Acceptance Testing",
    },
    {
      title: "ANALYST PROGRAMMER SYNERGY SYSTEM INTEGRATION SERVICES, KAJANG",
      date: "FEB 2019–AUGUST 2020",
      desc: " Develop system that met user requirements by performing system analysis and database design. \n Performing code and report development to meet the user requirements. \n Perform debugging on web page using React Development Tools. \n Involve extensively in Unit Testing and User Acceptance Testing. \n Made modification to the database structure for the system using MSSQL Database \n Develop Mobile Application by using React Cordova",
    },
  ],

  education: [
    {
      title: "BACHELOR DEGREE IN INFORMATION TECHNOLOGY",
      from: "UNIVERSITI TEKNOLOGI MARA",
      date: "2016 – 2018",
      cgpa: "CGPA : 3.17",
      // desc: " Writing well designed, testable, efficient code by using software development practice  Maintained current system by updating the code and upload to the server  Perform debugging on web page  Made modification to the database structure for the system using  Involved extensively in Unit Testing and User Acceptance Testing",
    },
    {
      title: "DIPLOMA IN COMPUTER SCIENCE",
      from: "UNIVERSITI TEKNOLOGI MARA",
      date: "2011 – 2014",
      cgpa: "CGPA : 2.98",
      // desc: " Develop system that met user requirements by performing system analysis and database design.  Performing code and report development to meet the user requirements.  Perform debugging on web page using React Development Tools.  Involve extensively in Unit Testing and User Acceptance Testing.  Made modification to the database structure for the system using MSSQL Database  Develop Mobile Application by using React Cordova",
    },
  ],

  services: [
    {
      title: "Web Development",
      desc: "I have been working on web development for 3 years",
      icon: <WebOutlined />,
    },
    {
      title: "AR Development",
      desc: "I have experience develop Augmented Reality on my intership",
      icon: <AssignmentOutlined />,
    },
  ],

  skills: [
    {
      title: "FRONT-END",
      desc: ["ReactJs", "JavaScript", "Material Ui"],
    },
    {
      title: "back-END",
      desc: ["NodeJs", "PHP"],
    },
    {
      title: "DATABASES",
      desc: ["MySQL", "SQL Server", "MongoDB"],
    },
    {
      title: "SOURCE CONTROL",
      desc: ["TortoiseSVN", "GitHub"],
    },
  ],

  portfolio: [
    {
      tag: "react",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FReact_Native&psig=AOvVaw0FU4aWCyRWkvSK0nk5OFkM&ust=1639027619573000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJiNj-y70_QCFQAAAAAdAAAAABAD",
      title: "Project 1",
      desc: "dsfsgsdfsedfdsvsd dgsdf",
      links: [
        {
          link: "https://firdausaziz93.github.io/",
          icon: <GitHub />,
        },

        {
          link: "https://firdausaziz93.github.io/",
          icon: <GitHub />,
        },
        {
          link: "https://firdausaziz93.github.io/",
          icon: <GitHub />,
        },
      ],
    },
    {
      tag: "test",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FReact_Native&psig=AOvVaw0FU4aWCyRWkvSK0nk5OFkM&ust=1639027619573000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJiNj-y70_QCFQAAAAAdAAAAABAD",
      title: "Project 1",
      desc: "dsfsgsdfsedfdsvsd dgsdf",
      links: [
        {
          link: "https://firdausaziz93.github.io/",
          icon: <GitHub />,
        },

        {
          link: "https://firdausaziz93.github.io/",
          icon: <GitHub />,
        },
        {
          link: "https://firdausaziz93.github.io/",
          icon: <GitHub />,
        },
      ],
    },
    {
      tag: "test2",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FReact_Native&psig=AOvVaw0FU4aWCyRWkvSK0nk5OFkM&ust=1639027619573000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJiNj-y70_QCFQAAAAAdAAAAABAD",
      title: "Project 1",
      desc: "dsfsgsdfsedfdsvsd dgsdf",
      links: [
        {
          link: "https://firdausaziz93.github.io/",
          icon: <GitHub />,
        },

        {
          link: "https://firdausaziz93.github.io/",
          icon: <GitHub />,
        },
        {
          link: "https://firdausaziz93.github.io/",
          icon: <GitHub />,
        },
      ],
    },
  ],

  form: {
    Profile: [
      { name: "name", label: "Name", size: 6 },
      { filler: 6 },
      { name: "dob", label: "Date of Birth", size: 4, type: "date" },
      { filler: 8 },
      { name: "email", label: "Email", size: 6 },
      { filler: 6 },
      { name: "position", label: "position", size: 6 },
      { filler: 6 },
      { name: "noTel", label: "No Tel", size: 6 },
      { filler: 6 },
      {
        name: "address",
        label: "Address",
        size: 12,
        rows: 4,
        multiline: true,
      },
      {
        name: "about",
        label: "About",
        size: 12,
        rows: 4,
        multiline: true,
      },
    ],

    Socials_form: {
      Facebook: [
        { name: "link", label: "Link", size: 8 },
        { filler: 4 },
        { name: "namee", label: "Name", size: 6 },
        { filler: 6 },
        { name: "icon", label: "Icon", size: 6 },
        { filler: 6 },
      ],

      Instagram: [
        { name: "link", label: "Link", size: 8 },
        { filler: 4 },
        { name: "namee", label: "Name", size: 6 },
        { filler: 6 },
        { name: "icon", label: "Icon", size: 6 },
        { filler: 6 },
      ],

      LinkedIn: [
        { name: "link", label: "Link", size: 8 },
        { filler: 4 },
        { name: "namee", label: "Name", size: 6 },
        { filler: 6 },
        { name: "icon", label: "Icon", size: 6 },
        { filler: 6 },
      ],
    },
  },
};

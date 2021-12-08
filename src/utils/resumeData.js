import React from "react";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { AssignmentOutlined, WebOutlined } from "@material-ui/icons";

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
      title: "education 1",
      date: "SEPTEMBER 2020–PRESENT",
      desc: " Writing well designed, testable, efficient code by using software development practice  Maintained current system by updating the code and upload to the server  Perform debugging on web page  Made modification to the database structure for the system using  Involved extensively in Unit Testing and User Acceptance Testing",
    },
    {
      title: "education 2",
      date: "FEB 2019–AUGUST 2020",
      desc: " Develop system that met user requirements by performing system analysis and database design.  Performing code and report development to meet the user requirements.  Perform debugging on web page using React Development Tools.  Involve extensively in Unit Testing and User Acceptance Testing.  Made modification to the database structure for the system using MSSQL Database  Develop Mobile Application by using React Cordova",
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
      desc: ["TortoiseSVN"],
    },
  ],
};

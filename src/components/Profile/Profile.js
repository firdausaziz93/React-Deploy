import { Typography } from "@material-ui/core";
import React from "react";
import "./Profile.css";
import firdaus from "../../assets/images/Firdaus.jpg";
import CustomTimeline, { CustomTimelineSeparator } from "../Timeline/Timeline";
import resumeData from "../../utils/resumeData";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import CustomButton from "../Button/Button";
import GetAppOutlinedIcon from "@material-ui/icons/GetAppOutlined";

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem className={"timeline_firstItem"}>
    <CustomTimelineSeparator />
    <TimelineContent className="timeline_content">
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}: </span>{" "}
          <a href={link} target="_blank">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timelineItem_text">
          <span>{title}:</span> {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>

      <figure className="profile_image">
        <img src={firdaus} alt="" />
      </figure>

      <div className="profile_information">
        <CustomTimeline icon={<PersonOutlineOutlinedIcon />}>
          <CustomTimelineItem title="name" text={resumeData.name} />
          <CustomTimelineItem title="Title" text={resumeData.title} />
          <CustomTimelineItem title="Email" text={resumeData.email} />

          {Object.keys(resumeData.socials).map((key) => (
            <CustomTimelineItem
              title={key}
              text={resumeData.socials[key].text}
              link={resumeData.socials[key].link}
            />
          ))}
        </CustomTimeline>
        <div className="button_container">
          <CustomButton
            text={"Download CV"}
            icon={<GetAppOutlinedIcon />}
          ></CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Profile;

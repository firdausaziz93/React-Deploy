import React from "react";
import "./Resume.css";
import { Grid, Icon, Typography, Paper, TextField } from "@material-ui/core";
import ResumeData from "../../utils/resumeData";
import CustomTimeline, {
  CustomTimelineSeparator,
} from "../../components/Timeline/Timeline";
import WorkIcon from "@material-ui/icons/Work";
import {
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
} from "@material-ui/lab";
import SchoolIcon from "@material-ui/icons/School";
import resumeData from "../../utils/resumeData";
import CustomButton from "../../components/Button/Button";

const Resume = () => {
  return (
    <>
      {/* about me */}
      <Grid container className="section pb_45 pt_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">About Me!</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className="aboutme_text">
            {ResumeData.about}
          </Typography>
        </Grid>
      </Grid>

      {/* education and experiences */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">Resume</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container className="resume_timeline">
            {/* experiences */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Work Experiences" icon={<WorkIcon />}>
                {ResumeData.experiences.map((exp) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {exp.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {exp.date}
                      </Typography>
                      <Typography variant="body2" className="timeline_desc">
                        {exp.desc}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>

            {/* education */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Education" icon={<SchoolIcon />}>
                {ResumeData.education.map((edu) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {edu.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {edu.from}
                      </Typography>
                      <Typography variant="body2" className="timeline_date">
                        {edu.date}
                      </Typography>
                      <Typography variant="body2" className="timeline_desc">
                        {edu.cgpa}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* services */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">My Services</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={3} justify="space-around">
            {ResumeData.services.map((service) => (
              <Grid item xs={12} sm={3} md={3}>
                <div className="service">
                  <Icon className="service_icon">{service.icon}</Icon>
                  <Typography className="service_title" varian="h6">
                    {service.title}
                  </Typography>
                  <Typography className="service_desc" varian="body2">
                    {service.desc}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* skill */}
      <Grid
        container
        justify="space-between"
        className="section graybg pb_45 p_50"
      >
        <Grid item xs={12}>
          <Grid container justify="space-between" spacing={3}>
            {ResumeData.skills.map((skill) => (
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={0} className="skill">
                  <Typography variant="h6" className="skill_title">
                    {skill.title}
                  </Typography>
                  {skill.desc.map((element) => (
                    <Typography variant="body2" className="skill_desc">
                      <TimelineDot
                        variant="outlined"
                        className="timeline_dot"
                      />
                      {element}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* contact */}
      <Grid container spacing={6} className="section pt_45 pb_45">
        <Grid item xs={12} lg={7}>
          <Grid container>
            <Grid item className="section_title mb_30">
              <span></span>
              <h6 className="section_title_text">Contact Form</h6>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name="name" label="Name" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name="email" label="Email" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="message"
                    label="Message"
                    multiline
                    rows={3}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomButton text="Submit" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={5}>
          <Grid container>
            <Grid item className="section_title mb_30">
              <span></span>
              <h6 className="section_title_text">Contact Information</h6>
            </Grid>

            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography className="contact_info_item">
                    <span>Address: </span> {ResumeData.address}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contact_info_item">
                    <span>Phone: </span> {ResumeData.phone}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contact_info_item">
                    <span>Email: </span> {ResumeData.email}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container className="contactInfo_socialsContainer">
                {Object.keys(ResumeData.socials).map((key) => (
                  <Grid item className="contactInfo_social">
                    <a href={resumeData.socials[key].link}>
                      {resumeData.socials[key].icon}
                    </a>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Resume;

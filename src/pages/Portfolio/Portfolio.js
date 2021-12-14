import { Grid, Tabs, Tab, TextField, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Portfolio.css";
import resumeData from "../../utils/resumeData";
import * as Axios from "axios";
import CustomButton from "../../components/Button/Button";
import moment from "moment";

const Portfolio = () => {
  const [tabValue, setTabValue] = useState("Profile");
  const [profile, setProfile] = useState({
    name: "",
    dob: "",
    email: "",
    position: "",
    noTel: "",
    address: "",
    about: "",
  });
  const [social, setSocial] = useState({
    link: "",
    name: "",
    icon: "",
  });

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      const temp = { ...response.data[0] };
      const tempProfile = {
        name: temp.profile_name,
        dob: moment(temp.profile_DOB).format("YYYY-MM-DD"),
        email: temp.profile_email,
        position: temp.profile_position,
        noTel: temp.profile_no_phone,
        address: temp.profile_address,
        about: temp.profile_about,
      };
      setProfile(tempProfile);
      console.log(response.data[0]);
    });
  }, []);

  const submitProfile = () => {
    Axios.post("http://localhost:3001/api/insert", {
      // profile_name: profile.name,
      // profile_DOB: profile.dob,
      // profile_position: profile.position,
      // profile_no_phone: profile.noTel,
      // profile_address: profile.address,
      // profile_about: profile.about,
      profile: profile,
    }).then(() => {
      alert("Succesful Insert");
    });
  };

  const submitSocial = () => {
    Axios.post("http://localhost:3001/api/insertSocial", {
      Social: profile,
    }).then(() => {
      alert("Succesful Insert");
    });
  };

  function handleChange(e) {
    const temp = { ...profile, ...social };
    temp[e.currentTarget.name] = e.currentTarget.value;
    setProfile({ ...temp });
    setSocial({ ...temp });
  }
  console.log(profile);
  return (
    <Grid container className="section pb_45 pt_45">
      {/* title */}
      <Grid item className="section_title mb_30">
        <span></span>
        <h6 className="section_title_text">Portfolio</h6>
      </Grid>

      {/* tab */}
      <Grid item xs={12}>
        <Tabs
          value={tabValue}
          // indicatorColor="white"
          className="custom_tabs"
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          <Tab
            label="Profile"
            value="Profile"
            className={
              tabValue == "Profile" ? "customTab_item active" : "customTab_item"
            }
          />
          <Tab
            label="Social"
            value="Social"
            className={
              tabValue == "Profile" ? "customTab_item active" : "customTab_item"
            }
          />
          <Tab
            label="Experiences"
            value="Experiences"
            className={
              tabValue == "Profile" ? "customTab_item active" : "customTab_item"
            }
          />
          <Tab
            label="Education"
            value="Education"
            className={
              tabValue == "Profile" ? "customTab_item active" : "customTab_item"
            }
          />
        </Tabs>
      </Grid>

      {/* form */}
      <Grid item xs={12}>
        <div>
          {tabValue == "Profile" ? (
            <Grid container className="pb_45 pt_45" spacing={2}>
              {resumeData.form.Profile.map((key) =>
                key.filler ? (
                  <Grid item xs={key.filler}></Grid>
                ) : (
                  <Grid item xs={key.size}>
                    <TextField
                      fullWidth
                      name={key.name}
                      label={key.label}
                      type={key.type}
                      variant="outlined"
                      multiline={key.multiline == true ? true : false}
                      rows={key.rows}
                      onChange={handleChange}
                      autoFocus={true}
                      value={profile[key.name] || ""}
                    />
                  </Grid>
                )
              )}
              <Grid item xs={12}>
                <CustomButton text="Update" onclick={submitProfile} />
              </Grid>
            </Grid>
          ) : null}
        </div>
      </Grid>

      <Grid item xs={12}>
        <div>
          {tabValue == "Social" ? (
            <Grid container className="pb_45 pt_45" spacing={2}>
              <Grid item xs={12}>
                <Typography>Facebook</Typography>
              </Grid>
              {resumeData.form.Socials_form.Facebook.map((key) =>
                key.filler ? (
                  <Grid item xs={key.filler}></Grid>
                ) : (
                  <Grid item xs={key.size}>
                    <TextField
                      fullWidth
                      name={key.name}
                      label={key.label}
                      type={key.type}
                      variant="outlined"
                      multiline={key.multiline == true ? true : false}
                      rows={key.rows}
                      onChange={handleChange}
                      autoFocus={true}
                      value={social[key.name] || ""}
                    />
                  </Grid>
                )
              )}
              <Grid item xs={12}>
                <Typography>Instagram {social.value}</Typography>
              </Grid>
              {resumeData.form.Socials_form.Instagram.map((key) =>
                key.filler ? (
                  <Grid item xs={key.filler}></Grid>
                ) : (
                  <Grid item xs={key.size}>
                    <TextField
                      fullWidth
                      name={key.name}
                      label={key.label}
                      type={key.type}
                      variant="outlined"
                      multiline={key.multiline == true ? true : false}
                      rows={key.rows}
                      onChange={handleChange}
                      autoFocus={true}
                      value={profile[key.name] || ""}
                    />
                  </Grid>
                )
              )}
              <Grid item xs={12}>
                <Typography>LinkedIn</Typography>
              </Grid>
              {resumeData.form.Socials_form.LinkedIn.map((key) =>
                key.filler ? (
                  <Grid item xs={key.filler}></Grid>
                ) : (
                  <Grid item xs={key.size}>
                    <TextField
                      fullWidth
                      name={key.name}
                      label={key.label}
                      type={key.type}
                      variant="outlined"
                      multiline={key.multiline == true ? true : false}
                      rows={key.rows}
                      onChange={handleChange}
                      autoFocus={true}
                      value={profile[key.name] || ""}
                    />
                  </Grid>
                )
              )}
              <Grid item xs={12}>
                <CustomButton text="Update" onclick={submitProfile} />
              </Grid>
            </Grid>
          ) : null}
        </div>
      </Grid>
    </Grid>
  );
};

export default Portfolio;

{
  /* <Grid item xs={12} sm={6}>
                <TextField fullWidth name="name" label="Name" />
              </Grid>
              <Grid item xs={12} sm={6}></Grid>
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
              </Grid> */
}

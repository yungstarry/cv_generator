import React, { Component } from "react";
import uniqid from "uniqid";

class Experience extends Component {
  constructor() {
    super();

    this.state = {
      company: "",
      title: "",
      startDate: "",
      endDate: "",
      location: "",
      desc: "",
      experience: [
        {
          id: uniqid(),
          company: "WebTech Solutions",
          title: "Web Developer",
          date: "Jan 2018 - Dec 2020",
          location: "Lagos, Nigeria",
          desc: "Developed and maintained responsive web applications using modern front-end technologies, collaborated with cross-functional teams to implement client requirements, and optimized website performance for enhanced user experience.",
        },

        {
          id: uniqid(),
          company: "TechNexus Digital",
          title: "Front-end Developer",
          date: "Mar 2021 - Present",
          location: "Abuja, Nigeria",
          desc: "Designed and implemented user-friendly interfaces, integrated APIs to enhance website functionality, and performed code reviews and quality assurance to ensure high-quality code standards.",
        },

        {
          id: uniqid(),
          company: "Creative Web Solutions",
          title: "Full-stack Web Developer",
          date: "Jul 2017 - Feb 2021",
          location: "Port Harcourt, Nigeria",
          desc: "Collaborated with a team of developers to create scalable web applications, developed RESTful APIs for seamless data integration, and implemented security measures to protect sensitive user information.",
        },
      ],
      edit: false,
    };
  }
  handleCompanyChange = (e) => {
    this.setState({
      company: e.target.value,
    });
  };
  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  handleStartDateChange = (e) => {
    this.setState({
      startDate: e.target.value,
    });
  };
  handleEndDateChange = (e) => {
    this.setState({
      endDate: e.target.value,
    });
  };
  handleLocationChange = (e) => {
    this.setState({
      location: e.target.value,
    });
  };
  handleDescChange = (e) => {
    this.setState({
      desc: e.target.value,
    });
  };

  onSubmitExperience = (e) => {
    e.preventDefault();
    this.setState({
      experience: this.state.experience.concat({
        id: uniqid(),
        company: this.state.company,
        title: this.state.title,
        date: this.state.startDate + " - " + this.state.endDate,
        location: this.state.location,
        desc: this.state.desc,
      }),
      company: "",
      title: "",
      startDate: "",
      endDate: "",
      location: "",
      desc: "",
    });
    this.toggleEdit();
  };

  toggleEdit = () => {
    this.setState((prevState) => ({
      edit: !prevState.edit,
    }));
  };

  handleRemove = (key) => {
    const newExp = this.state.experience.filter((exp) => exp.id !== key);

    this.setState({
      experience: newExp,
    });
  };

  render() {
    const {
      company,
      title,
      startDate,
      endDate,
      location,
      desc,
      experience,
      edit,
    } = this.state;
    return (
      <div id="Experience">
        <h2>Experience</h2>
        {experience.map((exp) => {
          return (
            <div key={exp.id} onClick={() => this.handleRemove(exp.id)}>
              <div>
                <p className="experience-date">{exp.date}</p>
                <p className="experience-title">{exp.title}</p>
              </div>
              <div>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-location">{exp.location}</p>
                <p className="experience-desc">{exp.desc}</p>
              </div>
            </div>
          );
        })}
        <button className="edit-toggle" type="button" onClick={this.toggleEdit}>
          Add
        </button>

        {edit && (
          <form id="experience-add" className="edit-form">
            <label htmlFor="company">Company</label>
            <input
              id="company"
              type="text"
              value={company}
              onChange={this.handleCompanyChange}
            />
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={this.handleTitleChange}
            />
            <label htmlFor="start-date">Start Date</label>
            <input
              id="start-date"
              type="text"
              value={startDate}
              onChange={this.handleStartDateChange}
            />
            <label htmlFor="end-date">End Date</label>
            <input
              id="end-date"
              type="text"
              value={endDate}
              onChange={this.handleEndDateChange}
            />
            <label htmlFor="location">Location</label>
            <input
              id="location"
              type="text"
              value={location}
              onChange={this.handleLocationChange}
            />
            <label htmlFor="desc">Description</label>
            <input
              id="desc"
              type="text"
              value={desc}
              onChange={this.handleDescChange}
            />
            <button type="button" onClick={this.onSubmitExperience}>
              {" "}
              Add Experience
            </button>

            <button type="button" onClick={this.toggleEdit}>
              Close
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default Experience;

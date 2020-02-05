import React, { Component } from "react"
import FormInput from "../FormInput/FormInput"
import Select from "react-select"

import "./form.scss"

class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    trip: "",
    bookingReference: "",
    additionalInfo: "",
    selectedOption: null,
  }

  handleSubmit = async event => {
    event.preventDefault()
  }

  handleChange = event => {
    const { value, name } = event.target

    this.setState({ [name]: value })
  }

  handleSelectedOption = selectedOption => {
    this.setState({ selectedOption })
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      phone,
      trip,
      bookingReference,
      additionalInfo,
    } = this.state

    const { selectedOption } = this.state

    const options = [
      { label: "New Booking", value: 1 },
      { label: "Current Booking", value: 2 },
      { label: "Self Guided", value: 3 },
      { label: "Feedback about your trip", value: 4 },
      { label: "Payments & Insurance", value: 5 },
      { label: "Tickets & Joining information", value: 6 },
    ]

    return (
      <div className="container">
        <section className="contact-form">
          <div className="contact-form__box-left">
            <h2 className="contact-form__box-left__title">Give Us A Call</h2>

            <div className="contact-form__box-left__address">
              <p>2324 Traveler Road</p>
              <p>London E8 4AH</p>
            </div>

            <div className="contact-form__box-left__phone-email">
              <p className="contact-form__phone">+44 (0)7966 266711</p>
              <p className="contact-form__email">
                For any enquiries please write to us at{" "}
                <a href="mailto:hello@traveler.co.uk">hello@traveler.co.uk</a>
              </p>
            </div>

            <div className="contact-form__box-left__info">
              <p>
                Call us on any of the local numbers to save international
                calling fees and you will be redirected to our local office. See
                our office hours and phone number.
              </p>
            </div>
          </div>
          <form className="form" onSubmit={this.handleSubmit}>
            <h2 className="form__title">Drop Us A Note</h2>

            <FormInput
              type="text"
              name="firstName"
              value={firstName}
              handleChange={this.handleChange}
              label="First Name"
              required
            />
            <FormInput
              type="text"
              name="lastName"
              value={lastName}
              handleChange={this.handleChange}
              label="Last Name"
              required
            />
            <FormInput
              type="email"
              name="email"
              value={email}
              handleChange={this.handleChange}
              label="Email Address"
              required
            />
            <FormInput
              type="text"
              name="phone"
              value={phone}
              handleChange={this.handleChange}
              label="Contact Number"
              required
            />
            <FormInput
              type="text"
              name="trip"
              value={trip}
              handleChange={this.handleChange}
              label="Trip Name"
              required
            />
            <FormInput
              type="text"
              name="bookingReference"
              value={bookingReference}
              handleChange={this.handleChange}
              label="Booking Reference"
              required
            />
            <Select
              className="select"
              value={selectedOption}
              onChange={this.handleSelectedOption}
              options={options}
              placeholder={"Enquiry type"}
              theme={theme => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: "#fff",
                  neutral20: "grey",
                  neutral40: "#1abc9c",
                  neutral50: "#1abc9c",
                  primary50: "#87fae3",
                  primary: "#1abc9c",
                },
              })}
            />
            <FormInput
              type="text"
              name="additionalInfo"
              value={additionalInfo}
              handleChange={this.handleChange}
              label="Additional Information"
              required
            />

            <button className="btn-primary form__btn">Submit</button>
          </form>
        </section>
      </div>
    )
  }
}

export default Form

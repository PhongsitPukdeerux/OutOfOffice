import React, { useState } from "react";

const ContactForm = () => {
  // Define the Slack Incoming Webhook URL as a constant
  const SLACK_WEBHOOK_URL = "YOUR_SLACK_WEBHOOK_URL";

  // State to manage form data and submission status
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    businessName: "",
    industry: "",
    services: "",
    budget: "",
    projectDetails: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission to Slack
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSubmitted(false);

    // Format the form data into a message for Slack
    const slackMessage = `
        *New Contact Form Submission*
        *First Name*: ${formData.firstName}
        *Last Name*: ${formData.lastName}
        *Email Address*: ${formData.email}
        *Business Name*: ${formData.businessName}
        *Industry*: ${formData.industry}
        *Services*: ${formData.services || "N/A"}
        *Budget*: ${formData.budget || "N/A"}
        *Project Details*:
        ${formData.projectDetails}
    `;

    try {
      const response = await fetch(SLACK_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: slackMessage }),
      });

      if (response.ok) {
        setSubmitted(true);
        // Clear the form after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          businessName: "",
          industry: "",
          services: "",
          budget: "",
          projectDetails: "",
        });
      } else {
        setError(true);
      }
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="ContactUs"
      className="w-full py-16 px-4 md:px-8 lg:px-16 bg-white font-helvetica"
    >
      <div className="container mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
        {/* Left Column: Heading and Description */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-6xl font-sans sm:text-7xl text-blue mb-1">
            Collab with  <span className="font-pixel-script">U</span>s !
          </h1>
          <p className="text-xl ml-3 text-black">
            Let’s make things lo:ook go:ood – that actually work.
          </p>
        </div>

        {/* Right Column: The Form */}
        <div className="w-full lg:w-1/2">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Form submission status messages */}
            {submitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md relative text-center">
                Your message has been sent successfully!
              </div>
            )}
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md relative text-center">
                There was an error sending your form. Please try again.
              </div>
            )}

            {/* First Name & Last Name */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-full">
                <label
                  htmlFor="firstName"
                  className="block text-sm text-gray-700 mb-1"
                >
                  First Name <span className="text-red-600">*</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="John"
                  className="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="lastName"
                  className="block text-sm text-gray-700 mb-1"
                >
                  Last Name <span className="text-red-600">*</span>
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                  className="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-700 mb-1"
              >
                Email Address <span className="text-red-600">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="john.doe@example.com"
                className="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Business Name & Industry */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-full">
                <label
                  htmlFor="businessName"
                  className="block text-sm text-gray-700 mb-1"
                >
                  Business Name
                </label>
                <input
                  id="businessName"
                  name="businessName"
                  type="text"
                  placeholder="Your Business Inc."
                  className="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue"
                  value={formData.businessName}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="industry"
                  className="block text-sm text-gray-700 mb-1"
                >
                  Industry
                </label>
                <input
                  id="industry"
                  name="industry"
                  type="text"
                  placeholder="Tech, Retail, etc."
                  className="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue"
                  value={formData.industry}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Services Dropdown */}
            <div>
              <label
                htmlFor="services"
                className="block text-sm text-gray-700 mb-1"
              >
                What services are you interested in?
              </label>
              <select
                id="services"
                name="services"
                className="w-full px-5 py-3 border border-gray-300 rounded-2xl text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue"
                value={formData.services}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option>Branding/Logo</option>
                <option>Social Media</option>
                <option>Digital Products</option>
                <option>Marketing</option>
                <option>Collaterals</option>
                <option>Other</option>
              </select>
            </div>

            {/* Budget Input */}
            <div>
              <label
                htmlFor="budget"
                className="block text-sm text-gray-700 mb-1"
              >
                Do you have a specific budget?
              </label>
              <input
                id="budget"
                name="budget"
                type="text"
                placeholder="$5,000 - $10,000"
                className="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue"
                value={formData.budget}
                onChange={handleChange}
              />
            </div>

            {/* Project Details */}
            <div>
              <label
                htmlFor="projectDetails"
                className="block text-sm text-gray-700 mb-1"
              >
                Project Details <span className="text-red-600">*</span>
              </label>
              <textarea
                id="projectDetails"
                name="projectDetails"
                placeholder="Tell us more about the project"
                rows="3"
                className="w-full px-5 py-3 border border-gray-300 rounded-3xl resize-none focus:outline-none focus:ring-2 focus:ring-blue"
                value={formData.projectDetails}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue text-white text-4xl font-bold rounded-2xl hover:bg-blue transition duration-300 ease-in-out"
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

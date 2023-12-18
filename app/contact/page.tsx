"use client";
import { useState } from "react";

type formInputType = {
  firstName: string;
  lastName: string;
  email: string;
  query: string;
};

const Contact = () => {
  const [formInput, setFormInput] = useState<formInputType>({
    firstName: "",
    lastName: "",
    email: "",
    query: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormInput(
      (prevFormInput) => ({
      ...prevFormInput,
      [name]: value,
    })
    );
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
      body: JSON.stringify({
        firstName: formInput.firstName,
        lastName: formInput.lastName,
        email: formInput.email,
        comment: formInput.query
      }), // Convert the object to JSON string
    });
  };

  return (
    <div className="bg-gradient-to-r from-purple-900 to-blue-900">
      {/* Contact us text block */}
      <div className="flex justify-center pt-8">
        <div className="bg-white rounded-lg p-8 basis-[30%] bg-opacity-30 backdrop-filter backdrop-blur-lg">
          <div className="text-center">
            <h1 className="Heading1">Contact Us</h1>
          </div>
          <div>
            <p className="text-center text text-sky-700  px-2">TEXT HERE</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full p-8">
        <form className="max-w-2xl pt-3 space-y-3" onSubmit={handleSubmit}>
          <div className="flex  space-x-3">
            <input
              placeholder="First Name"
              className="custom_placeholder rounded-lg basis-1/2 border-2 border-sky-200"
              type="text"
              id="first_name"
              name="firstName"
              onChange={handleChange}
            />

            <input
              placeholder="Last Name"
              className="custom_placeholder rounded-lg border-2 basis-1/2 border-sky-200"
              type="text"
              id="last_name"
              name="lastName"
              onChange={handleChange}
            />
          </div>

          <input
            placeholder="Email"
            className="custom_placeholder rounded-lg w-full border-2 border-sky-200"
            type="text"
            id="email"
            name="email"
            onChange={handleChange}
          />

          <textarea
            rows={5}
            placeholder="Enter Comments Here..."
            className="custom_placeholder rounded-lg w-full border-2 border-sky-200"
            id="query"
            name="query"
            onChange={handleChange}
          />

          {/* SORT SUBMIT FORM BUTTON */}
          <button type="submit" className="button1">SUBMIT</button>
        </form>

        
      </div>
    </div>
  );
};

export default Contact;

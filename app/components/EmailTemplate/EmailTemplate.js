import React from "react";

const EmailTemplate = (formData) => {
  return `<div>
      <h3 className="text-xl text-cyan-900">
        New Message from ${formData?.name}
      </h3>
      <p className="text-cyan-700">
        <strong>Email:</strong> ${formData?.email}
      </p>
      <p className="text-cyan-700">
        <strong>Message:</strong>
      </p>
      <p className="text-cyan-700">${formData?.message}</p>
    </div>`;
};

export default EmailTemplate;

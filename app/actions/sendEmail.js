"use server";
import nodemailer from "nodemailer";

//  Configure transporter
const transporter = nodemailer.createTransport({
  // service: "gmail", // or use SMTP config
  host: "smtp.gmail.com",
  port: 587,
  secure:true,
  auth: {
    user: `${process.env.EMAIL_USER}`,
    pass: `${process.env.EMAIL_PASS}`,
  },
});

export const sendEmail = async (formData) => {
  console.log("From SendEmail Function: FormData is:", formData);
  try {
    const result = await transporter.sendMail({
      from: `${formData?.name} <${formData?.email}>`,
      to: "ekhlas.hclawyer@gmail.com",
      subject: `${formData?.subject}`,
      text: `Consult With You...`,
      html: `<div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 30px;">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        <tr>
          <td style="padding: 20px 30px;">
            <h2 style="margin: 0; font-size: 24px; color: #333;">📩 New Contact Form Submission</h2>
            <p style="margin: 10px 0 20px; font-size: 14px; color: #666;">You’ve received a new message from your website contact form.</p>

            <table cellpadding="0" cellspacing="0" style="width: 100%; font-size: 14px; color: #444;">
              <tr>
                <td style="padding: 8px 0;"><strong>Name:</strong></td>
                <td style="padding: 8px 0;">${formData?.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Email:</strong></td>
                <td style="padding: 8px 0;">${formData?.email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Mobile:</strong></td>
                <td style="padding: 8px 0;">${formData?.mobile}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Subject:</strong></td>
                <td style="padding: 8px 0;">${formData?.subject}</td>
              </tr>
            </table>

            <div style="margin-top: 20px;">
              <p style="font-size: 14px; color: #333; margin-bottom: 6px;"><strong>Message:</strong></p>
              <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #007BFF; border-radius: 4px; font-size: 14px; color: #555;">
                ${formData?.message}
              </div>
            </div>

            <p style="margin-top: 30px; font-size: 12px; color: #999;">This message was sent from your website contact form.</p>
          </td>
        </tr>
      </table>
    </div>`,
    });

    return result;
  } catch (error) {
    console.error("Email error:", error);
    throw error;
  }
};

// ekhlas.hclawyer@gmail.com
// bellalhossen1978@gmail.com

// {
//   name: 'Saria Afreen Amy',
//   email: 'saria@afreen.com',
//   mobile: '01911319505',
//   subject: 'Vat Issue and Tax',
//   message: 'I Want to connsult you about my vat issue....'
// }

{
  /* <div>
    <h3>New Message from ${formData?.name}</h3>
    <p><strong>Email:</strong> ${formData?.email}</p>
    <p><strong>Mobile:</strong> ${formData?.mobile}</p>
    <p><strong>Message:</strong></p>
    <p className="text-red-800 text-xl">${formData?.message}</p>
  </div> */
}

// More Beautiful Design

// export function generateContactEmail({ name, email, mobile, subject, message }) {
//   return `
//     <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 30px;">
//       <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
//         <tr>
//           <td style="padding: 20px 30px;">
//             <h2 style="margin: 0; font-size: 24px; color: #333;">📩 New Contact Form Submission</h2>
//             <p style="margin: 10px 0 20px; font-size: 14px; color: #666;">You’ve received a new message from your website contact form.</p>

//             <table cellpadding="0" cellspacing="0" style="width: 100%; font-size: 14px; color: #444;">
//               <tr>
//                 <td style="padding: 8px 0;"><strong>Name:</strong></td>
//                 <td style="padding: 8px 0;">${name}</td>
//               </tr>
//               <tr>
//                 <td style="padding: 8px 0;"><strong>Email:</strong></td>
//                 <td style="padding: 8px 0;">${email}</td>
//               </tr>
//               <tr>
//                 <td style="padding: 8px 0;"><strong>Mobile:</strong></td>
//                 <td style="padding: 8px 0;">${mobile}</td>
//               </tr>
//               <tr>
//                 <td style="padding: 8px 0;"><strong>Subject:</strong></td>
//                 <td style="padding: 8px 0;">${subject}</td>
//               </tr>
//             </table>

//             <div style="margin-top: 20px;">
//               <p style="font-size: 14px; color: #333; margin-bottom: 6px;"><strong>Message:</strong></p>
//               <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #007BFF; border-radius: 4px; font-size: 14px; color: #555;">
//                 ${message}
//               </div>
//             </div>

//             <p style="margin-top: 30px; font-size: 12px; color: #999;">This message was sent from your website contact form.</p>
//           </td>
//         </tr>
//       </table>
//     </div>
//   `;
// }

// Previous Design

// `<div style="font-family: Arial, sans-serif; padding: 20px;">
//   <h3 style="color: #333;">New Message from ${formData?.name}</h3>
//   <p><strong>Email:</strong> ${formData?.email}</p>
//   <p><strong>Mobile:</strong> ${formData?.mobile}</p>
//   <p><strong>Message:</strong></p>
//   <p style="color: #b91c1c; font-size: 16px;">${formData?.message}</p>
// </div>`

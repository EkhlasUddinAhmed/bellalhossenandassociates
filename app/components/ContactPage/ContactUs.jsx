"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendEmail } from "@/app/actions/sendEmail";
import { useState } from "react";
import LoadingModal from "../LoadingModal/LoadingModal";
import { ToastContainer, toast } from "react-toastify";
// ✅ Zod Schema
const contactSchema = z.object({
  name: z
    .string()
    .min(3, "Name  must have at least 3 characters")
    .max(30, "Name  should not be more than 30 characters"),

  email: z.email("Invalid email address"),
  mobile: z
    .string()
    .min(11, "Mobile Number  must have 11 characters")
    .max(11, "Mobile Number should not be more than 11 characters"),
  subject: z
    .string()
    .min(10, "Subject  must have at least 10 characters")
    .max(50, "Subject  should not be more than 50 characters"),
  message: z
    .string()
    .min(10, "Message  must have at least 10 characters")
    .max(1000, "Message  should not be more than 1000 characters"),
});

const ContactUs = () => {
  const [sendEmailLoading, setSendEmailLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    setSendEmailLoading(true);
    try {
      console.log("Form Submitted:", data);
      const result = await sendEmail(data);
      console.log("Email Response is:", result);
      reset();
    } catch (error) {
      console.log("Email Error is:", error);
    } finally {
      setSendEmailLoading(false);
      toast("Your Email is Successfully Sent");
    }
  };

  return (
    <>
      {sendEmailLoading && <LoadingModal />}
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-stone-100 flex items-center justify-center px-6 py-16">
        <div className="max-w-xl w-full space-y-8 bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 uppercase tracking-wide">
            Contact Us
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Your Name"
                {...register("name")}
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors?.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Your Email"
                {...register("email")}
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors?.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            {/* Mobile */}
            <div>
              <input
                type="text"
                placeholder="Your Mobile Number"
                {...register("mobile")}
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors?.mobile && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.mobile.message}
                </p>
              )}
            </div>
            {/* Message Subject */}
            <div>
              <input
                type="text"
                placeholder="Your Message Subject"
                {...register("subject")}
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors?.subject && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.subject.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                placeholder="Your Message"
                rows={5}
                {...register("message")}
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors?.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="text-center text-sm text-gray-600 pt-6 border-t">
            <p>
              <strong>Phone:</strong> +88 01937896468,01745309814
            </p>
            <p>
              <strong>Email:</strong> bellalhossen1978@gmail.com
            </p>
            <p>
              <strong>Location:</strong> Confidence Center, Shahjadpur, Gulshan
            </p>
          </div>
        </div>
      </main>
      <ToastContainer />
    </>
  );
};
export default ContactUs;

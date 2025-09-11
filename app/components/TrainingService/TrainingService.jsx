import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import TrainingCard from "./TrainingCard";

const trainService = [
  {
    id: "1",
    title: "Hands-on VAT training is provided.",
    bTitle: "হাতে-কলমে ভ্যাট প্রশিক্ষণ দেওয়া হয়",
    description:
      'Hands-on" implies practical, experience-based learning — not just theory, but real-world application through guided practice.',
    bDescription:
      'হাতে-কলমে" বলতে বোঝায় বাস্তব অভিজ্ঞতার মাধ্যমে, হাতে-কলমে কাজ করে শেখানো হয় — শুধু তত্ত্ব নয়, বাস্তব প্রয়োগও।',
  },
  {
    id: "2",
    title: "Specialized Advisory Services for Sick & Emerging Companies",
    bTitle: "রুগ্ন শিল্প ও উন্নয়নশীল কোম্পানির বিশেষ পরামর্শ সেবা",
    description:
      "We offer tailored consultancy for struggling industrial units and growth-stage companies — helping them overcome financial, tax, and operational challenges to achieve sustainable development",
    bDescription:
      "আমরা রুগ্ন শিল্প প্রতিষ্ঠান এবং উন্নয়নশীল কোম্পানিগুলোর জন্য কাস্টমাইজড পরামর্শ সেবা প্রদান করি — যাতে তারা আর্থিক, কর ও প্রশাসনিক চ্যালেঞ্জ মোকাবিলা করে টেকসই উন্নয়নের পথে এগিয়ে যেতে পারে।",
  },
];

const TrainingService = () => {
  return (
    <div className="my-30 mt-48">
      <SectionTitle
        heading="Our Training Service"
        subHeading="In Our Firm"
        textColor=""
      />

      <div className="mt-4  grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-10 px-5">
        {trainService?.map((service) => (
          <TrainingCard key={service.id} service={service} />
        ))}
        {/* <TrainingCard />
        <TrainingCard /> */}
      </div>
    </div>
  );
};

export default TrainingService;

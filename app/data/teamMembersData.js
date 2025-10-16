import billalImage from "@/public/images/billal2.jpeg";
import ayeshaImage from "@/public/images/MonirulIslam.jpeg";
import raifulImage from "@/public/images/Raihan.png";
import ekhlasImage from "@/public/images/Ekhlas.jpeg";


const teamMembers = [
  {
    id: "1",
    name: "Billal Hossain",
    role: "CEO & Lead Consultant ",
    bio: "A distinguished expert in Income Tax, VAT, Accounting,Finance and Internal Audit.",
    photo: billalImage,
  },
  {
    id: "2",
    name: "Mohammad Monirul Islam",
    role: "Senior Consultant (External)",
    bio: "Crafts intuitive interfaces with SVG magic and responsive layouts.",
    photo: ayeshaImage,
  },
  {
    id: "3",
    name: "Syed Nahid Hossain",
    role: "Senior Consultant ",
    bio: "Specialist in Express, REST APIs, and secure auth flows.",
    photo: ekhlasImage,
  },
  {
    id: "4",
    name: "Md Abdullah Al Masud",
    role: "DevOps & Deployment",
    bio: "Ensures smooth CI/CD and scalable cloud infrastructure.",
    photo: raifulImage,
  },
  {
    id: "5",
    name: "Md Yousuf Hossain",
    role: "DevOps & Deployment",
    bio: "Ensures smooth CI/CD and scalable cloud infrastructure.",
    photo: raifulImage,
  },
  {
    id: "6",
    name: "Md Soheb",
    role: "DevOps & Deployment",
    bio: "Ensures smooth CI/CD and scalable cloud infrastructure.",
    photo: raifulImage,
  },
  {
    id: "7",
    name: "FatemaTuz Zohora Runa",
    role: "DevOps & Deployment",
    bio: "Ensures smooth CI/CD and scalable cloud infrastructure.",
    photo: raifulImage,
  },
  {
    id: "8",
    name: "Md Harun Ur Rashid",
    role: "DevOps & Deployment",
    bio: "Ensures smooth CI/CD and scalable cloud infrastructure.",
    photo: raifulImage,
  },
  {
    id: "9",
    name: "Saiful Islam Sakin",
    role: "DevOps & Deployment",
    bio: "Ensures smooth CI/CD and scalable cloud infrastructure.",
    photo: raifulImage,
  },

  {
    id: 10,
    name: "Nazrul Islam Khan",
    role: "DevOps & Deployment",
    bio: "Ensures smooth CI/CD and scalable cloud infrastructure.",
    photo: raifulImage,
  },
];

export const getAllTeamMembers = () => {
  return teamMembers;
};

export const getSingleTeamMemberById = (memberId) => {
  const teamMember = teamMembers.find((member) => member.id === memberId);
  return teamMember;
};

// Detailed Team Members Data.................

import billalImage2 from "@/public/images/billal.jpeg";
const detailedTeamMembers = [
  {
    memberId: "1",
    name: "Bellal Hossen",
    officialRank: "Chief Executive Officer (CEO)",
    description:
      "A distinguished expert in Income Tax, VAT, Accounting,Finance and Internal Audit. He  has a proven track record of provoding exceptional service to a diverge range of domestic and foreign companies.",
    email: "bellalhossen1978@gmail.com",
    mobile: "+880 1937896468, 1745309814",
    image: billalImage2,
    qualifications: [
      "CMA (Australia) – The Institute of Certified Management Accountants, Australia",
      "CA (Knowledge Level) – The Institute of Chartered Accountants of Bangladesh",
      "Income Tax Practitioner (ITP) – National Board of Revenue (NBR), Bangladesh",
      "Member, Dhaka Taxes Bar Assiciation",
      "M.Com (Accounting) – Chittagong Commerce College, National University",
      "B.Com (Pass) – Chittagong City College, National University",
      "Income Tax Practitioner(ITP) Certified By NBR",
      
    ],
    careerHighlights: [
      {
        organization: "Bags and Packs Int.Ltd",
        role: "General Manager (Finance & Accounts) ",
        period: "2017–2023",
      },
      
      {
        organization: "Bashundhara Industrial Complex (Bashundhara Cement)",
        role: "Manager (Finance & Accounts)",
        period: "2012–2017",
      },
      {
        organization: "Building Technology & Ideas Ltd",
        role: "Sr. Executive (Accounts) ",
        period: "2006–2012",
      },
      {
        organization: "DBL Group Ltd",
        role: "Executive (Internal Audit) ",
        period: "2004–2006",
      },
    ],
  },
  {
    memberId: "2",
    name: "Monirul Islam",
    officialRank: "Senior Consultant (External)",
    description:
      "A distinguished expert in Income Tax, VAT, Accounting,Finance and Internal Audit. He  has a proven track record of provoding exceptional service to a diverge range of domestic and foreign companies.",
    email: "bellalhossen1978@gmail.com",
    mobile: "+880 1937896468, 1745309814",
    image: billalImage2,
    qualifications: ["ACA, ", "CMA(AUS)", "M.Com", "ITP"],
    careerHighlights: [
      {
        organization: "Bags and Packs Int.Ltd",
        role: "Chief Financial Oficer (CFO)",
        period: "2020 – Present",
      },
      {
        organization: "Olila Glass Int.Ltd",
        role: "Assistant General manager(AGM) Finance and Accounts(F&A)",
        period: "2016 – 2020",
      },
      {
        organization: "Bashundhara Industrial Complex (Bashundhara Cement)",
        role: "Manager, Finance and Accounts(F&A)",
        period: "2014 – 2016",
      },
      {
        organization: "DBL Group,Kai-Altech Group,RTV,BTI",
        role: "Provide Expertise in Finance Department",
        period: "2014 – 2016",
      },
    ],
  },
  {
    memberId: "3",
    name: "Bellal Hossen",
    officialRank: "Chief Executive Officer (CEO)",
    description:
      "A distinguished expert in Income Tax, VAT, Accounting,Finance and Internal Audit. He  has a proven track record of provoding exceptional service to a diverge range of domestic and foreign companies.",
    email: "bellalhossen1978@gmail.com",
    mobile: "+880 1937896468, 1745309814",
    image: billalImage2,
    qualifications: [
      "Member,Certified Management Accountant(CMA),AUS",
      "M.Com in Accounting",
      "CA Partly Qualified ",
      "Income Tax Practitioner(ITP) Certified By NBR",
      "Member, Dhaka Taxes Bar Assiciation",
    ],
    careerHighlights: [
      {
        organization: "Bags and Packs Int.Ltd",
        role: "Chief Financial Oficer (CFO)",
        period: "2020 – Present",
      },
      {
        organization: "Olila Glass Int.Ltd",
        role: "Assistant General manager(AGM) Finance and Accounts(F&A)",
        period: "2016 – 2020",
      },
      {
        organization: "Bashundhara Industrial Complex (Bashundhara Cement)",
        role: "Manager, Finance and Accounts(F&A)",
        period: "2014 – 2016",
      },
      {
        organization: "DBL Group,Kai-Altech Group,RTV,BTI",
        role: "Provide Expertise in Finance Department",
        period: "2014 – 2016",
      },
    ],
  },
  {
    memberId: "4",
    name: "Bellal Hossen",
    officialRank: "Chief Executive Officer (CEO)",
    description:
      "A distinguished expert in Income Tax, VAT, Accounting,Finance and Internal Audit. He  has a proven track record of provoding exceptional service to a diverge range of domestic and foreign companies.",
    email: "bellalhossen1978@gmail.com",
    mobile: "+880 1937896468, 1745309814",
    image: billalImage2,
    qualifications: [
      "Member,Certified Management Accountant(CMA),AUS",
      "M.Com in Accounting",
      "CA Partly Qualified ",
      "Income Tax Practitioner(ITP) Certified By NBR",
      "Member, Dhaka Taxes Bar Assiciation",
    ],
    careerHighlights: [
      {
        organization: "Bags and Packs Int.Ltd",
        role: "Chief Financial Oficer (CFO)",
        period: "2020 – Present",
      },
      {
        organization: "Olila Glass Int.Ltd",
        role: "Assistant General manager(AGM) Finance and Accounts(F&A)",
        period: "2016 – 2020",
      },
      {
        organization: "Bashundhara Industrial Complex (Bashundhara Cement)",
        role: "Manager, Finance and Accounts(F&A)",
        period: "2014 – 2016",
      },
      {
        organization: "DBL Group,Kai-Altech Group,RTV,BTI",
        role: "Provide Expertise in Finance Department",
        period: "2014 – 2016",
      },
    ],
  },
  {
    memberId: "5",
    name: "Bellal Hossen",
    officialRank: "Chief Executive Officer (CEO)",
    description:
      "A distinguished expert in Income Tax, VAT, Accounting,Finance and Internal Audit. He  has a proven track record of provoding exceptional service to a diverge range of domestic and foreign companies.",
    email: "bellalhossen1978@gmail.com",
    mobile: "+880 1937896468, 1745309814",
    image: billalImage2,
    qualifications: [
      "Member,Certified Management Accountant(CMA),AUS",
      "M.Com in Accounting",
      "CA Partly Qualified ",
      "Income Tax Practitioner(ITP) Certified By NBR",
      "Member, Dhaka Taxes Bar Assiciation",
    ],
    careerHighlights: [
      {
        organization: "Bags and Packs Int.Ltd",
        role: "Chief Financial Oficer (CFO)",
        period: "2020 – Present",
      },
      {
        organization: "Olila Glass Int.Ltd",
        role: "Assistant General manager(AGM) Finance and Accounts(F&A)",
        period: "2016 – 2020",
      },
      {
        organization: "Bashundhara Industrial Complex (Bashundhara Cement)",
        role: "Manager, Finance and Accounts(F&A)",
        period: "2014 – 2016",
      },
      {
        organization: "DBL Group,Kai-Altech Group,RTV,BTI",
        role: "Provide Expertise in Finance Department",
        period: "2014 – 2016",
      },
    ],
  },
  {
    memberId: "6",
    name: "Bellal Hossen",
    officialRank: "Chief Executive Officer (CEO)",
    description:
      "A distinguished expert in Income Tax, VAT, Accounting,Finance and Internal Audit. He  has a proven track record of provoding exceptional service to a diverge range of domestic and foreign companies.",
    email: "bellalhossen1978@gmail.com",
    mobile: "+880 1937896468, 1745309814",
    image: billalImage2,
    qualifications: [
      "Member,Certified Management Accountant(CMA),AUS",
      "M.Com in Accounting",
      "CA Partly Qualified ",
      "Income Tax Practitioner(ITP) Certified By NBR",
      "Member, Dhaka Taxes Bar Assiciation",
    ],
    careerHighlights: [
      {
        organization: "Bags and Packs Int.Ltd",
        role: "Chief Financial Oficer (CFO)",
        period: "2020 – Present",
      },
      {
        organization: "Olila Glass Int.Ltd",
        role: "Assistant General manager(AGM) Finance and Accounts(F&A)",
        period: "2016 – 2020",
      },
      {
        organization: "Bashundhara Industrial Complex (Bashundhara Cement)",
        role: "Manager, Finance and Accounts(F&A)",
        period: "2014 – 2016",
      },
      {
        organization: "DBL Group,Kai-Altech Group,RTV,BTI",
        role: "Provide Expertise in Finance Department",
        period: "2014 – 2016",
      },
    ],
  },
  {
    memberId: "7",
    name: "Bellal Hossen",
    officialRank: "Chief Executive Officer (CEO)",
    description:
      "A distinguished expert in Income Tax, VAT, Accounting,Finance and Internal Audit. He  has a proven track record of provoding exceptional service to a diverge range of domestic and foreign companies.",
    email: "bellalhossen1978@gmail.com",
    mobile: "+880 1937896468, 1745309814",
    image: billalImage2,
    qualifications: [
      "Member,Certified Management Accountant(CMA),AUS",
      "M.Com in Accounting",
      "CA Partly Qualified ",
      "Income Tax Practitioner(ITP) Certified By NBR",
      "Member, Dhaka Taxes Bar Assiciation",
    ],
    careerHighlights: [
      {
        organization: "Bags and Packs Int.Ltd",
        role: "Chief Financial Oficer (CFO)",
        period: "2020 – Present",
      },
      {
        organization: "Olila Glass Int.Ltd",
        role: "Assistant General manager(AGM) Finance and Accounts(F&A)",
        period: "2016 – 2020",
      },
      {
        organization: "Bashundhara Industrial Complex (Bashundhara Cement)",
        role: "Manager, Finance and Accounts(F&A)",
        period: "2014 – 2016",
      },
      {
        organization: "DBL Group,Kai-Altech Group,RTV,BTI",
        role: "Provide Expertise in Finance Department",
        period: "2014 – 2016",
      },
    ],
  },
  {
    memberId: "8",
    name: "Bellal Hossen",
    officialRank: "Chief Executive Officer (CEO)",
    description:
      "A distinguished expert in Income Tax, VAT, Accounting,Finance and Internal Audit. He  has a proven track record of provoding exceptional service to a diverge range of domestic and foreign companies.",
    email: "bellalhossen1978@gmail.com",
    mobile: "+880 1937896468, 1745309814",
    image: billalImage2,
    qualifications: [
      "Member,Certified Management Accountant(CMA),AUS",
      "M.Com in Accounting",
      "CA Partly Qualified ",
      "Income Tax Practitioner(ITP) Certified By NBR",
      "Member, Dhaka Taxes Bar Assiciation",
    ],
    careerHighlights: [
      {
        organization: "Bags and Packs Int.Ltd",
        role: "Chief Financial Oficer (CFO)",
        period: "2020 – Present",
      },
      {
        organization: "Olila Glass Int.Ltd",
        role: "Assistant General manager(AGM) Finance and Accounts(F&A)",
        period: "2016 – 2020",
      },
      {
        organization: "Bashundhara Industrial Complex (Bashundhara Cement)",
        role: "Manager, Finance and Accounts(F&A)",
        period: "2014 – 2016",
      },
      {
        organization: "DBL Group,Kai-Altech Group,RTV,BTI",
        role: "Provide Expertise in Finance Department",
        period: "2014 – 2016",
      },
    ],
  },
  {
    memberId: "9",
    name: "Bellal Hossen",
    officialRank: "Chief Executive Officer (CEO)",
    description:
      "A distinguished expert in Income Tax, VAT, Accounting,Finance and Internal Audit. He  has a proven track record of provoding exceptional service to a diverge range of domestic and foreign companies.",
    email: "bellalhossen1978@gmail.com",
    mobile: "+880 1937896468, 1745309814",
    image: billalImage2,
    qualifications: [
      "Member,Certified Management Accountant(CMA),AUS",
      "M.Com in Accounting",
      "CA Partly Qualified ",
      "Income Tax Practitioner(ITP) Certified By NBR",
      "Member, Dhaka Taxes Bar Assiciation",
    ],
    careerHighlights: [
      {
        organization: "Bags and Packs Int.Ltd",
        role: "Chief Financial Oficer (CFO)",
        period: "2020 – Present",
      },
      {
        organization: "Olila Glass Int.Ltd",
        role: "Assistant General manager(AGM) Finance and Accounts(F&A)",
        period: "2016 – 2020",
      },
      {
        organization: "Bashundhara Industrial Complex (Bashundhara Cement)",
        role: "Manager, Finance and Accounts(F&A)",
        period: "2014 – 2016",
      },
      {
        organization: "DBL Group,Kai-Altech Group,RTV,BTI",
        role: "Provide Expertise in Finance Department",
        period: "2014 – 2016",
      },
    ],
  },
  {
    memberId: "10",
    name: "Bellal Hossen",
    officialRank: "Chief Executive Officer (CEO)",
    description:
      "A distinguished expert in Income Tax, VAT, Accounting,Finance and Internal Audit. He  has a proven track record of provoding exceptional service to a diverge range of domestic and foreign companies.",
    email: "bellalhossen1978@gmail.com",
    mobile: "+880 1937896468, 1745309814",
    image: billalImage2,
    qualifications: [
      "Member,Certified Management Accountant(CMA),AUS",
      "M.Com in Accounting",
      "CA Partly Qualified ",
      "Income Tax Practitioner(ITP) Certified By NBR",
      "Member, Dhaka Taxes Bar Assiciation",
    ],
    careerHighlights: [
      {
        organization: "Bags and Packs Int.Ltd",
        role: "Chief Financial Oficer (CFO)",
        period: "2020 – Present",
      },
      {
        organization: "Olila Glass Int.Ltd",
        role: "Assistant General manager(AGM) Finance and Accounts(F&A)",
        period: "2016 – 2020",
      },
      {
        organization: "Bashundhara Industrial Complex (Bashundhara Cement)",
        role: "Manager, Finance and Accounts(F&A)",
        period: "2014 – 2016",
      },
      {
        organization: "DBL Group,Kai-Altech Group,RTV,BTI",
        role: "Provide Expertise in Finance Department",
        period: "2014 – 2016",
      },
    ],
  },
];

export const getAllDetailedMembersData = () => {
  return detailedTeamMembers;
};

export const getDetailedMemberData = async (Id) => {
  const member = await detailedTeamMembers.find(
    (member) => member.memberId === Id
  );
  return member;
};

export const getShortInfoOfMembers = async () => {
  const shortMembersArray = await detailedTeamMembers.map((member) => {
    return {
      memberId: member.memberId,
      name: member.name,
      officialRank: member.officialRank,
      email: member.email,
      mobile: member.mobile,
      image: member.image,
    };
  });

  return shortMembersArray;
};

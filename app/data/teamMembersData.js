import billalImage from "@/public/images/billal2.jpeg";
import monirulIslam from "@/public/images/MonirulIslam.jpeg";
import nahidHossainImage from "@/public/images/NahidHossain.jpeg";
import saifulIslamImage from "@/public/images/SaifulIslam.jpeg";

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
    bio: "Excellent expertise in taxation, finance, audit, and corporate governance.",
    photo: monirulIslam,
  },
  {
    id: "3",
    name: "Syed Nahid Hossain",
    role: "Senior Consultant",
    bio: "Diversed experience in finance, accounts, procurement, internal & external Audit, corporate tax, individual tax, and VAT.",
    photo: nahidHossainImage,
  },
  {
    id: "4",
    name: "Saiful Islam Sakin",
    role: "DevOps & Deployment",
    bio: "Ensures smooth CI/CD and scalable cloud infrastructure.",
    photo: saifulIslamImage,
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
    name2: "Bellal Hossen",
    officialRank: "Chief Executive Officer (CEO)",
    officialRank2: "Chief Executive Officer (CEO)",
    description:
      "A distinguished expert in Income Tax, VAT, Accounting,Finance and Internal Audit. He  has a proven track record of providing exceptional service to a diverge range of domestic and foreign companies.",
    description2: "",
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
    name2: "Mohammad Monirul Islam",
    officialRank: "Senior Consultant (External)",
    officialRank2: "Senior Consultant (External)",
    description:
      "Mr. Mohammad Monirul Islam is a Chartered Accountant (ICAB) and Certified Management Accountant (Australia) with over 18 years of experience in taxation, finance, audit, Company Incorporation & Regulatory Compliance. ",
    description2:
      "As Senior Consultant at Bellal Hossen & Associates, he leads consultancy operations—advising clients on financial structuring, compliance, and performance improvement. His career reflects a blend of corporate leadership, financial acumen, and a strong commitment to ethical business practice.",
    email: "mmislam10246@gmail.com",
    mobile: "+880 1817-032992 , 1937896468",
    image: monirulIslam,
    qualifications: [
      "Associate Member - Institute of Chartered Accountants of Bangladesh (ICAB)",
      "Associate Member - Institute of Certified Management Accountants (Australia)",
      "Certified Income Tax Practitioner (ITP) – National Board of Revenue",
    ],
    careerHighlights: [
      {
        organization: "BRAC University",
        role: "Joint Director (Central Accounts)",
        period: "2024 - till date",
      },
      {
        organization: "DBL Group",
        role: "Senior Manager (Accounts & Tax)",
        period: "2022 - 2024",
      },
      {
        organization: "American International School Dhaka (AISD)",
        role: "Senior Finance Manager ",
        period: "2020 - 2022",
      },
      {
        organization: "American International School Dhaka (AISD)",
        role: "Finance Manager",
        period: "2018 - 2020",
      },
      {
        organization: "ASA International Inc",
        role: "Group Accounts Officer ",
        period: "2013 - 2018",
      },
      {
        organization: "ASA – NGO",
        role: "Group Accounts Officer",
        period: "2008 - 2013",
      },
      {
        organization: "DBL Group",
        role: "Internal Auditor",
        period: "2005 - 2008",
      },
    ],
  },
  {
    memberId: "3",
    name: "Nahid Hossain",
    name2: "Syed Nahid Hossain",
    officialRank: "Senior Consultant",
    officialRank2:
      "Senior Consultant (Finance, Accounts, Procurement, Income Tax & VAT)",
    description:
      "Mr. Syed Nahid Hossain is an accomplished finance and taxation professional with over 19 years of diverse experience across the fields of Finance, Accounts, Procurement, Internal & External Audit, Corporate Tax, Individual Tax, and VAT.",
    description2: "",
    email: "snhossain07@gmail.com",
    mobile: "+880 1716-226183 , 01957-349326",
    image: nahidHossainImage,
    qualifications: [
      "Certified Management Accountant (CMA) – Institute of Certified Management Accountants of Australia",
      "Partly Qualified Chartered Accountant (CA-Inter) – Institute of Chartered Accountants of Bangladesh (ICAB)",
      "Completed Articleship – Mijan Rahman Bhuiyan & Co., Chartered Accountants (ICAB)",
      "Income Tax Practitioner (ITP) – National Board of Revenue (NBR)",
      "Member – Dhaka Taxes Bar Association (Membership No. S02479)",
    ],
    careerHighlights: [
      {
        organization: "SEIP–BACCO Project (Ministry of Finance & ADB)",
        role: "Coordinator (Finance & Procurement) ",
        period: "",
      },
      {
        organization: "Star Line Group",
        role: "Manager (Finance & Accounts)",
        period: "",
      },
      {
        organization: "Buildcom & Uncommon",
        role: "Deputy General Manager (Accounts) ",
        period: "",
      },
      {
        organization:
          "Bangladesh Knitwear Manufacturers & Exporters Association (BKMEA)",
        role: "Chief Accounts Officer ",
        period: "",
      },
      {
        organization: "Transcom Beverage Ltd. (Pepsi)",
        role: "Accounts Officer",
        period: "",
      },
    ],
  },
  {
    memberId: "4",
    name: "Saiful Islam ",
    name2: "Saiful Islam Sakin",
    officialRank: "Chief Executive Officer (CEO)",
    officialRank2: "Chief Executive Officer (CEO)",
    description:
      "A distinguished expert in Income Tax, VAT, Accounting,Finance and Internal Audit. He  has a proven track record of provoding exceptional service to a diverge range of domestic and foreign companies.",
    email: "bellalhossen1978@gmail.com",
    mobile: "+880 1937896468, 1745309814",
    image: saifulIslamImage,
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

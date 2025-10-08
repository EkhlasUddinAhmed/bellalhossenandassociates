// PRACTICE AREA DATA AND TWO METHODS

const serviceData = [
  {
    id: "1",
    serviceDetails: [
      {
        id: "1",
        eTitle: "Monthly VAT Return Submission",
        bTitle: "মাসিক ভ্যাট রিটার্ন দাখিল",
        eDescription:
          "This refers to the process of submitting VAT return forms to the authority on a monthly basis, within the prescribed deadline.",
        bDescription:
          "এটি বোঝায় প্রতি মাসে নির্ধারিত সময়ের মধ্যে ভ্যাট সংক্রান্ত রিটার্ন ফর্ম যথাযথভাবে কর্তৃপক্ষের কাছে দাখিল করা।",
      },
      {
        id: "2",
        eTitle: "VAT Registration and Turnover Tax Listing",
        bTitle: "ভ্যাট নিবন্ধন ও টার্নওভারকর তালিকাভুক্তি",
        eDescription:
          "This refers to registering a business under the National Board of Revenue (NBR) for VAT purposes, and enlisting eligible enterprises under the Turnover Tax scheme based on their annual revenue threshold.",
        bDescription:
          "এটি বোঝায় ব্যবসা প্রতিষ্ঠানকে জাতীয় রাজস্ব বোর্ড (NBR)-এর অধীনে ভ্যাট নিবন্ধন করা এবং যেসব প্রতিষ্ঠান নির্ধারিত টার্নওভার সীমার মধ্যে পড়ে, তাদেরকে টার্নওভার কর স্কিমে তালিকাভুক্ত করা।",
      },
      {
        id: "3",
        eTitle: "Input-Output Coefficient ",
        bTitle: "উপকরণ-উৎপাদসহ ঘোষণা",
        eDescription:
          "This refers to a statement or form submitted by a business that details the raw materials used and the goods produced. It is typically required by VAT or customs authorities for compliance and audit purposes.",
        bDescription:
          "এটি বোঝায় এমন একটি বিবরণ বা ফর্ম, যেখানে একটি প্রতিষ্ঠান তাদের ব্যবহৃত উপকরণ (raw materials) এবং উৎপাদিত পণ্য (finished goods) সম্পর্কে বিস্তারিত তথ্য প্রদান করে। সাধারণত এটি ভ্যাট বা কাস্টমস সংক্রান্ত কর্তৃপক্ষের কাছে দাখিল করা হয়।",
      },
      {
        id: "4",
        eTitle: "Tax Deduction at Source and Adjustment",
        bTitle: "উৎসে কর কর্তন ও সমন্বয়",
        eDescription:
          "This refers to the process where tax is deducted at the point of income or transaction (at source), and later reconciled or adjusted against the total tax liability. It’s a key component in income tax compliance and reporting.",
        bDescription:
          " এটি বোঝায় এমন একটি প্রক্রিয়া যেখানে আয় বা লেনদেনের সময়েই কর কর্তন করা হয় (উৎসে), এবং পরবর্তীতে সেই কর্তিত করের সাথে অন্যান্য কর দায়ের সমন্বয় করা হয়। এটি আয়কর ব্যবস্থাপনায় একটি গুরুত্বপূর্ণ ধাপ।",
      },
      {
        id: "5",
        eTitle: "Audit Advisory Services",
        bTitle: "নিরীক্ষা সংক্রান্ত পরামর্শ",
        eDescription:
          "We provide expert guidance on financial audits, internal controls,and regulatory compliance. This includes audit preparation,documentation support, audit report analysis, and coordination with relevant authorities.",
        bDescription:
          " নিরীক্ষা সংক্রান্ত পরামর্শ আমরা প্রতিষ্ঠানকে আর্থিক নিরীক্ষা অভ্যন্তরীণ নিয়ন্ত্রণ, এবং রেগুলেটরি কমপ্লায়েন্স বিষয়ে পরামর্শ প্রদান করি। এতে অন্তর্ভুক্ত থাকে নিরীক্ষা প্রস্তুতি, ডকুমেন্টেশন, অডিট রিপোর্ট বিশ্লেষণ, এবং সংশ্লিষ্ট কর্তৃপক্ষের সাথে সমন্বয়।",
      },
      {
        id: "6",
        eTitle: "VAT Litigation Handling",
        bTitle: "ভ্যাট সংক্রান্ত মামলা পরিচালনা",
        eDescription:
          "This refers to the effective management of legal cases related to VAT compliance, disputes, or penalties. It includes case preparation, documentation, representation in hearings, and coordination with the National Board of Revenue (NBR) or relevant courts.",
        bDescription:
          "এটি বোঝায় ভ্যাট আইন অনুযায়ী করদাতার বিরুদ্ধে বা পক্ষে দায়েরকৃত মামলার কার্যকর পরিচালনা। এতে অন্তর্ভুক্ত থাকে মামলার প্রস্তুতি,দলিলপত্র সংগ্রহ, শুনানিতে অংশগ্রহণ, এবং জাতীয় রাজস্ব বোর্ড (NBR) বাআদালতের সাথে সমন্বয়।",
      },
      {
        id: "7",
        eTitle: "VAT Appeal and Tribunal Management",
        bTitle: "ভ্যাট সংক্রান্ত আপিল ও ট্রাইব্যুনাল পরিচালনা",
        eDescription:
          "This refers to filing appeals against decisions made by the National Board of Revenue (NBR) or relevant authorities, and managing the proceedings before the VAT Tribunal. It includes legal advisory, documentation, representation during hearings, and reviewing judgments.",
        bDescription:
          "এটি বোঝায় করদাতার পক্ষ থেকে জাতীয় রাজস্ব বোর্ড (NBR) বা সংশ্লিষ্ট কর্তৃপক্ষের সিদ্ধান্তের বিরুদ্ধে আপিল দাখিল এবং সেই আপিলের শুনানি ও ট্রাইব্যুনাল কার্যক্রম পরিচালনা করা। এতে অন্তর্ভুক্ত থাকে আইনগত পরামর্শ, দলিল প্রস্তুতি, শুনানিতে অংশগ্রহণ এবং রায় পর্যালোচনা।",
      },
    ],
    name: "VAT Registration & Advisory",
    description:
      "This refers to the process of submitting VAT return forms to the authority on a monthly basis, within the prescribed deadline.",
    image: "",
  },
  {
    id: "2",
    serviceDetails: [
      {
        id: "1",
        eTitle: "Submission of Annual Income Tax Return",
        bTitle: "বার্ষিক আয়কর রিটার্ন দাখিল করা",
        eDescription:
          "This refers to the process by which a taxpayer submits detailed information about their income, expenses, assets, and liabilities to the National Board of Revenue (NBR) at the end of each fiscal year. It is a mandatory legal requirement and must be completed within the prescribed deadline.",
        bDescription:
          "এএটি বোঝায় করদাতা কর্তৃক প্রতি অর্থবছরের শেষে আয়, ব্যয়, সম্পদ ও দায় সম্পর্কিত তথ্য জাতীয় রাজস্ব বোর্ড (NBR)-এ নির্ধারিত ফর্মে দাখিল করা। এটি কর পরিশোধের একটি বাধ্যতামূলক ধাপ এবং আইনগতভাবে নির্ধারিত সময়সীমার মধ্যে সম্পন্ন করতে হয়।",
      },

      {
        id: "2",
        eTitle: "Income Tax Assessment",
        bTitle: "আয়কর মূল্যায়ন",
        eDescription:
          "Income tax assessment is the process by which the tax authority (e.g., NBR in Bangladesh) reviews a taxpayer’s submitted return to determine the actual taxable income.",
        bDescription:
          "আয়কর মূল্যায়ন হলো একটি প্রক্রিয়া যেখানে কর কর্তৃপক্ষ (যেমন NBR) করদাতার দাখিলকৃত রিটার্ন পর্যালোচনা করে তার প্রকৃত করযোগ্য আয় নির্ধারণ করে।",
      },

      {
        id: "3",
        eTitle: "Quarterly Tax Return Submission",
        bTitle: "ত্রৈমাসিক ট্যাক্স রিটার্ন দাখিল",
        eDescription:
          "This refers to the process of submitting tax return forms—typically related to income tax or VAT—every three months within the prescribed deadline. It is a routine compliance activity for businesses to report financial transactions and obligations.",
        bDescription:
          "এটি বোঝায় প্রতি তিন মাস অন্তর করদাতা কর্তৃক নির্ধারিত সময়সীমার মধ্যে আয়কর বা ভ্যাট সংক্রান্ত রিটার্ন ফর্ম যথাযথভাবে কর্তৃপক্ষের কাছে দাখিল করা। এটি সাধারণত ব্যবসা প্রতিষ্ঠানের আর্থিক কার্যক্রমের নিয়মিত রিপোর্টিংয়ের অংশ।",
      },
      {
        id: "4",
        eTitle: "Income Tax Audit Advisory",
        bTitle: "আয়কর অডিট সংক্রান্ত পরামর্শ",
        eDescription:
          "This refers to professional guidance provided during the audit of a taxpayer’s income, expenses, assets, and liabilities. It typically includes:Preparing necessary documentation for audit,Reviewing submitted tax returns and financial statements,Coordinating with audit officials,Analyzing audit reports and responding accordingly,Advising on legal complexities and compliance issue.",
        bDescription:
          "এটি বোঝায় করদাতার আয়, ব্যয়, সম্পদ ও দায় সম্পর্কিত তথ্যের নিরীক্ষা প্রক্রিয়ায় সহায়তা প্রদান। এতে অন্তর্ভুক্ত থাকে:অডিটের জন্য প্রয়োজনীয় দলিলপত্র প্রস্তুত করা,আয়কর রিটার্ন ও হিসাবপত্র পর্যালোচনা,অডিট কর্মকর্তার সাথে সমন্বয়,অডিট রিপোর্ট বিশ্লেষণ ও প্রতিক্রিয়া প্রদান,আইনগত জটিলতা সমাধানে পরামর্শ।",
      },
      {
        id: "5",
        eTitle: "Income Tax Litigation Handling",
        bTitle: "আয়কর সংক্রান্ত মামলা পরিচালনা",
        eDescription:
          "This refers to the effective management of legal cases filed under income tax laws, either in favor of or against the taxpayer. It typically includes:Case preparation and documentation,Filing appeals against tax authority decisions,Representation during hearings and legal argumentation,Coordination with courts or tribunals,Reviewing judgments and taking follow-up actions",
        bDescription:
          "এটি বোঝায় করদাতার বিরুদ্ধে বা পক্ষে আয়কর আইন অনুযায়ী দায়েরকৃত মামলার কার্যকর পরিচালনা। এতে অন্তর্ভুক্ত থাকে:মামলা প্রস্তুতি ও দলিলপত্র সংগ্রহ,কর কর্তৃপক্ষের সিদ্ধান্তের বিরুদ্ধে আপিল,শুনানিতে অংশগ্রহণ ও আইনগত যুক্তি উপস্থাপন,আদালত বা ট্রাইব্যুনালের সাথে সমন্বয়,রায়ের পর্যালোচনা ও পরবর্তী পদক্ষেপ গ্রহণ",
      },
      {
        id: "6",
        eTitle: "Income Tax Appeal and Tribunal Management",
        bTitle: "আয়কর সংক্রান্ত আপিল ও ট্রাইব্যুনাল পরিচালনা",
        eDescription:
          "This refers to filing appeals against decisions made by the National Board of Revenue (NBR) or other relevant authorities, and managing the proceedings before the Income Tax Tribunal. It typically includes:Preparing appeal documents and legal briefs,Representing clients during tribunal hearings,Presenting legal arguments and evidence,Reviewing judgments and advising on next steps,Coordinating with tax authorities and legal bodies.",
        bDescription:
          "এএটি বোঝায় করদাতার বিরুদ্ধে বা পক্ষে জাতীয় রাজস্ব বোর্ড (NBR) বা সংশ্লিষ্ট কর্তৃপক্ষের সিদ্ধান্তের বিরুদ্ধে আপিল দাখিল এবং সেই আপিলের শুনানি ও ট্রাইব্যুনাল কার্যক্রম পরিচালনা করা। এতে অন্তর্ভুক্ত থাকে:আপিল প্রস্তুতি ও দলিলপত্র সংগ্রহ,ট্রাইব্যুনালে শুনানিতে অংশগ্রহণ,আইনগত যুক্তি উপস্থাপন,য়ের পর্যালোচনা ও পরবর্তী পদক্ষেপ গ্রহণ,সংশ্লিষ্ট কর্তৃপক্ষের সাথে সমন্বয়",
      },
    ],
    name: "Income Tax Filing",
    description:
      "A taxpayer submits detailed information about their income, expenses, assets, and liabilities to the National Board of Revenue (NBR).",
    image: "",
  },
  {
    id: "3",
    serviceDetails: [
      {
        id: "1",
        eTitle: "Registrar of Joint Stock Companies and Firms (RJSC)",
        bTitle: "যৌথমূলধন কোম্পানি ও ফার্মসমূহের পরিদপ্তর",
        eDescription:
          "RJSC is a government body under the Ministry of Commerce in Bangladesh that registers and regulates companies, partnerships, and societies under:Companies Act, 1994,Partnership Act, 1932,Societies Registration Act, 1860",
        bDescription:
          "যৌথমূলধন কোম্পানি ও ফার্মসমূহের পরিদপ্তর (RJSC) এটি বাংলাদেশ সরকারের একটি সংস্থা, যা কোম্পানি আইন, ১৯৯৪, পার্টনারশিপ আইন, ১৯৩২, এবং সোসাইটি রেজিস্ট্রেশন আইন, ১৮৬০ অনুযায়ী ব্যবসা প্রতিষ্ঠান, ফার্ম, এবং সংগঠনসমূহের নিবন্ধন ও তদারকি করে।",
      },
      {
        id: "2",
        eTitle: "Company, Firm, Association & Society Registration",
        bTitle: "কোম্পানি, ফার্ম, সমিতি ও সোসাইটি নিবন্ধন",
        eDescription:
          "A-Company Registration:1.Law: Companies Act, 1994,2.Types: Private Ltd., Public Ltd., One Person Company (OPC),3.B-Firm Registration:1.Law: Partnership Act, 1932,2.Types: General Partnership, Limited Partnership. C-Society Registration:1.Law: Societies Registration Act, 1860,2.Purpose: Literary, Scientific, Charitable, Social Organizations",
        bDescription:
          "ক-কোম্পানি নিবন্ধন:১.আইন: কোম্পানি আইন, ১৯৯৪,২.ধরন: প্রাইভেট লিমিটেড, পাবলিক লিমিটেড, ওয়ান পার্সন কোম্পানি (OPC)| খ-ফার্ম নিবন্ধন:১.আইন:পার্টনারশিপ আইন, ১৯৩২, ২.ধরন:সাধারণ পার্টনারশিপ, লিমিটেড পার্টনারশিপ| গ-সমিতি/সোসাইটি নিবন্ধন:১.আইন:সোসাইটি রেজিস্ট্রেশন আইন, ১৮৬০,২.ধরন:সাহিত্যিক, বৈজ্ঞানিক, দাতব্য, সামাজিক সংগঠন ",
      },
      {
        id: "3",
        eTitle: "Annual RJSC Return Submission and Charge Creation Filing",
        bTitle: "বার্ষিক RJSC রিটার্ন দাখিল এবং  চার্জ ক্রিয়েশন সংক্রান্ত কাজ",
        eDescription:
          "This is a mandatory compliance for registered companies. After holding the AGM, the company must submit its annual return to RJSC within 21 days.Charge Creation Filing: When a company takes a loan secured by assets, it must register the charge with RJSC.",
        bDescription:
          "RJSC-এ বার্ষিক রিটার্ন দাখিল করা একটি বাধ্যতামূলক কর্পোরেট কমপ্লায়েন্স। AGM (Annual General Meeting) অনুষ্ঠিত হওয়ার পর ২১ দিনের মধ্যে রিটার্ন জমা দিতে হয়।চার্জ ক্রিয়েশন সংক্রান্ত কাজ:যখন কোম্পানি কোনো সম্পত্তি বা সম্পদের উপর ঋণ গ্রহণ করে, তখন RJSC-এ চার্জ রেজিস্টার করতে হয়। ",
      },
      {
        id: "4",
        eTitle: "Share Transfer, Share Issue & Company Secretarial Tasks",
        bTitle:
          "কোম্পানির শেয়ার ট্রান্সফার, শেয়ার ইস্যু এবং অন্যান্য সেক্রেটারিয়াল কাজ",
        eDescription:
          "Share Transfer:Must follow the company’s Articles of Association,Requires board approval and resolution.",
        bDescription:
          "শেয়ার ট্রান্সফার: কোম্পানির Articles of Association অনুযায়ী শেয়ার ট্রান্সফার করা হয় প্রাথমিকভাবে বোর্ড মিটিংয়ে অনুমোদন নিতে হয় ",
      },
    ],
    name: "Registrar Of Join Stock Companies and Firms(RJSC)",
    description:
      "RJSC is a government body under the Ministry of Commerce in Bangladesh that registers and regulates companies, partnerships, and societies.",
    image: "",
  },

  {
    id: "4",
    serviceDetails: [
      {
        id: "1",
        eTitle: "Bank & Financial Institution Loans",
        bTitle: "ব্যাংক ও আর্থিক প্রতিষ্ঠানের ঋণ",
        eDescription:
          "Banks and financial institutions in Bangladesh offer a wide range of loan products, including:General Loans-Personal Loan: For individual needs,Home Loan: For buying or building a house,Car Loan: For vehicle purchase,Education Loan: For higher studies,Consumer Durable Loan: For electronics and appliances.Business Loans-SME Loan: For small and medium enterprises,Overdraft / Cash Credit: For working capital,Term Loan: For long-term investment,Export/Import Finance: For international trade.Non-Bank Financial Institution Loans-Leasing Finance,Microcredit,Investment Schemes,Factoring Services,Securitized Loans,",
        bDescription:
          "বাংলাদেশে ব্যাংক ও আর্থিক প্রতিষ্ঠানসমূহ বিভিন্ন ধরনের ঋণ প্রদান করে, যার মধ্যে রয়েছে:সাধারণ ঋণ-পার্সোনাল লোন: ব্যক্তিগত প্রয়োজনের জন্য,হোম লোন: বাড়ি নির্মাণ বা ক্রয়ের জন্য,কার লোন: গাড়ি কেনার জন্য,এডুকেশন লোন: উচ্চশিক্ষার জন্য,কনজ্যুমার ডিউরেবল লোন: টিভি, ফ্রিজ, কম্পিউটার ইত্যাদি কেনার জন্য|ব্যবসায়িক ঋণ-এসএমই লোন: ক্ষুদ্র ও মাঝারি উদ্যোক্তাদের জন্য,ওভারড্রাফট/ক্যাশ ক্রেডিট: চলতি মূলধনের জন্য,টার্ম লোন: দীর্ঘমেয়াদি বিনিয়োগের জন্য,এক্সপোর্ট/ইমপোর্ট ফাইন্যান্স: আন্তর্জাতিক বাণিজ্যের জন্য|আর্থিক প্রতিষ্ঠান ঋণ-লিজিং ফাইন্যান্স,মাইক্রোক্রেডিট,ইনভেস্টমেন্ট স্কিম,ফ্যাক্টরিং সার্ভিস,সিকিউরিটাইজড লোন|",
      },
    ],
    name: "Bank & Financial Institution Loan",
    description:
      "Banks and financial institutions in Bangladesh offer a wide range of loan including:General Loans-Personal Loans.",
    image: "",
  },

  {
    id: "5",
    serviceDetails: [
      {
        id: "3",
        eTitle: "Customs Bond License & Renewal",
        bTitle: "কাস্টমস বন্ড লাইসেন্স ও নবায়ন",
        eDescription:
          "A Customs Bond License allows export-oriented industries to import raw materials without paying duties and VAT. It is governed by the Bonded Warehouse Licensing Rules, 2008.",
        bDescription:
          "কাস্টমস বন্ড লাইসেন্স হলো একটি অনুমোদন, যা রপ্তানিমুখী শিল্প প্রতিষ্ঠানকে শুল্ক ও ভ্যাট মুক্তভাবে কাঁচামাল আমদানির সুযোগ দেয়। এটি Bonded Warehouse Licensing Rules, 2008 অনুযায়ী প্রদান করা হয়।",
      },
      {
        id: "4",
        eTitle: "Share & Asset Valuation",
        bTitle: "শেয়ার ও সম্পদের মূল্যায়ন",
        eDescription:
          "Share valuation is the process of determining the fair value of a company’s shares.Asset Valuation-Asset valuation determines the fair market value of tangible and intangible assets.",
        bDescription:
          "শেয়ার মূল্যায়ন-শেয়ার মূল্যায়ন হলো একটি কোম্পানির শেয়ারের প্রকৃত বা ন্যায্য মূল্য নির্ধারণের প্রক্রিয়া, যা বিভিন্ন উদ্দেশ্যে ব্যবহৃত হয়|সম্পদ মূল্যায়ন-সম্পদ মূল্যায়ন হলো কোনো প্রতিষ্ঠানের স্থাবর ও অস্থাবর সম্পদের প্রকৃত মূল্য নির্ধারণ।",
      },
      {
        id: "5",
        eTitle: "Business Support Services",
        bTitle: "ব্যবসায়িক সহায়তা সেবা",
        eDescription:
          "Trade License,TIN(Taxpayer Identification Number),BIN,IRC,ERC,Factory License,Environmental Clearance Certificate,Investment Board Recommendation",
        bDescription:
          "ট্রেড লাইসেন্স,ট্যাক্সপেয়ার আইডেন্টিফিকেশন নাম্বার,কারখানা লাইসেন্স,পরিবেশ ছাড়পত্র,বিনিয়োগ বোর্ড সুপারিশ",
      },
    ],
    name: "Legal Compliance & Others",
    description:
      "Accountants-Accountants record financial transactions, prepare reports, and assist with tax and audit compliance.",
    image: "",
  },
  {
    id: "6",
    serviceDetails: [
      {
        id: "1",
        eTitle: "Accountants",
        bTitle: "হিসাবরক্ষক",
        eDescription:
          "Accountants-Accountants record financial transactions, prepare reports, and assist with tax and audit compliance.Internal Audit-Internal audit ensures risk management, policy compliance, and asset protection within an organization.Business Analysis-Business analysts evaluate data and processes to support strategic decision-making.",
        bDescription:
          "হিসাবরক্ষক-হিসাবরক্ষকরা প্রতিষ্ঠানের আর্থিক লেনদেন রেকর্ড করেন, রিপোর্ট প্রস্তুত করেন এবং কর ও অডিট সংক্রান্ত প্রস্তুতিতে সহায়তা করেন।অভ্যন্তরীণ নিরীক্ষা-অভ্যন্তরীণ নিরীক্ষা হলো প্রতিষ্ঠানের ঝুঁকি ব্যবস্থাপনা, নীতিমালা অনুসরণ, এবং সম্পদের সুরক্ষা নিশ্চিত করার একটি প্রক্রিয়া।ব্যবসা বিশ্লেষণ-ব্যবসা বিশ্লেষকরা ডেটা ও প্রক্রিয়া বিশ্লেষণ করে সিদ্ধান্ত গ্রহণে সহায়তা করেন।",
      },
    ],
    name: "Accounting",
    description:
      "Accountants-Accountants record financial transactions, prepare reports, and assist with tax and audit compliance.",
    image: "",
  },

  {
    id: "7",
    serviceDetails: [
      {
        id: "1",
        eTitle: "Audit",
        bTitle: "নিরীক্ষা",
        eDescription:
          "The process of verifying and analyzing the accuracy of a company's financial statements, accounts, or operations, typically conducted by an independent auditor or a certified accountant.",
        bDescription:
          "একটি প্রতিষ্ঠানের আর্থিক বিবরণী, হিসাবপত্র, বা কার্যক্রমের সত্যতা যাচাই ও বিশ্লেষণ করার প্রক্রিয়া, যা সাধারণত একজন স্বতন্ত্র নিরীক্ষক বা সনদপ্রাপ্ত হিসাবরক্ষক দ্বারা সম্পন্ন হয়।",
      },
    ],
    name: "Audit",
    description:
      "The process of verifying and analyzing the accuracy of a company's financial statements, accounts, or operations.",
    image: "",
  },

  {
    id: "8",
    serviceDetails: [
      {
        id: "1",
        eTitle: "Special Advisory Services for Sick & Developing Companies",
        bTitle: "রুগ্ন ও উন্নয়নশীল কোম্পানির বিশেষ পরামর্শ সেবা",
        eDescription:
          "Sick companies are those facing financial distress, declining productivity, debt burdens, or competitive disadvantages. Developing companies are startups, expanding businesses, or those undergoing restructuring.",
        bDescription:
          "রুগ্ন কোম্পানি বলতে বোঝায় এমন প্রতিষ্ঠান যেগুলো আর্থিক ক্ষতি, উৎপাদন হ্রাস, ঋণ পরিশোধে অক্ষমতা বা বাজারে প্রতিযোগিতায় পিছিয়ে পড়েছে। উন্নয়নশীল কোম্পানি হলো এমন প্রতিষ্ঠান যারা নতুন, সম্প্রসারণশীল বা পুনর্গঠনের পর্যায়ে রয়েছে।",
      },
    ],
    name: "ManagementConsultancy",
    description:
      "Sick companies are those facing financial distress, declining productivity, debt burdens, or competitive disadvantages.",
    image: "",
  },
  {
    id: "9",
    serviceDetails: [
      {
        id: "1",
        eTitle: "Project Profile & Feasibility Study Report",
        bTitle: "প্রকল্প প্রোফাইল প্রস্তুতি ও ফিজিবিলিটি স্টাডি রিপোর্ট",
        eDescription:
          "A project profile is a concise yet informative document that outlines the core aspects of a proposed business or industrial venture. It’s often used to pitch to banks, investors, or government agencies.Feasibility Study Report-This is a comprehensive analytical report that evaluates whether a project is viable and sustainable. It helps mitigate risks and supports informed decision-making",
        bDescription:
          "প্রকল্প প্রোফাইল হলো একটি সংক্ষিপ্ত অথচ তথ্যসমৃদ্ধ দলিল, যা একটি ব্যবসা বা শিল্প প্রকল্পের সারাংশ তুলে ধরে। এটি সাধারণত ব্যাংক, বিনিয়োগকারী বা সরকারি সংস্থার কাছে উপস্থাপন করা হয়। ফিজিবিলিটি স্টাডি রিপোর্ট-এটি একটি বিস্তারিত বিশ্লেষণমূলক রিপোর্ট যা প্রকল্পটি বাস্তবায়নযোগ্য কিনা তা নির্ধারণ করে। এটি বিনিয়োগ ঝুঁকি কমাতে এবং সিদ্ধান্ত গ্রহণে সহায়তা করে।",
      },
    ],
    name: "Project Profile & Feasibility Study Report",
    description:
      "A project profile is a concise yet informative document that outlines the core aspects of a proposed business or industrial venture.",
    image: "",
  },
  {
    id: "10",
    serviceDetails: [
      {
        id: "7",
        eTitle: "Hands-on VAT Training in Bangladesh",
        bTitle: "হাতে-কলমে ভ্যাট প্রশিক্ষণ",
        eDescription:
          "Hands-on VAT training involves practical sessions where participants learn to apply VAT laws through real-world exercises like return filing, invoice preparation, and compliance documentation.",
        bDescription:
          "হাতে-কলমে প্রশিক্ষণ বলতে বোঝায় এমন কোর্স যেখানে অংশগ্রহণকারীরা বাস্তব উদাহরণ, সফটওয়্যার ব্যবহার, রিটার্ন ফাইলিং, ইনভয়েস তৈরি, এবং VAT আইন প্রয়োগের অনুশীলন করে।",
      },
    ],
    name: "Hands-on VAT training",
    description:
      "Hands-on VAT training involves practical sessions where participants learn to apply VAT laws.",
    image: "",
  },
];

export const getAllServices = () => {
  return serviceData;
};

export const getAService = (id) => {
  return serviceData.find((service) => service.id === id);
};

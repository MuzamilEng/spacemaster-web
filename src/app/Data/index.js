import React from 'react'
import { Icon } from '@iconify/react';

export const topbar = [
  {
    title: "",
    icon: <Icon icon="line-md:linkedin" />,
    link: "#",
  },
  {
    title: "",
    icon: <Icon icon="ic:sharp-facebook" />,
    link: "#",
  },
  {
    title: "",
    icon: <Icon icon="iconoir:instagram" />,
    link: "#",
  },
  {
    title: "support@thespacemaster.com",
    icon: <Icon icon="clarity:email-solid" />,
    link: "#",
  },
  {
    title: "+639 909 393 1470",
    icon: <Icon icon="ic:baseline-phone" />,
    link: "#",
  },
]

export const navbar = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About US",
    link: "/about",
  },
  {
    title: "Contact US",
    link: "/contact",
  },
  {
    title: "How it Works",
    link: "/howitworks",
  },
  {
    title: "Join Team",
    link: "/join",
  },
  {
    title: "Subscription",
    link: "/subscription",
  }
]


export const helpCards = [
  {
    icon: "/img/time.png",
    img: "/img/shape-curved.svg",
    title: "Efficiency Unleashed",
    info: "Say goodbye to the woes of hard-to-fill tech positions. Our dedicated teams are your gateway to reducing Time-to-Market, ensuring your product not only reaches the market faster but also stands out for its quality and innovation."
  },
  
  {
    icon: "/img/expense.png",
    img: "/img/shape-curved.svg",
    title: "Cost Optimized",
    info: "Imagine slashing your project expenses by up to 50% without compromising on quality. Our scalable solutions are designed to adapt, offering you top-tier talent tailored to your project's evolving needs.",
  },
  {
    icon: "/img/core.png",
    title: "Focus Redefined",
    info: "Dive deeper into your core business with the confidence that the software development lifecycle is in expert hands. From the initial stages to the final touches, we empower your processes, freeing up your valuable time for what truly matters."
  }
]

export const howitworks = [
  {
    no: 1,
    icon: "/img/team.png",
    title : "Team Allocation",
    info: "We build and optimize a team of experts, drawn from our fast-growing pool of software professionals."
  },
  {
    no: 1,
    icon: "/img/rocket.png",
    title : "Project Kick-off",
    info: "Align with the dedicated team, kick-off your project fast and set the right expectations for better results!"
  },
  {
    no: '',
    icon:"",
    title : "",
    info: ""
  },
  {
    icon: "/img/trans.png",
    title : "Full Transperency",
    info: "The team complies with our distinct delivery framework, which is consistent, predictable, and transparent."
  },
]

export const approach = [
  {
    title: "Continuous Visibility",
    info: "The code is stored on an online repository for you to view and track.",
    icon1: "/img/jira.svg",
    icon2: "/img/git.svg",
    icon1Text: "Jira",
    icon2Text: "Github",
    bg:"bg-[#092370]",
    titleColor: "text-white",
    infoColor: "text-white"
  },
  {
    title: "Constant Contact",
    info: "You will receive regular status updates of the tasks.",
   icon1: "/img/slack.svg",
    icon2: "/img/mail.svg",
    icon1Text: "Slack",
    icon2Text: "Email",
    bg:"bg-[#092370]",
    titleColor: "text-white",
    infoColor: "text-white"
  },
  {
    title: "Agile Meetings",
    info: "Daily/weekly scrums to align the team members.",
    icon1:"/img/scrum.svg",
    icon2: "/img/zoom.svg",
    icon1Text: "Daily Scrum",
    icon2Text: "Zoom",
    bg:"bg-[#092370]",
    titleColor: "text-white",
    infoColor: "text-white"
  },
  {
    title: "Product Evaluation",
    info: "We run regular demo sessions and sprint meetings to adapt your ideas.",
    icon1: "/img/skype.svg",
    icon2: "/img/demo.svg",
    icon1Text: "Skype",
    icon2Text: "Demo",
    bg:"bg-[#092370]",
    titleColor: "text-white",
    infoColor: "text-white"
  },
]

export const subscription = [
  {
    title : "Basic Plan",
    popular: "",
    price: "$400",
    billed: '$1,600',
    info: [
      "Software Engineering Team",
      "Dedicated Project Manager",
      "UI/UX Designer",
      "Quality Assurance Engineer",
      "Customer Support",
      "Weekly Sprint Presentation"
    ],
    bgColor: "bg-gray-100",
    headingColor: "text-black",
    textColor: "text-gary-800",
    blueBg: "bg-[#092370]"
  },
  {
    icon: <Icon icon="fa-solid:crown" />,
    title : "Premium",
    popular: "popular",
    price: "$625",
    billed: "$2,500",
    info: [
      "Software Engineering Team",
      "Dedicated Project Manager",
      "UI/UX Designer",
      "Quality Assurance Engineer",
      "Customer Support",
      "Exclusive On-site Training",
      "Performance Assesment",
      "Weekly Sprint Presentation"
    ],
    bgColor: "bg-[#092370]",
    headingColor: "text-white",
    textColor: "text-white",
    blueBg: "bg-white"
  },
  {
    title : "Advance Plan",
    popular: "",
    price: "$750",
    billed: "$3,000",
    // info: ['Unlimited members', 'Unlimited feedback', 'Weekly team feedback friday', 'Custom Kudos +9 illustration', 'Team feedback history',],
    info: [
      "Software Engineering Team",
      "Dedicated Project Manager",
      "UI/UX Designer",
      "Quality Assurance Engineer",
      "Customer Support",
      "Exclusive On-site Training",
      "Performance Assesment",
      "Weekly Sprint Presentation"
    ],
    bgColor: "bg-gray-100",
    headingColor: "text-black",
    textColor: "text-gray-800",
    blueBg: "bg-[#092370]"
  },
]

export const profiles = [
  {
    img: "/img/man.svg",
    title: "Wallace Hintz",
    info: "The dedicated software engineer team provided through our subscription has not only met but exceeded our expectations. Their expertise and commitment to delivering high-quality business applications have significantly contributed to the success of our projects"
  },
  {
    img: "/img/man3.svg",
    title: "Florence Okuneva",
    info: "We have been a subscriber to Space Master services for over a year now, and the experience has been outstanding"
  },
  {
    img: "/img/man2.svg",
    title: "Pedro Hahn",
    info: "Choosing Space Master for our software development needs was one of the best decisions we made."
  },
  {
    img: "/img/man3.svg",
    title: "Florence Okuneva",
    info: "The dedicated software engineer team has consistently demonstrated a deep understanding of our business requirements."
  },
  {
    img: "/img/man2.svg",
    title: "Pedro Hahn",
    info: "Our partnership with [Your Company Name] has been transformative. The subscription model not only offers cost savings but also ensures access to a highly skilled and responsive software engineer team."
  },
  {
    img: "/img/man.svg",
    title: "Wallace Hintz",
    info: "Space Master has been an indispensable partner for Galactic Ventures Inc. The software engineer team provided through our subscription has consistently delivered top-notch solutions, meeting our specific business needs. "
  },
  {
    img: "/img/man3.svg",
    title: "Florence Okuneva",
    info: "Space Master has truly lived up to its name as a master of space in the technology realm. The dedicated software engineer team has been instrumental in shaping the success of our projects. "
  },
  {
    img: "/img/man2.svg",
    title: "Pedro Hahn",
    info: "As a subscriber to Space Master, we have experienced a seamless collaboration with their exceptional software engineer team. Their commitment to understanding our business goals and delivering tailor-made solutions has been remarkable."
  },
  {
    img: "/img/man.svg",
    title: "Wallace Hintz",
    info: "Space Master has been a game-changer for us. Their subscription model, coupled with an outstanding software engineer team, has elevated our development projects to new heights."
  },
]

export const expertise = [
  {
    title: "Backend Engineers",
    link: ""
  },
  {
    title: "UI/UX Engineers",
    link: ""
  },
  {
    title: "DevOps Engineers",
    link: ""
  },
  {
    title: "Ember.Js Engineers",
    link: ""
  },
  {
    title: "Full Stack Engineers",
    link: ""
  },
  {
    title: "Frontend Engineers",
    link: ""
  },
  {
    title: "Magento Engineers",
    link: ""
  },
  {
    title: "Machine Learning Engineers",
    link: ""
  },
  {
    title: "Jquery Engineers",
    link: ""
  },
  {
    title: "React Native Engineers",
    link: ""
  },
  {
    title: ".NET Engineers",
    link: ""
  },
  {
    title: "Node.JS Engineers",
    link: ""
  },
  {
    title: "Backbone.JS Engineers",
    link: ""
  },
  {
    title: "Web Engineers",
    link: ""
  },
  {
    title: "Ionic Engineers",
    link: ""
  },
  {
    title: "Python Engineers",
    link: ""
  },
  {
    title: "Salesforce Engineers",
    link: ""
  },
  {
    title: "Software Engineers",
    link: ""
  },
  {
    title: "Scala Engineers",
    link: ""
  },
  {
    title: "Kotlin Engineers",
    link: ""
  },
]


export const toggleInfo = [
  {
      title: "Just Starting Out Your Journey with Us?",
      info: "Just fill in the form below with your project details, and we'll get back to you with a plan tailored just for you. We believe in making top-tier tech talent accessible and manageable for businesses of all sizes."
  },
  {
      title: "Looking Ahead",
      info: "At SpaceMaster, we see ourselves as more than just a service provider; we're your partner in navigating the tech landscape. Our dedicated teams are ready to face challenges head-on, turning them into opportunities for growth and innovation."
  },
  {
      title: "What Are the Benefits of a Dedicated Development Team?",
      info: "Once you have read all the information about our Dedicated Teams, the next step is to fill out the contact form and we will reach out."
  },
  {
      title: "What Is a Dedicated Team Structure?",
      info: "Once you have read all the information about our Dedicated Teams, the next step is to fill out the contact form and we will reach out."
  },
  {
      title: "Ready to Talk?",
      info: "Reach out to us now. Whether you have a quick question or need an in-depth discussion about our services, we're here to provide the insights you need."
  },
]

export const whyChoose = [
  {
    img: "/img/vetting.png",
    title: "Silicon Valley-caliber vetting",
    info: "Only 2.3% of our Teams Professionalss pass our technical & behavioral assessments.",
  },
  {
    img: "/img/trusted.png",
    title: "Trusted global talent pool",
    info: "Access “hidden gem” Teams Professionalss outside your local area.",
  },
  {
    img: "/img/fast.png",
    title: "Hire 4x faster",
    info: "Hire a Teams Professionals in less than 14 days (permanent full-time)",
  },
]

export const partners = [
  {
    img: "img/spotify.png",
  },
  {
    img: "img/hubspot.png",
  },
  {
    img: "img/automattic.png",
  },
  {
    img: "img/hims.png",
  },
  {
    img: "img/hopper.png",
  },
  {
    img: "img/udacity.png",
  },
]

export const space_footer =[
  {
    img: "img/logo_white.png",
    lists: [
      {title: " 571 549 8430", url: "", icon: <Icon icon="ic:baseline-phone" />},
      {title: " services@tkxel.com", url: "", icon:<Icon icon="clarity:email-solid" />},
      {title: "11921 Freedom Drive Two Fountain Square, Suite 560, Reston, VA 20190 USA", url: "",},
    ],
  },
  {
    title: "Next-Gen Services",
    lists: [
      {title: "Data Science & AI", url: "",},
      {title: "Cyber Security", url: "",},
      {title: "Blockchain", url: "",},
    ]
  },
  {
    title: "Advisory",
    lists: [
      {title: "Digital Transformation", url: "",},
      {title: "Product Strategy", url: "",},
      {title: "Discovery Workshop Service", url: "",},
      {title: "POC Development", url: "",},
      {title: "Business Process Outsourcing", url: "",},
      {title: "Process Consulting & Audit", url: "",},
    ]
  },
  {
    title: "Product Engineering",
    lists: [
      {title: "Application Re-Engineering", url: "",},
      {title: "Custom Software Development", url: "",},
      {title: "Web App Development", url: "",},
      {title: "Mobile App Development", url: "",},
      {title: "DevOps", url: "",},
    ]
  },
  {
    title: "Solutions",
    lists: [
      {title: "Salesforce Consulting", url: "",},
      {title: "ServiceNow", url: "",},
      {title: "Mulesoft", url: "",},
      {title: "AWS", url: "",},
      {title: "Shopify", url: "",},
      {title: "Power BI", url: "",},
    ]
  },
  {
    title: "Engagement Model",
    lists: [
      {title: "Dedicated Teams", url: "",},
      {title: "Fixed Price", url: "",},
      {title: "Offshore Teams", url: "",},
    ]
  },
  
]



export const about_works = [
  {
    title: "Talent Discovery",
    info: "We meticulously sift through thousands of candidates to identify those with exceptional skills.",
    bg:"bg-[#E5EEFF]",
    titleColor: "text-[#01157C]",
    infoColor: "text-[#000000]"
  },
  {
    title: "Personal Presentations",
    info: "Candidates showcase their compatibility for remote work and interpersonal skills through video introductions",
    bg:"bg-[#E5EEFF]",
    titleColor: "text-[#01157C]",
    infoColor: "text-[#000000]"
  },
  {
    title: "Technical Evaluation",
    info: "We rigorously assess each candidate's technical expertise through comprehensive interviews with our senior specialists.",
    bg:"bg-[#E5EEFF]",
    titleColor: "text-[#01157C]",
    infoColor: "text-[#000000]"
  },
  {
    title: "Thorough Review",
    info: "Our dedicated team meticulously evaluates every stage of the selection process to uphold our high standards",
    bg:"bg-[#E5EEFF]",
    titleColor: "text-[#01157C]",
    infoColor: "text-[#000000]"
  },
  {
    title: "Warm Welcome",
    info: "Each new member of SpaceMaster receives a personalized onboarding experience to ensure a seamless integration",
    bg:"bg-[#E5EEFF]",
    titleColor: "text-[#01157C]",
    infoColor: "text-[#000000]"
  },
  {
    title: "Continuous Oversight",
    info: "We regularly monitor the performance of our team members to guarantee excellence in delivery",
    bg:"bg-[#E5EEFF]",
    titleColor: "text-[#01157C]",
    infoColor: "text-[#000000]"
  },
]

export const hiringProcess14  = [
  {
    days: "",
    title: "subscribe",
    titleColor: "text-gray-800"
  },
  {
    days: "",
    title: "get a team",
    titleColor: "text-gray-800"
  },
  {
    days: "",
    title: "Develop Business",
    titleColor: "text-gray-800"
  },
]

export const hiringProcess58  = [
  {
    days: "7 days",
    title: "Post & Promote Job",
    titleColor: "text-black"
  },
  {
    days: "14 days",
    title: "Recruit & Collect Resumes",
    titleColor: "text-black"
  },
  {
    days: "7 days",
    title: "Screen & Review Resumes",
    titleColor: "text-black"
  },
  {
    days: "5 days",
    title: "Assess Technical Skills",
    titleColor: "text-black"
  },
  {
    days: "21 days",
    title: "Multiple Interviews",
    titleColor: "text-black"
  },
  {
    days: "4 days",
    title: "Final Interviews",
    titleColor: "text-black"
  },
  {
    title: "Hire a Professionals",
    titleColor: "text-blue-900"
  },
]

export const benifits = [
  {
    title: "Pay Only When You Hire",
    img:"img/risk.png",
    lists: ['Professionalss set their expected annual salary.', 'You discuss salary requirements with us to get matched with qualifying candidates.', "You pay a fee based on the candidate's annual salary only when you decide to hire.",],
  },
  {
    title: "Risk-free Guarantee",
    img:"img/hire.png",
    lists: ['We offer a risk-free trial period to ensure that the Professionals you chose to hire is a perfect fit.', 'During the first 3 months, our team will match you with another Professionals free of charge if you are dissatisfied.'],
  },
]

export const getStarted = [
  {
    title: "Initiate Dialogue",
    img:"/img/request.png",
    info: "Share the vision for your project with us, and we'll attentively listen"
  },
  {
    title: "Engage with Talent",
    img:"/img/interview.png",
    info: "Review the profiles of potential team members and select those who align with your project's ethos"
  },
  {
    title: "Launch Your Project",
    img:"/img/hired.png",
    info: "Finalize your team selection, and embark on your collaborative venture with SpaceMaster"
  },
]

export const solveproblem = [
  {
    icon: "/img/accelerate.png",
    title: "Dream Teams for Dream Projects",
    bg_gray: true,
    info: "Our strength lies in our people - a dynamic squad of over 700 software experts dedicated to turning your digital dreams into reality. We don't just fill positions; we carefully match our experts to your unique needs."
  },
  
  {
    icon: "/img/dream_team.png",
    title: "Cutting-Edge Solutions for All",
    bg_gray: true,
    info: "Our expertise is as diverse as it is deep, covering everything from Data Science and AI to Cyber Security and Blockchain. But we're not just about the tech; we're about building ecosystems that empower your business to thrive in the digital era. From custom software development to strategic digital transformation, we've got you covered."
  },
  {
    icon: "/img/optimize.png",
    bg_gray: true,
    title: "We Have a Stellar Track Record ",
    info: "Our commitment to excellence sets SpaceMaster apart, reflected in our flawless track record: 100% positive reviews, a portfolio of over 20 transformative projects, and a consistent 100% customer satisfaction rate."
  }
]

export const achievements = [
  {
    no: true,
    icon: "/img/test_c.png",
  },
  {
    no: true,
    icon: "/img/test_fo.png",
  },
  {
    no: true,
    icon: "/img/test_wa.png",
  },
  {
    no: true,
    icon: "/img/test_go.png",
    dot:false
  },
  {
    no: false,
    icon: "/img/text-ex.png",
  },
  {
    no: false,
    icon: "/img/test_up.png",
  },
  {
    no: false,
    icon: "/img/test_cl.png",
  },
  {
    no: false,
    icon: "/img/test_ma.png",
    dot:false
  },
]

export const ratings = [
  {
    title: "20+ ",
    info: "Project Completed",
  },
  {
    title: "200+",
    info: "Team Members",
  },
  {
    title: "100%",
    info: "Positive Reviews",
  },
  {
    title: "100%",
    info: "Happy Clients",
  },
  {
    title: "100%",
    info: "Customer Satisfaction",
  },
]

export const Languages = [
  {
    title: "Back-end programming languages",
    info: [
      {
        info: [
      {img: "img/dot_net.png"},
      {img: "img/java.png"},
      {img: "img/python.png"},
      {img: "img/node.png"},
      {img: "img/php.png"},
      {img: "img/go.png"},
        ]
      }
    ]
  },
  {
    title: "Front-end programming languages",
    info: [
      {
        title: "Languages",
        info: [
          {img: "img/html.png"},
          {img: "img/css.png"},
          {img: "img/javascript.png"},
          
        ],
      },
      {
        title: "JavaScript frameworks",
        icon: <Icon icon="ep:arrow-down-bold" />,
        info: [
          {img: "img/angular.png"},
          {img: "img/react.png"},
          {img: "img/meteor.png"},
          {img: "img/vuejs.png"},
          {img: "img/nextjs.png"},
        ]
      }
    ]
  },
  {
    title: "Mobile",
    info: [
      {
        info: [
          {img: "img/ios.png"},
          {img: "img/android.png"},
          {img: "img/xamarin.png"},
          {img: "img/cordova.png"},
          {img: "img/pwa.png"},
          {img: "img/react-native.png"},
          {img: "img/flutter-logo.png"},
          {img: "img/ionic.png"},
        ]
      }
    ]
  },
  {
    title: "Databases / data storages",
   info: [
    {
      title: "SQL",
      icon: <Icon icon="ep:arrow-down-bold" />,
      info: [
        {img: "img/ms-sql.png"},
        {img: "img/mysql.png"},
        {img: "img/azure-sql.png"},
        {img: "img/oracle.png"},
      ],
    }, 
    {
      title: "NOSQL",
      icon: <Icon icon="ep:arrow-down-bold" />,
      info: [
        {img: "img/cassandra.png"},
        {img: "img/hive.png"},
        {img: "img/apache-hbase.png"},
        {img: "img/apache-nifi.png"},
      ]
    }
   ]
  },
  {
    title: "Cloud databases, warehouses, and storage",
   info: [
    {
      title: "AWS",
      icon: <Icon icon="ep:arrow-down-bold" />,
      info: [
        {img: "img/amazon-s3.png"},
        {img: "img/amazon-redshift.png"},
        {img: "img/amazondb.png"},
      ],
    }, {
      title: "AZURE",
      icon: <Icon icon="ep:arrow-down-bold" />,
      info: [
        {img: "img/azure_data.png"},
        {img: "img/azure_blob.png"},
      ],
    }, {
      title: "Google Cloud Platform",
      info: [
        {img: "img/google_cl_sql.png"},
        {img: "img/google_cl_store.png"}
      ]
    }
   ]
  },
  {
    title: "Big data",
    info: [
      {
        icon: <Icon icon="ep:arrow-down-bold" />,
        info: [
          {img: "img/hadoop.png"},
          {img: "img/spark.png"},
          {img: "img/cassandra.png"},
          {img: "img/apache-kafk.png"},
          {img: "img/hive.png"},
          {img: "img/apache_z.png"},
          {img: "img/apache-hbase.png"},
          {img: "img/azure.png"},
        ]
      }
    ]
  },
  {
    title: "DevOps",
    info: [
      {
        title: "Containerization",
        info: [
          {img: "img/jenkins.png"},
          {img: "img/kubernetes.png"},
          {img: "img/openshift.png"},
          {img: "img/apache.png"},
        ],
      }, 
      {
        title: "Automation",
        icon: <Icon icon="ep:arrow-down-bold" />,
        info: [
          {img: "img/ansible.png"},
          {img: "img/puppet.png"},
          {img: "img/chef.png"},
          {img: "img/saltstack.png"},
        ]
      }
    ]
  },
  {
   info: [
    {
      title: "CI/CD tools",
      icon: <Icon icon="ep:arrow-down-bold" />,
      info: [
        {img: "img/aws_tool.png"},
        {img: "img/azure_tool.png"},
        {img: "img/go_devTool.png"},
      ],
    }, 
    {
      title: "Monitoring",
      icon: <Icon icon="ep:arrow-down-bold" />,
      info: [
        {img: "img/zabbix.png"},
        {img: "img/nagios.png"},
        {img: "img/elas.png"},
        {img: "img/prome.png"},
      ]
    }
   ]
  },
]

export const emailForm = [
  {
      label: "Full Name",
      name: "name",
      type: "text",
      placeholder: "Enter your name",
      rules: {
          required: {
              value: true,
              message: "Name is required"
          }
      }
  },
  {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter your email",
      rules: {
          required: {
              value: true,
              message: "Email is required",
          }
      }    
  },
  {
      label: "General Question",
      name: "phoneNumber",
      type: "number",
      placeholder: "Enter your phone number",
      rules: {
          required: {
              value: true,
              message: "Phone number is required"
          }
      } 
  },
  {
      label: "How we can help you?",
      name: "message",
      type: "textarea",
      placeholder: "Enter your phone message",
      rules: {
          required: {
              value: true,
              message: "Message is required"
          }
      } 
  },
]

export const joinTeamForm = [
  {
    label: "Full Name",
    name: "name",
    type: "text",
    placeholder: "Enter your name",
    rules: {
        required: {
            value: true,
            message: "Name is required"
        }
    }
},
{
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Enter your email",
    rules: {
        required: {
            value: true,
            message: "Email is required",
        }
    }    
},
{
    label: "Mobile number",
    name: "phoneNumber",
    type: "number",
    placeholder: "Enter your phone number",
    rules: {
        required: {
            value: true,
            message: "Phone number is required"
        }
    } 
},
{
  label: "Availability to start working with us",
  name: "message",
  type: "select",
  options:[
    {
      label: "Full time",
      value: "Full time"
    },
    {
      label: "Part time",
      value: "Part time"
    }
  ],
  placeholder: "Please Select",
  rules: {
      required: {
          value: true,
          message: "Message is required"
      }
  }
},
{
  label: "Position",
  name: "position",
  type: "select",
  options:[
    {
      label: "Senior Developer",
      value: "senior Developer"
    },
    {
      label: "Junior Developer",
      value: "junior Developer"
    }
  ],
  placeholder: "Please Select",
  rules: {
      required: {
          value: true,
          message: "Position is required"
      }
  }
},
{
  label: "Expected Salary in PHP",
  name: "message",
  type: "text",
  placeholder: "Enter your phone message",
  rules: {
      required: {
          value: true,
          message: "Message is required"
      }
  } 
},
]


export const willGet = [
  {
    icon: "img/discovery.png",
    title:"Discovery Team",
    info: "Our expert group formulates multiple outcomes and software solutions, providing a clear roadmap before development begins."
  },
  {
    icon: "img/timely.png",
    title:"Timely Delivery",
    info: "With clear goals and deadlines, we guarantee on-time delivery for every project."
  },
  {
    icon: "img/determined.png",
    title:"Determined Expenses",
    info: "Enjoy transparent pricing with a clear budget, ensuring costs never exceed the agreed-upon amount."
  },
  {
    icon: "img/ease.png",
    title:"Ease of Working",
    info: "With detailed specifications and task breakdowns, we make complex projects manageable and transparent."
  },
  {
    icon: "img/security.png",
    title:"Security",
    info: "Your intellectual property is safe with us, thanks to strict NDAs and a commitment to data protection."
  },
]


export const priceDetails = [
  {
    title: "Basic Plan",
    info:"$15",
    members: "10 Team Members"
  },
  {
    title: "Premium",
    info:"$30",
    members: "20 Team Members"
  },
  {
    title: "Advance Plan",
    info:"$90",
    members: "30 Team Members"
  },
]

// client dashboard

export const dashboard = [
  {
    icon: <Icon icon="material-symbols-light:dashboard" />,
    title: "Dashboard",
    link: "/dashboard",
  },
  {
    icon: <Icon icon="mdi:account" />,
    title: "Team",
    link: "#",
  },
  {
    icon: <Icon icon="fa-solid:crown" />,
    title: "Subscription",
    link: "/subscriptions",
  },
  {
    icon: <Icon icon="solar:card-2-bold" />,
    title: "Add card",
    link: "/addcard",
  },
  {
    icon: <Icon icon="fluent:mail-24-filled" />,
    title: "Messages ",
    link: "/messages",
  },
  {
    icon: <Icon icon="ion:receipt-sharp" />,
    title: "Receipts",
    link: "/receipts",
  },
  {
    icon: <Icon icon="clarity:bell-solid" />,
    title: "Notification",
    link: "/notification",
  },
]

export const yourTeam = [
  {
    sr_no: 1,
    img: "/img/team6.png",
    name:"Jenny Wilson",
    job_title:"Content Rights ",
  },
  {
    sr_no: 2,
    img: "/img/team5.png",
    name:"Ralph Edwards",
    job_title:"Quality Assurance ",
  },
  {
    sr_no: 3,
    img: "/img/team4.png",
    name:"Eleanor Pena",
    job_title:"Quality Assurance ",
  },
  {
    sr_no: 4,
    img: "/img/team3.png",
    name:"Robert Fox",
    job_title:"Subscription Management ",
  },
  {
    sr_no: 5,
    img: "/img/team_2.png",
    name:"Marvin McKinney",
    job_title:"Ad Sales Manager",
  },
  {
    sr_no: 6,
    img: "/img/team1.png",
    name:"Kristin Watson",
    job_title:"Website Research",
  },
]

export const projectSummary = [
  {
    name: "Nelsa web developement",
    member:"Om prakash sao",
    status: "Completed", 
    progress:"100%",
  },
  {
    name: "Datascale AI app ",
    member:"Neilsan mando",
    status: "Delayed", 
    progress:"35%",
  },
  {
    name: "Media channel branding",
    member:"Tiruvelly priya",
    status: "At risk", 
    progress:"66%",
  },
  {
    name: "Corlax iOS app develpoement",
    member:"Matte hannery",
    status: "Completed", 
    progress:"100%",
  },
  {
    name: "Website builder developement",
    member:"Sukumar rao",
    status: "On going", 
    progress:"50%",
  },
  {
    name: "Nelsa web developement",
    member:"Om prakash sao",
    status: "Completed", 
    progress:"100%",
  },
  {
    name: "Media channel branding",
    member:"Tiruvelly priya",
    status: "At risk", 
    progress:"66%",
  },
  {
    name: "Nelsa web developement",
    member:"Om prakash sao",
    status: "Completed", 
    progress:"100%",
  },
]


export const reciepts = [
  {
    status: "Processing",
    date: "01/23/2015",
    amount: "$12000.88",
    billing_no : "#BAL123HUI",
    status_Color: "bg-[#6A56E7]"
  },
  {
    status: "Completed",
    date: "01/23/2015",
    amount: "$12000.88",
    billing_no : "#BAL123HUI",
    status_Color: "bg-[#10C30C]"
  },
  {
    status: "Cancelled",
    date: "01/23/2015",
    amount: "$12000.88",
    billing_no : "#BAL123HUI",
    status_Color: "bg-[#FF1607]"
  },
  {
    status: "Cancelled",
    date: "01/23/2015",
    amount: "$12000.88",
    billing_no : "#BAL123HUI",
    status_Color: "bg-[#FF1607]"
  },
  {
    status: "Completed",
    date: "01/23/2015",
    amount: "$12000.88",
    billing_no : "#BAL123HUI",
    status_Color: "bg-[#10C30C]"
  },
  {
    status: "Completed",
    date: "01/23/2015",
    amount: "$12000.88",
    billing_no : "#BAL123HUI",
    status_Color: "bg-[#10C30C]"
  },
]

export const notifications = [
  {
    day: "",
    icon: <Icon icon="mdi:bell-ring" />,
    title: "Subscription Payment : Due Date",
    message: "Your kindness card has been a some long description so that it will matter and also this one is a notifications."  
  },
  {
    day: "Yesterday",
    icon: <Icon icon="mdi:bell-ring" />,
    title: "Created Account",
    message: "Your kindness card has been a some long description so that it will matter and also this one is a notifications."  
  },
  {
    day: "",
    icon: <Icon icon="mdi:bell-ring" />,
    title: "Created Account",
    message: "Your kindness card has been a some long description so that it will matter and also this one is a notifications."  
  },
  {
    day: "",
    icon: <Icon icon="mdi:bell-ring" />,
    title: "Created Account",
    message: "Your kindness card has been a some long description so that it will matter and also this one is a notifications."  
  },
  {
    day: "Last Week",
    icon: <Icon icon="mdi:bell-ring" />,
    title: "Created Account",
    message: "Your kindness card has been a some long description so that it will matter and also this one is a notifications."  
  },
  {
    day: "",
    icon: <Icon icon="mdi:bell-ring" />,
    title: "Created Account",
    message: "Your kindness card has been a some long description so that it will matter and also this one is a notifications."  
  },
  {
    day: "",
    icon: <Icon icon="mdi:bell-ring" />,
    title: "Created Account",
    message: "Your kindness card has been a some long description so that it will matter and also this one is a notifications."  
  },{
    day: "",
    icon: <Icon icon="mdi:bell-ring" />,
    title: "Created Account",
    message: "Your kindness card has been a some long description so that it will matter and also this one is a notifications."  
  },

]

export const dummyChat = [
{
  id: 1,
  img: "/img/team1.png",
  name: "Karen Joe",
  message: "Hi, How are you?",
  time: "10:00 AM",
  active: "/img/team1.png",
  unread: true,
  count: 3,
  unread_color: "#FF1607",
  active_color: "#FF1607",
  active_color: "#FF1607",
},
{
  id: 2,
  img: "/img/team_2.png",
  name: "James Smith",
  message: "Typing....",
  time: "10:00 AM",
  active: "/img/team_2.png",
  unread: true,
  count: 3,
  unread_color: "#FF1607",
  active_color: "#FF1607",
  active_color: "#FF1607",
},
{
  id: 3,
  img: "/img/team3.png",
  name: "Michal Clark",
  message: "whats going on?",
  time: "10:00 AM",
  active: "/img/team3.png",
  unread: true,
  count: 3,
  unread_color: "#FF1607",
  active_color: "#FF1607",
  active_color: "#FF1607",
},
{
  id: 4,
  img: "/img/team4.png",
  name: "Jhon Hartley",
  message: "Hi, How are you?",
  time: "10:00 AM",
  active: "/img/team4.png",
  unread: true,
  count: 3,
  unread_color: "#FF1607",
  active_color: "#FF1607",
  active_color: "#FF1607",
}
]
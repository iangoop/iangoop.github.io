module.exports = {
  "title": "Ian Gopfert | Software Engineer Resume",
  "name": "Ian Gopfert",
  "position": "Software Engineer",
  "info": {
    "birthdate": "08/02/1986",
    "location": "London, UK",
    "email": "iangoop@gmail.com",
    "mobile": "073 7775 4629",
    "linkedin": {
      "alias": "ian-gopfert",
      "link": "http://www.linkedin.com/in/ian-gopfert"
    },
    "github": {
      "alias": "iangoop",
      "link": "http://www.github.com/iangoop"
    },
    "website": "iangoop.github.io"
  },
  "languages": [
    {"name":"Portuguese", "level": "Native"},
    {"name":"English", "level":"Fluent"}
  ],
  "skills":[
    {
      "category":"Coding",
      "skill": [
        {"name":"Javascript", "instance": []},
        {"name":"Java", "instance": []},
        {"name":"PHP", "instance": []}
      ]
    },
    {
      "category": "Databases",
      "skill": [
        {"name":"SQL", "instance": ["Oracle", "MySQL"]},
        {"name":"NoSQL", "instance": ["MongoDB"]},
      ]
    },
    {
      "category": "Frameworks",
      "skill": [
        {"name":"Spring", "instance": []},
        {"name":"ExpressJS", "instance": []},
        {"name":"Slim", "instance": []},
        {"name":"Hibernate", "instance": []},
      ]
    },
    {
      "category": "Front-End",
      "skill": [
        {"name":"Javascript", "instance": []},
        {"name":"HTML", "instance": []},
        {"name":"CSS/Sass/Less", "instance": []},
        {"name":"AngularJS", "instance": []},
        {"name":"jQuery/Bootstrap", "instance": []}
      ]
    },
    {
      "category": "Testing",
      "skill": [
        {"name":"JUnit", "instance": []},
        {"name":"Mocha/Chai/SinonJS", "instance": []}
      ]
    },
    {
      "category": "Versioning",
      "skill": [
        {"name":"Git", "instance": []}
      ]
    }
  ],
  "profile": [
    "A software engineer with 10+ years of experience in developing web projects on a set of platforms either as a freelance worker or as part of an enterprise team.",
    "Experience in developing projects from scratch to deployment, as well as in maintaining and bulking up applications already in production, applying from Agile to more restrictive models according to the nature of each project.",
    "Focused mainly on the development of rich user interface projects, using Java/Javascript as prime tech and PHP on freelance projects."
  ],
  "experience": [
    {
      "role": "Frontend Developer, Paws Group",
      "period":"03/2021 - 11/2024",
      "place":"London, England",
      "highlights":[
        "Worked as front-end lead developer on the upgrade of Paws.com in the transformation program to become Europe's Leading Dog and Cat Wellbeing Business",
        "Refactored the storefront from a fresh Design System, tailoring the experience for customers on mobile, tablet and desktop, replacing and creating components in the Hybris platform using Javascript (jQuery), and Java (Spring).",
        "Worked on integrating third-party software via API like Klevu as search engine and Cloudinary as image repository.",
        "Worked on optimising the storefront delivery, reducing the average page loading time by half, as well as meeting all metrics on Core Web Vitals Assessment.",
        "Refactored the cart and checkout area simplifying the purchase process and introducing tiered shipping prices, reducing costs of shipping for the company at the same time as increasing the conversion rate and reaching the peak number of subscriptions on a total of 250k.",
      ]
    },
    {
      "role": "Freelance Developer",
      "period":"2014 - 2020",
      "place":"Brazil",
      "highlights":[
        "Worked on more than 13 web projects for Brazilian customers.",
        {
          "group":"Main projects:",
          "highlights": [
            "Deployed and maintained school administration portal in core PHP for 7 institutions, providing interfaces for students, teachers, and finance team, tailoring the software for each institution according to their needs.",
            "Developed a multi-module web software for a digital marketing course in AngularJS and PHP/Slim Framework, with more than 15k users registered on the free open trial. Developed an upgraded PRO version due to the success of the first version.",
            "Developed a platform using PHP/Slim Framework and AngularJS for environmental impacts awareness in local communities due to the deployment of new energy transmission lines, as an interactive web quiz, with a thousand interactive sessions of people from 5 different affected states.",
            "Participated in the development of a platform for the application on the innovation awards of the Brazilian National Confederation of Industry, using Spring MVC/AngularJS, with almost 4k applications on its launch year."
          ]
        },
        "Worked under several types of contracts following multiple development models, such as waterfall, incremental, and Kanban, having, as major assignments, requirement analysis, project planning, data modeling, interface implementation from prototypes, coding, deploying, and maintenance."
      ]
    },
    {
      "role": "System Analyst/Full Stack Developer, ADDLabs/UFF",
      "period":"03/2010 - 04/2014",
      "place":"Rio de Janeiro, Brazil",
      "highlights":[
        "Developed AI-based applications in Java to support an oil industry on intricate oil exploration processes.",
        "Worked in every step of development, from the identification of the requirements, to back end and front end development as well as managing the deployment.",
        "Implemented complex interfaces by mixing JSF/Primefaces components with powerful jQuery front end coding",
        "Led a team of 5+ person, including designer, researcher, interns, and other developers, being responsible for the interface between the team and product owner/manager"
      ]
    }
  ],
  "projects": [
    {
      "title": "E-commerce Subscription Service (In Progress)",
      "link": "https://github.com/iangoop/subscriptions",
      "alias": "github.com/iangoop/subscriptions",
      "highlights": [
        {
          "group":"Building a full-stack subscription service to automate e-commerce orders based on user-defined frequencies.",
          "highlights": [
            "Backend: Developing an API with Fastify, integrated into Firebase Functions, providing CRUD functionality for Products and Customers, with Firestore as the data storage solution.",
            "Frontend: Creating a pilot React application to manage Products and Customers through the API.",
            "DevOps: Configuring a CI/CD pipeline using GitHub Actions to automate deployment of the React app to Firebase Hosting and the API to Firebase Functions.",
            "Tech Stack: React, Fastify, Firebase (Functions, Firestore, Hosting), GitHub Actions."
          ],
        },
        "This project is ongoing and serves as a practical learning experience in React, Firebase, API development, and CI/CD pipelines."
      ]

    },
    {
      "title": "AngularJS components",
      "link": "http://npmjs.com/~ian.gopfert",
      "alias": "~ian.gopfert",
      "highlights": [
        "Developed a directive to apply input masks with variable currency configurations",
        "Developed an HTTP interceptor for managing security tokens in a SPA Architecture, compatible with refresh tokens",
        "Developed a flexible AngularJS wrapper for Popper.js, adding meaningful behavior to the library"
      ]
    }
  ]
}

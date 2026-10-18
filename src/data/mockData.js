export const profileData = {
  name: "Dhanyashree M V",
  role: "AI/ML Engineer",

  about:
    "B.E. graduate in Artificial Intelligence & Machine Learning from Dayananda Sagar College of Engineering (CGPA 9.0/10), with hands-on research experience at IIM Bengaluru, CSIR-NAL and Handshake AI. I break down complex problems, design systematic experiments, and turn research insights into reliable, practical intelligent systems.",
  image: "/profile.png",
  email: "dhanyshreemv@gmail.com",
  phone: "+91 8660769397",
  location: "Bengaluru, India",

  social: {
    linkedin: "https://www.linkedin.com/in/dhanyashree-mv-27d/",
    github: "https://github.com/DHANYASHREE-MV",
    resume: "/Dhanyashree_MV_Resume_Updated.pdf",
    instagram: "https://www.instagram.com/dhanyaamv/"
  },

  skills: {
    programming: ["Python", "SQL", "JavaScript", "HTML", "CSS", "React.js"],

    ml: [
      "Keras",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "YOLOv11",
      "Feature Engineering",
      "Model Deployment"
    ],

    genai: ["LangChain", "LangGraph", "LLMs", "RAG", "AI Agents"],

    mlops: ["MLflow", "Docker", "FastAPI", "REST APIs", "CI/CD", "Git"],

    databases: ["PostgreSQL", "MongoDB", "SQLite", "Pinecone"],

    research: [
      "Critical Thinking",
      "Data Analysis",
      "Exploratory Data Analysis",
      "Experiment Tracking",
      "LLM Evaluation",
      "AI Evaluation",
      "Prompt Engineering",
      "Ground-Truth Validation",
      "Model Failure Analysis"
    ]
  },

  experience: [
    {
      company: "IIM Bengaluru – CSITM",
      role: "Research Intern",
      dates: "Research Internship",
      description: [
        "Developing an AI-based mobility support device for blind users, integrating real-time object detection to identify obstacles and surroundings.",
        "Building functionality for education and daily-activity assistance, aiming to support independent use beyond navigation.",
        "Working closely with a professor and interacting with faculty across departments, contributing to the device's system design and testing process."
      ]
    },
    {
      company: "CSIR – National Aerospace Laboratories (NAL)",
      role: "Research & ML Intern",
      dates: "Research Internship",
      description: [
        "Developed a machine learning model to predict the Remaining Useful Life (RUL) of aircraft components using real-world strain sensor data for predictive maintenance.",
        "Performed data preprocessing and feature engineering, and implemented ASTM E1049-85 Rainflow counting with exponential smoothing to extract fatigue features.",
        "Trained, evaluated and optimized ML models in Python, validating performance through regression metrics and reproducible experiment workflows.",
        "Conducted exploratory data analysis on time-series sensor data to identify degradation patterns and improve prediction accuracy."
      ]
    },
    {
      company: "Handshake AI",
      role: "AI Evaluation Specialist (Fellow)",
      dates: "Fellowship",
      description: [
        "Engineered research-driven evaluation benchmarks to stress-test LLMs on web retrieval, multi-step reasoning and factual accuracy.",
        "Performed rigorous multi-source research and ground-truth validation to build high-confidence datasets for AI model evaluation.",
        "Diagnosed model hallucinations and reasoning failures through systematic testing, generating targeted evaluation data to improve LLM reliability and search performance."
      ]
    },
    {
      company: "The Developers Arena",
      role: "Data Science Intern",
      dates: "Internship",
      description: [
        "Built an end-to-end Airbnb Market Explorer Dashboard using Streamlit and Plotly, transforming raw data into interactive business insights.",
        "Performed comprehensive data cleaning, EDA and feature engineering across 50K+ listings.",
        "Delivered ML-driven pricing predictions integrated directly into the dashboard UI."
      ]
    }
  ],

  projects: [
    {
      title: "Cortex",
      subtitle: "Multi-Agent RAG System",
      description:
        "Production-ready AI assistant powered by 9 specialized agents orchestrated with LangGraph, combining SQL querying and RAG to answer academic, administrative and institutional queries. React frontend and FastAPI backend, deployed on Netlify and Railway, with voice interaction, multilingual translation and image understanding.",
      tech: ["LangGraph", "LangChain", "FastAPI", "PostgreSQL", "ChromaDB"],
      link: "https://cortex-aiml-assistant.netlify.app/",
      github: "https://github.com/DHANYASHREE-MV/CORTEX",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop"
    },
    {
      title: "WildGuard AI",
      subtitle: "Deep Learning + Computer Vision",
      description:
        "YOLOv11-based system that detects poachers, rangers, tourists and wildlife from custom camera-trap datasets. End-to-end pipeline from annotation to evaluation with Label Studio and MLflow, plus a Streamlit app with multi-image support and automated Twilio SMS alerts on poacher detection.",
      tech: ["YOLOv11", "Streamlit", "Twilio API", "Label Studio", "MLflow"],
      link: "https://github.com/DHANYASHREE-MV/WildGuard-AI---Poaching-Detection-System",
      github: "https://github.com/DHANYASHREE-MV",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"
    },
    {
      title: "Airbnb Smart Pricing",
      subtitle: "Predictive Analytics & Dashboards",
      description:
        "End-to-end ML platform predicting listing prices with Random Forest across 50K+ listings. Interactive Streamlit and Plotly dashboards for pricing trends, deployed as a FastAPI service with experiments and model versions tracked in MLflow, evaluated with RMSE and R².",
      tech: ["Random Forest", "Scikit-learn", "FastAPI", "Streamlit", "MLflow"],
      link: "https://github.com/DHANYASHREE-MV/Airbnb-SmartPricing-Insights-Hub",
      github: "https://github.com/DHANYASHREE-MV",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop"
    },
    {
      title: "Multiple Disease Prediction",
      subtitle: "ML-Powered Clinical Risk Screening",
      description:
        "Production-ready web system predicting Diabetes, Heart Disease, and Parkinson's using optimized ML pipelines — containerized with Docker, tracked with MLflow, and deployed via Streamlit for clinical usability.",
      tech: ["Logistic Regression", "Random Forest", "Streamlit", "MLflow", "Docker"],
      link: "https://github.com/DHANYASHREE-MV/MultipleDiseasePrediction",
      github: "https://github.com/DHANYASHREE-MV/MultipleDiseasePrediction",
      image:
        "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=1600&auto=format&fit=crop"
    }
  ],

  leadership: [
    {
      role: "Content Co-Lead",
      org: "Aventus 3.0 – National-Level Hackathon, DSCE Central Committee",
      dates: "Core Committee",
      stat: { to: 500, suffix: "+", label: "participants reached" },
      tags: ["Content strategy", "Event coordination", "Cross-functional team"],
      points: [
        "Led a cross-functional team in planning, content strategy and event coordination.",
        "Ensured timely delivery of communications for 500+ participants."
      ]
    },
    {
      role: "Event Organiser",
      org: "Innovation & Entrepreneurship Development Cell (IEDC), DSCE",
      dates: "June 2023 – December 2023",
      tags: ["Workshops", "Innovation events", "Industry collaboration"],
      points: [
        "Organized technical workshops and innovation events.",
        "Collaborated with faculty, industry professionals and student teams to promote entrepreneurship and technology initiatives."
      ]
    }
  ],

  education: [
    {
      institution: "Dayananda Sagar College Of Engineering",
      degree: "B.E. in Artificial Intelligence and Machine Learning",
      dates: "2022 – 2026",
      grade: "CGPA: 9.0",
      location: "Bengaluru"
    }
  ],

  certifications: [
    {
      name: "Advanced: Generative AI for Developers Learning Path & Machine Learning",
      issuer: "Google Cloud",
      tags: ["Generative AI", "Machine Learning"]
    },
    {
      name: "Career Launchpad: Cloud Engineer Track (Vertex AI)",
      issuer: "Google Cloud",
      tags: ["Cloud", "Vertex AI"]
    },
    {
      name: "Human Computer Interaction",
      issuer: "NPTEL, IIT Madras",
      tags: ["HCI", "Design"]
    },
    {
      name: "Anthropic Academy: All Courses Completed",
      issuer: "Anthropic",
      tags: ["LLMs", "AI"]
    }
  ]
};

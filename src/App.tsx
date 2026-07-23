import { Mail, Phone, ExternalLink, BrainCircuit, Globe, Server, Shield, Activity, FileText } from 'lucide-react';
import './index.css';

const projects = [
  {
    title: "Research Mind - Multi-Agent AI",
    description: "Engineered backend orchestration logic coordinating 6 autonomous AI agents into a distributed pipeline. Integrated FastAPI endpoints with a React frontend for real-time markdown reports, and containerized the deployment using Docker and GCP.",
    link: "https://github.com/Sabrin-s",
    tech: ["React", "FastAPI", "Python", "Docker", "GCP", "Gradio"],
    icon: <BrainCircuit size={24} />
  },
  {
    title: "AI-First CRM HCP Module",
    description: "AI-powered CRM for Healthcare Professionals. Uses LangGraph and Groq LLMs for natural language interaction logging, summarization, and smart follow-up suggestions.",
    link: "https://github.com/Sabrin-s/smart-crm-hcp",
    tech: ["Python", "FastAPI", "React", "Redux", "LangGraph", "Groq"],
    icon: <BrainCircuit size={24} />
  },
  {
    title: "Thyroid Disease Diagnosis Framework",
    description: "Attention-based multi-modal deep learning framework combining BERT for clinical text analysis and ResNet-18 for ultrasound image classification, achieving 96.5% accuracy.",
    link: "https://github.com/Sabrin-s/TYROID_DIS_PREDICTIONS_MAI",
    tech: ["Python", "Flask", "PyTorch", "BERT", "ResNet-18"],
    icon: <Activity size={24} />
  },
  {
    title: "GitPulse Automation Bot",
    description: "Event-driven bot securely intercepting GitHub webhooks, running custom triggers, querying Gemini AI for triage, and dispatching dynamic Slack alerts.",
    link: "https://github.com/Sabrin-s/github-automation-bot",
    tech: ["Next.js", "TypeScript", "Supabase", "Gemini AI"],
    icon: <Globe size={24} />
  },
  {
    title: "CareerAI Full Stack",
    description: "Django-based AI career platform featuring resume analysis against JDs, AI-based mock interviews, skill gap analysis, and job recommendations.",
    link: "https://github.com/Sabrin-s/ai-career-django",
    tech: ["Python", "Django", "MySQL", "REST API", "TF-IDF"],
    icon: <FileText size={24} />
  },
  {
    title: "Smart Resume Analyzer",
    description: "NLP-powered application extracting technical skills from PDF resumes to match with job roles and provide actionable improvement tips.",
    link: "https://github.com/Sabrin-s/Smart-Resume-Analyzer-and-Job-Recommendation-System",
    tech: ["Python", "Streamlit", "NLTK", "Scikit-learn"],
    icon: <FileText size={24} />
  },
  {
    title: "Multiple Disease Prediction",
    description: "Integrated web platform predicting the likelihood of diabetes, heart disease, and Parkinson's using SVM, Logistic Regression, and Random Forest models.",
    link: "https://github.com/Sabrin-s/multiple-disease-prediction",
    tech: ["Python", "Machine Learning", "Streamlit", "Pandas"],
    icon: <Activity size={24} />
  },
  {
    title: "Real-Time Dish Dashboard",
    description: "Full-stack app using Socket.IO for real-time synchronization of dish availability and status across all connected clients instantly.",
    link: "https://github.com/Sabrin-s/Dish-app",
    tech: ["Node.js", "Express", "React", "Socket.IO"],
    icon: <Server size={24} />
  },
  {
    title: "Blockchain Voting System",
    description: "Secure, transparent, and tamper-proof electronic voting system utilizing SHA-256 cryptographic hashing to preserve blockchain integrity.",
    link: "https://github.com/Sabrin-s/BlockchainVotingSystem-in-python",
    tech: ["Python", "Blockchain", "SHA-256", "MySQL"],
    icon: <Shield size={24} />
  }
];

function App() {
  return (
    <>
      <div className="bg-wrapper"></div>
      
      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <div className="logo">Sabrin S.</div>
          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#resume">Resume</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="hero container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I'm <span className="highlight">Sabrin S</span></h1>
            <p className="hero-subtitle">
              Computer Science Engineering Graduate & Full-Stack Developer specializing in applied Machine Learning, AI integrations, and scalable web applications.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
            </div>
          </div>
          <div className="hero-image-container">
            <div className="hero-glow"></div>
            <img src="/assets/profile.jpg" alt="Sabrin S" className="hero-image" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass-panel">
              <div className="project-icon">
                {project.icon}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View on GitHub <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="resume container">
        <div className="section-header" style={{ marginBottom: '3rem' }}>
          <h2 className="section-title" style={{ marginBottom: 0, textAlign: 'left' }}>Resume & Experience</h2>
        </div>

        <div className="resume-layout">
          {/* Main Content Column (Experience) */}
          <div className="resume-main">
            <div className="resume-card glass-panel" style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>Work Experience</h3>
              
              <div className="resume-item">
                <div className="resume-item-header" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                  <h4 style={{ fontSize: '1.2rem' }}>Python Developer Intern</h4>
                  <span className="resume-meta" style={{ color: 'var(--accent-color)', fontWeight: 600 }}>Feb 2025 – May 2025</span>
                </div>
                <p className="resume-meta" style={{ marginBottom: '1rem', color: '#fff', fontSize: '1rem' }}>Cybernaut Edu-Tech LLP (Remote)</p>
                <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                  <li style={{ marginBottom: '0.75rem' }}>Wrote modular backend applications in Python using OOP and REST API design patterns.</li>
                  <li style={{ marginBottom: '0.75rem' }}>Handled file processing, data transformation, and error handling across multiple backend components.</li>
                  <li style={{ marginBottom: '0.75rem' }}>Collaborated using Git/GitHub for version control and participated in team code reviews.</li>
                  <li>Authored API documentation and internal workflow docs.</li>
                </ul>
              </div>

              <hr style={{ border: 0, borderTop: '1px solid var(--border-color)', margin: '2.5rem 0' }} />

              <div className="resume-item">
                <div className="resume-item-header" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                  <h4 style={{ fontSize: '1.2rem' }}>Salesforce Developer Virtual Intern</h4>
                  <span className="resume-meta" style={{ color: 'var(--accent-color)', fontWeight: 600 }}>May 2024 – Jun 2024</span>
                </div>
                <p className="resume-meta" style={{ marginBottom: '1rem', color: '#fff', fontSize: '1rem' }}>SmartBridge & SmartInternz</p>
                <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                  <li style={{ marginBottom: '0.75rem' }}>Completed an 8-week virtual internship covering Salesforce Fundamentals, Organizational Setup, and Process Automation via Trailhead.</li>
                  <li style={{ marginBottom: '0.75rem' }}>Earned Super Badges in Apex Specialist and Process Automation Specialist.</li>
                  <li>Gained hands-on experience with Apex, unit testing/debugging, VS Code/CLI setup, and Lightning Web Components (LWC) & APIs.</li>
                </ul>
              </div>
            </div>
            
            <div className="resume-card glass-panel" style={{ marginTop: '2rem' }}>
              <h3>Certifications</h3>
              <ul className="cert-list">
                <li>AI Certification — Infosys Springboard</li>
                <li>SnowPro Associate Certification — Snowflake</li>
                <li>Salesforce Developer Virtual Internship</li>
                <li>ServiceNow Virtual Internship</li>
                <li>UiPath Certified Automation Developer Associate</li>
                <li>IBM AI & Cloud, Edunet Foundation</li>
              </ul>
            </div>
          </div>

          {/* Sidebar Column (Education, Skills, Certs) */}
          <div className="resume-sidebar">
            <div className="resume-card glass-panel" style={{ marginBottom: '2rem' }}>
              <h3>Education</h3>
              <div className="resume-item" style={{ marginBottom: 0 }}>
                <h4>B.E., Computer Science and Engineering</h4>
                <p className="resume-meta" style={{ margin: '0.5rem 0' }}>Mahendra Engineering College | 2022 – 2026</p>
                <p style={{ color: 'var(--text-secondary)' }}>CGPA: 9.1/10.0</p>
              </div>
            </div>
            
            <div className="resume-card glass-panel" style={{ marginBottom: '2rem' }}>
              <h3>Technical Skills</h3>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Core</strong>
                <div className="skills-tags">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Java</span>
                  <span className="tech-tag">AI/ML</span>
                  <span className="tech-tag">REST APIs</span>
                  <span className="tech-tag">OOP</span>
                  <span className="tech-tag">Data Structures</span>
                  <span className="tech-tag">SQL</span>
                  <span className="tech-tag">Backend</span>
                </div>
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Frameworks & Frontend</strong>
                <div className="skills-tags">
                  <span className="tech-tag">Django</span>
                  <span className="tech-tag">Flask</span>
                  <span className="tech-tag">Streamlit</span>
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">HTML/CSS</span>
                  <span className="tech-tag">JavaScript</span>
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>ML & AI</strong>
                <div className="skills-tags">
                  <span className="tech-tag">Scikit-learn</span>
                  <span className="tech-tag">Pandas</span>
                  <span className="tech-tag">NumPy</span>
                  <span className="tech-tag">TensorFlow</span>
                  <span className="tech-tag">PyTorch</span>
                  <span className="tech-tag">XGBoost</span>
                  <span className="tech-tag">ResNet-18</span>
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Databases & DevOps</strong>
                <div className="skills-tags">
                  <span className="tech-tag">MySQL</span>
                  <span className="tech-tag">MongoDB</span>
                  <span className="tech-tag">Git/GitHub</span>
                  <span className="tech-tag">GitHub Actions</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Resume Viewer */}
        <div style={{ marginTop: '4rem' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>Full Resume Document</h3>
          <div style={{ 
            background: '#000', 
            padding: '1rem', 
            borderRadius: '12px', 
            border: '1px solid var(--border-color)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
          }}>
            <iframe 
              src="/assets/resume.pdf" 
              width="100%" 
              height="800px" 
              style={{ border: 'none', borderRadius: '8px', background: '#fff' }} 
              title="Full Resume"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="contact-content glass-panel">
          <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Get In Touch</h2>
          <p className="contact-desc">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="contact-methods">
            <a href="mailto:sabrincse004@gmail.com" className="contact-item">
              <div className="contact-icon"><Mail size={28} /></div>
              <span className="contact-text">Email Me</span>
            </a>
            <a href="tel:+916380903181" className="contact-item">
              <div className="contact-icon"><Phone size={28} /></div>
              <span className="contact-text">+91 6380903181</span>
            </a>
            <a href="https://www.linkedin.com/in/sabrin-s/" target="_blank" rel="noopener noreferrer" className="contact-item">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </div>
              <span className="contact-text">LinkedIn</span>
            </a>
            <a href="https://github.com/Sabrin-s" target="_blank" rel="noopener noreferrer" className="contact-item">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </div>
              <span className="contact-text">GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer container">
        <p>© {new Date().getFullYear()} Sabrin S. Built with React & Vite.</p>
      </footer>
    </>
  );
}

export default App;

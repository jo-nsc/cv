import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos"
import { GitHubIcon, LinkedInIcon } from "@/components/icons"

import foto from "./foto.jpg"; // Adjust the path relative to the current file

export const RESUME_DATA = {
  name: "Jônatas de Souza Nascimento",
  initials: "JSN",
  location: "Aachen, Germany",
  locationLink: "https://www.google.com/maps/place/Aachen,+Germany",
  about:
    "A brazilian Computer Engineer passionate about software development and Machine Learning.",
  summary: (
    <>
      A brazilian <strong>Computer Engineer</strong> who is 
      I have solid expertise in backend development using <strong>Python</strong> and <strong>Go</strong>,
      and extense experience with
      <strong> Machine Learning</strong> applications, especially <strong> LLMs</strong> and <strong> Computer Vision</strong>.
    </>
  ),
  avatarUrl: foto.src,
  personalWebsiteUrl: "", // e.g. "https://your-portfolio.com" if you have one
  contact: {
    email: "jonatasnascimento1@gmail.com",
    tel: "+49 152 02180059",
    social: [
      {
        name: "GitHub",
        // Replace with your actual GitHub profile if you have one
        url: "https://github.com/your-github-profile",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jônatas-nascimento/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "RWTH-Aachen University",
      degree: "Master of Science in Electrical Engineering – Major in Computer Engineering",
      start: "2021",
      end: "2023",
      details: [
        "Master Thesis: Automatic segmentation of bones from CT images using CNNs",
      ],
    },
    {
      school: "University of São Paulo",
      degree: "Diploma in Electrical Engineering – Major in Computer Engineering (T.I.M.E Double Degree)",
      start: "2018",
      end: "2023",
      details: [
        "Diploma Thesis: Resolution-Wise Convolutional Neural Networks for Image Classification",
      ],
    },
  ],
  work: [
    {
      company: "Porviva GmbH",
      link: "https://porviva.example", // Update with the actual company link
      badges: ["On-site", "Go", "Python", "PyTorch", "Flutter"],
      title: "Software Developer (AI/ML)",
      logo: ConsultlyLogo, // Update logo import as you see fit
      start: "Sep 2023",
      end: null, // present
      description: (
        <>
          Full-time role developing AI-driven software solutions for media and
          document management within the construction industry.
          <ul className="list-inside list-disc mt-2">
            <li>
              Developed a backend solution using <strong>Go</strong> and <strong>Python</strong>for
              large-scale document and media management.
            </li>
            <li>
              Implemented an <strong>LLM-based agent</strong> using <strong>PyTorch</strong> and open-source
              models to summarize and process
              documents of varying formats.
            </li>
            <li>
              Developed an asset tracker solution using  <strong>Go</strong> and <strong>Flutter</strong>
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "BTG Pactual S.A",
      link: "https://www.btgpactual.com/",
      badges: ["Hybrid", "Python", "LLMs", "AWS", "Cloud"],
      title: "Software Developer",
      logo: ParabolLogo, // Change or remove if you prefer a different placeholder
      start: "Sep 2023",
      end: "Dec 2023",
      description: (
        <>
          Part-time position focusing on streamlining legal processes and
          automating documentation workflows.
          <ul className="list-inside list-disc mt-2">
            <li>
              Developed a <strong>Python</strong> solution to organize and
              centralize the company’s legal actionss.
            </li>
            <li>
              Created an <strong>LLM-based agent</strong> using the{" "}
              <strong>OpenAI API</strong> to automate legal document analysis,
              significantly boosting operational efficiency.
            </li>
            <li>
              Deployed services on <strong>AWS</strong> (
              <em>S3, SQS, EKS</em>), optimizing scalability and reliability.
            </li>
          </ul>
        </>
      ),
    },
    // {
    //   company: "LfB Institute – RWTH-Aachen University Hospital",
    //   link: "https://www.lfb.rwth-aachen.de/", // If there's a real link
    //   badges: ["Academic", "Deep Learning", "CNN", "Python", "Computer Vision"],
    //   title: "Master Thesis Student",
    //   logo: ClevertechLogo, // Placeholder logo
    //   start: "Mar 2023",
    //   end: "Aug 2023",
    //   description: (
    //     <>
    //       Conducted in-depth research on deep learning methods for medical image
    //       segmentation.
    //       <ul className="list-inside list-disc mt-2">
    //         <li>
    //           Designed and trained convolutional neural networks to automatically
    //           segment bones from <strong>CT images</strong>.
    //         </li>
    //         <li>
    //           Collaborated with clinical professionals and integrated feedback
    //           to improve segmentation accuracy.
    //         </li>
    //         <li>
    //           Experimented with data augmentation techniques to enhance model
    //           robustness and consistency.
    //         </li>
    //       </ul>
    //     </>
    //   ),
    // },
    {
      company: "Inzipio GmbH",
      link: "https://inzipio-medical.com", // Replace with the actual company link
      badges: ["On-Site", "Machine Learning", "CNN", "Python", "Medical Imaging"],
      title: "Machine Learning Engineer Intern",
      logo: ClevertechLogo, // Use an appropriate logo import or placeholder
      start: "2021",
      end: "2023",
      description: (
        <>
          Learned and used software development and machine learning concepts to develop  medical imaging software.
          <ul className="list-inside list-disc mt-2">
            <li>
              Successfully conducted a project to implement <strong>fibula bone segmentation</strong>{" "}
              using advanced <strong>CNNs</strong>, improving medical imaging
              accuracy.
            </li>
            <li>
              Implemented robust testing frameworks and integrated them with the{" "}
              <strong>CI/CD</strong> pipeline, reducing deployment
              time and cost.
            </li>
            <li>
              Trained and deployed <strong>ML</strong> models to production using{" "}
              <strong>TensorFlow</strong>, optimizing inference latency and
              scalability.
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "Python",
    "Go",
    "PyTorch",
    "C",
    "C++",
    "SQL",
    "Machine Learning",
    "Computer Vision",
    "LLMs (GPT)",
    "AWS (S3, SQS, EKS)",
    "CNNs",
  ],
  publications: [
    {
      title: "Segmentation of the Iliac Crest from CT Data for Virtual Surgical Planning of Facial Reconstruction Surgery Using Deep Learning",
      authors: "Stefan Raith, Tobias Pankert, Jônatas De Souza Nascimento et al.",
      year: 2025,
      type: "Journal Article",
      category: "Scientific Reports",
      link: {
        href: "https://www.nature.com/articles/s41598-024-83031-0",
        label: "DOI",
      },
      description:
        "Developed and validated a 3D U-Net-based automated segmentation method for iliac crest geometries from CT data, achieving high accuracy metrics and enabling efficient planning for reconstructive surgeries.",
    },
    {
      title: "CNN-Based Automatic Segmentation of Donor Bones from CT Imaging for Reconstructive Facial Surgery",
      authors: "Jônatas De Souza Nascimento",
      year: 2023,
      type: "Master Thesis",
      category: "RWTH-Aachen University",
      link: {
        href: "https://drive.google.com/file/d/1HfmSg8KRPZzOlKKypYdTwMkL2m7T9UPJ/view?usp=share_link",
        label: "Full Text",
      },
      description:
        "Proposed novel CNN-based approaches to improve bone segmentation from CT scans, demonstrating significant performance gains over traditional methods.",
    },
    {
      title: "Resolution-Wise Convolutional Neural Networks for Image Classification",
      authors: "Jônatas De Souza Nascimento",
      year: 2023,
      type: "Diploma Thesis",
      category: "University of São Paulo",
      link: {
        href: "https://drive.google.com/file/d/1nrpM9-d4HBlphLujmhV0QvJvaTSelOQM/view",
        label: "Full Text",
      },
      description:
        "Developed a method to reduce the computational cost of pre-trained Convolutional Neural Networks with minimal accuracy loss, optimizing input resolution without requiring additional training.",
    },
    {
      title: "Einsatz von Convolutional Neural Networks für die Segmentierung der Fibula als knöchernes Transplantat in der rekonstruktiven Chirurgie",
      authors: "Stefan Raith, Tobias Pankert, Jônatas De Souza Nascimento et al.",
      year: 2023,
      type: "Conference Presentation",
      category: "DGMKG",
      link: {
        href: "https://www.dgmkg-kongress.de/wp-content/uploads/2023/06/Programm_DGMKG_DGZMK_2023_web.pdf",
        label: "Slides",
      },
      description:
        "Presented developed framework to CNN-based segmentation of the fibula bone in the German Society for Oral and Maxillofacial Surgery Congress.",
    },
  ],
  projects: [
    // Optional: Add any personal or academic projects you want to showcase
    // {
    //   title: "My Awesome Project",
    //   techStack: ["Python", "Django", "PostgreSQL"],
    //   description:
    //     "A web app for handling X, Y, and Z, featuring advanced analytics and user authentication.",
    //   logo: MonitoLogo,
    //   link: {
    //     label: "View Project",
    //     href: "https://github.com/your-project",
    //   },
    // },
  ],
} as const

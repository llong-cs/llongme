'use client';
import Head from 'next/head';
import { FaGithub, FaEnvelope, FaGraduationCap, FaFileAlt } from 'react-icons/fa';
import Image from "next/image";
import { useState } from 'react';
import localFont from 'next/font/local'
import { getAssetPath } from '@/utils/path';

const outfit = localFont({ 
  src: [
    {
      path: '../public/fonts/Outfit-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Outfit-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Outfit-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Outfit-Bold.ttf',
      weight: '700',
      style: 'normal',
    }
  ],
  display: 'swap',
});

const calli = localFont({ 
  src: '../public/fonts/ChunLianXingShuZiTi-1.ttf',
  variable: '--font-calli'
})
interface Publication {
  venue: string;
  title: string;
  authors: string;
  link: string;
  tags: string[];
}

function PublicationCard({ publication }: { publication: Publication }) {
  return (
    <div 
      className="p-4 bg-white rounded-lg shadow-md hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer"
      onClick={() => window.open(publication.link, '_blank')}
    >
      <div className="flex justify-between items-start">
        <div>
          <div className="text-sm text-gray-500 font-medium">{publication.venue}</div>
          <div className="mt-1 text-gray-700">
            <span className="font-medium">{publication.title}</span>
            <br />
            <span dangerouslySetInnerHTML={{ __html: publication.authors }} />
          </div>
        </div>
        <div className="flex flex-col gap-2 ml-4 flex-shrink-0">
          {publication.tags.map((tag, index) => (
            <span 
              key={index}
              className={`px-2 py-1 text-xs font-medium rounded-full text-center ${getTagStyle(tag)}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function getTagStyle(tag: string): string {
  const styles: { [key: string]: string } = {
    'LLM': 'bg-indigo-100 text-indigo-800',
    'MM': 'bg-emerald-100 text-emerald-800',
    'WSL': 'bg-amber-100 text-amber-800',
    'CV': 'bg-rose-100 text-rose-800',
    'ML': 'bg-violet-100 text-violet-800',
    'SD': 'bg-cyan-100 text-cyan-800',
    'Sec': 'bg-red-100 text-red-800'
  };
  return styles[tag] || '';
}

interface Experience {
  logo: string;
  organization: string;
  role: string;
  advisors: string;
  period: string;
}

function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-300 ease-in-out cursor-pointer">
      <div className="relative w-12 h-12 overflow-hidden flex-shrink-0">
        <Image
          src={experience.logo}
          alt={`${experience.organization} Logo`}
          width={48}
          height={48}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{experience.organization}</h3>
        <p className="text-base text-gray-600">{experience.role}</p>
        <p className="text-base">Advisors: {experience.advisors}</p>
      </div>
      <p className="text-base text-gray-600 text-right w-48 flex-shrink-0">{experience.period}</p>
    </div>
  );
}

interface Event {
  date: string;
  content: string;
}

function EventCard({ event }: { event: Event }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md hover:scale-[1.02] transition-all duration-300 ease-in-out">
      <div className="text-sm text-gray-500 font-medium">{event.date}</div>
      <div className="mt-1 text-gray-700">{event.content}</div>
    </div>
  );
}

export default function Home() {
  const [showAll, setShowAll] = useState(false);

  const events = [
    {
      date: "2025.01",
      content: "One paper accepted to ICLR 2025, which delves into table-text multimodal learning, one of the core parts of TableGPT2! Stay tuned for the upcoming camera-ready paper and source code!"
    },
    {
      date: "2024.12",
      content: "I am joining the ByteDance Research AI-Lab as a research intern! Looking forward to building something cool on multimodal agents with the team! 🤩"
    },
    {
      date: "2024.11",
      content: "We release TableGPT2, an open-source table expert that excels in table-centric tasks while maintaining strong general language and coding abilities! Try out our brand new 7B model on 🤗HuggingFace!"
    },
    {
      date: "2024.05",
      content: "One paper accpeted to ACL 2024 Findings! (Which also marks my personal milestone in the field of NLP! Let's keep going! 🤩)"
    },
    {
      date: "2024.02",
      content: "My FIRST paper as the FIRST author, Positive-Unlabeled Learning by Latent Group-Aware Meta Disambiguation, was accepted by CVPR 2024! That's just the beginning!"
    },
    {
      date: "2024.02",
      content: "A paper that I have contributed to, Property Existence Inference against Generative Models, was accepted by USENIX Security '24 Fall."
    }
  ];

  const visibleEvents = showAll ? events : events.slice(0, 3);

  const preprints: Publication[] = [
    {
      venue: "arXiv",
      title: "TableGPT2: A Large Multimodal Model with Tabular Data Integration",
      authors: "TableGPT Team (as <span class='italic font-bold'>directional lead of table encoder</span>)",
      link: "https://arxiv.org/abs/2411.02059",
      tags: ["LLM", "MM"]
    }
  ];

  const publications: Publication[] = [
    {
      venue: "ICLR 2025",
      title: "Bridging the Semantic Gap Between Text and Table: A Case Study on NL2SQL",
      authors: "<span class='italic font-bold'>Lin Long*</span>, Xijun Gu*, Xinjie Sun, Wentao Ye, Haobo Wang, Sai Wu, Gang Chen, Junbo Zhao",
      link: "https://openreview.net/forum?id=qmsX2R19p9",
      tags: ["LLM", "MM"]
    },
    {
      venue: "ACL 2024 Findings",
      title: "On LLMs-Driven Synthetic Data Generation, Curation and Evaluation: A Survey",
      authors: "<span class='italic font-bold'>Lin Long</span>, Rui Wang, Ruixuan Xiao, Junbo Zhao, Xiao Ding, Gang Chen, Haobo Wang",
      link: "https://aclanthology.org/2024.findings-acl.658/",
      tags: ["LLM", "SD", "WSL"]
    },
    {
      venue: "CVPR 2024",
      title: "Positive-Unlabeled Learning by Latent Group-Aware Meta Disambiguation",
      authors: "<span class='italic font-bold'>Lin Long*</span>, Haobo Wang*, Zhijie Jiang, Lei Feng, Chang Yao, Gang Chen, Junbo Zhao",
      link: "https://openaccess.thecvf.com/content/CVPR2024/papers/Long_Positive-Unlabeled_Learning_by_Latent_Group-Aware_Meta_Disambiguation_CVPR_2024_paper.pdf",
      tags: ["CV", "WSL", "ML"]
    },
    {
      venue: "USENIX Security '24 Fall",
      title: "Property Existence Inference against Generative Models",
      authors: "Lijin Wang, Jingjing Wang, Jie Wan, <span class='italic font-bold'>Lin Long</span>, Ziqi Yang, Zhan Qin",
      link: "https://www.usenix.org/conference/usenixsecurity24/presentation/wang-lijin",
      tags: ["Sec", "ML"]
    }
  ];

  const experiences: Experience[] = [
    {
      logo: getAssetPath("/images/bytedance-logo.png"),
      organization: "ByteDance Research",
      role: "Research intern at AI-Lab. Working on multimodal agent.",
      advisors: "Yuan Lin, Hang Li",
      period: "2024-Present"
    },
    {
      logo: getAssetPath("/images/zju-logo.png"),
      organization: "Zhejiang University",
      role: "M.S. in Computer Science, College of Computer Science and Technology.",
      advisors: "Junbo \"Jake\" Zhao, Haobo Wang",
      period: "2024-Present"
    },
    {
      logo: getAssetPath("/images/zju-logo.png"),
      organization: "Zhejiang University",
      role: "B.E. in Software Engineering, College of Computer Science and Technology.",
      advisors: "Junbo \"Jake\" Zhao, Haobo Wang",
      period: "2020-2024"
    }
  ];

  return (
    <div className={`min-h-screen bg-gray-100 text-gray-900 p-8 ${outfit.className} font-sans`}>
      <Head>
        <title>Lin Long - Personal Homepage</title>
      </Head>
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-100/80 backdrop-blur-sm px-8 py-4 flex justify-end space-x-6 text-lg font-light">
        <a href="#about" onClick={(e) => { 
          e.preventDefault(); 
          const element = document.getElementById('about');
          const offset = 80; // 调整这个值来控制偏移量
          const elementPosition = element?.getBoundingClientRect().top ?? 0;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }} className="relative hover:text-gray-600 transition-colors duration-300 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-gray-600 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">About</a>
        <a href="#news" onClick={(e) => { 
          e.preventDefault(); 
          const element = document.getElementById('news');
          const offset = 80;
          const elementPosition = element?.getBoundingClientRect().top ?? 0;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }} className="relative hover:text-gray-600 transition-colors duration-300 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-gray-600 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">News</a>
        <a href="#publications" onClick={(e) => { 
          e.preventDefault(); 
          const element = document.getElementById('publications');
          const offset = 80;
          const elementPosition = element?.getBoundingClientRect().top ?? 0;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }} className="relative hover:text-gray-600 transition-colors duration-300 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-gray-600 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">Publication</a>
        <a href="#misc" onClick={(e) => { 
          e.preventDefault(); 
          const element = document.getElementById('misc');
          const offset = 80;
          const elementPosition = element?.getBoundingClientRect().top ?? 0;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }} className="relative hover:text-gray-600 transition-colors duration-300 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-gray-600 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">Misc.</a>
      </nav>
      
      {/* Add padding to the top of the content to prevent it from being hidden under the fixed nav */}
      <div className="pt-20">
        {/* Profile Section */}
        <div id="about" className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="relative w-48 md:w-1/4 aspect-square md:aspect-auto md:h-full overflow-hidden rounded-xl flex-shrink-0">
            <Image
              src={getAssetPath("/images/avatar.jpg")}
              alt="Lin Long"
              width={400}
              height={400}
              priority
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="md:w-3/4 text-center md:text-left">
            <h1 className="text-4xl font-bold">Lin Long (<span className="inline-block"></span> <span className={`${calli.className} tracking-wider`}>龍麟</span>)</h1>
            <p className="text-gray-600 italic">"Long" = "Dragon🐉" in Chinese</p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4 text-gray-700">
              <a href={getAssetPath("/files/CV.pdf")} target="_blank" className="flex items-center space-x-2 hover:text-gray-500"><FaFileAlt /> <span>CV</span></a>
              <a href="https://github.com/llong-cs" className="flex items-center space-x-2 hover:text-gray-500"><FaGithub /> <span>Github</span></a>
              <a href="https://scholar.google.com/citations?user=GdtXxoAAAAAJ" className="flex items-center space-x-2 hover:text-gray-500"><FaGraduationCap /> <span>G-Scholar</span></a>
              <p className="flex items-center space-x-2"><FaEnvelope /> <span className="font-mono">kylin0long AT gmail DOT com</span></p>
            </div>
            <p className="mt-6 text-base text-gray-800 leading-relaxed">
              Hi! I am a first-year master student in Computer Science at Zhejiang University, co-advised by Junbo Zhao and Haobo Wang. Previously, I recieved my B.E. degree in Software Engineering at Zhejiang University. I am currently devoted to the field of natural language processing and multimodal learning. My aspiration is to uncover the secrets of human cognition, and develop AI systems that learn and think more like humans. Outside of academia, I am a big fan of art, design, and all kinds of competitive sports. I am also a sneaker head! 😋 <br /> 
              Big shout out to my parents for always supporting me and being the greatest mom and dad of all time. 🩵 
              {/* <br />If you are interested in my research, please feel free to contact me via [kylin0long AT gmail DOT com]. */}
            </p>
          </div>
        </div>
        
        {/* Experience Section */}
        <div className="max-w-4xl mx-auto mt-12 space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
        
        {/* What's New Section */}
        <div id="news" className="max-w-4xl mx-auto mt-12">
          <h2 className="text-3xl font-semibold mb-6">🔥 What's new?</h2>
          <div className="flex flex-col gap-4">
            {visibleEvents.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
            
            {events.length > 3 && (
              <button 
                onClick={() => setShowAll(!showAll)}
                className="w-full py-3 text-gray-600 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-all duration-300 font-medium"
              >
                {showAll ? "Fold" : "Show More"}
              </button>
            )}
          </div>
        </div>
        
        {/* Publications Section */}
        <div id="publications" className="max-w-4xl mx-auto mt-12">
          <h2 className="text-3xl font-semibold mb-6">🗒️ Preprints</h2>
          {/* Color Legend */}
          <div className="flex flex-wrap gap-3 mb-4 p-4 bg-white rounded-lg shadow-sm">
            <span className="text-sm text-gray-600">Research Areas:</span>
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-800 cursor-help hover:bg-indigo-200 transition-colors" title="Large Language Models">LLM</span>
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-emerald-100 text-emerald-800 cursor-help hover:bg-emerald-200 transition-colors" title="Multimodal Learning">MM</span>
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-amber-100 text-amber-800 cursor-help hover:bg-amber-200 transition-colors" title="Weakly Supervised Learning">WSL</span>
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-rose-100 text-rose-800 cursor-help hover:bg-rose-200 transition-colors" title="Computer Vision">CV</span>
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-violet-100 text-violet-800 cursor-help hover:bg-violet-200 transition-colors" title="Machine Learning">ML</span>
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-cyan-100 text-cyan-800 cursor-help hover:bg-cyan-200 transition-colors" title="Synthetic Data">SD</span>
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800 cursor-help hover:bg-red-200 transition-colors" title="Security">Sec</span>
          </div>
          <div className="flex flex-col gap-4">
            {preprints.map((pub, index) => (
              <PublicationCard key={index} publication={pub} />
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          <h2 className="text-3xl font-semibold mb-6">📝 Publications</h2>
          <p className="text-sm text-gray-600 mb-4">(* denotes equal contribution)</p>
          <div className="flex flex-col gap-4">
            {publications.map((pub, index) => (
              <PublicationCard key={index} publication={pub} />
            ))}
          </div>
        </div>

        {/* Misc Section (if you have one) */}
        <div id="misc" className="max-w-4xl mx-auto mt-12">
          {/* Add any misc content here */}
        </div>
      </div>
    </div>
  );
}

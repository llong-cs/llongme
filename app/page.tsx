import Head from 'next/head';
import { FaGithub, FaEnvelope, FaGraduationCap, FaFileAlt } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black px-6 py-4">
      <Head>
        <title>Lin Long - Personal Homepage</title>
      </Head>
      
      {/* Navigation */}
      <nav className="flex justify-end space-x-6 text-lg font-light">
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">News</a>
        <a href="#" className="hover:underline">Publication</a>
        <a href="#" className="hover:underline">Misc.</a>
      </nav>
      
      {/* Profile Section */}
      <div className="mt-10 flex items-start space-x-10">
        <div className="w-48 h-48 bg-gray-300"></div> {/* Placeholder for profile image */}
        <div>
          <h1 className="text-4xl font-bold">Lin Long <span className="inline-block">🐉</span> 龙麟</h1>
          <p className="text-gray-600 italic">“Long” = “Dragon” in Chinese</p>
          <div className="flex space-x-4 mt-4 text-gray-700">
            <a href="#" className="flex items-center space-x-2"><FaFileAlt /> <span>CV</span></a>
            <a href="#" className="flex items-center space-x-2"><FaEnvelope /> <span>Email</span></a>
            <a href="#" className="flex items-center space-x-2"><FaGithub /> <span>Github</span></a>
          </div>
          <p className="mt-6 text-sm text-gray-800">
            This is a paragraph of bio. This is a paragraph of bio. This is a paragraph of bio...
          </p>
        </div>
      </div>
      
      {/* Experience Section */}
      <div className="mt-10">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div>
            <h3 className="font-semibold">ByteDance Research</h3>
            <p className="text-sm text-gray-600">Research intern at AI-Lab. Working on multimodal agent.</p>
            <p className="text-sm">Advisors: Yuan Lin, Hang Li</p>
          </div>
          <p className="text-sm text-gray-600">2024-Present</p>
        </div>
        
        <div className="flex items-center space-x-4 mt-6">
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div>
            <h3 className="font-semibold">Zhejiang University</h3>
            <p className="text-sm text-gray-600">B.E. in Software Engineering, College of Computer Science and Technology.</p>
            <p className="text-sm">Advisors: Junbo "Jake" Zhao, Haobo Wang</p>
          </div>
          <p className="text-sm text-gray-600">2020-2024</p>
        </div>
      </div>
      
      {/* What's New Section */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold">What’s new?</h2>
        <ul className="list-disc ml-6 mt-2 text-sm text-gray-700">
          <li>2025/01/01</li>
          <li>2025/01/01</li>
          <li>2025/01/01</li>
          <li>2025/01/01</li>
          <li>2025/01/01</li>
        </ul>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { Sun, Moon, Github, Linkedin } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-gray-100' : 'bg-white text-gray-800'}`}>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-2xl font-semibold">Nam Le</h1>
          <p className="text-gray-500 dark:text-gray-400">Software - Cloud - DevOps - Data</p>
        </header>

        <section className="mb-12">
          <p className="mb-2">I'm a student interested in Software - Cloud - DevOps - Data</p>
          <p className="mb-1">I graduated from Houston Community College</p>
          <p>Currently in my gap year, will attending University of Houston in the Fall 2025</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Work Experience</h2>
          <div className="border-t dark:border-gray-700"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 py-6 border-b dark:border-gray-700">
            <div className="md:col-span-3">
              <h3 className="font-medium">Software Engineer Intern</h3>
              <p className="text-gray-500 dark:text-gray-400">Dreams for School</p>
            </div>
            <div className="mt-2 md:mt-0 text-gray-500 dark:text-gray-400 md:text-right">
              Oct 2024 - Feb 2025
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 py-6 border-b dark:border-gray-700">
            <div className="md:col-span-3">
              <h3 className="font-medium">Software Engineer Intern</h3>
              <p className="text-gray-500 dark:text-gray-400">AmericaSCORES Bay Area</p>
            </div>
            <div className="mt-2 md:mt-0 text-gray-500 dark:text-gray-400 md:text-right">
              May 2024 - Aug 2024
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 py-6 border-b dark:border-gray-700">
            <div className="md:col-span-3">
              <h3 className="font-medium">Software Developer Volunteer</h3>
              <p className="text-gray-500 dark:text-gray-400">HCC Computer Science Association</p>
            </div>
            <div className="mt-2 md:mt-0 text-gray-500 dark:text-gray-400 md:text-right">
              Jan 2024 - May 2024
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Projects</h2>
          <div className="border-t dark:border-gray-700"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6">
            <div>
              <h3 className="font-medium mb-2">SkyLounge</h3>
              <p className="text-sm">
                Gaming platform for American Airlines in-flight entertainment system featuring
                a reimagined Pac-Man with OpenAI API-driven gameplay. Designed and
                deployed RESTful API endpoints on AWS EC2 for real-time chess matches
                powered by the Stockfish Chess Engine with sub-second response times. Built
                with React.js, TypeScript, Express.js, and REST APIs.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-2">WhiskerWatch</h3>
              <p className="text-sm">
                Serverless pet food monitoring system utilizing IoT device with AWS SDK to
                capture and upload images to S3 bucket. Leveraged AWS Recognition and
                Lambda orchestration with infrastructure as code using Terraform, achieving
                automated detection and SNS notifications within 20 seconds. Implemented
                with AWS Lambda, Serverless Computing, and Twilio integration.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6 border-t dark:border-gray-700">
            <div>
              <h3 className="font-medium mb-2">Airbnb Portfolio Valuator</h3>
              <p className="text-sm">
                GCP-based real estate valuation model to estimate Airbnb's global property
                portfolio value, utilizing SQL for income capitalization calculations. Engineered
                data pipeline using Cloud Storage, Dataflow, and BigQuery to transform
                multiple CSV datasets into property valuation insights, quantifying a multi-trillion dollar market.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-2">Cyberswift</h3>
              <p className="text-sm">
                Interactive 2D RPG-style virtual learning environment using React, Three.js, and
                Websockets, enabling students to attend live-streamed classes, submit
                assignments, and interact with an OpenAI-powered mentor chatbot.
                Implemented real-time livestreaming with Node.js, Socket.IO, and Auth0
                authentication to reduce latency and ensure secure access.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 py-6 border-t dark:border-gray-700">
            <div>
              <h3 className="font-medium mb-2">Serverless DataPredict</h3>
              <p className="text-sm">
                Cloud-native solution for Chevron that forecasts fuel demand and vehicle
                population using AWS serverless infrastructure, improving predictive
                accuracy and operational efficiency. Designed and deployed scalable
                infrastructure using Terraform, AWS S3, and Amazon SageMaker for automated
                data storage, model training, and real-time demand prediction.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-6">Connect</h2>
          <p className="mb-4">Feel free to contact me at <a href="mailto:namle.p8@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">namle.p8@gmail.com</a></p>
          
          <div className="flex space-x-4">
            <a href="https://github.com/namle6" className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
              <Github size={18} className="mr-1" />
              GitHub
            </a>
            <a href="https://linkedin.com/in/namle6" className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
              <Linkedin size={18} className="mr-1" />
              LinkedIn
            </a>
          </div>
        </section>

        <footer className="mt-16 pt-8 border-t dark:border-gray-700 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <h1>Nam Le</h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
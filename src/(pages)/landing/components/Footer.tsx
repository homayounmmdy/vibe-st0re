"use client";

import React, { useEffect, useState } from "react";
import { cardData } from "../../home/data/cardData";

const GITHUB_REPO_URL = "https://github.com/homayounmmdy/vibe-st0re";

const Footer: React.FC = () => {
  const [starCount, setStarCount] = useState<string | null>(null);

  useEffect(() => {
    // Fetch star count from GitHub API
    const fetchStars = async () => {
      try {
        const res = await fetch("https://api.github.com/repos/homayounmmdy/vibe-st0re");
        if (res.ok) {
          const data = await res.json();
          setStarCount(data.stargazers_count.toLocaleString());
        }
      } catch (error) {
       console.error(error)
        setStarCount(null);
      }
    };

    fetchStars();
  }, []);

  // Group projects by type
  const games = cardData.filter((p) => p.type === "games");
  const apps = cardData.filter((p) => p.type === "apps");

  return (
    <footer className="relative pt-12 pb-8 bg-[#05020a] overflow-hidden">
      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at 20% 30%, #7e22ce, transparent 40%),
                       radial-gradient(circle at 80% 70%, #581c87, transparent 40%)`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Project Lists */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <div>
            <h3 className="text-lg font-medium text-purple-300 mb-4">Games</h3>
            <ul className="space-y-2">
              {games.map((project, idx) => (
                <li key={idx}>
                  <a
                    href={project.href}
                    className="text-gray-400 hover:text-purple-200 transition-colors text-sm"
                  >
                    {project.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-emerald-300 mb-4">Tools</h3>
            <ul className="space-y-2">
              {apps.map((project, idx) => (
                <li key={idx}>
                  <a
                    href={project.href}
                    className="text-gray-400 hover:text-emerald-200 transition-colors text-sm"
                  >
                    {project.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="border-t border-gray-800/50 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            Built with curiosity • All projects shipped & open for exploration
          </p>

          <a
            href={GITHUB_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-900/60 hover:bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:text-white transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.34 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.952 0-1.091.39-1.984 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.704 1.028 1.597 1.028 2.688 0 3.845-2.339 4.693-4.566 4.94.359.31.678.92.678 1.855 0 1.338-.012 2.42-.012 2.75 0 .267.18.578.688.48C19.136 20.19 22 16.436 22 12.017 22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            <span>Star on GitHub</span>
            {starCount && (
              <span className="ml-1 bg-gray-800 px-2 py-0.5 rounded text-xs">
                ★ {starCount}
              </span>
            )}
          </a>
        </div>

        {/* Optional: Copyright */}
        <div className="mt-6 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} vibeSt0re , ship fast, learn deeply.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
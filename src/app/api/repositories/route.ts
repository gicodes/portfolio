import { NextResponse } from "next/server";
import axios from "axios";

const GITHUB_API_URL = "https://api.github.com";
const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

export async function GET() {
  try {
    const headers = GITHUB_TOKEN ? { Authorization: `Bearer ${GITHUB_TOKEN}` } : {};
    const projects = [
      { name: "afro-fashion" },
      { name: "attribution.js" },
      { name: "dashboardJs" },
      { name: "mechtatel" }, 
      // { name: "starforge" },
      // { name: "app.text.js" },
      // { name: "global-prompt" },
      // { name: "scan-a-barcode" },
      { name: "barcode-scanner-app" },
    ];
    const formatDate = (dateString: string): string => {
      const date = new Date(dateString);
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
      const year = date.getFullYear();
      return `${day}-${month}-${year}`;
    };
    
    const promises = projects.map(async (project) => {
      try {
        const res = await axios.get(`${GITHUB_API_URL}/repos/${GITHUB_USERNAME}/${project.name}`, {
          headers,
        });

        return {
          name: project.name,
          stars: res.data.stargazers_count,
          watchers: res.data.watchers_count,
          forks: res.data.forks_count,
          size: res.data.size,
          language: res.data.language,
          description: res.data.description,
          lastUpdated: formatDate(res.data.updated_at),
        };
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error(`Failed to fetch data for project: ${project.name}`, error.message);
        } else {
          console.error(`Failed to fetch data for project: ${project.name}`, error);
        }

        return {
          name: project.name,
          stars: 0,
          forks: 0,
          watchers: 0,
          size: 0,
          language: "",
          description: "",
          lastUpdated: "",
        };
      }
    });
    
    const data = await Promise.all(promises);

    const result = data.reduce(
      (
        acc: {
          [key: string]: {
            stars: number;
            forks: number;
            watchers: number;
            size: number;
            language: string;
            description: string;
            lastUpdated: string;
          };
        },
        repo
      ) => {
        acc[repo.name] = {
          stars: repo.stars,
          forks: repo.forks,
          watchers: repo.watchers,
          size: repo.size,
          language: repo.language,
          description: repo.description,
          lastUpdated: repo.lastUpdated, 
        };
        return acc;
      },
      {}
    );

    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    console.error("Failed to fetch repository data:", error.message);
    return NextResponse.json({ error: "Failed to fetch repository data" }, { status: 500 });
  }
}

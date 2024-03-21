"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
// import * as Win from '../public/wing.js';
export default function Home() {
  const [title, setTitle] = useState("Default Value");
  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);
  const [docs, setDocs] = useState("Docs Text");
  const [docsLink, setDocsLink] = useState("winglang.io");
  const [playgroud, setplaygroud] = useState("Playground text");
  const [playgroudLink, setplaygroudLink] = useState("winglang.io");
  const [community, setCommunity] = useState("Community text");
  const [communityLink, setCommunityLink] = useState("winglang.io");
  const [wingCloud, setWingCloud] = useState("wingCloud text");
  const [wingCloudLink, setWingCloudLink] = useState("winglang.io");
  const [successMsg, setsuccessMsg] = useState("Data is fetching");
  const getTitle = async () => {
    const response = await fetch(`${window?.wingEnv.apiUrl}/title`);
    let fetchresult = JSON.parse(await response.text());
    console.log(fetchresult);
    setTitle(fetchresult.text);
    setNumber(fetchresult.number);
    setDocs(fetchresult.docs);
    setDocsLink(fetchresult.docsLink);
    setplaygroud(fetchresult.playgroud);
    setplaygroudLink(fetchresult.playgroudLink);
    setCommunity(fetchresult.community);
    setCommunityLink(fetchresult.communityLink);
    setWingCloud(fetchresult.wingCloud);
    setWingCloudLink(fetchresult.wingCloudLink);
    setsuccessMsg(fetchresult.successMsg);
  };

  useEffect(() => {
    getTitle();
  }, []);

  const postDataToApi = async (data) => {
    try {
      const response = await fetch(`${window?.wingEnv.apiUrl}/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any additional headers if required, like authentication tokens
        },
        body: JSON.stringify(data), // Convert data to JSON string
      });

      if (!response.ok) {
        throw new Error("Failed to store data to API");
      }

      const responseData = await response.json(); // Parse response JSON
      console.log("Data stored successfully:", responseData);
    } catch (error) {
      console.error("Error storing data to API:", error);
    }
  };

  const getTasks = async () => {
    const response = await fetch(`${window?.wingEnv.apiUrl}/tasks`);
    let fetchresult = JSON.parse(await response.text());
    console.log(fetchresult);
  };

  // Example usage

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      key1: name,
    };
    console.log(data);
    postDataToApi(data);
    // getTasks();
    getTitle();
    // Additional logic can be added here, such as sending the name to a server
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };
  // console.log(process.env.API_URL);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <div>MY URL: {process.env.API_URL}</div>; */}
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </div>
      </div>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/wing.jpg"
          alt="Next.js Logo"
          width={300}
          height={100}
          priority
        />
      </div>
      {!number && (
        <Image src="/spinner.gif" alt="spinner" width={200} height={50} />
      )}
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href={docsLink}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{docs}</p>
        </a>

        <a
          href={playgroudLink}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Playground
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{playgroud}</p>
        </a>

        <a
          href={communityLink}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Community
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{community}</p>
        </a>

        <a
          href={wingCloudLink}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Wing Cloud
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            {wingCloud}
          </p>
        </a>
      </div>
      <div>
        <h1>{successMsg}</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">First name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

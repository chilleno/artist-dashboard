# Development log

## 1 - Project preparation

This step was made by myself with no AI help as is not needed for the fundations. 

- Installed [Next.js + Shadcn](https://ui.shadcn.com/docs/installation/next) from terminal with: pnpm dlx shadcn@latest init
- Added the MCP for magicuidesign to easily ask agent to add Magic UI components to add animations. 
- Added the MCP for Shadcn to avoid mistakes creating ui with Shadcn.
- Added the Google Chrome MCP to better debug with the agent. 
- Installed [Zustand](https://zustand-demo.pmnd.rs/) to manage states

## 2 - Adding Global Context

This step I prepare a file called CONTEXT.md to give the agents a global context that helps to understand the fundations, objective and what to do and what to avoid during the development process. I will not add more to this step because it can be readed directly in that file what I did here. 


## 3 - creating project structure and adding mock data

In this step we create the base directory structure added to CONTEXT.md and README.md
also asked the agent using the Chrome MCP to get data from [songstats.com](https://songstats.com) and added it to a json file using the next prompt 👇
<pre>
**Goal:** get data from [songstats.com](https://songstats.com) and added it to a json file 
**AI Tool Used:** copilot + chrome mcp

**Prompt/Approach:**
enter in the website https://songstats.com/artist/legfsxq2/duki?source=overview and create a json file with the data of the artist that you can get from there

**Result:**
- the agent provides more info that I need so I did remove manually all the data that is not interesting for me to keep only the data we need to use. 
- 
**Learning:**
- chrome mcp is really good for data scrapping 
</pre>

Also to add the function to navigate in multiple profiles, I did create another json file called artists.json to add the data needed to navigate between them. 

With both json files created I asked to the agent to create the Types files for Typescript. 

<pre>
**Goal:** create TS files from json files
**AI Tool Used:** copilot + GTP5

**Prompt/Approach:**
Following ALL the instructions into the CONTEXT.md file.

do the next task:
using the duki.json file, create a type file for typescript called artist

**Result:**
- the agent provides the needed type with no issues

</pre>

## 4 - Creating the structure of the dashboard

I create a folder into the /app called "dashboard" also a "slug" folder to get the parameter by url and make the dashboard ready for multiple artist if needed.

NO AI used. 

## 5 - Listing available artists in dashboard at the home page


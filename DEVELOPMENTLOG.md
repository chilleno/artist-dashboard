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

- I asked directly to the agent to create a server action in the main page to fetch the data/artists.json file and use it in the page.
<pre>
**Goal:** create server action to fetch data from json file
**AI Tool Used:** copilot + GTP5

**Prompt/Approach:**
Following ALL the instructions into the CONTEXT.md file.

do the next task:

we are going to create a server action in a separate file, this server action should get the data from the data/artists.json file and return as array.
we are also doing a validation if the file is not present return an empty array.

and we are going to console.log the data in the start of the page

**Result:**
- the agent provides the needed server action in the folder app/actions as we told him in the context.md file.
- I asked the agent to modify the code from a fs.readfile to a simple import because is cleaner and not need to use fs 
</pre>

-  Now we had the data loged and we are sure the data is available. we ask the agent to render the list using the item component from shadcn

<pre>
**Goal:** use the data returned from the server action to render the artists list 
**AI Tool Used:** copilot + GTP5

**Prompt/Approach:**
Following ALL the instructions into the CONTEXT.md file.

do the next task:

we are going to use the shadcn mcp to install the item component and we are going to use the avatar version to render all the items of the list. 

the action button should rediret us to the dashboard of that artists. 

remember to delete all the current example content first

**Result:**
- Agent added via pnpm the components shadcn/item and shadcn/avatar to build the list.
- also create a "separator" component that I asked to replace with the shadcn one because is not needed to create it.
- Render the infomation as needed and the button works as expected.

**Learning:**
- if I dont spcify all the components to download the agent probable would create them from scratch. I had to ask it again to download the separator in a separate prompt
- also we need to install manually radix component because shadcn mcp dont do the job.
</pre>

- With the list created We asked some quick changes to the AI while I was making sure the content is centered in the screen in all screen-sizes


# 6 - Implement theming 

With no agent I did the implementation of the theme to add light/dark mode support.

- Asked the Agent to implement the magic-ui toggle theming button using magic-ui mcp. 
<pre>
**Goal:** implement animated theme toggle in the layout
**AI Tool Used:** copilot + GTP5

**Prompt/Approach:**
Following ALL the instructions into the CONTEXT.md file.

do the next task:

using magicui mcp install magicui/animated-theme-toggler and implement it in the layour so we can access to the button in all the pages, also please make sure to fix it at the top right

**Result:**
- Agent added via pnpm the components animated-theme-toggler from magic ui. 
- Agent added the feature successful as requested

</pre>

# 7- add validation on dashboard page when slug is not a valid artist
I customize the not-found page using the agent 
<pre>
**Goal:** create a custom 404 page
**AI Tool Used:** copilot + GTP5

**Prompt/Approach:**
Following ALL the instructions into the CONTEXT.md file.

do the next task:
Following ALL the instructions into the CONTEXT.md file.

do the next task:

using magic ui mcp add @magicui/spinning-text and create a custom 404 page with a nice message with that component

**Result:**
- Agent added via pnpm the components animated-spinning-text
- agent create without issues the custom not found page

**Aditional changes**
- from agent created page I did some changes with spacing because the elements were too close on each others.
</pre>

# 8 - fetch data from slug and call server action to get artist data

I asked the agent to create a server action that fetch the data from a prop and pass the slug as the prop 
when null show not-found page.
<pre>
**Goal:** create a custom 404 page
**AI Tool Used:** copilot + GTP5

**Prompt/Approach:**
Following ALL the instructions into the CONTEXT.md file.

do the next task:

for the dashboard create a server action that receive a param, this param should be the slug of the dashboard so we can fetch the data from json files dynamically with the slug.

the detailed task is:

add the server action and pass the slug as prop
in the server action, find the file with the name is equal the prop value, if not send a null.
the value obtained from the server action should be printed in the console with a console.log

**Result:**
- the agent tried to fetch the data using fs.fileread and I updated it with a dynamic data import
- everything else was done as expected
</pre>

# 9 - creating the grid to place the dashboard data

I decide to use a bento grid because is a good way to show multiple data in the same screen. 
used the agent to create the grid: 
<pre>
**Goal:** create the dashboard bento grid 
**AI Tool Used:** copilot + GTP5

**Prompt/Approach:**
Following ALL the instructions into the CONTEXT.md file.

do the next task:

create in the dashboard a bento grid, responsive, every item in the grid please add it a different bg color to make sure the grid works well in all devices before we add the content to them.

we need to make sure we are making space for the next info:

large column for last releases
large and wide for a map to show listeres arount the world.
some squares for sales analytics.
you can add the text of what is expected in each bento space from now.

when we decide the bento grid distribution we are going to add the content.
**Result:**
- colorized bento grid ready to work
- no changes made from agent result 
</pre>

# 10 - render last releases 

with the agent help I created the last-releases component and implement it into the bento box
<pre>
**Goal:** Create last-releases component
**AI Tool Used:** copilot + GTP5

**Prompt/Approach:**
Following ALL the instructions into the CONTEXT.md file.

do the next task:

using the shadcn mcp add the card component and implement the last releases rendered in those cards.

**Result:**
- the result shows the component as expected
- I had to do a little fix with the container height to make it fit with his content

</pre>

# 11 - render sales data

with the agent's help I render some values in the top 3 bento boxes using the naimation of number ticker component
<pre>
**Goal:** use number ticket component to show sales data
**AI Tool Used:** copilot + GTP5

**Prompt/Approach:**
Following ALL the instructions into the CONTEXT.md file.

do the next task:

install the number ticker using the magicui mcp and implement it.

show salesData value from artist object in the 3 selected bento elements using the number ticker

**Result:**
- data shows as expected 
</pre>

# 12 - 
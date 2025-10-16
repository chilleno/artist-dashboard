## project objective

Create a dashboard for Music Artists with the following requirements: 
- Recent Releases - Displays music releases of the artist.
- Sales Analytics - Visual representation of Sales data .
- Fan Engagement - Metrics about fan interactions.

## Technologies

- Next.js Framework using App Router.
- Shacn-ui to create all the non-animated components.
- Magic-ui to create animated components.
- Zustand to manage react states.

# Folder Structure
<pre>
.
└── /
    ├── app/
    │   └── [pageName]/
    │       └── actions -> This folder contains all the server actions.
    ├── components/
    │   ├── [pageName] -> For every page we add a new folder that contains her owns components.
    │   └── shared -> This folder contains components that are shared between pages.
    ├── lib -> This folder contains functions that can be used between pages or components.
    ├── data -> This folder contains json files with mock data needed.
    ├── public -> This folder contains all the public files needed in the project.
    └── types -> This folder contains all the types needed in the project for Typescript.

</pre>

## Coding best practices 

- Always use DRY principle (Don't Repeat Yourself).
- Always use Single Responsibility Principle. 
- Always use Open/Closed Principle.
- Every function should be coded in a separate components.
- Fetch data will be always done in server actions.
- Always check the folder structure before add new files to mantain the project order.


## Agent instructions

- ALWAYS follow the instructions given, create a todo list with the steps needed for the task given then follow the list and dont stop until you finish all the steps, if there is a multi options to follow, chose the better for you and if necessary It will be asked to replace later but dont stop to ask a question. 
- DONT add logic or new stuff that is not asked for. If the instruction is clear do only what is asked no more no less
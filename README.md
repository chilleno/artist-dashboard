This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Folder Structure
<pre>
.
└── /
    ├── app/
    │   └── [pageName]/
    │       └── actions -> This folder contains all the server actions
    ├── components/
    │   ├── [pageName] -> For every page we add a new folder that contains her owns components
    │   └── shared -> This folder contains components that are shared between pages
    ├── lib -> This folder contains functions that can be used between pages or components
    ├── data -> This folder contains json files with mock data needed
    ├── public -> This folder contains all the public files needed in the project.
    └── types -> This folder contains all the types needed in the project for Typescript.
</pre>
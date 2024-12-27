# EventTrakka

EventTrakka is a project created to help with event management and broadcasting in the Ekiti tech ecosystem. Join the
[featured communities](#featured-communities) in completing this project we started in HacktoberFest 2023.

This project is a web platform designed to help community members, newbies and tech enthusiasts with accessing details 
about tech events across all tech communities in Ekiti. In its working context, you can check for upcoming, past and 
live events happening at any of the featured tech communities and other communities all at once on **EventTrakka**

[Figma Design Link](https://www.figma.com/design/w1Hoj9ESFonR8tDl5WLedU/Event-Management?node-id=0-1&node-type=canvas&t=dPBPaxRKs5DWZBdc-0)

## Development Setup

This guide on how to set up EventTrakka on your local machine for contribution assumes you have 

- ✅ Forked this repository. 
- ✅ Cloned your forked repository to your local machine.
- ✅ Created a new branch for your contributions.

### Steps

1. Navigate to the cloned repository to install the projects dependencies, We favour [Bun](https://bun.sh/) for local development
   but node with npm and other custom package managers like yarn and pnpm are just fine.
   - `bun install` (assumes you have the [Bun](https://bun.sh/) runtime installed)
   - `npm install`
   - `yarn install`
   - `pnpm install`
2. Open the cloned repository in your preferred code editor or IDE (vs-code,webstorm, e.t.c)
3. For vs-code and webstorm, please install biome extension and plugin (optional)
4. Run the project based on the runtime and package manager you're using.
   - `bun dev`
   - `npm run dev`
   - `yarn dev`
   - `pnpm run dev`
5. EventTrakka is up 🎉🎉🎉 your terminal should look like this.

![Project launch successfully](./src/assets/readme/localhost.png)

You can now access EventTrakka locally on ``` http://localhost:5173/```

## Backend

The backend of this project is build using python with the [FastAPI](https://fastapi.tiangolo.com/) framework, see links below for more.
- [API documentation](https://cold-pinniped-coyote-solutions-5af7408f.koyeb.app/docs)
- [Source code repository](https://cold-pinniped-coyote-solutions-5af7408f.koyeb.app/docs)

## Featured Communities

- OSCA Ado-Ekiti
- SheCodeAfrica Ado-Ekiti
- GDGoC EKSU
- GDGoC FUOYE
- GDGoC BOUESTI
- MSFT Community EKSU
- MFST Fuoye
- I4G FUOYE
- WTM Ado-Ekiti
- DSN EKSU
- TheCompleteHub
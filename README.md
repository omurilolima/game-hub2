# Game Hub

## Installing

- Install [Chakra-ui](https://v2.chakra-ui.com/getting-started/vite-guide)
- Install `npm i react-icons@4.7.1`
- React Infinit Scroll: `npm i react-infinite-scroll-component@6.1`
- Zustand for Managing Application State: `npm i zustand@4.3.7`
- Zustand DevTools for inspecting stores: `npm i simple-zustand-devtools@1.1.0`
- Type declaration for node: `npm i -D @types/node`

## Tools

API from RAWG Video Fames Database: https://api.rawg.io/docs/

# Game Hub

Game Hub is a frontend project using React + Typescript.
It's a mini version of the Rawg.io, a popular video game discovery platform.

Developer: <a href='https://www.linkedin.com/in/omurilolima/' target='_blank'>Murilo Lima</a>

Visit the [live site](https://game-hub-nine-pied.vercel.app/)

![Game Hub: React + Typescript](/src/assets/documentation/gamehub.png)

## Key features:

- Dark and Light mode toggle
- Search bar
- Filter by genres and platforms
- Ordering the games and search results
- Loading skeletons
- Dinamic heading

## Design interface:

I used mostly Vanilla CSS + ChakraUI framework.
Was really fun to create 14 React components and deep dive in this aproach of coding.

## Data:

All the content was based on the Rawg API.
I developed 4 hooks using Axios for querying data from the API.

Deploy:
For hosting and deployment I used Vercel.

This project is part of the React 18 Course by [Code with Mosh](https://codewithmosh.com/)

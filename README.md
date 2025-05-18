## Running the application on your local machine

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

Then, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
3000 is the default port, this may differ on your machine if the port 3000 is already in-use/forwarded.

## Differences/limitations of the application

* Pokemon List layout doesn't quite match the figma visually.
    * The "Pokemon List" in the figma design has a layout of "Justify: space-between", however when a pokemon is searched for this then appears hugging the left-hand side. As no layout is specified in the figma for the searched variation, in my application the layout is "Justify: space-between" regardless.

* I could not find a loading spinner in shadcn
    * So I took one from here: https://github.com/shadcn-ui/ui/discussions/1694#discussioncomment-7851248

* I've simply used the cherish-ball.png icon on all pokemon's details pages as I wasn't sure what the significance of this in relation to Bulbasaur is.

* The search function only shows an exact match to a single pokemon name. 
    * It's not clear from the figma what the expected result here is.
    * I elected to simply show the result of a pokemon if the name searched is an exact match as the figma did not specify needing a more sophisticated search function.

* Best practices
    * This was my first time using React/Nextjs and shadcn, I probably missed some best practices, but I followed the shadcn/Nextjs documentation.
    * This was my first time using tailwind, and I did not order any of the className classes, but simply left them in the order in which I added them. I assume there is some standard for this, but I did not find one to follow.

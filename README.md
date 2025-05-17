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

## Differences/limitations of the application

* Pokemon List layout doesn't quite match the figma.
The "Pokemon List" in the figma design has a layout of "Justify: space-between", however when a pokemon is searched for this then appears hugging the left-hand side. In my application, the layout remains "Justify: space-between", so the pokemon searched for appears hugging the centre of the page.

* The button colours for the pagination do not match the figma design. 
This is my first time using React/Nextjs and shadcn, and I could not figure out how to change the style of the buttons in the pagination.

* I could not find a loading spinner in shadcn
So I took one from here: https://github.com/shadcn-ui/ui/discussions/1694#discussioncomment-7851248

* I've simply used the cherish-ball.png icon on all pokemon's details pages as I wasn't sure what the significance of this in relation to Bulbasaur is.

* Some pokemon (such as koraidon-limited-build) are missing an image and some details.
Images only show up once on the page, so the method I've used I think is an ok solution for them. (See components/pokemon-card.tsx line 34 and components/pokemon-avatar.tsx line 11)
The specific missing detail is a Category from speciesData.genera[7], which I have omitted on line 79 of components/pokemon-details.tsx however, if other details are missing, this page will not load.
To fix this, I could go through each detail on the details page and add a similar expression to account for missing data, but this would not be a maintainable solution in the long run if I wanted to add more details/stats to be shown.
A better solution might be to write some sort of generic wrapper function that all data entries must pass through to account for missing data.

* Some pokemon (such as Basculin-white-striped) have non-English flavour texts and ability descriptions. 
This is from me assuming that the first entry in the pokeAPI will be the English result.

* The search function only shows an exact match to a single pokemon name. 
It's not clear from the figma what the expected result here is.
i.e. If I search for "saur" should Bulbasaur, Ivysuar and Venusaur all show up since then end with "saur". With a sophisticated search function this is what I'd assume, however I do not have time to implement this for this project, so a simple exact-name search is all I've done.

* Tailwind best practices
This was my first time using tailwind rather than a separate raw css file, and I struggled with how similar but different all the classes are.
I did not order any of the className classes, but simply left them in the order in which I added them. I assume there is some standard for this, but I did not find one to follow.

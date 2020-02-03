# Pong Game Starter

A project for a pong game using SVGs. The goal of my project was to create a pong game with an original theme with sound effects.

# Technologies used for the projects:

+ HTML - Learn more: (https://en.wikipedia.org/wiki/HTML5);
+ CSS - Learn more: (https://en.wikipedia.org/wiki/Cascading_Style_Sheets);
+ Javascript - Learn more: (https://en.wikipedia.org/wiki/JavaScript);

# Personal learnings:
The Pong game project was interested for me because it self coveres varieties of tasks such as: 
* Work with different files in one program.
* Creating vector objects.
* Creating classes and subclasses of objects.
* Sourcing and implementing sound effects.
* Using a terminal for all the operations and github uploads.

## Setup

Ensure you have [Node.js](https://nodejs.org/en/) installed first.

**Install dependencies:**

`$ npm install`

**Run locally with the Parcel dev server:**

`$ npm start`

Once you run the start command you can access your project at http://localhost:3000.

Read more about the [Parcel web application bundler here](https://parceljs.org/).

## Deploy

The deployment workflow for this project will be a bit different from what you've used when deploying simple static websites.

To deploy your finished Pong project as a GitHub page, you must first **update the `predeploy` script in the `package.json` file with the name of your repo.**


For example, if your repo URL is:

https://github.com/bob/pong-project

Update the `predeploy` script as follows:

```json
"predeploy": "rm -rf dist && parcel build index.html --public-url /pong-project",
```

Once you have done this, you can run:

`$ npm run deploy`

Instructions:

Play / Pause game = space bar

Player one (green color) commands: 
UP - key A
DOWN - key Z

Player two (blue color) commands:
UP - arrow UP
DOWN - arrow DOWN

The ball changes color when bouncing from the top and bottom sides.

One who wins that light and becomes a field.

To restart the game, just click the refresh button


Personal 

Now check out your deployed site. For best experience, turn your speakers ON .. and loud ! 


Develop by: Alex Shkarin

Date: Jan.2020

# Eventio
An application for managing and attending events

## Prerequisites
- Mac OSX
  - NodeJS
  - Yarn
- Windows
  - NodeJS
  - Yarn

## Requirements
- Node v8.11.3 or later
- npm v5.6.0 or later

## Installation
- Ensure your machine statisfies the requirements above
- Clone this repository
- Change your directory with `cd eventio/`
- Install dependencies with `yarn`
- Ask a contributor for a copy of their `local.js`

## Usage
- Start  application with `yarn run dev`

# Contributing
## Project Structure
```
├── config
├── src
│   ├── assets
│   ├──components
│   |   ├──auth
│   │   ├──dashboard
│   │   ├──header
│   │   ├──shared
│   │   ├──styleguide
│   ├──helpers
│   └──redux
│       ├──actionTypes
│       ├──reducers
└──webpack
```

## CSS Stuff
- This project uses Sass css-preprocessor. There is no traditional `style sheet,` as we include snippets of CSS inside each of the React component files. Webpack inlines these snippets as necessary.

## Adding a Feature
- Create your branch off master as follows `YOUR_NAME/TYPE/FEATURE-DETAIL`.
- Make sure all tests are passing and add new test where necessary.
- Commit your changes and make a Pull request to master.

# Learn
- `ReactJS` documentation [here](https://reactjs.org/docs/hello-world.html)
- Check `/style-guide` route to see some available components (Note that not all shared components may be found there, check `/src/components/shared` if you're looking for something you can't find there)

# Reporting Issue
Found something out of place or a feature request please create an issue [here](https://github.com/abdulsemiu-atanda/eventio/issues)

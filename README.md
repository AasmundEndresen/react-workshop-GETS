# React Workshop for GETS AS

Before starting the workshop you should make sure you have the required dependencies installed

  - NPM
  - Node.js
  - Code editor of your choice (VSCode is great)

If you're running Visual Studio Code 1.33.0 or 1.33.1 there is a performance bug with Intellisense.
To temporarily fix this we can disable the built-in extension "TypeScript and JavaScript Language Features".
Go to Extensions, and search for '@builtin typescript' to find it.

Once you have installed all required dependencies we can set-up our project with:

`npx create-react-app mcu-avengers-equipment`

We do this for convenience for the workshop - create-react-app will run a script that sets up a simple Hello World-type
application.

Navigate to the root folder of the project, and run the following commands to install our remaining dependencies:

`npx -p @storybook/cli sb init --type react` - This will install storybook in the project allowing us to test individual UI-components
`npm install --save styled-components@latest react@latest react-dom@latest` - This will install styled-components which we will use for our CSS
and also update to the latest version of react and react-dom.
`npm install --save-dev prop-types@latest` - We will be using prop-types to strong type our components
`npm run build` - To make our initial build of the solution
`npm install` - To make sure all of our dependencies from our package.json is installed

## Delete autogenerated code we dont need 
![MEME: Delete ALL the code!][deletecode]

In the `src` folder, delete `App.css`, `Index.css` and `logo.svg`.
In `App.js` and `Index.js` remove all references to the files we just deleted.
In `App.js` remove all code that isn't prefixed by either an `import` or `export` statement.

## Lets start building our app

React is 

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

[deletecode]: https://imgflip.com/i/30twkm "Delete all the code we dont need"
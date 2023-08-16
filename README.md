# Namaste React

## Installation
```bash
npm install -D parcel
npx parcel index.html
npm i react
npm i react-dom
npx parcel build index.html
```

## Parcel Usage[https://parceljs.org]
- Dev build
- Local Server
- HMR -> Hot Module Replacement => Fast or Auto Refresh on change
- File Watching Algorithm - written in c++
- Caching - Faster rebuilds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code splitting
- Differential Bundling - support older browser
- Diagonistic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles




## BrowserList
- https://browsersl.ist
- https://github.com/browserslist/browserslist


## NPM Scripts

After settting up npm scripts in package.json, we can run the following commands:

```bash
npm run start or npm start
npm run build
```

# Namaste Food

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - Restaurant container
 *     - Restaurant Card
 *          - Image
 *          - Name of Res, Start, Rating, cuisines, delivey time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */ 


 ## Two types of Export / Import

 ### Default Export/Import
 ```
    export default Component;
    import Component from 'path';
 ```
### Named Export/Import
 
 ```
    export const Component; | export { Component1, Component2 };
    import { Component } from 'path';

 ```

 - We can use one default export per file along with any number of named exports.


 ## 2 types routing in web apps
 - Client side rendering
 - Server side rendering

## Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect out store to our app
- Slice (cartSlice)
- dispatch(action)
- Seclector

## Type of testing (developer)
- Unit Testing
- Integration Testing
- End to End Testing - e2e testing

Tetsing Library
- React Testing Library - https://testing-library.com/docs/react-testing-library/intro/
   - It uses Jest under the hood
   - Jest - https://jestjs.io/docs/getting-started
   ```
   npm install --save-dev @testing-library/react
   npm install --save-dev jest
   npm install --save-dev babel-jest @babel/core @babel/preset-env
   ```
- Cypress - https://docs.cypress.io/guides/overview/why-cypress


## Setting up Testing in our app
- Install React Testing Library
- Install Jest
- Install Babel dependencies
- Configure Babel
- Configure Parcel Config file to disable default babel transpilation
- Jest configuration
- Install jsdom library
- Install @babel/preset-react - to make jsx work in test cases
- Include @babel/preset-react inside babel config
- Install @testing-library/jest-dom - to make jest dom assertions work


Test Files
- Foldername: __tests__
- Filename: filename.test.js or filename.spec.js
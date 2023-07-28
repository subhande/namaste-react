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
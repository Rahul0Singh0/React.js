## React 

# Inception

## Q: What is `CDN`? Why do we use it?
      
   A: CDN is place where React library hosted
      We are just fetching the react putting in the our code using CDN link

## Q: What is `Crossorigin`?

## npm
   npm does not stands for node package manager
   npm manages packages but does not stands for node package manager.
   npm is a standards repository for all the packages. 

## npm init
   npm init is a command-line instruction used to create a package.json file for a Nodejs package.

## parcel
   Parcel works great for building single or multi-page React applications. It includes a first-class development experience with Fast Refresh, and supports JSX, TypeScript, Flow, and many styling methodologies out of the box.
   Parcel needs a lot of other node packages.

   - Dev Build
   - Local Server
   - HMR = Hot Module Replacement
   - File Watching Algorithm - written in C++
   - Caching - Faster Builds
   - Image Optimization
   - Minification
   - Bundling
   - Compressing the files
   - Consistent Hashing
   - Code Splitting
   - Differential Budling - support older browsers
   - Diagnostic
   - Error Handling
   - HTTPs
   - Tree Shaking - remove used code
   - Different dev and prod bundles

## Node_Modules
   It contains all the code that 

## Important Note
   If u have package.json and package-lock.json, You can recreate all node modules. I just have to do "npm install", it will take some times.

## npx
   npx is used to execute bundler or packages.
   npx parcel index.html or npm run start
## Babel 
   is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into backwards-compatible JavaScript code that can be run by older JavaScript engines.

## Note
   JSX is an XML-like syntax extension to ECMAScript without any defined semantics.
   It's NOT intended to be implemented by engines or browsers.
   JSX is JS syntax which is easier to create React Element
   JSX helps to write HTML code in React
   h1 tag create using jsx
   jsx - html like or xml like syntax but not html or xml
   Note: Can't say that html inside JS or xml inside JS (Wrong Definition)
   JSX code is transpiled before it reaches the JS Engine - Parcel - Babel(is JS transcompiler)
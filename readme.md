# Getting Started with Yarn

![](https://s-media-cache-ak0.pinimg.com/originals/66/b0/d5/66b0d517eba9f3527fd8be900b1a364f.jpg)

Yarn is an alternative to NPM built by Facebook in collaboration with Expononet, Google and Tilde.

Unlike NPM it "caches every package it downloads so it never needs to download it again. It also parallelizes operations to maximize resource utilization so install times are faster than ever."

Most importantly it has a cute cat.

Install Yarn

https://yarnpkg.com/en/
```
brew update
brew install yarn
```

## Can you find the npm alternatives for the following

```
npm init

yarn init
```

```
npm install --save express

yarn add express
```

```
npm run start

yarn run start
```

```
npm install cowsay --global

yarn global add cowsay
```

```
npm uninstall cowsay -g

yarn remove cowsay
```

# Next

Use Yarn to install the [create-react-app](https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html)
```
yarn global add create-react-app
```

- [ ] How do you get the app started?
```
create-react-app <app name>
cd <app name>
yarnpkg start
// starts server @ localhost:3000
```

- [ ] What is the folder structure of a new app?
```
hello-world/
+--.gitignore
+--package.json
+--README.md
+--node_modules/
+--public/
    +--index.html
    +--favicon.ico
+--src/
    +--App.css
    +--App.js
    +--App.test.js
    +--index.css
    +--index.js
    +--logo.svg
```
yr
- [ ] What is Webpack?
- [ ] What is Babel?
- [ ] What is esLint?
- [ ] What is different about yesterday's React app vs today?

Can you create a Counter component in its own file and import it to App.js?
When you click on the Counter it should increment a number.

# Resources

- https://code.facebook.com/posts/1840075619545360
- https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html

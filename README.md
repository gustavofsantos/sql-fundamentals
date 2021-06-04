# SQL Fundamentals

The best way to learn a new tool is through resolving challanges and getting the hands dirty.

This repository is a *"test driven approach"* over the amazing [SQL Fundamentals](https://egghead.io/courses/sql-fundamentals) from [Tyler Clark](https://twitter.com/iamtylerwclark) course at [eggheadio](https://twitter.com/eggheadio).

We will use Node.js, Jest and `pg` to handle all SQL queries. This is an easier approach for JavaScript developers since you can oquestrate automatic table drop or insertions.

## Getting Started

### What I need to go through this repository?

You need Node.js, npm or yarn (I use yarn, so the repository has a yarn.lock file), a running PostgreSQL server and basic knowledge of JavaScript to handle the test files.

### How this repository is organized?

- [Lessions](./lessions) contains all lessions. Each of them are a test file that contains stuff from the Tyler lession.
- [Queries](./queries) contains some useful queries that are used during the tests.
- [Utils](./utils) contains all util files. **You should not use this directory**.

### How run the tests?

First install all dependencies using npm or yarn, then run:

**Using npm**

```
$ npm run test
```

**Using yarn**

```
$ yarn test
```

**By default**, all tests will run in watch mode sequentially.

### I want the answers!

The `main` branch contains the exercises and all tests are *marked* as **todo**. To view the final version with all challanges done, go checkout to the branch `final`.
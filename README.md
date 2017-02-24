# smartanalytics
Google Analytics everywhere

## Availabililty
[![npm](https://pushrocks.gitlab.io/assets/repo-button-npm.svg)](https://www.npmjs.com/package/smartanalytics)
[![git](https://pushrocks.gitlab.io/assets/repo-button-git.svg)](https://GitLab.com/pushrocks/smartanalytics)
[![git](https://pushrocks.gitlab.io/assets/repo-button-mirror.svg)](https://github.com/pushrocks/smartanalytics)
[![docs](https://pushrocks.gitlab.io/assets/repo-button-docs.svg)](https://pushrocks.gitlab.io/smartanalytics/)

## Status for master
[![build status](https://GitLab.com/pushrocks/smartanalytics/badges/master/build.svg)](https://GitLab.com/pushrocks/smartanalytics/commits/master)
[![coverage report](https://GitLab.com/pushrocks/smartanalytics/badges/master/coverage.svg)](https://GitLab.com/pushrocks/smartanalytics/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/smartanalytics.svg)](https://www.npmjs.com/package/smartanalytics)
[![Dependency Status](https://david-dm.org/pushrocks/smartanalytics.svg)](https://david-dm.org/pushrocks/smartanalytics)
[![bitHound Dependencies](https://www.bithound.io/github/pushrocks/smartanalytics/badges/dependencies.svg)](https://www.bithound.io/github/pushrocks/smartanalytics/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/pushrocks/smartanalytics/badges/code.svg)](https://www.bithound.io/github/pushrocks/smartanalytics)
[![TypeScript](https://img.shields.io/badge/TypeScript-2.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%206.x.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Usage
Use TypeScript for best in class instellisense.

### Why does this package exist?
Tracking users in webapps is common. We use Google Analytics to gain insight in aho is using what
and where to spend resources for best efficiency.

Doing the same stuff in apps can be a bit of a hassle. Unnecessary dependencies tend to make apps slow that do any kind of analtics.
Say hello to smartanalytics. It features a very slim dependency tree using the native node request module to send posts to Google Analytics.

### How do I use this package?

```javascript
import {AnalyticsAccount} from 'smartanalytics'
let myAnalyticsAccount = new AnalyticsAccount('My App Name', 'UA-XXXXXX-Y')
myAnalyticsAccount.sendEvent('npmtool', 'install', 'somelabel')
```

For further information read the linked docs at the top of this README.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)

[![repo-footer](https://pushrocks.gitlab.io/assets/repo-footer.svg)](https://push.rocks)

# ignr

> Automagically generate a `.gitignore` file that fits your needs. Thanks to https://gitignore.io

[![Travis (.org)](https://img.shields.io/travis/z0al/ignr.svg)](https://travis-ci.org/z0al/ignr) [![npm](https://img.shields.io/npm/v/ignr.svg)](https://npm.im/ignr) [![node](https://img.shields.io/node/v/ignr.svg)](https://npm.im/ignr) [![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat)](#contributors)

## Usage

To generate a `.gitignore` file for the current directory, you need to run:

```sh
$ npx ignr
```

And BOOM 🔥. That's it.

## How it works

It runs a bunch of checks, for example, the existence of certain files in the current directory, installed programs ..etc to determine what things you might need to ignore. Then it simply fetches the necessary data from https://gitignore.io.

## Supported templates

Currently we can detect and generate a `.gitignore` file for the following templates:

- Golang
- Linux
- macOS
- Node.js
- Vim
- Visual Studio Code
- Windows
- What is missing? see [here](https://github.com/dvcs/gitignore/tree/master/templates)

Contributions are welcome ❤️

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://ahmed.sd"><img src="https://avatars1.githubusercontent.com/u/12673605?v=4" width="100px;" alt="Ahmed T. Ali"/><br /><sub><b>Ahmed T. Ali</b></sub></a><br /><a href="https://github.com/z0al/ignr/commits?author=z0al" title="Code">💻</a> <a href="#maintenance-z0al" title="Maintenance">🚧</a> <a href="https://github.com/z0al/ignr/commits?author=z0al" title="Tests">⚠️</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## FAQ

### What about [handy-gi](npm.im/handy-gi)

Well, I've created that package a few years ago, but couldn't really keep it updated since it doesn't fetch the gitignore templates dynamically but rather uses a local copy, which doesn't make sense. I didn't know that [gitignore.io](https://gitignore.io) has a API back then. So, this package basically replaces `handy-gi` and `handy-gi-cli`. Also, I think the `ignr` name is cooler ;)

## License

MIT © Ahmed T. Ali

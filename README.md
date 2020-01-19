# Productivity App

## About

This is a basic to-do list application. The user is able to add tasks to their list, and subsequently remove completed tasks by clicking on them. Currently, it is a MVP. Eventually, the user will be able to access a calendar to click on a given day to see the tasks for that day. Rather than clicking on the task to delete it, they will be able to simply cross them out or check them off, so they can see all tasks for that given day, rather than uncompleted tasks, as it stands now. This means that I will need to store each task/day to a database. I also may consider adding other functions such as weather or news for the day, so the app may be considered a a complete productivity app, or a homepage that the user can utilize while at work or doing schoolwork, rather than a simple to-do list. 

## Requirements

For development, you will only need Node.js installed on your environement.
And please use the appropriate [Editorconfig](http://editorconfig.org/) plugin for your Editor (not mandatory).

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v0.10.24

    $ npm --version
    1.3.21

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

---

## Install

    $ git clone git@github.com:ashtin23/productivity-app.git
    $ cd productivity-app
    $ npm install

## Start & watch

    $ npm start

## Simple build for production

    $ npm run build

---

## Languages & tools

### HTML

### JavaScript

- [React](http://facebook.github.io/react) is used for UI.

### CSS


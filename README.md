# Practicum Middle Frontend Developer

This project is part of my education on middle frontend developer curses of Yandex Practicum.
Frontend part of chat application.
Project is deployed with **netlify** and available by address https://starlit-jalebi-c3e624.netlify.app/

## Sprint_1

In first version pages are made with handlebars templating library and vite for
project roll up. Made js routing and express server for static.

Layout https://www.figma.com/file/jF5fFFzgGOxQeB4CmKWTiE/Chat_external_link

###

Pages

* Chat page /chat
* Profile page /profile
* Edit profile page /editProfile
* Login page /login
* Register page /register
* error404 page /error404
* error503 /error503

## Sprint_2

* Made custom reactive class
* All pages and components are based on reactive class
* Added *stylelint* and *eslint* linters
* Added typescript
* Added custom fetch class over XMLHttpRequest
* Added chat tape component
* Refactored code

## Sprint_3

* Connected project to api
* Deleted mock data
* Added authorization and routes protection
* Chat service is working on WebSocket
* Refactored code
* Made reactive class work with arrays of children
* Made profile management function including user avatar uploading
* Added user adding, deleting from chat
* Added avatar adding for chat

## Sprint_4

* Added unit tests for:
    * base component class
    * base http class
    * utils
* added pre commit test running with husky
* made npm packages audit
* refactored code

## Commands

* ``npm run start`` Builds prod version of project to /dist dir and starts express server on 3000 port
* ``npm run dev`` Makes project development start available on 5173 port
* ``npm run build`` Builds prod version of project to /dist
* ``npm run test`` Starts all test suites

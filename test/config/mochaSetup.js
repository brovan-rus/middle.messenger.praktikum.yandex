const { JSDOM } = require('jsdom');
const jsdom = new JSDOM(`<!DOCTYPE html><body></body>`, {
  url: 'https://www.example.com',
});

global.window = jsdom.window;
global.document = jsdom.window.document;
global.FormData = jsdom.window.FormData;

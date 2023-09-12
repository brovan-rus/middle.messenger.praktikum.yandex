const { jsdom } = require('../utils/jsdom');

global.window = jsdom.window;
global.document = jsdom.window.document;
global.FormData = jsdom.window.FormData;

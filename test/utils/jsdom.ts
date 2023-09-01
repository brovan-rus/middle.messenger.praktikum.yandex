import { JSDOM } from 'jsdom';

export const jsdom = new JSDOM(`<!DOCTYPE html><body></body>`, {
  url: 'https://www.example.com',
});

module.exports = { jsdom };

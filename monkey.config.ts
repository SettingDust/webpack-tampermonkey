export default {
  name: 'Good Monkey',
  description: 'A good monkey',
  version: '1.0.0',
  match: ['http*://*.google.com/*', 'http*://google.com/*'],
  grant: ['GM_addStyle'],
} as Monkey.Metadata

const https = require('https');
const url = 'https://www.bing.com/images/search?q=hotel+restaurant+de+la+jonte+meyrueis+peyreleau';

https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const matches = data.match(/murl&quot;:&quot;(.*?)&quot;/g);
    if (matches) {
      matches.slice(0, 10).forEach(m => console.log(m.replace(/murl&quot;:&quot;/, '').replace(/&quot;$/, '')));
    }
  });
});

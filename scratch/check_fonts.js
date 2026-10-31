const https = require('https');

https.get('https://cdn.prod.website-files.com/68d5792fdf4d1791f07707d1/css/escapora.webflow.shared.88c053481.min.css', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const fonts = data.match(/font-family:[^;}]+/g);
    console.log('Fonts found in CSS:', [...new Set(fonts || [])]);
    const fontFaces = data.match(/@font-face\s*\{[^}]+\}/g);
    console.log('Font faces count:', fontFaces ? fontFaces.length : 0);
    if (fontFaces) {
      console.log('Sample font faces:', fontFaces.slice(0, 5));
    }
  });
}).on('error', err => console.log('Err:', err.message));

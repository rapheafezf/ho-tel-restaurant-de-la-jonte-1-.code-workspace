import https from 'https';
import fs from 'fs';
import path from 'path';

const url = 'https://image.jimcdn.com/app/cms/image/transf/none/path/s094131847179d8bd/image/i03fc2e2f3d51ebff/version/1741162394/image.png';
const dest = path.join(process.cwd(), 'public', 'images', 'logo.png');

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
    'Referer': 'https://www.hotelrestaurantdelajonte.fr/'
  }
};

https.get(url, options, (res) => {
  if (res.statusCode !== 200) {
    console.error(`Failed: ${res.statusCode}`);
    return;
  }
  const file = fs.createWriteStream(dest);
  res.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Logo downloaded successfully to ' + dest);
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});

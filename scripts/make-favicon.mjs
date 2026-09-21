import fs from 'node:fs';
import pngToIco from 'png-to-ico';

const buf = await pngToIco([
  'public/favicon-16.png',
  'public/favicon-32.png',
]);
fs.writeFileSync('public/favicon.ico', buf);

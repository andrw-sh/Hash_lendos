import { existsSync, readFileSync, unlinkSync, writeFileSync } from 'node:fs';

const PLACEHOLDER = 'REPLACE_WITH_DOMAIN';
const configUrl = new URL('../site.config.json', import.meta.url);
const cnameUrl = new URL('../public/CNAME', import.meta.url);

const config = JSON.parse(readFileSync(configUrl, 'utf-8'));
const domain = String(config.customDomain || '').trim();

if (!domain || domain === PLACEHOLDER) {
  if (existsSync(cnameUrl)) {
    unlinkSync(cnameUrl);
  }
  console.log('CNAME not written. Set customDomain in site.config.json.');
} else {
  writeFileSync(cnameUrl, `${domain}\n`, 'utf-8');
  console.log(`CNAME written: ${domain}`);
}

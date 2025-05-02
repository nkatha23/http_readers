#!/usr/bin/env node

const axios = require('axios');
const fs = require('fs');
const { analyzeHeaders } = require('./src/analyzer');

const url = process.argv[2];
const exportToFile = process.argv.includes('--export');
const outputJson = process.argv.includes('--json');

if (!url) {
  console.error('❌ Please provide a URL:');
  console.error('Usage: node index.js https://example.com [--export] [--json]');
  process.exit(1);
}

(async () => {
  try {
    const response = await axios.get(url);
    const report = analyzeHeaders(response.headers, url);

    if (outputJson) {
      console.log(JSON.stringify(report, null, 2));
    } else {
      report.summary.forEach(line => console.log(line));
    }

    if (exportToFile) {
      const output = outputJson ? JSON.stringify(report, null, 2) : report.summary.join('\n');
      fs.writeFileSync(`reports/report-${Date.now()}.txt`, output, 'utf8');
      console.log(`\n📁 Report saved to /reports/`);
    }
  } catch (err) {
    console.error('⚠️ Error fetching headers:', err.message);
  }
})();

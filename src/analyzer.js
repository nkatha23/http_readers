const expectedHeaders = {
    'strict-transport-security': 'HSTS',
    'content-security-policy': 'Content Security Policy (CSP)',
    'x-frame-options': 'Clickjacking Protection',
    'x-content-type-options': 'MIME Sniffing Protection',
    'referrer-policy': 'Referrer Policy',
    'permissions-policy': 'Permissions Policy',
  };
  
  function analyzeHeaders(headers, url) {
    const results = [];
    const missing = [];
  
    results.push(`🔍 Analyzing headers for: ${url}\n`);
  
    for (const header in expectedHeaders) {
      if (headers[header]) {
        results.push(`✅ ${expectedHeaders[header]}: Present`);
      } else {
        results.push(`❌ ${expectedHeaders[header]}: Missing`);
        missing.push(expectedHeaders[header]);
      }
    }
  
    if (missing.length > 0) {
      results.push('\n⚠️ Recommendation: Add the following headers:');
      missing.forEach(h => results.push(` - ${h}`));
    } else {
      results.push('\n🎉 All recommended security headers are present!');
    }
  
    return {
      summary: results,
      missing,
      headersReceived: headers,
      timestamp: new Date().toISOString(),
    };
  }
  
  module.exports = { analyzeHeaders };
  
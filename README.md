# http_readers
# 🛡️ HTTP Header Analyzer

A simple tool that scans a given website's HTTP response headers and generates a security-focused report. Useful for developers, penetration testers, and sysadmins to evaluate basic security practices like HTTPS usage, content security policy, and HSTS.

---

## 🔍 What It Does

This tool:
- Sends an HTTP/HTTPS request to the given domain
- Analyzes common security-related headers:
  - `Content-Security-Policy`
  - `Strict-Transport-Security`
  - `X-Frame-Options`
  - `X-Content-Type-Options`
  - `Referrer-Policy`
  - `Permissions-Policy`
  - And others...
- Flags missing or misconfigured headers
- Outputs a structured and human-readable report
- Optionally exports the report to a file

---

## 📁 Project Structure


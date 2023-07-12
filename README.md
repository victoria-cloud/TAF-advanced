# TAF-advanced
Automated Testing Global Mentoring Program: Advanced [UA]

# Development
This project uses EditorConfig to standardize text editor configuration. Visit https://editorconfig.org for more details.
This project uses ESLint to detect suspicious code in javaScript files. Visit https://eslint.org for more details.

To run reportportal with docker at localhost:
1.  docker-compose -p reportportal up -d --force-recreate

Eslint usage:
2.  eslint [options] file.js [file.js] [dir]

# Sonarcube
open cmd
1. docker run --name sonarqube --restart always -p 9000:9000 -d sonarqube

open new cmd in project's directory and run
2. sonar-scanner

# API-TESTING and UI-TESTING has different package.json !

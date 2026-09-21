const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

function findBrowser() {
  const candidates = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'
  ];
  for (const p of candidates) {
    if (fs.existsSync(p)) return p;
  }
  throw new Error('No compatible Chromium browser found (Chrome or Edge).');
}

function generateResume() {
  const browserPath = findBrowser();
  console.log('Using browser at:', browserPath);

  const templatePath = path.resolve(__dirname, 'resume-template.html');
  if (!fs.existsSync(templatePath)) {
    throw new Error('Resume template not found at ' + templatePath);
  }

  const publicDir = path.resolve(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const targetPdf = path.join(publicDir, 'gilang_prakoso.pdf');
  const backupResumePdf = path.join(publicDir, 'resume.pdf');

  console.log('Generating PDF from template:', templatePath);

  // Run headless Chrome to convert HTML to PDF with exact print settings
  execFileSync(browserPath, [
    '--headless',
    '--disable-gpu',
    '--no-pdf-header-footer',
    '--run-all-compositor-stages-before-draw',
    '--print-to-pdf=' + targetPdf,
    templatePath
  ]);

  if (fs.existsSync(targetPdf)) {
    const stats = fs.statSync(targetPdf);
    console.log(`Successfully generated ${targetPdf} (${stats.size} bytes)`);

    // Also update resume.pdf so both links are completely consistent
    fs.copyFileSync(targetPdf, backupResumePdf);
    console.log(`Successfully synced to ${backupResumePdf}`);
  } else {
    throw new Error('Failed to generate PDF at ' + targetPdf);
  }
}

try {
  generateResume();
} catch (err) {
  console.error('Error generating resume:', err);
  process.exit(1);
}

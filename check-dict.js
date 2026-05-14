const fs = require('fs');
const ts = require('typescript');

function readDict(path, keyName) {
  const content = fs.readFileSync(path, 'utf8');
  // quick strip out TS imports/types that might fail
  const js = ts.transpileModule(content, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  const m = { exports: {} };
  const f = new Function('exports', 'module', js);
  f(m.exports, m);
  return m.exports[keyName];
}

const ar = readDict('src/lib/dictionaries/ar.ts', 'ar');
const en = readDict('src/lib/dictionaries/en.ts', 'en');

let missingCount = 0;
function findMissing(arObj, enObj, path = '') {
  for (const key in arObj) {
    const currentPath = path ? `${path}.${key}` : key;
    if (enObj[key] === undefined) {
      console.log(`Missing in EN: ${currentPath}`);
      missingCount++;
    } else if (typeof arObj[key] === 'object' && arObj[key] !== null) {
      if (typeof enObj[key] === 'object' && enObj[key] !== null) {
        if (Array.isArray(arObj[key])) {
          // If array, just check lengths
          if (!Array.isArray(enObj[key]) || enObj[key].length !== arObj[key].length) {
            console.log(`Array length mismatch in EN: ${currentPath} (ar:${arObj[key].length}, en:${enObj[key]?.length || 0})`);
            missingCount++;
          }
        } else {
          findMissing(arObj[key], enObj[key], currentPath);
        }
      } else {
        console.log(`Type mismatch in EN: ${currentPath}`);
        missingCount++;
      }
    }
  }
}

findMissing(ar, en);
console.log(`Done checking dictionaries. Total missing: ${missingCount}`);

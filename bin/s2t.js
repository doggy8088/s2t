#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { convertToTraditionalChinese } = require('../STCharacters');

function printHelp() {
    console.log(`用法: s2t <inputFile> [outputFile]\n` +
        `將 <inputFile> 轉換為繁體中文，結果輸出到 [outputFile] 或標準輸出。\n`);
}

const args = process.argv.slice(2);
if (args.length === 0 || args.includes('-h') || args.includes('--help')) {
    printHelp();
    process.exit(0);
}

const inputFile = args[0];
const outputFile = args[1];

if (!fs.existsSync(inputFile)) {
    console.error(`找不到輸入檔案: ${inputFile}`);
    process.exit(1);
}

const inputText = fs.readFileSync(inputFile, 'utf8');
const outputText = convertToTraditionalChinese(inputText);

if (outputFile) {
    fs.writeFileSync(outputFile, outputText, 'utf8');
    console.log(`已寫入: ${outputFile}`);
} else {
    process.stdout.write(outputText);
}

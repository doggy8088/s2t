const fs = require('fs');
const path = require('path');
const { convertToTraditionalChinese } = require('./STCharacters');

const inputPath = path.join(__dirname, 'tests', 'Qwen3 Technical Report.ass');
const outputPath = path.join(__dirname, 'tests', 'Qwen3 Technical Report.zh.ass');

fs.readFile(inputPath, 'utf8', (err, data) => {
    if (err) {
        console.error('讀取檔案失敗:', err);
        process.exit(1);
    }
    const converted = convertToTraditionalChinese(data);
    fs.writeFile(outputPath, converted, 'utf8', (err) => {
        if (err) {
            console.error('寫入檔案失敗:', err);
            process.exit(1);
        }
        console.log('轉換完成，已輸出到', outputPath);
    });
});
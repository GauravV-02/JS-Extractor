function getFileSize(path){
const fs = require('fs');
const stats = fs.statSync(path);
    return stats.size;
}


module.exports = {
getFileSize: function(path){
const fs = require('fs');
const stats = fs.statSync(path);
    console.log(stats.size);
    return stats.size;
}
};

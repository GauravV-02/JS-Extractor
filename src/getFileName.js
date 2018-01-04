// Returns the file name without path
module.exports = {
    
        getFileName: function(path)
        {
            var z = path.substring(path.lastIndexOf('/')+1);
			return z;
        }
};
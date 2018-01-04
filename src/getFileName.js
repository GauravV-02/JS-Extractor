module.exports = {
    
        getFileName: function(path)
        {
            var z = path.substring(path.lastIndexOf('/')+1);
			return z;
        }
};
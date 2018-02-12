const getCodeChunks = size => Math.random().toString(16).substr(2, (size === undefined || size < 1) ? 4 : 4 * size);

export default createGUID = () => getCodeChunks(2) + '-' + getCodeChunks() + '-' + getCodeChunks() + '-' + getCodeChunks() + '-' + getCodeChunks(3);
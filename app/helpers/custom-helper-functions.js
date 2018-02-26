export const capitalize = word => {
	// in case the "word" actually consists of many words
	return word.split(' ').map(chunk => {
	  let lower = chunk.toLowerCase();
	  return lower.slice(0, 1).toUpperCase() + lower.slice(1);
	}).join(' ');
}

export const replaceLodash = word => {
	return word.replace('_', ' ');
}

export const Range = (start, end) => Array(end - start + 1).fill().map((_, index) => start + index);

export const stringDuplication = (string, count) => Array(count).fill(string).join('');
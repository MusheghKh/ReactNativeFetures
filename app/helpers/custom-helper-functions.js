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

export const paginationController = ({ start, end, count, pageCount }) => {
	if(Math.abs(count) < 10) {
		return Range(start, end);
	}
	if(count + start > pageCount || count + end > pageCount) {
		return Range(pageCount - 9, pageCount);
	} else if(count + start < 1 || count + end < 1) {
		return Range(1, 10);
	}
	return Range(start + count, end + count);
}

export const stringDuplication = (string, count) => Array(count).fill(string).join('');
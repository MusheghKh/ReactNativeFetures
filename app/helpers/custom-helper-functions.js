export const capitalize = word => {
  let lower = word.toLowerCase();
  return lower.slice(0, 1).toUpperCase() + lower.slice(1);
}

export const replaceLodash = word => {
	return word.replace('_', ' ');
}

export const Range = (start, end) => Array(end - start + 1).fill().map((_, index) => start + index);

export const stringDuplication = (string, count) => Array(count).fill(string).join('');
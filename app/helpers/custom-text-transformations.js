export const capitalize = word => {
  let lower = word.toLowerCase();
  return lower.slice(0, 1).toUpperCase() + lower.slice(1);
}
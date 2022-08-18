const nextElementInArrayList = (list, value) => {
  const currentElementIndex = list.indexOf(value);
  const nextElementIndex = (currentElementIndex + 1) % list.length;
  const nextValue = list[nextElementIndex];
  return nextValue;
};

export default nextElementInArrayList;

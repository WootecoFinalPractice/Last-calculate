const validateNumber = numbers => {
  numbers.forEach(number => {
    if (Number(number) < 0) {
      throw new Error('[ERROR]');
    }
  });
};

export default validateNumber;

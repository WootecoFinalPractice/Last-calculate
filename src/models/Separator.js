import validateNumber from './validators/validateNumber.js';

class Separator {
  static separateString(input) {
    const separators = [',', ':'];
    let mainString = [];
    const customSeparator = [];
    if (input.startsWith('//')) {
      const customIndex = input.indexOf('\\n');
      for (let i = 2; i < customIndex; i += 1) {
        customSeparator.push(input[i]);
      }
      for (let i = customIndex + 2; i < input.length; i += 1) {
        mainString.push(input[i]);
      }
      separators.push(customSeparator.join(''));
      return [mainString.join(''), separators];
    }
    mainString = input;
    return [mainString, separators];
  }

  static exportNumbers(string, sep) {
    const regex = new RegExp(`[${sep.join('')}]`);
    const numbers = string.split(regex);
    validateNumber(numbers);
    return numbers;
  }

  static calculate(numbers) {
    const result = numbers.reduce((acc, curr) => acc + Number(curr), 0);
    return result;
  }
}
export default Separator;

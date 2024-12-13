import Separator from '../models/Separator.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class Controller {
  static async run() {
    try {
      const userInput = await InputView.readInput();
      const [mainString, seperators] = Separator.separateString(userInput);
      const numbers = Separator.exportNumbers(mainString, seperators);
      const result = Separator.calculate(numbers);
      OutputView.print(result);
    } catch (error) {
      OutputView.print(error);
      throw error;
    }
  }
}

export default Controller;

// InputView.js
import { Console } from '@woowacourse/mission-utils';

class InputView {
  static readInput() {
    return Console.readLineAsync(`덧셈할 문자열을 입력해 주세요.\n`);
  }
}
export default InputView;

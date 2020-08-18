import defaultHtml from '!!raw-loader!./default.html';
import choiceHtml from '!!raw-loader!./choice.html';
import choiceLeadingHtml from '!!raw-loader!./choice-leading.html';
import filterHtml from '!!raw-loader!./filter.html';
import filterLeadingHtml from '!!raw-loader!./filter-leading.html';
import inputHtml from '!!raw-loader!./input.html';
import inputTrailingActionHtml from '!!raw-loader!./input-trailing-action.html';

export class Examples {
  defaultHtml = defaultHtml;
  choiceHtml = choiceHtml;
  choiceLeadingHtml = choiceLeadingHtml;
  filterHtml = filterHtml;
  filterLeadingHtml = filterLeadingHtml;
  inputHtml = inputHtml;
  inputTrailingActionHtml = inputTrailingActionHtml;

  chips = [{ label: 'One', selected: true }, { label: 'Two' }, { label: 'Three' }];
  newChip: string;

  add() {
    this.chips.push({ label: this.newChip });
    this.newChip = '';
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  removed(data: any) {
    this.chips.splice(this.chips.indexOf(data), 1);
  }
}

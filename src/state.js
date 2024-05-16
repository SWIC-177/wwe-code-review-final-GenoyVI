import { BELTS, CHAMPIONS } from "./data"; // imported external data from the data.js file
import { filterItemsByTerm } from "./lib"; // incorporated use of data from across the library via the import method for tools like this

export class State {
  #belts = BELTS; // several `#` private class fields, imported array

  #champions = CHAMPIONS; //  imported array initialization

  #search = ""; // initialized to empty string for future application

  get data() {
    const filteredResults = filterItemsByTerm({
      terms1: this.#champions,
      terms2: this.#belts,
      actionTerm: this.#search,
    });

    return {
      champions: filteredResults.terms1,
      belts: filteredResults.terms2,
    };
  }
  // based on the empty string search, the data in the assignment of the variable to a value, is then filtered and returned to the user
  // A Search engine for a list of champions and belts essentially

  get searchState() {
    return this.#search;
  }

  set searchState(value) {
    this.#search = value;
  }
}
// the search state is set to the value of the the search empty string mentioned earlier but it is instead readable through the get method in external code
// other methods could be more practical for the user to interact with the search state but it is not implemented here
// set method is used to change the search state value by changing the value of the search state to the value of the input

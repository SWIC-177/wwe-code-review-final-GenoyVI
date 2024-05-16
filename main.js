import Search from "./src/components/search"; // The overall use of this main.js file is to search for relevant data in the table. The search component is imported here from "belts" and "champions". overall, the search component is used to search for data in the table
import Table from "./src/components/table";
import { State } from "./src/state";

const appElement = document.getElementById("app");
// stigmatized as a bad practice, the app element is obtained by the id of the element. where an empty string is assigned to the app element
const state = new State();

function render(st) {
  appElement.innerHTML = `
  ${Search({ searchValue: st.searchState })}
  ${Table({
    col1: st.data.belts,
    col2: st.data.champions,
    col1Header: "Belt",
    col2Header: "Champion",
  })}
  `;
  // much of the work generating a table and search component is done here. with `st` for state being passed in as an argument to the render function, generating elements for the search and table components respectively

  const searchInput = document.getElementById("search"); // This section obtains a reference to the search input element with `document.getElementById("search")` which 'searchInput' is assigned to. The length of the search value is then calculated and the search input is focused on. The search input is then set to the search value length.
  // 'searchInput.value.length' is the stored length value variable of the search input.
  const searchValueLen = searchInput.value.length;

  searchInput.focus(); // focusing search input like tab focus
  searchInput.setSelectionRange(searchValueLen, searchValueLen);

  searchInput.addEventListener("input", (e) => {
    // eslint-disable-next-line no-param-reassign -- It's a class with a setter!
    st.searchState = e.target.value;
    render(st);
  });
}
// essential boolean event listener for the search input, the search state is set to the value of the input and the render function is called with the state as an argument
render(state);
// easing the user experience by rendering the search state and the table data in the app element for the user to interact with via the .focus() method

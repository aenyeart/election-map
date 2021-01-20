let newPolitician = function(newName, partyColor) {
  let politician = {
    name: newName,
    color: partyColor,
    electionResults: null,
    totalVotes: 0,
    tallyUpTotalVotes: function() {
      this.totalVotes = 0;
      for (i = 0; i < this.electionResults.length; i++) {
        this.totalVotes += this.electionResults[i];
      }
    console.log(this.name + " " + this.totalVotes);
    }
  };
  return politician;
};

let booger = newPolitician("Boris Boogerbottom", [132, 17, 11]);
let pickle = newPolitician("Penelope Picklenose", [245, 141, 136]);

booger.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
pickle.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

let amendResults = function(state, amendedBooger, amendedPickle) {
  booger.electionResults[state] = amendedBooger; // Amends booger count
  pickle.electionResults[state] = amendedPickle; // Amends pickle count
};
amendResults(9, 1, 28); // FL (state 9), booger: 1, pickle: 28
amendResults(4, 17, 38); // CA (state 4), booger: 17, pickle: 38
amendResults(43, 11, 27); // TX (state 43), booger: 11, pickle: 27
// END AMENDED RESULTS -------------------------//

let setStateResults = function(state) {
  theStates[state].winner = null;
  if (booger.electionResults[state] > pickle.electionResults[state]) {
    theStates[state].winner = booger;
  } else if (pickle.electionResults[state] > booger.electionResults[state]) {
    theStates[state].winner = pickle;
  }
  let stateWinner = theStates[state].winner;
  if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.color;
  } else {
    theStates[state].rgbColor = [11, 32, 57];
  }
}; // END tabulation of state results.

let stateTable = document.getElementById("stateResults");
let stateTableHeader = stateTable.children[0].children[0];
let stateName = stateTableHeader.children[0];
// stateName.innerText = "???";
let stateAbbrev = stateTableHeader.children[1];
// stateAbbrev.innerText = "??";
let stateResultsSection = stateTable.children[1];
stateResultsSection.children[0]






// vvv This is a method of the newPolitician function, so it is declared there.
booger.tallyUpTotalVotes();
pickle.tallyUpTotalVotes();

let winner = "???";

function determineWinner() {
  if (booger.totalVotes > pickle.totalVotes) {
    winner = booger.name;
  } else if (pickle.totalVotes > booger.totalVotes) {
    winner = pickle.name;
  } else if (booger.totalVotes == pickle.totalVotes) {
    winner = "TIE";
  }
  console.log(winner + " has won the election!");
};

determineWinner();

let countryResultsTable = document.getElementById("countryResults");
let countryResultsRow = countryResultsTable.children[0].children[0];

countryResultsRow.children[0].innerText = booger.name;
countryResultsRow.children[1].innerText = booger.totalVotes;
countryResultsRow.children[2].innerText = pickle.name;
countryResultsRow.children[3].innerText = pickle.totalVotes;
countryResultsRow.children[5].innerText = winner;

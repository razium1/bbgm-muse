document.addEventListener("DOMContentLoaded", function() {
let statsTable = document.getElementById("statsTableBody");
let searchInput = document.getElementById("searchInput");

let data;

function loadData(event) {
  let file = event.target.files[0];
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function () {
    data = JSON.parse(reader.result);
    renderTable();
  };
}

function renderTable() {
  statsTable.innerHTML = "";
  let tbody = document.createElement("tbody"); // Define tbody variable
  data.forEach((player) => {
    let tr = document.createElement("tr");

    let yearTd = document.createElement("td");
    yearTd.textContent = player.year;
    tr.appendChild(yearTd);

    let teamTd = document.createElement("td");
    teamTd.textContent = player.team;
    tr.appendChild(teamTd);

    let gpTd = document.createElement("td");
    gpTd.textContent = player.gp;
    tr.appendChild(gpTd);

    let minTd = document.createElement("td");
    minTd.textContent = player.min;
    tr.appendChild(minTd);

    let fgmTd = document.createElement("td");
    fgmTd.textContent = player.fgm;
    tr.appendChild(fgmTd);

    let fgaTd = document.createElement("td");
    fgaTd.textContent = player.fga;
    tr.appendChild(fgaTd);

    let fgPctTd = document.createElement("td");
    fgPctTd.textContent = player.fgPct;
    tr.appendChild(fgPctTd);

    let threePtMadeTd = document.createElement("td");
    threePtMadeTd.textContent = player.threePtMade;
    tr.appendChild(threePtMadeTd);

    let threePtAttTd = document.createElement("td");
    threePtAttTd.textContent = player.threePtAtt;
    tr.appendChild(threePtAttTd);

    let threePtPctTd = document.createElement("td");
    threePtPctTd.textContent = player.threePtPct;
    tr.appendChild(threePtPctTd);

    let ftmTd = document.createElement("td");
    ftmTd.textContent = player.ftm;
    tr.appendChild(ftmTd);

    let ftaTd = document.createElement("td");
    ftaTd.textContent = player.fta;
    tr.appendChild(ftaTd);

    let ftPctTd = document.createElement("td");
    ftPctTd.textContent = player.ftPct;
    tr.appendChild(ftPctTd);

    let orbTd = document.createElement("td");
    orbTd.textContent = player.orb;
    tr.appendChild(orbTd);

    let drbTd = document.createElement("td");
    drbTd.textContent = player.drb;
    tr.appendChild(drbTd);

    let trbTd = document.createElement("td");
    trbTd.textContent = player.trb;
    tr.appendChild(trbTd);

    let astTd = document.createElement("td");
    astTd.textContent = player.ast;
    tr.appendChild(astTd);

    let stlTd = document.createElement("td");
    stlTd.textContent = player.stl;
    tr.appendChild(stlTd);

    let blkTd = document.createElement("td");
    blkTd.textContent = player.blk;
    tr.appendChild(blkTd);

    let tovTd = document.createElement("td");
    tovTd.textContent = player.tov;
    tr.appendChild(tovTd);

    let pfTd = document.createElement("td");
    pfTd.textContent = player.pf;
    tr.appendChild(pfTd);

    tbody.appendChild(tr);
  });
  statsTable.appendChild(tbody);
}

function filterTable(event) {
    let filterText = event.target.value.toLowerCase();
    let rows = statsTable.getElementsByTagName("tr");
  
    Array.from(rows).forEach((row) => {
      let year = row.getElementsByTagName("td")[0].textContent.toLowerCase();
      let team = row.getElementsByTagName("td")[1].textContent.toLowerCase();
      let gp = row.getElementsByTagName("td")[2].textContent.toLowerCase();
      let min = row.getElementsByTagName("td")[3].textContent.toLowerCase();
      let fgm = row.getElementsByTagName("td")[4].textContent.toLowerCase();
      let fga = row.getElementsByTagName("td")[5].textContent.toLowerCase();
      let fgPct = row.getElementsByTagName("td")[6].textContent.toLowerCase();
      let threePtMade = row.getElementsByTagName("td")[7].textContent.toLowerCase();
      let threePtAtt = row.getElementsByTagName("td")[8].textContent.toLowerCase();
      let threePtPct = row.getElementsByTagName("td")[9].textContent.toLowerCase();
      let ftm = row.getElementsByTagName("td")[10].textContent.toLowerCase();
      let fta = row.getElementsByTagName("td")[11].textContent.toLowerCase();
      let ftPct = row.getElementsByTagName("td")[12].textContent.toLowerCase();
      let orb = row.getElementsByTagName("td")[13].textContent.toLowerCase();
      let drb = row.getElementsByTagName("td")[14].textContent.toLowerCase();
      let trb = row.getElementsByTagName("td")[15].textContent.toLowerCase();
      let ast = row.getElementsByTagName("td")[16].textContent.toLowerCase();
      let stl = row.getElementsByTagName("td")[17].textContent.toLowerCase();
      let blk = row.getElementsByTagName("td")[18].textContent.toLowerCase();
      let tov = row.getElementsByTagName("td")[19].textContent.toLowerCase();
      let pf = row.getElementsByTagName("td")[20].textContent.toLowerCase();
  
      if (year.indexOf(filterText) > -1 || 
          team.indexOf(filterText) > -1 ||
          gp.indexOf(filterText) > -1 ||
          min.indexOf(filterText) > -1 ||
          fgm.indexOf(filterText) > -1 ||
          fga.indexOf(filterText) > -1 ||
          fgPct.indexOf(filterText) > -1 ||
          threePtMade.indexOf(filterText) > -1 ||
          threePtAtt.indexOf(filterText) > -1 ||
          threePtPct.indexOf(filterText) > -1 ||
          ftm.indexOf(filterText) > -1 ||
          fta.indexOf(filterText) > -1 ||
          ftPct.indexOf(filterText) > -1 ||
          orb.indexOf(filterText) > -1 ||
          drb.indexOf(filterText) > -1 ||
          trb.indexOf(filterText) > -1 ||
          ast.indexOf(filterText) > -1 ||
          stl.indexOf(filterText) > -1 ||
          blk.indexOf(filterText) > -1 ||
          tov.indexOf(filterText) > -1 ||
          pf.indexOf(filterText) > -1) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  }
  
  searchInput.addEventListener("keyup", filterTable);
});
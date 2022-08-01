document.getElementById("fetchData").onclick = function() { fetchData() };
data = [];

function fetchData() {
  req = { api: "/test", body: [{ a: "b"}, c: "d"] }
  data.push req;
}


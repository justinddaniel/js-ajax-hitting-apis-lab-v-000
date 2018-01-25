function getRepositories () {
  var username = document.getElementById("username").value;
  const req = new XMLHttpRequest()
  req.addEventListener("load", showRepositories); //when the event fires showRepositories() gets called.
  req.open("GET", `https://api.github.com/users/${username}/repos`)
  req.send()
}

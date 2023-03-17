function generate() {
  let who = ["The dog", "my granma", "His turtle", "My bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let towhat = ["my homework", "my car", "my shoes", "my bike"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch"
  ];
  let rand_who = Math.floor(Math.random() * who.length);
  let rand_what = Math.floor(Math.random() * what.length);
  let rand_towhat = Math.floor(Math.random() * towhat.length);
  let rand_when = Math.floor(Math.random() * when.length);

  document.getElementById("result").innerHTML =
    "<h2>" +
    who[rand_who] +
    " " +
    what[rand_what] +
    " " +
    towhat[rand_towhat] +
    " " +
    when[rand_when] +
    "</h2>";
}

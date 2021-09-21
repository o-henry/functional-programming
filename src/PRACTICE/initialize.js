// initialize(["Stephen Hawking"]) ➞ ["S. H."]

// initialize(["Harry Potter", "Ron Weasley"]) ➞ ["H. P.", "R. W."]

// initialize(["Sherlock Holmes", "John Watson", "Irene Adler"]) ➞ ["S. H.", "J. W.", "I. A."]

const initialize = (n) =>
  n.map((x) =>
    x
      .split(" ")
      .map((y) => y[0] + ".")
      .join(" ")
  );

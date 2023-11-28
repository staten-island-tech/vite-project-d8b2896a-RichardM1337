const goslingDict = [
  {
    name: "Barbie",
    image: "/Barbie.jpg",
    release: 2023,
    genre: ["Romance", "Fantasy"],
  },
  {
    name: "Blade Runner 2049",
    image: "/BladeRunner.jpg",
    release: 2017,
    genre: ["Dystopian", "Science Fiction"],
  },
  {
    name: "Drive",
    image: "/Drive.jpg",
    release: 2011,
    genre: ["Action", "Crime"],
  },
  {
    name: "La La Land",
    image: "/LaLa.jpeg",
    release: 2016,
    genre: ["Romance", "Fantasy"],
  },
  {
    name: "The Gray Man",
    image: "",
    release: 2022,
    genre: ["Action", "Thriller"],
  },
  {
    name: "The Nice Guys",
    image: "",
    release: 2016,
    genre: ["Comedy", "Action"],
  },
  {
    name: "Lars and the Real Girl",
    image: "",
    release: "2007",
    genre: ["Comedy", "Drama"],
  },
  {
    name: "example div movie name",
    image: "",
    release: "release year",
    genre: ["based on 2", "entries in a dictionary"],
  },
  {
    name: "luh calm fit",
    image: "",
    release: "release too cray",
    genre: ["chill", "bird"],
  },
];

export const gosling = goslingDict.map((x) => ({
  name: x.name,
  image: x.image,
  release: x.release,
  genre: x.genre,
}));

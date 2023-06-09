type BookType = "national" | "academic" | "public";

type Book = {
  title: string;
  pages: number;
  isbn: number;
};

type Member = {
  name: string;
  phone: string;
  [key: string]: string;
};

type Library = {
  name: string;
  address: string;
  numberOfBooks: number;
  type: BookType;
  books: Book[];
  genres: string[];
  members: Member[];
};

const library: Library = {
  name: "New Yoek LIbrary",
  address: "djklasld",
  numberOfBooks: 1234,
  type: "national", //national acadamic public
  books: [
    {
      title: "harry Potter",
      pages: 756,
      isbn: 98054132145,
    },
    {
      title: "Sikhu",
      pages: 75,
      isbn: 9854132145,
    },
  ],
  genres: ["fiction", "history", "computers"],
  members: [
    { name: "Hello", phone: "+910239023" },
    { name: "mark doe", phone: "+910239023", email: "marked@email.com" },
  ],
};

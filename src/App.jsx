// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import ItemList from "./components/ItemList";
// import Sorting from "./components/Sorting";
import item1 from "./assets/item1.avif";
import item2 from "./assets/item2.avif";
import item3 from "./assets/item3.png";
import item4 from "./assets/item4.png";
import item5 from "./assets/item5.avif";
import item6 from "./assets/item6.avif";
import item7 from "./assets/item7.avif";
import item8 from "./assets/item8.png";
import item9 from "./assets/item9.png";
import item10 from "./assets/item10.png";
import { motion } from "framer-motion";

const items = [
  {
    id: 1,
    thumbnail: item1,
    title: "Football",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid eos sed accusantium unde temporibus doloremque vero praesentium autem tempore ea, fuga veritatis, velit voluptatem cum, atque magni dolores maxime dolorum iusto sequi commodi nulla nesciunt deserunt? Nemo, in possimus",
    date: 18300409, // in ISO 8601 format
    popularity: 11,
  },
  {
    id: 2,
    thumbnail: item2,
    title: "Cricket",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores veritatis eos libero, rerum accusantium tempore, voluptate quas qui enim nisi inventore beatae architecto earum vel est! Odio, nulla. Deserunt blanditiis, consectetur explicabo quam aspernatur molestias placeat ab necessitatibus fugit nihil?",
    date: 17000406, // in ISO 8601 format
    popularity: 10,
  },
  {
    id: 3,
    thumbnail: item3,
    title: "Basketball",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores veritatis eos libero, rerum accusantium tempore, voluptate quas qui enim nisi inventore beatae architecto earum vel est! Odio, nulla. Deserunt blanditiis, consectetur explicabo quam aspernatur molestias placeat ab necessitatibus fugit nihil?",
    date: 18910406, // in ISO 8601 format
    popularity: 9,
  },
  {
    id: 4,
    thumbnail: item4,
    title: "Hockey",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores veritatis eos libero, rerum accusantium tempore, voluptate quas qui enim nisi inventore beatae architecto earum vel est! Odio, nulla. Deserunt blanditiis, consectetur explicabo quam aspernatur molestias placeat ab necessitatibus fugit nihil?",
    date: 18500403, // in ISO 8601 format
    popularity: 8,
  },
  {
    id: 5,
    thumbnail: item5,
    title: "Tennis",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores veritatis eos libero, rerum accusantium tempore, voluptate quas qui enim nisi inventore beatae architecto earum vel est! Odio, nulla. Deserunt blanditiis, consectetur explicabo quam aspernatur molestias placeat ab necessitatibus fugit nihil?",
    date: 18200206, // in ISO 8601 format
    popularity: 7,
  },
  {
    id: 6,
    thumbnail: item6,
    title: "Volley Ball",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores veritatis eos libero, rerum accusantium tempore, voluptate quas qui enim nisi inventore beatae architecto earum vel est! Odio, nulla. Deserunt blanditiis, consectetur explicabo quam aspernatur molestias placeat ab necessitatibus fugit nihil?",
    date: 18950406, // in ISO 8601 format
    popularity: 6,
  },
  {
    id: 7,
    thumbnail: item7,
    title: "Table Tennis",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores veritatis eos libero, rerum accusantium tempore, voluptate quas qui enim nisi inventore beatae architecto earum vel est! Odio, nulla. Deserunt blanditiis, consectetur explicabo quam aspernatur molestias placeat ab necessitatibus fugit nihil?",
    date: 20230408, // in ISO 8601 format
    popularity: 5,
  },
  {
    id: 8,
    thumbnail: item8,
    title: "Baseball",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores veritatis eos libero, rerum accusantium tempore, voluptate quas qui enim nisi inventore beatae architecto earum vel est! Odio, nulla. Deserunt blanditiis, consectetur explicabo quam aspernatur molestias placeat ab necessitatibus fugit nihil?",
    date: 18900406, // in ISO 8601 format
    popularity: 4,
  },
  {
    id: 9,
    thumbnail: item9,
    title: "Rugby",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores veritatis eos libero, rerum accusantium tempore, voluptate quas qui enim nisi inventore beatae architecto earum vel est! Odio, nulla. Deserunt blanditiis, consectetur explicabo quam aspernatur molestias placeat ab necessitatibus fugit nihil?",
    date: 18450406, // in ISO 8601 format
    popularity: 3,
  },
  {
    id: 10,
    thumbnail: item10,
    title: "American Football",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores veritatis eos libero, rerum accusantium tempore, voluptate quas qui enim nisi inventore beatae architecto earum vel est! Odio, nulla. Deserunt blanditiis, consectetur explicabo quam aspernatur molestias placeat ab necessitatibus fugit nihil?",
    date: 19040406, // in ISO 8601 format
    popularity: 2,
  },
  // add more items here
];

function App() {
  return (
    <div className="App">
      <ItemList items={items} />
    </div>
  );
}

export default App;

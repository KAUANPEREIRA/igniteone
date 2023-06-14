import { useState } from "react";
import styles from "../src/app.module.css";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./global.css";

function App() {
  const [count, setCount] = useState(0);
  const posts = [
    {
      id: 1,
      author: {
        name: "Kauan Pereira",
        avatarUrl: "https://github.com/KAUANPEREIRA.png",
        role: "Cto Web Developer",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa 👋" },
        {
          type: "paragraph",
          content:
            '"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz",',
        },

        {
          type: "paragraph",
          content:
            "no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        {
          type: "link",
          content: "👉 jane.design/doctorcare",
        },
      ],
      publishedAt: new Date("2023-07-06 20:00:00"),
    },
    {
      id: 2,
      author: {
        name: "Kauan Pereira",
        avatarUrl: "https://github.com/KAUANPEREIRA.png",
        role: "Cto Web Developer",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa 👋" },
        {
          type: "paragraph",
          content:
            '"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz",',
        },

        {
          type: "paragraph",
          content:
            "no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        {
          type: "link",
          content: "👉 jane.design/doctorcare",
        },
      ],
      publishedAt: new Date("2023-07-06 20:00:00"),
    },
  ];

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((item, index) => {
            return (
              <Post
                key={index}
                author={item.author}
                content={item?.content}
                publishedAt={item.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;

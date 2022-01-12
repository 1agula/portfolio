import { useState } from "react";
import "./index.scss";
import { FaStar, FaRegStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Skills() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      title: "開発スタック",
      desc: "MongoDB、Express.js、ReactJS、Node.jsのエンドツーエンド・スタックであるMERNスタックを勉強しました、アプリケーション全体で1つの言語を使用して開発を合理化できることがMERNを選択した理由です。",
      img: "assets/mern.png",
    },
    {
      id: "2",
      title: "フロントエンド",
      desc: "基本的な事は一通りできます。CSSフレームワークはbootstrap使いました。",
      skills: [
        {
          name: "HTML",
          star: [1, 1, 1, 1, 0],
        },
        {
          name: "CSS",
          star: [1, 1, 1, 0, 0],
        },
        {
          name: "JavaScript",
          star: [1, 1, 1, 1, 0],
        },
        {
          name: "React",
          star: [1, 1, 1, 1, 0],
        },
      ],
    },
    {
      id: "3",
      title: "バックエンド",
      desc: "Node.js、ExpressとMongoDBを使用してAPI開発できましたが、まだまだわからないことのほうが多いので完全理解できるように頑張ってます。",
      skills: [
        {
          name: "Node.js",
          star: [1, 1, 1, 0, 0],
        },
        {
          name: "Express",
          star: [1, 1, 1, 0, 0],
        },
        {
          name: "MongoDB",
          star: [1, 1, 1, 0, 0],
        },
      ],
    },
    {
      id: "4",
      title: "その他",
      desc: "Linuxは趣味の一つで、一時期普段用デスクトップとしてArch Linuxを使用してました。",
      skills: [
        {
          name: "Linux",
          star: [1, 1, 1, 0, 0],
        },
        {
          name: "Git",
          star: [1, 1, 1, 1, 0],
        },
        {
          name: "Postman",
          star: [1, 1, 1, 0, 0],
        },
      ],
    },
  ];
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="skills" id="skills">
      <h1>Skills</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => {
          return (
            <div key={d.id} className="container">
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                    <h2>{d.title}</h2>
                    <p>{d.desc}</p>
                    <a
                      href="https://github.com/sudopain"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Projects
                    </a>
                  </div>
                </div>

                <div className="right">
                  {d.img && <img src={d.img} alt="" />}
                  {d.skills?.map((skill) => {
                    return (
                      <p key={skill.name}>
                        {skill.name}:&nbsp;
                        {skill.star.map((s) => {
                          return s ? (
                            <FaStar key={Math.random()} />
                          ) : (
                            <FaRegStar key={Math.random()} />
                          );
                        })}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <FaArrowLeft
        onClick={() => {
          handleClick("left");
        }}
        className="arrow  left"
      />
      <FaArrowRight
        onClick={() => {
          handleClick();
        }}
        className="arrow right"
      />
    </div>
  );
}

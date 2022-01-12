import "./index.scss";
import { FaGithub, FaArrowRight } from "react-icons/fa";

export default function Works() {
  const data = [
    {
      id: 1,
      name: "Online Learning App",
      title: "MERN Stack",
      gitUrl: "https://github.com/sudopain/project7-client.git",
      demoUrl: "https://github.com/sudopain/project7-client.git",
      img: "assets/learning-icon.png",
      desc: "初めて作ったフルスタックプロジェクトです、履修登録システもをイメージして作りました、CSSフレームワークはBootStrapを使用しました。",
    },
    {
      id: 2,
      name: "Social Media App",
      title: "Full Stack",
      img: "assets/SNS-icon.png",
      gitUrl: "https://github.com/sudopain/social-media-app.git",
      demoUrl: "https://bocchi-social.website",
      desc: "Twitterを真似して作ってみたフルスタックプロジェクトです、データベースはMongoDB Atlasサービスの無料プランを使用してます。Chat機能で双方向通信ができるようにSocket.ioも利用してます、VPSサーバーでDeployしましたので、ご覧いただけると幸いです。",
      featured: true,
    },
    {
      id: 3,
      name: "Portfolio Website",
      title: "React App",
      img: "assets/portfolio-icon.png",
      gitUrl: "https://github.com/sudopain/portfolio.git",
      demoUrl: "https://github.com/sudopain/portfolio.git",
      desc: "こちらは本サイトになります、ReactとSassを使用したシングルページサイトです、レスポンシブデザインと軽くスクロールするだけでページを変えられるとこがこだわりポイントです。",
    },
  ];
  return (
    <div className="works" id="works">
      <h1>Works</h1>
      <div className="container">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className={item.featured ? "card featured" : "card"}
            >
              <div className="top">
                <a
                  href={item.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="left"
                >
                  <FaArrowRight />
                </a>
                <img className="user" src={item.img} alt="testimonial" />
                <a
                  href={item.gitUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="right"
                >
                  <FaGithub />
                </a>
              </div>
              <div className="center">{item.desc}</div>
              <div className="bottom">
                <h3>{item.name}</h3>
                <h4>{item.title}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

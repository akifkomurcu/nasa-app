import { useQuery } from "react-query";
import { todaysPicture } from "../../api";
import { Link } from "react-router-dom";
import style from "./content.module.css";
function Content() {
  const { isLoading, error, data } = useQuery("repoData", todaysPicture);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const res = {
    date: data.date,
    explanation: data.explanation,
    hdurl: data.hdurl,
    title: data.title,
  };
  return (
    <>
      {data ? (
        <section className={style.layout}>
          <div className={style.sidebar}>
            <div className={style.pictureArea}>
              <a href={res.hdurl} target="_blank">
                <img className={style.pic} src={res.hdurl} />
              </a>
            </div>
          </div>
          <div className={style.body}>
            <div className={style.info}>
              <h1>{res.title}</h1>
              <p>{res.explanation}</p>
            </div>
          </div>
        </section>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default Content;

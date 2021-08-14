import posterImg from "../asserts/img/poster.jpg";

function Poster() {
  return (
    <section className="poster-section">
      <div className="poster">
        <img src={posterImg} alt="poster" />
      </div>
      <div></div>
    </section>
  );
}

export default Poster;

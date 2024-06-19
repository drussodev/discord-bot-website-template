import Link from "next/link";

const JoinNow = () => {
  return (
    <>
      <section className="joinUs">
        <div className="h-color joinUs-header">
          <h3>Entra agora no nosso servidor!</h3>
        </div>
        <div className="joinUs-para p-color">
          Convida o nosso bot para o teu servidor!{" "}
        </div>
        <button className="btn">
          <Link className="h-color no-decoration" href="#">
            Convidar agora!
          </Link>
        </button>
      </section>
    </>
  );
};

export default JoinNow;

import Link from "next/link";
import Image from "next/image";
import botOnlineStatus from "../utils/images/botStatus.svg";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer className="footer">
        <div className="footer-sec1">
          <div className="footer-header">
            <ul>
              <li>
                <Link className="h-color" href="/">
                  drussodev.gg
                </Link>
                <span
                  style={{
                    fontSize: "12px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  className="p-color"
                >
                  <Image
                    src={botOnlineStatus}
                    width={20}
                    height={20}
                    alt="online-status"
                    className="onlineStatus"
                  />{" "}
                  Este Bot está Online e Funcional!
                </span>
              </li>
            </ul>
          </div>
          <div className="footer-items">
            <ul>
              <li>
                <Link className="p-color" href="/commands">
                  /comandos
                </Link>
              </li>
              <li>
                <Link className="p-color" href="#">
                  /suporte
                </Link>
              </li>
              <li>
                <Link className="p-color" href="#">
                  /servidor-discord
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-sec2">
          <hr />
          <div>
            <p className="p-color">
              Criado com ❤️ por{" "}
              <Link
                href=""
                className="h-color no-decoration"
              >
                DRusso
              </Link>
            </p>
            <p className="p-color">{year} &copy; Todos os direitos reservadosd!</p>
          </div>
          <div className="footer-sec2-link">
            <Link className="p-color no-decoration" href="#">
              /suporte
            </Link>
            <Link
              target="_blank"
              className="p-color no-decoration"
              href="https://github.com/preetsuthar17/discord-bot-website-template"
            >
              /codigo-fonte
            </Link>
            <Link className="p-color no-decoration" href="#">
              /prica
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

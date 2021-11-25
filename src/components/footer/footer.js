import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social">
        <FaFacebookSquare />
        <FaInstagramSquare />
        <FaTwitterSquare />
        <FaYoutubeSquare />
      </div>
      <div className="cred"><p>© 2021 Origin. Os jogos são propriedade de seus respectivos donos.</p></div>
    </div>
  );
};
export default Footer;

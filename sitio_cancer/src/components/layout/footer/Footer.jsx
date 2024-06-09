import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="min-h-12 bg-slate-300 flex justify-center items-center gap-8">
      <a href="" className="size-6">
        <FontAwesomeIcon icon={faWhatsapp} className="w-100% h-100%" />
      </a>
      <a href="" className="size-6 ">
        <FontAwesomeIcon icon={faInstagram} className="w-100% h-100%" />
      </a>
      <a href="" className="size-6 ">
        <FontAwesomeIcon icon={faEnvelope} className="w-100% h-100%" />
      </a>
    </div>
  );
};

export default Footer;

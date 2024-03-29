import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
} from "react-icons/fa";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-pink-custom text-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Logo */}
        {/* <div className="mb-6 md:mb-0">
          <img src="/logo.png" alt="Logo" className="w-16 h-16" />
        </div> */}
        <div className="text-xl font-bold">
          <Link href="/" aria-label="Go to the homepage">
            <img
              src="/logo.png"
              className="object-contain h-28 w-auto"
              alt="Logo"
              loading="lazy"
            />
          </Link>
        </div>
        {/* Links, Redes Sociais, Informações e Pagamentos */}
        <div className="flex flex-col md:flex-row md:ml-16 gap-8">
          {/* Links Section */}
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-bold mb-2">Links</h4>
            <ul>
              <li>
                <a href="#" aria-label="Go to the homepage">
                  Página Inicial
                </a>
              </li>
              <li>
                <a href="#" aria-label="Go to the homepage">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#" aria-label="Go to the homepage">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="# " aria-label="Go to the homepage">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-bold mb-2">Redes Sociais</h4>
            <ul>
              <li>
                <a
                  href="#"
                  aria-label="Go to the facebook page"
                  className="flex items-center"
                >
                  <FaFacebook className="mr-2" /> Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-label="Go to the  twitter page"
                  className="flex items-center"
                >
                  <FaTwitter className="mr-2" /> Twitter
                </a>
              </li>
              <li>
                <a href="#" aria-label="Go to the instagram page">
                  <FaInstagram className="mr-2" /> Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Information Section */}
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-bold mb-2">Informações</h4>
            <ul>
              <li>
                <a href="#">Política de Privacidade</a>
              </li>
              <li>
                <a href="#">Termos de Serviço</a>
              </li>
              <li>
                <a href="#">Pagamentos Aceitos</a>
              </li>
            </ul>
          </div>

          {/* Payment Section */}
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-bold mb-2">Pagamentos</h4>
            <ul>
              <li>
                <a href="#" className="flex items-center">
                  <FaCcVisa className="text-2xl mr-2" />
                  Visa
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center">
                  <FaCcMastercard className="text-2xl mr-2" /> Mastercard
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center">
                  <FaCcAmex className="text-2xl mr-2" /> Amex
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact and Address Section */}
      <div className="mt-8 border-t border-gray-600 pt-6 text-center">
        <p>
          <AiOutlineMail className="inline-block mr-2" />{" "}
          contato@planetadascanetas.com
        </p>
        <p>
          <AiOutlinePhone className="inline-block mr-2" /> (123) 456-7890
        </p>
        <p>Endereço: Rua XYZ, 123</p>
      </div>
    </footer>
  );
};

export default Footer;

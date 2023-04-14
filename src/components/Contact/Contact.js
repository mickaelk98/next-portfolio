import { BsGithub, BsLinkedin, BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";

export default function Conatct() {
  return (
    <section className="bg-darkSecondary text-darkText text-lg h-screen flex items-center justify-center">
      <div className="px-2 max-w-7xl mx-auto">
        <div className="w-full flex flex-col lg:flex-row lg:items-start lg:justify-center gap-5">
          <div className="text-left mb-10 lg:max-w-[300px]">
            <h2 className="text-darkHeading text-3xl uppercase mb-5 lg:mb-20">
              Contact
            </h2>
            <p className="ml-4 mb-4 lg:ml-0 lg:mb-10">
              N&apos;hésitez pas à me contacter, je vous répondrai le plus tôt
              possible.
            </p>
            <p className="mb-4 ml-4 flex gap-3 lg:ml-0">
              <BsFillTelephoneFill /> 06 23 76 91 51
            </p>
            <p className="mb-4 ml-4 flex gap-3 lg:ml-0 lg:mb-20">
              <AiFillMail /> keitamickaelpro@gmail.com
            </p>
            <ul className="ml-4 mt-10 text-2xl text-darkHeading flex items-center justify-center lg:justify-evenly gap-5">
              <li className="cursor-pointer hover:scale-110">
                <BsGithub />
              </li>
              <li className="cursor-pointer hover:scale-110">
                <BsLinkedin />
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center w-full lg:max-w-[400px]">
            <form className="w-full max-w-[400px] bg-darkTertiary rounded-md p-5 flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Votre Nom</label>
                <input
                  className="outline-none p-1 text-darkSecondary"
                  type="text"
                  id="name"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email">Votre Email</label>
                <input
                  className="outline-none p-1 text-darkSecondary"
                  type="email"
                  id="email"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message">Votre message</label>
                <textarea
                  className="outline-none p-1 h-40 resize-none text-darkSecondary"
                  name=""
                  id="message"
                ></textarea>
              </div>
              <button className="bg-darkAccent hover:bg-darkAccent/70 transition-all duration-300 uppercase text-darkHeading p-2">
                envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

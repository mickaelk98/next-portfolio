import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { send } from "@emailjs/browser";
import { BsGithub, BsLinkedin, BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail, AiFillCheckCircle } from "react-icons/ai";
import { useState } from "react";
import Header from "@/components/Header/Header";
import SocialNetWork from "@/components/SocialNetwork/SocialNetWork";

export default function Conatct() {
  const [isLoading, setIsLoading] = useState(false);
  const [messageHasBeenSent, setMessagehasBeenSent] = useState(false);

  const schema = yup.object({
    name: yup
      .string()
      .required("Ce champ est obligatoire")
      .matches(
        /^([a-zéèà]+(( |')[a-zéèà]+)*)+([-]([a-zéèà]+(( |')[a-zéèà]+)*)+)*$/,
        "Vous devez mettre un nom"
      ),
    email: yup
      .string()
      .required("Ce champ est obligatoire")
      .email("Votre saisie ne correspond pas a une adresse email"),
    subject: yup
      .string()
      .required("Ce champ est obligatoire")
      .max(30, "votre sujet est trop long"),
    message: yup
      .string()
      .required("Ce champ est obligatoire")
      .max(1000, "votre message ne doit pas depasser 1000 caractères"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    resolver: yupResolver(schema),
  });

  const sendMessage = async (formValue) => {
    try {
      setIsLoading(true);
      console.log(formValue);
      const templateParams = {
        name: formValue.name,
        email: formValue.email,
        subject: formValue.subject,
        message: formValue.message,
      };

      const templateID = "template_s55k1eg";
      const serviceID = "service_nkh4tr2";
      const publicKey = `${process.env.NEXT_PUBLIC_EMAILJS_PUBLICKEY}`;

      const result = await send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      if (result.status === 200) {
        reset();
        setIsLoading(false);
        setMessagehasBeenSent(true);
        setTimeout(() => {
          setMessagehasBeenSent(false);
        }, 3000);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Header />
      <section
        id="contact"
        className="text-text text-lg py-10 min-h-[calc(100vh_-_68px)] flex flex-col items-center justify-center lg:justify-around"
      >
        {messageHasBeenSent && (
          <div className="flex items-center justify-center w-full">
            <div className="flex items-center gap-5 bg-success text-secondary w-11/12 max-w-xs pl-2 py-2 rounded-md">
              <AiFillCheckCircle /> Votre message a bien été envoyé.
            </div>
          </div>
        )}
        <div className="px-2 max-w-7xl mx-auto">
          <div className="w-ful flex flex-col lg:flex-row lg:items-start lg:justify-center gap-5">
            <div className="text-left px-4 mb-10 w-11/12 lg:max-w-[600px]">
              <h2 className="text-heading text-3xl uppercase mb-5 lg:mb-20">
                Contact
              </h2>
              <p className="mb-4 lg:mb-10">
                N&apos;hésitez pas à me contacter, je vous répondrai le plus tôt
                possible.
              </p>
              <p className="mb-4 flex gap-3 lg:ml-0">
                <BsFillTelephoneFill /> 06 23 76 91 51
              </p>
              <p className="mb-4 flex gap-3 lg:ml-0 lg:mb-20">
                <AiFillMail /> keitamickaelpro@gmail.com
              </p>
              <SocialNetWork />
              {/* <ul className="mt-10 text-2xl text-heading flex items-center justify-center lg:justify-evenly gap-5">
                <li className="cursor-pointer hover:scale-110">
                  <a href="https://github.com/mickaelk98" target="_blank">
                    <BsGithub />
                  </a>
                </li>
                <li className="cursor-pointer hover:scale-110">
                  <a
                    href="https://www.linkedin.com/in/mickael-keita/"
                    target="_blank"
                  >
                    <BsLinkedin />
                  </a>
                </li>
              </ul> */}
            </div>
            <div className="flex items-center justify-center w-full lg:max-w-[600px]">
              <form
                className="w-11/12 max-w-[600px] bg-primary rounded-md p-5 flex flex-col gap-8"
                onSubmit={handleSubmit(sendMessage)}
              >
                <div className="flex flex-col gap-2">
                  <input
                    {...register("name")}
                    className={`outline-none p-2 text-text border border-tertiary rounded-md ${
                      errors.name ? "border border-error" : ""
                    }`}
                    type="text"
                    placeholder="votre nom"
                  />
                  {errors.name && (
                    <small className="text-error text-lg text-center">
                      {errors.name.message}
                    </small>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <input
                    {...register("email")}
                    className={`outline-none p-2 text-text border border-tertiary rounded-md ${
                      errors.email ? "border border-error" : ""
                    }`}
                    type="email"
                    placeholder="votre email"
                  />
                  {errors.email && (
                    <small className="text-error text-lg text-center">
                      {errors.email.message}
                    </small>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <input
                    {...register("subject")}
                    className={`outline-none p-2 text-text border border-tertiary rounded-md ${
                      errors.subject ? "border border-error" : ""
                    }`}
                    type="text"
                    placeholder="Le sujet de votre message"
                  />
                  {errors.subject && (
                    <small className="text-error text-lg text-center">
                      {errors.subject.message}
                    </small>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <textarea
                    {...register("message")}
                    className={`outline-none p-2 h-40 resize-none text-text border border-tertiary rounded-md ${
                      errors.message ? "border border-error" : ""
                    }`}
                    placeholder="votre message"
                  ></textarea>
                  {errors.message && (
                    <small className="text-error text-lg text-center">
                      {errors.message.message}
                    </small>
                  )}
                </div>

                {isLoading ? (
                  <button
                    className="bg-accent/50 transition-all rounded-md duration-300 uppercase text-heading p-2 flex items-center justify-center gap-5"
                    disabled
                  >
                    <div className="w-5 h-5 border-2 border-l-0 border-white rounded-full animate-spin"></div>
                  </button>
                ) : (
                  <button className="bg-accent rounded-md  hover:bg-accent/70 transition-all duration-300 uppercase text-heading p-2">
                    Envoyer
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

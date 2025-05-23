"use client";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Button } from "../button";
import { SectionTitle } from "../pages/home/section-title";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { motion } from 'framer-motion';
import { fadeUpAnimation } from "@/app/lib/animations";

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(100),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const ContactForm = () => {
  const { handleSubmit, register, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await fetch("https://formsubmit.co/ottogugel99@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...data,
          _captcha: "false",
        }),
      });

      reset(); // limpa o formulário
      toast.success("Mensagem enviada com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast.error("Ocorreu um erro ao enviar. Tente novamente.");
    }
  };

  return (
    <section
      id="contact"
      className="py-16 px-6 md:py-32 flex items-center jsutify-center bg-gray-950"
    >
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitle
          subtitle="contact"
          title="Get in touch!"
          className="items-center text-center"
        />

        <motion.form
          className="mt-12 w-full flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
          {...fadeUpAnimation}
        >
          <input
            placeholder="Name"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-blue-600"
            {...register("name")}
            required
          />
          <input
            placeholder="Email"
            type="email"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-blue-600"
            {...register("email")}
            required
          />
          <textarea
            placeholder="Message"
            className="resize-none w-full h-[138px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-blue-600"
            maxLength={500}
            {...register("message")}
            required
          />

          <Button className="w-max mx-auto mt-6 shadow-button">
            Send <HiArrowNarrowRight size={18} />
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

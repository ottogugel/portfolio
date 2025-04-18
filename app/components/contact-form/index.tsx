'use client'
import { HiArrowNarrowRight } from "react-icons/hi";
import { Button } from "../button";
import { SectionTitle } from "../pages/home/section-title"
import { useForm } from 'react-hook-form'
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(100),
});

type ContactFormData = z.infer<typeof contactFormSchema>

export const ContactForm = () => {

  const { handleSubmit, register } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
  };


  return (
    <section id="contact" className="py-16 px-6 md:py-32 flex items-center jsutify-center bg-gray-950">
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitle
          subtitle="contact"
          title="Get in touch!"
          className="items-center text-center"
        />

        <form
          className="mt-12 w-full flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            placeholder="Name"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-blue-600"
            {...register("name")}
            required={true}
          />
          <input
            placeholder="Email"
            type="email"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-blue-600"
            {...register("email")}
            required={true}
          />
          <textarea
            placeholder="Message"
            className="resize-none w-full h-[138px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-blue-600"
            maxLength={500}
            {...register("message")}
            required={true}
          />

          <Button className="w-max mx-auto mt-6 shadow-button">
            Send <HiArrowNarrowRight size={18} />
          </Button>
        </form>
      </div>
    </section>
  );
}
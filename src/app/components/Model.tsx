"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

interface Props {
  close: () => void;
}

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

type FormData = z.infer<typeof schema>;

const Model = ({ close }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      onClick={close}
      className="w-screen h-screen bg-black bg-opacity-70 flex justify-center items-center  fixed top-0 left-0 z-10"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        onClick={(e) => e.stopPropagation()}
        className="w-[80%] max-w-xl mx-auto flex flex-col gap-4 relative z-20"
      >
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full flex flex-col">
            <input
              {...register("name")}
              className="w-full rounded-md px-3 py-4 bg-primary-100 focus:outline-none placeholder:text-neutral-500 placeholder:font-light"
              type="text"
              placeholder="Name"
            />
            {errors.name && (
              <div className="text-red-500">{errors.name.message}</div>
            )}
          </div>
          {/*--- END NAME INPUTFIELD ---*/}
          <div className="w-full flex flex-col">
            <input
              {...register("email")}
              className="w-full rounded-md px-3 py-4 bg-primary-100 focus:outline-none placeholder:text-neutral-500 placeholder:font-light"
              type="text"
              placeholder="Email"
            />
            {errors.email && (
              <div className="text-red-500">{errors.email.message}</div>
            )}
          </div>
          {/*--- END EMAIL INPUTFIELD ---*/}
        </div>
        <textarea
          {...register("message", {
            required: true,
          })}
          className="w-full rounded-md px-3 py-4 bg-primary-100 focus:outline-none placeholder:text-neutral-500 placeholder:font-light"
          placeholder="Message"
          rows={7}
        />
        {/*--- END MESSAGE INPUTFIELD ---*/}
        <button
          disabled={isSubmitting}
          type="submit"
          className="w-full bg-primary-200 rounded-md px-3 py-4 text-primary-100 font-semiboldrounded-lg hover:bg-opacity-80"
        >
          {isSubmitting ? "loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Model;

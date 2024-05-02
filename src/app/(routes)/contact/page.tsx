"use client";
import Model from "@/app/components/Model";
import Image from "next/image";
import { useState } from "react";

export default function ContactPage() {
  const [open, setOpen] = useState(false);

  const close = () => {
    setOpen(false);
  };

  return (
    <main className="min-h-fit w-screen pt-[100px] lg:pt-0 relative">
      <div className="h-screen w-full flex flex-col lg:flex-row">
        <div className="h-fit w-full lg:w-1/2 lg:h-screen p-[32px] md:p-[48px] lg:p-[80px] flex flex-col lg:justify-end gap-[64px]">
          <div>
            <h2 className="text-4xl lg:text-5xl uppercase">get in touch</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-[48px]">
            <section className="flex flex-col gap-10 lg:justify-between">
              <h5 className="lg:max-w-[350px] uppercase">
                unquiring about an architectural design?
              </h5>
              <p
                onClick={() => setOpen(!open)}
                className="underline hover:cursor-pointer"
              >
                Send us a message
              </p>
            </section>
            <section className="flex flex-col gap-[16px] max-w-[200px]">
              <h6 className="uppercase">details</h6>
              <address>
                Daedalus Architects 987 Framer St. Austin, Texas
              </address>
              <p>
                architect@daedalus.com <br />
                (123) 456-7890
              </p>
            </section>
          </div>
        </div>
        <div className="grow w-full h-full lg:w-1/2 lg:h-screen relative">
          <Image
            className="object-cover"
            src="/images/Contact-page/image.webp"
            alt="gallery"
            fill
          />
        </div>
      </div>
      {open && <Model close={close} />}
    </main>
  );
}

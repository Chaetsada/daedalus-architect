import Footer from "@/app/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="pt-[100px] ">
      <div className="  px-[32px] py-[60px] md:px-[48px] md:py-[80px] lg:p-[80px] ">
        <div className=" max-w-[1120px] mx-auto flex flex-col gap-[48px]">
          <header>
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-8xl">BLOG</h1>
            </div>
          </header>
          {/*--- END HEADER ---*/}
          <section>
            <div className="h-fit flex flex-col gap-[48px]">
              <div className="flex flex-col gap-5 lg:flex-row">
                <div className="w-full h-[360px] md:h-[500px] lg:h-[672px] group">
                  <Link
                    href="/blog/architectural-marvels-you-must-visit-before-you-die"
                    className="w-full h-full"
                  >
                    <div className="w-full h-full flex flex-col gap-3 justify-between">
                      <div className="h-[250px] md:h-[412px] lg:h-[580px] w-full relative overflow-hidden">
                        <Image
                          className="object-cover transition-all duration-150 group-hover:scale-110"
                          src="https://framerusercontent.com/images/DjZiO6sYfi6SMzZ9jtkf67gIrs.jpg"
                          alt="architect marvels you must see"
                          fill
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-secondary-300 ">
                          ARCHITECTURE
                        </p>
                        <p className="text-xs text-secondary-300 ">
                          JUNE 1, 2023
                        </p>
                      </div>
                      <div>
                        <h6>
                          ARCHITECTURAL MARVELS YOU MUST VISIT BEFORE YOU DIE
                        </h6>
                      </div>
                      <div className="h-[2px] bg-secondary-200 w-full" />
                    </div>
                  </Link>
                </div>
                {/*--- END HIGHLIGHT BLOG ---*/}
                <div className="flex flex-col gap-5 md:flex-row lg:flex-col lg:justify-between">
                  <div className="w-full h-[360px] lg:h-[320px] group">
                    <Link
                      href="/blog/frank-lloyd-wright-a-master-of-architectural-design"
                      className="w-full h-full"
                    >
                      <div className="flex flex-col gap-3 justify-between">
                        <div className="h-[250px] lg:h-[210px]  w-full relative overflow-hidden">
                          <Image
                            className="object-cover transition-all duration-150 group-hover:scale-110"
                            src="https://framerusercontent.com/images/RT5OxlXPQlsAtMAYdNQpAJSXoM.jpg"
                            alt="legend architect design"
                            fill
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-xs text-secondary-300 ">PEOPLE</p>
                          <p className="text-xs text-secondary-300 ">
                            MAY 1, 2023
                          </p>
                        </div>
                        <div>
                          <h6>
                            FRANK LLOYD WRIGHT: A LEGEND OF ARCHITECTURAL DESIGN
                          </h6>
                        </div>
                        <div className="h-[2px] bg-secondary-200 w-full" />
                      </div>
                    </Link>
                  </div>
                  <div className="w-full h-[360px] lg:h-[320px] group">
                    <Link
                      href="/blog/exploring-the-masterminds-of-architecture"
                      className="w-full h-full"
                    >
                      <div className="w-full h-full flex flex-col gap-3 justify-between">
                        <div className="h-[250px] lg:h-[210px] w-full relative overflow-hidden">
                          <Image
                            className="object-cover transition-all duration-150 group-hover:scale-110"
                            src="https://framerusercontent.com/images/hNk0Qlxl8RdLpzJoFDvoZBVwh0.jpg"
                            alt="EXPLORING THE MASTERMINDS OF ARCHITECTURE"
                            fill
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-xs text-secondary-300 ">
                            ARCHITECTURE
                          </p>
                          <p className="text-xs text-secondary-300 ">
                            JUNE 1, 2023
                          </p>
                        </div>
                        <div>
                          <h6>EXPLORING THE MASTERMINDS OF ARCHITECTURE</h6>
                        </div>
                        <div className="h-[2px] bg-secondary-200 w-full" />
                      </div>
                    </Link>
                  </div>
                </div>
                {/*--- END ASIDE BLOG ---*/}
              </div>
              <div className="min-h-fit flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="w-full h-[360px] lg:h-[320px] group">
                  <Link
                    href="/blog/dubai-s-architecture-a-fusion-of-innovation-and-extravagance"
                    className="w-full h-full"
                  >
                    <div className="flex flex-col gap-3 justify-between">
                      <div className="h-[250px] lg:h-[210px]  w-full relative overflow-hidden">
                        <Image
                          className="object-cover transition-all duration-150 group-hover:scale-110"
                          src="https://framerusercontent.com/images/FuxqS6dz5BTv8ujQ9HV2DNC2s4s.jpg"
                          alt="DUBAI'S ARCHITECTURE: A FUSION OF INNOVATION AND EXTRAVAGANCE"
                          fill
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-secondary-300 ">
                          ARCHITECTURE
                        </p>
                        <p className="text-xs text-secondary-300 ">
                          MARCH 1, 2023
                        </p>
                      </div>
                      <div>
                        <h6>
                          DUBAI'S ARCHITECTURE: A FUSION OF INNOVATION AND
                          EXTRAVAGANCE
                        </h6>
                      </div>
                      <div className="h-[2px] bg-secondary-200 w-full" />
                    </div>
                  </Link>
                </div>
                {/*--- END BOTTOM BLOG #1 ---*/}
                <div className="w-full h-[360px] lg:h-[320px] group">
                  <Link
                    href="/blog/architectural-marvels-you-must-visit-before-you-die"
                    className="w-full h-full"
                  >
                    <div className="flex flex-col gap-3 justify-between">
                      <div className="h-[250px] lg:h-[210px]  w-full relative overflow-hidden">
                        <Image
                          className="object-cover transition-all duration-150 group-hover:scale-110"
                          src="https://framerusercontent.com/images/UjCFmcOF4jexCKsC90kQqrjY0.jpg"
                          alt="SUSTAINABLE AND ENVIRONMENTAL ARCHITECTURAL DESIGN: SHAPING A GREENER FUTURE"
                          fill
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-secondary-300 ">PEOPLE</p>
                        <p className="text-xs text-secondary-300 ">
                          APRIL 1, 2023
                        </p>
                      </div>
                      <div>
                        <h6>
                          SUSTAINABLE AND ENVIRONMENTAL ARCHITECTURAL DESIGN
                        </h6>
                      </div>
                      <div className="h-[2px] bg-secondary-200 w-full" />
                    </div>
                  </Link>
                </div>
                {/*--- END BOTTOM BLOG #2 ---*/}
                <div className="w-full h-[360px] lg:h-[320px] group">
                  <Link
                    href="/blog/architectural-marvels-you-must-visit-before-you-die"
                    className="w-full h-full"
                  >
                    <div className="flex flex-col gap-3 justify-between">
                      <div className="h-[250px] lg:h-[210px]  w-full relative overflow-hidden">
                        <Image
                          className="object-cover transition-all duration-150 group-hover:scale-110"
                          src="https://framerusercontent.com/images/mv9LPUyVFfoQGKzS057Nx1iCYB4.jpg"
                          alt="DISCOVERING THE TIMELESS BEAUTY OF JAPANESE ARCHITECTURAL DESIGN"
                          fill
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-secondary-300 ">
                          ARCHITECTURE
                        </p>
                        <p className="text-xs text-secondary-300 ">
                          JANUARY 1, 2023
                        </p>
                      </div>
                      <div>
                        <h6>
                          DISCOVERING THE TIMELESS BEAUTY OF JAPANESE
                          ARCHITECTURAL DESIGN
                        </h6>
                      </div>
                      <div className="h-[2px] bg-secondary-200 w-full" />
                    </div>
                  </Link>
                </div>
                {/*--- END BOTTOM BLOG #3 ---*/}
              </div>
            </div>
          </section>
          {/*--- END BLOG SECTION ---*/}
          <div className="w-full h-[280px] p-[24px] flex items-end justify-center hover:cursor-pointer group">
            <div className="size-[120px] rounded-full border-[2px] border-secondary-200 relative transition-all duration-300 group-hover:border-primary-200">
              <div className="absolute left-1/2 -translate-x-1/2 bottom-1/2 flex flex-col items-center gap-3">
                <p className="text-nowrap">LOAD MORE</p>
                <div className="h-[100px] w-[2px] bg-primary-200"/>
              </div>
            </div>
          </div>
          {/*--- END FOOTER LINK ---*/}
        </div>
      </div>
      <Footer />
    </main>
  );
}

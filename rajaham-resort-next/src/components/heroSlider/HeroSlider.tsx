import styles from "../../../public/styles/styles";
import IMG1 from "../../../public/assets/dds.jpg";
import Image from "next/image";

export const HeroSlider = () => {
  const text_gradient =
    "bg-gradient-to-br from-teal-100 via-teal-200 to-teal-500 text-transparent bg-clip-text";

  return (
    <section
      id="home"
      className="relative flex flex-col justify-center items-center w-full h-screen"
    >
      <div className="absolute inset-0 w-full h-full">
        <Image src={IMG1} alt="Hero Image" layout="fill" objectFit="cover" />
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white space-y-6">
        <h1 className="font-poppins font-semibold text-[72px] md:text-[92px] leading-[100px]">
          The Next <br className="sm:block hidden" />
          <span className={`${text_gradient}`}>Generation</span>
        </h1>
        <h2 className="font-poppins font-semibold text-[52px] md:text-[68px] leading-[75px]">
          Payment Method.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
        <a
          href="rooms"
          className="bg-blue-600 text-white py-3 px-6 rounded-full text-lg font-semibold mt-6 hover:bg-blue-700 transition-all"
        >
          See Our Rooms
        </a>
      </div>
    </section>
  );
};

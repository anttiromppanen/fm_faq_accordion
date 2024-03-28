import Accordion from "./Accordion";
import starIcon from "../assets/images/icon-star.svg";

function Card() {
  return (
    <section
      className="
      mx-auto mt-32 max-w-[600px] rounded-lg bg-userWhite px-6 py-8 shadow-2xl shadow-purple-950/10
      md:mt-40 md:px-10 md:py-14
      "
    >
      <div className="flex items-center gap-x-8">
        <img src={starIcon} alt="" className="h-6 w-6 md:h-11 md:w-11" />
        <h1 className="text-4xl font-bold text-userDarkPurple md:text-6xl">
          FAQs
        </h1>
      </div>
      <Accordion
        buttonText="What is Frontend Mentor, and how will it help me?"
        bodyText="Frontend Mentor offers realistic coding challenges to help developers improve their 
        frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
        all levels and ideal for portfolio building."
      />
      <Accordion
        buttonText="Is Frontend Mentor free?"
        bodyText="Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
        option providing access to a range of projects suitable for all skill levels."
      />
      <Accordion
        buttonText="Can I use Frontend Mentor projects in my portfolio?"
        bodyText="Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
        way to showcase your skills to potential employers!"
      />
      <Accordion
        buttonText="How can I get help if I'm stuck on a Frontend Mentor challenge?"
        bodyText="The best place to get help is inside Frontend Mentor's Discord community. There's a help 
        channel where you can ask questions and seek support from other community members."
      />
    </section>
  );
}

export default Card;

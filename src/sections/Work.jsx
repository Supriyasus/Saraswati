"use client";

import React from "react";
import { Carousel, Card } from "../components/apple-cards-carousel";

const data = [
  {
    category: "Automobile",
    title: "Hero MotoCorp",
    src: "/work/hero.jpg",
    link: "https://www.hero.com/",
    content: <p>Authorized Hero dealership delivering trusted mobility solutions.</p>,
  },
  {
    category: "Automobile",
    title: "Maruti Suzuki Arena",
    src: "/work/maruti.webp",
    link: "https://www.marutisuzuki.com/",
    content: <p>Providing India’s most trusted cars with certified service support.</p>,
  },
  {
    category: "Premium Auto",
    title: "Nexa Experience",
    src: "/work/nexa.jpg",
    link: "https://www.nexaexperience.com/",
    content: <p>Premium car buying experience with luxury showroom standards.</p>,
  },
  {
    category: "Training",
    title: "Driving School",
    src: "/work/msds.jpg",
    link: "https://www.msdsindia.com/",
    content: <p>Professional driving education with certified instructors.</p>,
  },
  {
    category: "Pre-Owned",
    title: "TrueValue",
    src: "/work/truevalue.jpg",
    link: "https://www.truevalue.com/",
    content: <p>Certified pre-owned vehicles with reliability assurance.</p>,
  },
  {
    category: "Commercial",
    title: "Maruti Suzuki Commercial",
    src: "/work/maruti-commercial.jpg",
    link: "https://www.marutisuzuki.com/commercial-vehicles",
    content: <p>Certified pre-owned commercial vehicles with reliability assurance.</p>,
  },
  {
    category: "Hospitality",
    title: "Holiday Inn (Upcoming)",
    src: "/work/holidayinn.jpg",
    link: "https://www.holidayinn.com/",
    content: <p>Expanding into hospitality with global standard experiences.</p>,
  },
  {
    category: "Service Centers",
    title: "Service Centers for All Brands",
    src: "/work/service-centers.jpg",
    link: "#",
    content: <p>Trusted service centers offering certified maintenance and repair services.</p>,
  },
];

export default function Work() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section className="w-full py-24">

      <h2 className="max-w-7xl mx-auto text-center text-4xl md:text-6xl font-bold mb-6">
        WHAT WE DO
      </h2>

      <p className="text-center text-xl max-w-6xl mx-auto mb-16 text-gray-700">
        We bring together trusted brands and industries into one unified ecosystem,
        delivering value that moves people, businesses, and possibilities forward.
      </p>

      <Carousel items={cards} />

    </section>
  );
}
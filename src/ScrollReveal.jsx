import React from "react";
import "./ScrollReveal.css";

const ScrollReveal = () => {
  const sections = [
    {
      title: "Building the Future",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "Launching Big Ideas",
      image:
        "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "Scroll to Reveal",
      image:
        "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "Next-Gen Innovation",
      image:
        "https://images.unsplash.com/photo-1605902711622-cfb43c44367f?auto=format&fit=crop&w=1400&q=80",
    },
  ];

  return (
    <main>
      {sections.map((section, index) => (
        <section key={index} style={{ backgroundImage: `url(${section.image})` }}>
          <div className="timeline-mask"></div>
          <div className="content">{section.title}</div>
        </section>
      ))}
    </main>
  );
};

export default ScrollReveal;

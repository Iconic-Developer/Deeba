import React, { useState } from "react";
import "./Celebration.css";


    const officeImage = [
  {
    id: 1,
    type: "image",
    image: "/office/office_1.avif",
    category: "Workspace",
    title: "Where Ideas Come to Life",
    description: "A modern workspace designed to inspire creativity and productivity.",
  },
  {
    id: 2,
    type: "image",
    image: "/office/office_2.avif",
    category: "Meeting Rooms",
    title: "Collaboration in Action",
    description: "Bringing people together to share ideas and achieve great things.",
  },
  {
    id: 3,
    type: "image",
    image: "/office/office_3.avif",
    category: "Office Interiors",
    title: "Designed for Excellence",
    description: "Thoughtfully designed interiors that make every workday better.",
  },
  {
    id: 4,
    type: "image",
    image: "/office/office_4.avif",
    category: "Team Spaces",
    title: "Better Together",
    description: "Creating an environment where teamwork and innovation thrive.",
  },
  {
    id: 5,
    type: "image",
    image: "/office/office_5.avif",
    category: "Work Environment",
    title: "A Place to Grow",
    description: "A welcoming atmosphere that supports learning and professional growth.",
  },
  {
    id: 6,
    type: "video",
    image: "/office/intro.mp4",
    category: "Office Facilities",
    title: "Comfort Meets Productivity",
    description: "Facilities designed to support comfort, focus, and everyday efficiency.",
  },
  {
    id: 7,
    type: "image",
    image: "/office/office_7.avif",
    category: "Collaborative Spaces",
    title: "Ideas Without Limits",
    description: "Open spaces that encourage communication, creativity, and fresh thinking.",
  },
  {
    id: 8,
    type: "image",
    image: "/office/office_8.avif",
    category: "Office Culture",
    title: "More Than a Workplace",
    description: "A positive environment where people connect, contribute, and thrive.",
  },

];
  


const categories = [
  "All",
  "Celebrations",
  "Festivals",
  "Birthday",
  "Achievements",
];

export default function Celebrations() {


  return (
    <section className="celebrations-section" id="celebrations">
      <div className="celebrations-container">

        {/* Heading */}
        <div className="celebrations-heading">

         <div className="section-label">
  <span></span>
  LIFE AT DEEBA
</div>



<p>
  Discover our workspaces, modern facilities, and collaborative
  environments designed to inspire creativity, support our team,
  and make every working day better.
</p>

        </div>

       

        {/* Gallery */}
        <div className="celebration-grid">

  {officeImage.map((item) => (
    <div
      className="celebration-card"
      key={item.id}
    >

      {item.type === "video" ? (
        <video
          src={item.image}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
        />
      )}

      <div className="celebration-overlay">

        <div className="instagram-icon">
          ◎
        </div>

        <div className="celebration-content">
          <span>{item.category}</span>

          <h3>{item.title}</h3>

          <p>{item.description}</p>
        </div>

      </div>

    </div>
  ))}

</div>

       

      </div>
    </section>
  );
}
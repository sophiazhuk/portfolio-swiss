import React from "react";

const VRNWContent = () => (
  <>
    <p>
      This was a work project I developed for a real estate brand based in
      Tacoma. The goal was to build a clean and professional site that reflects
      the brand’s look while keeping it informative and easy to navigate. I
      worked closely with the client to ensure the design aligned with their
      marketing needs.
    </p>
    <br />
    <h2>My Role</h2>
    <p>
      I handled both design and development, starting from scratch using
      Bootstrap and jQuery. I also photographed properties and edited images,
      including aerial drone shots, for the website and marketing materials.
    </p>
    <br />
    <div className="image-container">
      <div className="project-img ar-16x9">
        <img
          src="/images/vrnw/home.png"
          alt="Virtual Realty NW home page screenshot"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="project-img ar-16x9">
        <img
          src="/images/vrnw/services.png"
          alt="Virtual Realty NW services page screenshot"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
    <h2>Technology</h2>
    <p>Bootstrap, jQuery, HTML, CSS, JavaScript, Photoshop</p>
    <br />
    <h2>Features</h2>
    <ul>
      <li>
        <h3>Responsive Design</h3> Layout adapts cleanly across devices.
      </li>
      <li>
        <h3>Custom Photo Gallery</h3> Interactive property showcase using
        jQuery.
      </li>
      <li>
        <h3>Brand Integration</h3> Color palette, font styles, and logo usage
        aligned with brand guidelines.
      </li>
    </ul>
  </>
);

export default VRNWContent;

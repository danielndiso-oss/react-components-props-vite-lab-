function About({ image, about }) {
  // Displays the blog image and information about the blog.
  return (
    <aside className="about">
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;
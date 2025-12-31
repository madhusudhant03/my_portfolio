import profilePic from "./assets/madhu1.jpg";


function App() {
  const year = new Date().getFullYear();

  return (
    <div className="bg-gradient-to-b from-[#061A24] to-[#020B10] text-gray-200 min-h-screen">

      {/* NAVBAR */}
      <nav className="w-full bg-[#061A24] border-b border-[#0E2A3A]">
        <ul className="flex justify-center gap-8 py-4 text-gray-300 text-sm md:text-base">
          {["about","education","skills","projects","achievements","contact"].map(item => (
            <li key={item}>
              <a href={`#${item}`} className="nav-link capitalize">{item}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 -mt-16">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400">
          Madhusudhanrao Tirumaladasu
        </h1>

        <p className="mt-4 text-lg text-gray-300">
          Turning Ideas into <span className="text-cyan-400">Innovation</span>
        </p>

        {/* <img
           src={profilePic} alt="Profile" />
          alt="Profile"
          className="mt-8 w-52 h-52 md:w-64 md:h-64 rounded-full border-4 border-cyan-400
                     object-cover transition-all duration-300
                     hover:scale-110 hover:shadow-[0_0_40px_#22d3ee]"
        /> */}

        <img
  src={profilePic}
  alt="Profile"
  className="
    w-48 h-48 md:w-64 md:h-64
    rounded-full
    object-cover
    border-4 border-cyan-400

    grayscale
    hover:grayscale-0

    transition-all duration-500 ease-in-out
    hover:scale-110

    shadow-[0_0_20px_#22d3ee]
    hover:shadow-[0_0_45px_#22d3ee]

    animate-pulse
  "
/>


        <p className="mt-8 max-w-3xl text-lg md:text-xl text-gray-300 leading-relaxed">
          Detail-oriented <span className="text-cyan-400 font-semibold">Computer Science student</span>
          passionate about <span className="text-cyan-400 font-semibold">full-stack development</span>,
          <span className="text-cyan-400 font-semibold">data structures</span>, and building
          <span className="text-cyan-400 font-semibold">scalable, real-world applications</span>.
        </p>
      </section>

      {/* ABOUT */}
      <Section id="about" title="About Me">
        Computer Science undergraduate with hands-on MERN stack experience and strong problem-solving skills.
      </Section>

      {/* EDUCATION */}
      <Section id="education" title="Education">
        <Grid>
          <Card title="B.Tech – CSE">RGUKT Basar • 2026</Card>
          <Card title="PUC">RGUKT Basar</Card>
          <Card title="SSC">ZPHS Rebbavaram</Card>
        </Grid>
      </Section>

      {/* SKILLS */}
      <Section id="skills" title="Skills & Expertise">
        <Grid>
          <Card>Programming: C, Java, JavaScript, SQL</Card>
          <Card>Web: HTML, CSS, React, Node, MongoDB</Card>
          <Card>Tools: Git, GitHub, Postman</Card>
          <Card>Problem Solving</Card>
        </Grid>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Featured Projects">
        <Grid>
          <Project title="Social Media Platform" link="http://43.204.143.168:5173" />
          <Project title="QuickShow – Movie Ticket Booking" link="https://quickshow.vercel.app" />
        </Grid>
      </Section>

      {/* ACHIEVEMENTS */}
      <Section id="achievements" title="Achievements">
        <Grid>
          <Card>Solved 100+ DSA Problems</Card>
          <Card>Completed Multiple Bootcamps</Card>
        </Grid>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Get In Touch" center>
        <a
          href="mailto:madhusudhant307@gmail.com"
          className="px-8 py-3 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
        >
          Contact Me
        </a>
      </Section>

      <footer className="py-6 text-center text-gray-500 text-sm">
        © {year} Madhusudhanrao Tirumaladasu
      </footer>
    </div>
  );
}

const Section = ({ id, title, children, center }) => (
  <section id={id} className={`py-20 px-6 max-w-5xl mx-auto ${center ? "text-center" : ""}`}>
    <h2 className="section-title">{title}</h2>
    <div className="section-text">{children}</div>
  </section>
);

const Grid = ({ children }) => (
  <div className="grid md:grid-cols-2 gap-6">{children}</div>
);

const Card = ({ title, children }) => (
  <div className="card">
    {title && <h3 className="text-cyan-400 font-semibold mb-2">{title}</h3>}
    <p>{children}</p>
  </div>
);

const Project = ({ title, link }) => (
  <div className="project-card">
    <h3 className="text-cyan-400 font-semibold mb-2">{title}</h3>
    <a href={link} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">
      Live Demo
    </a>
  </div>
);

export default App;

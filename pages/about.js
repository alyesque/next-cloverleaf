import Head from "next/dist/shared/lib/head";

function About() {
  return (
    <div className="abt">
      <Head>
        <title>Cloverleaf Math - About</title>
      </Head>
      <section className="flex landing">
        <div className="right1">
          <img
            src="./images/onmeet.png"
            className="sectionimage2"
            alt="illustration of woman at desk"
          />
        </div>
        <div className="left1">
          <h1 className="h1Big">How It Works</h1>
          <p>
            {" "}
            All sessions are one-on-one to ensure the session is as productive
            as possible. I offer a diagnostic assessment for all students as a
            tool to ensure our work is as beneficial as possible. I can provide
            curricular materials and additional homework problems if desired.{" "}
            <br></br>
            <br></br>Both online and in-person sessions are available. In-person
            sessions take place in the Eugene/Springfield, OR area. All sessions
            cost $50/hour.
          </p>
        </div>
      </section>
      <div className="subjectback">
        <div className="subjectheader"> Subject Areas </div>
        <div className="subjectsgrid">
          <div className="subject2">
            {" "}
            Early Numeracy <br />&<br /> K-5 Math
          </div>

          <div className="subject2">
            {" "}
            Pre-Algebra <br />&<br /> Middle School <br /> Math{" "}
          </div>
          <div className="subject"> Algebra 1 </div>
          <div className="subject2"> Geometry </div>

          <div className="subject2"> Statistics </div>
          <div className="subject"> Algebra 2</div>
          <div className="subject"> Precalculus </div>
          <div className="subject2"> Calculus </div>

          <div className="subject">
            {" "}
            Differential <br />
            Equations{" "}
          </div>
          <div className="subject2">
            {" "}
            Linear <br /> Algebra{" "}
          </div>
          <div className="subject">
            {" "}
            Discrete <br /> Mathematics{" "}
          </div>
          <div className="subject2">
            {" "}
            Competition <br /> Mathematics{" "}
          </div>
        </div>{" "}
        <br />
        <h2>
          Are you working on a course I didn’t list? Send me an email-- I can
          probably help with your course!{" "}
        </h2>
      </div>
      <section className="flex landing">
        <div className="left1 clare">
          <h1 className="h1Big">About Clare</h1>
          <p>
            {" "}
            I have nearly a decade of math tutoring experience, both online and
            in-person. I have a degree in mathematics from the University of
            Oregon with an emphasis on analysis and probability. I’m passionate
            about helping students develop confidence in their own mathematical
            abilities, and I believe in an affirming approach to mathematics
            education that supports students as mathematical learners.
            <br />
            <br />
            My goal as a tutor is to make mathematics accessible, rewarding, and
            enriching for all my students. I take a proactive and highly
            personalized approach that empowers your student based on their
            unique needs and goals. I love seeing students realize their
            potential in mathematics, and I would love to partner with your
            student to help them succeed and excel.
            <br />
            <br />
            Let’s get started!
          </p>
        </div>
        <div className="right1">
          <img
            src="./images/cPortNoSym.jpg"
            className="profilePic"
            alt="image of clare in front of green decorations"
          />
        </div>
      </section>
    </div>
  );
}

export default About;

import Head from 'next/head'
import Link from 'next/link'



export default function Home() {
  return (
    <div>
      <Head>
        <title>Cloverleaf Math</title>
      </Head>
      <main>
        <section className="flex landing">
          <div className="left1">
            <h1 className='h1Big'>
              Private Math Lessons</h1>
            <p> Keep your math skills sharp! Our math experts work with high school & college students and adult learners to help them achieve their goals! </p>
            <button> <Link href='/contact'> Request A Consultation </Link> </button>
          </div>
          <div claclassNamess="right1">
            <img src='./images/testart.png' className="sectionimage" />
          </div>
        </section>
        <section className="about">
          <h1 className='h1Big'> What Do We Do? </h1>
          <img src='./images/team.png' className="medimg" />
          <p> At Cloverleaf Math Center, we really love math.We also know firsthand that a one-size-fits-all approach to math education just doesn't work. We're constantly brainstorming new ways to explain material & consulting new research in mathematics education and curriculum design.We work with students with many different goals, and we know how to be responsive to a student's unique needs and learning style. We specialize in working with high school and college students, as well as adult learners and younger students looking for math enrichment. </p>
        </section>
        <section className="flex list">
          <div className="left1">
            <h2> Math Tutoring </h2>
            <img src='./images/meeting.png' className="smallimg" />
            <p> In a one-on-one tutoring session, we'll explain concepts and methods in a way that is compatible with the student's learning style and background, and guide the student through each stage of the learning process.We can identify and correct any subtle misunderstandings so that the student has a strong for foundation for future work.</p>
          </div>
          <div className="right1">
            <h2> SAT/ACT/GRE Math Prep </h2>
            <img src='./images/meeting1.png' className="smallimg" />
            <p> Don't be intimidated by standardized tests. We'll help you review important concepts and learn crucial strategies & time-saving tips.We work with you in one-on-one tutoring sessions instead of making you pay for pre-defined packages or group classes- this lets us personalize every aspect of our work together.</p>
          </div>
          <div className="right1">
            <h2>Custom Learning Plans</h2>
            <img src='./images/meeting2.png' className="smallimg" />
            <p>We can schedule a free assessment to help us design a customized learning plan for your student.Let us help you soar ahead or get caught up!Whether you're looking for enrichment, review, or anything in between, we can help. schedule your assesment today!</p>
          </div>
        </section>
      </main>

    </div>
  )
}

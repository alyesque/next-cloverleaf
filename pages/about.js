

function About() {

    return (
        <div>
            <section className='flex landing'>
                <div class="right1">
                    <img src='./images/onmeet.png' class="sectionimage" />
                </div>
                <div class="left1">
                    <h1 className='h1Big'>
                        How It Works</h1>
                    <p> All sessions are one-on-one to ensure the session is as productive as possible. I offer a free assessment for new students as a diagnostic tool to help us in our work. I can provide curricular materials and additional homework problems if desired.
                    </p>

                </div>
            </section>
            <div className='subjectback'>
                <div class='subjectheader'> Subject Areas </div>
                <div class='subjectsgrid'>
                    <div class="subject"> Pre-Algebra </div>
                    <div class="subject2"> Middle School <br /> Math </div>
                    <div class="subject"> Algebra 1 </div>
                    <div class="subject2"> Geometry </div>

                    <div class="subject2"> Statistics </div>
                    <div class="subject"> Algebra 2</div>
                    <div class="subject2"> Calculus </div>
                    <div class="subject"> Precalculus </div>

                    <div class="subject"> Differential <br />Equations </div>
                    <div class="subject2"> Linear <br /> Algebra </div>
                    <div class="subject"> Discrete <br /> Mathematics </div>
                    <div class="subject2"> Competition <br /> Mathematics </div>
                </div> <br />
                <h2>Are you working on a course I didn’t list? Send me an email-- I can probably help with your course! </h2>
            </div>
            <section className='flex landing'>
                <div class="left1 clare">
                    <h1 className='h1Big'>
                        About Clare</h1>
                    <p> I have nearly a decade of math tutoring experience, both online and in-person. I have a degree in mathematics from the University of Oregon with an emphasis on analysis and probability. I’m passionate about helping students develop confidence in their own mathematical abilities, and I believe in an affirming approach to mathematics education that supports students as learners.
                        <br /><br />
                        My goal as a tutor is to make mathematics accessible, rewarding, and enriching for all my students. I take a proactive and highly personalized approach that empowers your student as a learner based on their unique needs and goals. I love seeing students realize their potential as mathematical learners, and I would love to partner with your student to help them succeed and excel.
                        <br /><br />

                        Let’s get started!

                    </p>

                </div>
                <div class="right1">
                    <img src='./images/clare.png' class="sectionimage" />
                </div>

            </section>
        </div>
    )

}

export default About
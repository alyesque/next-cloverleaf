import { useState } from "react";

function Testimonials() {
  let TestArray = [
    "Clare is an amazing tutor, she is kind, patient and very knowledgeable in mathematics. She has helped me to understand the material in school, as well as preparing me for exams. She crafts interesting material with real world examples. I greatly enjoy my time spent working with her.",
    "Clare worked with me in preparation for the GRE. Math has always left me feeling insecure, but Clare’s infectious enthusiasm for the subject made the commitment of time to studying much less intimidating. Her deep knowledge, patience, and abundant assurance put me at my best for test day.",
    "Clare is a rare gem when it comes to tutoring. She is able to explain difficult concepts easily to her students (my kids range in age from 5 to 14). She keeps her students engaged and makes math interesting and fun. My kids actually look forward to their session with Clare which speaks volumes of her dedication and skills. As a parent, I can’t ask for more. We feel lucky to have her! ",
    "Clare is an amazing professional tutor.  She has worked with both my 8th grade child on math and my 2nd grade child on distance learning tasks.  My older child would not have been as successful during distance learning without her.  He was more successful in school with more confidence in math thanks to her support.  She is patient, kind, and positive with my younger student who experiences ADHD.  She calmly redirects, restates instructions in ways he can understand and independently provides visual supports to guide his learning.  She is wonderful with parent feedback and will provide home practice to better gain skills between sessions.  I highly recommend Clare for all students, especially those with different learning needs",
  ];

  let NameArray = [
    "AJ, 9th grade (AP statistics)",
    "Alex T (GRE prep)",
    "Anna S",
    "Megan P",
  ];

  const [student, setStudent] = useState(NameArray[0]);
  const [testim, setTestim] = useState(TestArray[0]);

  function forwardTest() {
    let currentNumber = TestArray.indexOf(testim);
    if (currentNumber < TestArray.length - 1) {
      setTestim(TestArray[currentNumber + 1]);
      setStudent(NameArray[currentNumber + 1]);
    } else {
      setTestim(TestArray[0]);
      setStudent(NameArray[0]);
    }
  }

  function backwardTest() {
    let currentNumber = TestArray.indexOf(testim);
    if (currentNumber > 0) {
      setTestim(TestArray[currentNumber - 1]);
      setStudent(NameArray[currentNumber - 1]);
    } else {
      setTestim(TestArray[TestArray.length - 1]);
      setStudent(NameArray[TestArray.length - 1]);
    }
  }

  return (
    <div className="testimonial">
      <div className="testiCard">
        <p>{testim}</p>
        <h3>{student}</h3>
        <div className="testiflex">
          <div className="clicker" onClick={() => backwardTest()}>
            {" "}
            ←
          </div>
          <div className="currenttestim">
            {TestArray.indexOf(testim) + 1}/{TestArray.length}
          </div>
          <div className="clicker" onClick={() => forwardTest()}>
            {" "}
            →{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

import { useState } from "react";

function Testimonials() {
  let t1 =
    "“Clare is an amazing tutor, she is kind, patient and very knowledgeable in mathematics. She has helped me to understand the material in school, as well as preparing me for exams. She crafts interesting material with real world examples. I greatly enjoy my time spent working with her.” ";
  let s1 = "AJ, 9th grade (AP statistics)";

  let t2 =
    "“Clare worked with me in preparation for the GRE. Math has always left me feeling insecure, but Clare’s infectious enthusiasm for the subject made the commitment of time to studying much less intimidating. Her deep knowledge, patience, and abundant assurance put me at my best for test day.” ";
  let s2 = "Alex T (GRE prep)";
  const [student, setStudent] = useState(s1);
  const [testim, setTestim] = useState(t1);

  function changeTest() {
    console.log(testim);
    if (
      testim ===
      "“Clare is an amazing tutor, she is kind, patient and very knowledgeable in mathematics. She has helped me to understand the material in school, as well as preparing me for exams. She crafts interesting material with real world examples. I greatly enjoy my time spent working with her.” "
    ) {
      setStudent(s2);
      setTestim(t2);
      console.log("clicked");
    } else if (
      testim ===
      "“Clare worked with me in preparation for the GRE. Math has always left me feeling insecure, but Clare’s infectious enthusiasm for the subject made the commitment of time to studying much less intimidating. Her deep knowledge, patience, and abundant assurance put me at my best for test day.” "
    ) {
      setStudent(s1);
      setTestim(t1);
      console.log("clicked");
    }
  }

  return (
    <div className="testimonial">
      <div className="clicker" onClick={() => changeTest()}>
        {" "}
        ←
      </div>
      <div className="testiCard">
        <p>{testim}</p>
        <h3>{student}</h3>
      </div>
      <div className="clicker" onClick={() => changeTest()}>
        {" "}
        →{" "}
      </div>
    </div>
  );
}

export default Testimonials;

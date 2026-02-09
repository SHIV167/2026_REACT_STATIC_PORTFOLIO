import React from "react";

const Education = () => {
  return (
    <section
      id="education"
      className="c-space max-w-7xl mx-auto px-4 py-10"  // same spacing & container as other sections
    >
      <h2 className="section-title text-3xl font-bold mb-8 text-white">
        Education
      </h2>
      <div className="space-y-8 text-neutral-300">
        <div>
          <h3 className="text-xl font-semibold text-white">
            Post Graduate Diploma in Advanced Computing (PG DAC)
          </h3>
          <p>CDAC, Noida</p>
          <p className="italic text-sm">2013-2014</p>
          <p>Specialization: Computer Engineering</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">
            Bachelor of Science (B.Sc.) Engineering
          </h3>
          <p>R.P.S Institute of Technology, Patna</p>
          <p className="italic text-sm">2008-2012</p>
          <p>Specialization: Computer Science</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">
            Higher Secondary (12th)
          </h3>
          <p>R.P.M Inter College, Madhepura</p>
          <p className="italic text-sm">2006</p>
          <p>Stream: Science</p>
        </div>
      </div>
    </section>
  );
};

export default Education;

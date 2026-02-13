import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const degrees = [
  { year: "2021-2022", school: "Australian Lutheran College", degree: "Diploma of Theology" },
  { year: "2021-2022", school: "Otago Polytechnic Auckland International Campus", degree: "Master of Applied Management" },
  { year: "2014-2017", school: "Graduate Theological Foundation", degree: "Doctor of Ministry (Spiritual Direction)" },
  { year: "2014-2015", school: "Hong Kong Shue Yan University 香港樹仁大學", degree: "Post-Graduate Certificate in Clinical Supervision (Counselling)" },
  { year: "2008-2013", school: "Alliance Bible Seminary 建道神學院", degree: "Master of Christian Studies (Marriage and Family Therapy)" },
  { year: "2008-2011", school: "Hong Kong Institute of Professional Counselling", degree: "Professional Diploma (God-Centered Family Reconstruction)" },
  { year: "2006-2009", school: "Hong Kong Satir Center for Human Development", degree: "Professional Counseling Certificate (Satir Transformational Systemic Therapy)" },
  { year: "2006-2008", school: "Alliance Bible Seminary 建道神學院", degree: "Postgraduate Diploma (Marriage and Family Therapy)" },
  { year: "2002-2004", school: "The University of Hong Kong 香港大學", degree: "Postgraduate Certificate (Education)" },
  { year: "2000-2002", school: "University of South Australia", degree: "Master of Social Science (Counselling)" },
  { year: "1998-1999", school: "The University of Hong Kong 香港大學", degree: "Certificate in Youth Counseling" },
  { year: "1993-1996", school: "Hong Kong University of Science and Technology 香港科技大學", degree: "Bachelor of Engineering (Computer Science)" },
];

export default function EducationSection() {
  return (
    <section className="section-padding section-alt">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-section flex items-center gap-3">
            <GraduationCap className="text-accent" size={32} />
            EDUCATION
          </h2>
          <p className="heading-sub">
            I learn because I wanna grow and become more mature as a person and as a Christian
          </p>
          <div className="gold-line mt-4" />
        </motion.div>

        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-timeline-line" />

          <div className="space-y-8">
            {degrees.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="card-warm"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-xs uppercase tracking-wider text-accent font-semibold flex-shrink-0">
                    {d.year}
                  </span>
                  <div className="timeline-dot" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-1 mt-2">
                  {d.school}
                </h3>
                <p className="text-text-secondary">{d.degree}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

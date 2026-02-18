import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Globe, BookOpen, Users, Award, Lightbulb, GraduationCap, ExternalLink } from "lucide-react";
import felixPhoto from "@/assets/Felix2.jpg";
import mslcPhoto1 from "@/assets/MSLC02.jpg";
import mslcPhoto2 from "@/assets/MSLC03.jpg";
import ordinationBg from "@/assets/Ordaination.jpg";

const education = [
  {
    degree: "Doctor of Ministry (D.Min)",
    degreeZh: "教牧學博士",
    field: "Spiritual Direction 靈修指導",
    institution: "Graduate Theological Foundation, USA",
    institutionZh: "美國神學研究協會",
    icon: GraduationCap,
  },
  {
    degree: "Master of Christian Studies (MCS)",
    degreeZh: "基督教研究碩士",
    field: "Marriage & Family Therapy 婚姻家庭治療",
    institution: "Alliance Bible Seminary, Hong Kong",
    institutionZh: "建道神學院",
    icon: GraduationCap,
  },
  {
    degree: "Master of Counselling",
    degreeZh: "輔導學碩士",
    field: "Counselling 輔導學",
    institution: "University of South Australia",
    institutionZh: "南澳洲大學",
    icon: GraduationCap,
  },
  {
    degree: "Master of Applied Management",
    degreeZh: "應用管理碩士",
    field: "Applied Management",
    institution: "Otago Polytechnic, New Zealand",
    institutionZh: "奧塔哥理工學院",
    icon: GraduationCap,
  },
  {
    degree: "Diploma in Theology",
    degreeZh: "神學文憑",
    field: "Lutheran Theology 信義宗神學",
    institution: "Australian Lutheran College",
    institutionZh: "澳洲神學大學信義宗神學院",
    icon: BookOpen,
  },
  {
    degree: "Bachelor of Science (BSc)",
    degreeZh: "理學士",
    field: "Computer Science 電子計算機科學",
    institution: "Hong Kong University of Science and Technology",
    institutionZh: "香港科技大學",
    icon: GraduationCap,
  },
];

const credentials = [
  {
    title: "Certified Focusing Trainer / Focusing-Oriented Therapist",
    titleZh: "認證聚焦導師 & 聚焦取向治療師",
    org: "The Focusing Institute, USA",
    badge: "International Certification",
    link: "https://focusing.org",
  },
  {
    title: "Associate Fellow (副院士)",
    titleZh: "副院士",
    org: "Hong Kong Professional Counselling Association",
    badge: "HKPCA",
    link: null,
  },
  {
    title: "Registered Clinical Supervisor & Counselor",
    titleZh: "註冊臨床督導",
    org: "Asian Professional Counselling Association (HK)",
    badge: "APCA",
    link: null,
  },
  {
    title: "Registered Counselor Level 4 Member",
    titleZh: "澳洲輔導協會第四級會員",
    org: "Australian Counselling Association (ACA)",
    badge: "ACA Level 4",
    link: null,
  },
  {
    title: "Certified Bringing Baby Home Educator",
    titleZh: "認證BBH教育導師",
    org: "The Gottman Institute, USA",
    badge: "Gottman Method",
    link: null,
  },
  {
    title: "Tuning In To Kids / Teens Certified Facilitator",
    titleZh: "兒童/青少年情緒教練認證導師",
    org: "Mindful Centre, University of Melbourne",
    badge: "Mindfulness-Based",
    link: null,
  },
  {
    title: "6A Character Education Instructor",
    titleZh: "6A品格教育認可導師",
    org: "6A Character Education",
    badge: "Character Education",
    link: null,
  },
  {
    title: "NLP Practitioner",
    titleZh: "NLP執行師",
    org: "American Board of NLP",
    badge: "NLP",
    link: null,
  },
  {
    title: "PREPARE/ENRICH Certified Counselor",
    titleZh: "PREPARE/ENRICH認可輔導員",
    org: "PREPARE/ENRICH",
    badge: "Pre-Marital / Marriage",
    link: null,
  },
  {
    title: "NZAC Member",
    titleZh: "紐西蘭輔導協會會員",
    org: "New Zealand Association of Counsellors",
    badge: "NZAC",
    link: "https://nzac.org.nz",
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Photo */}
      <section className="section-padding bg-gradient-to-b from-accent/10 to-background">
        <div className="container-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-4">
              About TongSir
            </h1>
            <p className="text-2xl font-chinese text-muted-foreground">關於唐思偉博士</p>
            <div className="gold-line-center mt-6" />
          </motion.div>

          {/* Photo + Bio Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl translate-x-3 translate-y-3" />
                <img
                  src={felixPhoto}
                  alt="Dr. Felix Tong - 唐思偉博士"
                  className="relative rounded-2xl w-full object-cover shadow-xl border-2 border-accent/20"
                />
              </div>
            </motion.div>

            {/* Biography Text */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2 bg-card p-8 md:p-10 rounded-2xl shadow-lg border border-accent/20"
            >
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-foreground mb-6 font-chinese">
                  <span className="font-semibold text-accent">唐思偉博士 (Dr. Felix Tong)</span> 乃<strong>紐西蘭信義會蒙恩堂牧師</strong>，負責華人事工及開展，並為<strong>奧克蘭理工大學校牧</strong>，亦是<strong>漢語網絡神學院家庭事工系副系主任</strong>，及<strong>Design For Change Hong Kong 顧問</strong>。
                </p>

                <p className="text-base leading-relaxed text-muted-foreground mb-6">
                  Dr. Felix Tong serves as <strong>Pastor</strong> at Mountainside Lutheran Church in New Zealand, leading Chinese ministry development and outreach. He is also the University Chaplain at Auckland University of Technology, <strong>Associate Dean of Family Ministry at Chinese Christian Online Seminary of Theology (COST)</strong>, and a consultant for Design For Change Hong Kong.
                </p>

                <div className="my-6 p-6 bg-accent/5 rounded-lg border-l-4 border-accent">
                  <p className="text-base leading-relaxed text-foreground font-chinese">
                    曾擔任<strong>路德會家庭輔導中心創辦主任兼臨床督導</strong>，中學輔導主任及多間大專院校及神學院客席講師。早年畢業於香港科技大學，其後獲取南澳洲大學輔導學碩士，建道神學院基督教研究碩士(主修婚姻家庭治療)及婚姻及家庭治療文憑，並修畢美國研究生神學基金會教牧學博士課程，主修<strong>靈修指導</strong>。
                  </p>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  Previously, Dr. Tong served as Founding Director and Clinical Supervisor of the Lutheran Family Counselling Centre, Secondary School Counselor, and Guest Lecturer at multiple universities and theological seminaries. He graduated from Hong Kong University of Science and Technology, and later obtained a Master of Counselling from University of South Australia, Master of Christian Studies (Marriage and Family Therapy) from Alliance Bible Seminary, and completed his <strong>Doctor of Ministry</strong> program specializing in Spiritual Direction from the <strong>Graduate Theological Foundation</strong>, USA.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ordination Photo Banner */}
      <section
        className="section-padding bg-photo-cover bg-photo-overlay-dark min-h-[360px] flex items-center"
        style={{ backgroundImage: `url(${ordinationBg})` }}
      >
        <div className="container-wide mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              Calling & Ministry
            </h2>
            <div className="gold-line mb-6"></div>
            <p className="text-xl font-chinese text-muted-foreground mb-8">呼召與服事</p>
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-chinese">
              以信仰、輔導與創意教育同行，服事家庭、教會與社群。
              <br />
              致力於在生命的不同階段，提供專業的支持與靈性的引導。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Academic Degrees Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Academic Degrees
            </h2>
            <p className="text-xl font-chinese text-muted-foreground">學歷</p>
            <div className="gold-line-center mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg shadow-sm border border-accent/10 hover:border-accent/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <edu.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg text-foreground">{edu.degree}</h4>
                    <p className="font-chinese text-muted-foreground text-sm">{edu.degreeZh}</p>
                    <p className="text-sm text-accent mt-2">{edu.field}</p>
                    <p className="text-sm text-muted-foreground mt-1">{edu.institution}</p>
                    <p className="font-chinese text-xs text-muted-foreground">{edu.institutionZh}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ministry Photos Section */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Ministry & Service
            </h2>
            <p className="text-xl font-chinese text-muted-foreground">事工與服務</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl"
            >
              <img
                src={mslcPhoto1}
                alt="Mountainside Lutheran Church - 信義會蒙恩堂"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <p className="text-lg font-semibold">Mountainside Lutheran Church</p>
                  <p className="font-chinese text-sm">紐西蘭信義會蒙恩堂</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative overflow-hidden rounded-xl"
            >
              <img
                src={mslcPhoto2}
                alt="Church Ministry - 教會事工"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <p className="text-lg font-semibold">Community Worship</p>
                  <p className="font-chinese text-sm">群體崇拜</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Areas of Expertise
            </h2>
            <p className="text-xl font-chinese text-muted-foreground">專業領域</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Heart,
                title: "Marriage & Family Therapy",
                titleZh: "婚姻及家庭治療",
                description: "Specializing in couples counseling, family dynamics, and relationship healing",
                color: "from-red-500/20 to-pink-500/20",
              },
              {
                icon: Lightbulb,
                title: "Focusing-Oriented Therapy",
                titleZh: "聚焦取向心理治療",
                description: "Certified Focusing Trainer helping clients connect with inner wisdom",
                color: "from-yellow-500/20 to-orange-500/20",
              },
              {
                icon: BookOpen,
                title: "Spiritual Direction",
                titleZh: "靈修指導",
                description: "Guiding individuals in their spiritual journey and contemplative practices",
                color: "from-blue-500/20 to-indigo-500/20",
              },
              {
                icon: Users,
                title: "Clinical Supervision",
                titleZh: "臨床督導",
                description: "Registered Clinical Supervisor mentoring counseling professionals",
                color: "from-green-500/20 to-teal-500/20",
              },
              {
                icon: Globe,
                title: "Cross-Cultural Ministry",
                titleZh: "跨文化事工",
                description: "Bridging cultures in pastoral care and community development",
                color: "from-purple-500/20 to-violet-500/20",
              },
              {
                icon: Award,
                title: "Character Education",
                titleZh: "品格教育",
                description: "6A Character Education certified instructor and Design For Change Hong Kong consultant",
                color: "from-cyan-500/20 to-blue-500/20",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-card p-6 rounded-xl border border-accent/10 hover:border-accent/30 transition-all hover:shadow-xl h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity rounded-xl`} />
                  <div className="relative">
                    <div className="p-3 bg-accent/10 rounded-lg w-fit mb-4 group-hover:bg-accent/20 transition-colors">
                      <item.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="font-chinese text-sm text-muted-foreground mb-3">{item.titleZh}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials & Recognition Section */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Credentials & Recognition
            </h2>
            <p className="text-xl font-chinese text-muted-foreground">資歷及認可</p>
            <div className="gold-line-center mt-6" />
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
              {credentials.map((cred, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-card p-5 rounded-lg border-l-4 border-accent hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-foreground text-sm leading-tight flex-1">{cred.title}</h3>
                    <span className="px-2 py-1 bg-accent/20 text-accent text-xs rounded-full ml-2 whitespace-nowrap">{cred.badge}</span>
                  </div>
                  <p className="font-chinese text-xs text-muted-foreground mb-1">{cred.titleZh}</p>
                  <p className="text-xs text-muted-foreground">{cred.org}</p>
                  {cred.link && (
                    <a
                      href={cred.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-accent hover:underline mt-2"
                    >
                      Visit <ExternalLink size={10} />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Honors & Awards */}
            <h3 className="text-2xl font-display font-semibold mb-8 text-center">
              Honors & Awards <span className="font-chinese text-muted-foreground">榮譽及獎項</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-accent/10 to-accent/5 p-8 rounded-xl border border-accent/20"
              >
                <div className="flex items-start gap-4">
                  <Award className="w-12 h-12 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-accent font-semibold mb-2">2008 • 第八屆</p>
                    <h3 className="text-xl font-bold text-foreground mb-2">Hong Kong Outstanding Teacher</h3>
                    <p className="font-chinese text-base text-muted-foreground mb-3">香港傑出教師</p>
                    <p className="text-sm text-muted-foreground">Awarded by Hong Kong Outstanding Teachers Association</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-r from-accent/10 to-accent/5 p-8 rounded-xl border border-accent/20"
              >
                <div className="flex items-start gap-4">
                  <Award className="w-12 h-12 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-accent font-semibold mb-2">2009 • 第六屆</p>
                    <h3 className="text-xl font-bold text-foreground mb-2">Outstanding Teacher Award (Caring)</h3>
                    <p className="font-chinese text-base text-muted-foreground mb-3">香港優秀教師獎(關愛組)</p>
                    <p className="text-sm text-muted-foreground">Awarded by Hong Kong Federation of Education Workers in recognition of outstanding performance in counseling students and families</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-gradient-to-b from-background to-accent/5">
        <div className="container-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
              A Journey of Service
            </h2>
            <p className="text-xl font-chinese text-muted-foreground mb-12">服務的旅程</p>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6 font-chinese">
                唐博士擁有廿多年輔導經驗，專注於婚姻家庭治療、靈修指導及聚焦取向心理治療。他致力於跨文化事工，在奧克蘭服事華人社群，同時亦為大學生提供牧養關懷。
              </p>
              <p className="text-lg leading-relaxed">
                With over 20 years of counseling experience, Dr. Tong specializes in marriage and family therapy, spiritual direction, and focusing-oriented therapy. He is dedicated to cross-cultural ministry, serving the Chinese community in Auckland while providing pastoral care to university students.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Link to="/booking" className="px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-semibold">
                Book a Session 預約輔導
              </Link>
              <Link to="/contact" className="px-8 py-3 bg-card border border-accent/30 text-foreground rounded-lg hover:bg-accent/10 transition-colors font-semibold">
                Get in Touch 聯絡我們
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

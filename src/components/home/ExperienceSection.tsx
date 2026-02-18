import { motion } from "framer-motion";
import { Briefcase, Church, School, Heart, Users, BookOpen, GraduationCap } from "lucide-react";
import felixPortrait from "@/assets/FelixPortMacquaire.jpg";

const experiences = [
  {
    role: "Pastor & Chinese Ministry Leader",
    roleZh: "牧師及華人事工負責人",
    organization: "Mountainside Lutheran Church, New Zealand",
    organizationZh: "紐西蘭信義會蒙恩堂",
    period: "Present 現任",
    description: "Leading Chinese ministry development and outreach",
    icon: Church,
    color: "from-blue-500/20 to-blue-600/20",
  },
  {
    role: "University Chaplain",
    roleZh: "大學校牧",
    organization: "Auckland University of Technology",
    organizationZh: "奧克蘭理工大學",
    period: "Present 現任",
    description: "Providing pastoral care and spiritual guidance to students and staff",
    icon: School,
    color: "from-purple-500/20 to-purple-600/20",
  },
  {
    role: "Consultant",
    roleZh: "顧問",
    organization: "Design For Change Hong Kong",
    organizationZh: "Design For Change 香港",
    period: "Present 現任",
    description: "Advising on creative education and character development initiatives",
    icon: Users,
    color: "from-green-500/20 to-green-600/20",
  },
  {
    role: "Consultant",
    roleZh: "顧問",
    organization: "Hong Kong Professional Family Education Association",
    organizationZh: "香港專業家庭教育協會",
    period: "Present 現任",
    description: "Providing expertise in family education and counseling",
    icon: Heart,
    color: "from-pink-500/20 to-pink-600/20",
  },
  {
    role: "Design For Change New Zealand Representative",
    roleZh: "Design For Change 紐西蘭地區代表",
    organization: "Design For Change (Global Creative Education Movement)",
    organizationZh: "全球性創意教育運動",
    period: "Past Experience",
    description: "Led creative education initiatives in New Zealand",
    icon: Users,
    color: "from-emerald-500/20 to-emerald-600/20",
  },
  {
    role: "Founding Director & Clinical Supervisor",
    roleZh: "創辦主任及臨床督導",
    organization: "Family Counselling Centre, Lutheran Church - Hong Kong Synod",
    organizationZh: "香港路德會家庭輔導中心",
    period: "Past Experience",
    description: "Established and led counseling center providing family therapy services",
    icon: Heart,
    color: "from-rose-500/20 to-rose-600/20",
  },
  {
    role: "Secondary School Counselor",
    roleZh: "中學輔導主任",
    organization: "Hong Kong Secondary Schools",
    organizationZh: "香港中學",
    period: "Past Experience",
    description: "Provided counseling and guidance to students and families",
    icon: School,
    color: "from-amber-500/20 to-amber-600/20",
  },
  {
    role: "Visiting Lecturer",
    roleZh: "客席講師",
    organization: "Multiple Theological Seminaries & Universities",
    organizationZh: "多間神學院及大專院校",
    period: "Ongoing",
    description: "Teaching counseling, spiritual formation, and pastoral care",
    icon: BookOpen,
    color: "from-cyan-500/20 to-cyan-600/20",
  },
];

const teachingRoles = [
  {
    title: "Associate Dean of Family Ministry",
    titleZh: "家庭事工系副系主任",
    institution: "Chinese Christian Online Seminary of Theology (COST)",
    institutionZh: "漢語網絡神學院",
  },
  {
    title: "Professor of Practical Theology",
    titleZh: "實用神學教授",
    institution: "Concordia Seminary",
    institutionZh: "協同神學院",
  },
  {
    title: "Visiting Lecturer - Life Growth Course",
    titleZh: "生命成長課程客席講師",
    institution: "Alliance Bible Seminary",
    institutionZh: "建道神學院",
  },
];

export default function ExperienceSection() {
  return (
    <section className="section-padding bg-gradient-warm bg-pattern-dots">
      <div className="container-wide mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-xl font-chinese text-muted-foreground">專業經驗</p>
          <div className="gold-line-center mt-6" />
        </motion.div>

        {/* Two-column layout: experiences + portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Main Experiences - 2/3 width */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group"
                >
                  <div className="relative bg-card p-5 rounded-lg border border-accent/10 hover:border-accent/30 transition-all hover:shadow-lg">
                    <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity rounded-lg`} />
                    <div className="relative flex gap-5">
                      <div className="flex-shrink-0">
                        <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                          <exp.icon className="w-6 h-6 text-accent" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                          <div>
                            <h3 className="text-base font-semibold text-foreground">{exp.role}</h3>
                            <p className="font-chinese text-sm text-muted-foreground">{exp.roleZh}</p>
                          </div>
                          <span className="px-2 py-0.5 bg-accent/20 text-accent rounded-full text-xs font-medium whitespace-nowrap">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-foreground/90 mb-0.5">{exp.organization}</p>
                        <p className="font-chinese text-xs text-muted-foreground mb-1">{exp.organizationZh}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Portrait - 1/3 width, sticky */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-1 hidden lg:block"
          >
            <div className="sticky top-24">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl translate-x-3 translate-y-3" />
                <div className="absolute -inset-4 bg-gradient-to-br from-accent/10 via-transparent to-accent/5 rounded-3xl blur-2xl" />
                <img
                  src={felixPortrait}
                  alt="Dr. Felix Tong - Port Macquarie"
                  className="relative rounded-2xl w-full object-cover shadow-2xl border-2 border-accent/20"
                />
              </div>
              <div className="mt-6 p-5 bg-card rounded-xl border border-accent/20 shadow-sm">
                <p className="text-sm font-chinese text-foreground font-semibold mb-2">超過二十年服務經驗</p>
                <p className="text-xs text-muted-foreground leading-relaxed">Over 20 years dedicated to counseling, pastoral care, education, and cross-cultural ministry.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Teaching Roles */}
        <div className="mb-12">
          <h3 className="text-2xl font-display font-semibold mb-8 text-center">
            Teaching Appointments <span className="font-chinese text-muted-foreground">教學任命</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teachingRoles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-accent/5 to-accent/10 p-6 rounded-lg border border-accent/20 hover:shadow-md transition-shadow"
              >
                <BookOpen className="w-6 h-6 text-accent mb-4" />
                <h4 className="font-semibold text-foreground mb-1">{role.title}</h4>
                <p className="font-chinese text-sm text-muted-foreground mb-3">{role.titleZh}</p>
                <p className="text-sm text-muted-foreground">{role.institution}</p>
                <p className="font-chinese text-xs text-muted-foreground mt-1">{role.institutionZh}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Counseling Experience Highlight */}
        <div>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-accent/5 p-8 rounded-lg border-l-4 border-accent"
            >
              <div className="flex items-center gap-3 mb-3">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Over 20+ Years of Counseling Experience</h4>
              <p className="font-chinese text-base text-muted-foreground mt-1 mb-3">超過二十多年輔導經驗</p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Specializing in marriage & family therapy, spiritual direction, and focusing-oriented therapy
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

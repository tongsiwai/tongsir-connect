import { motion } from "framer-motion";
import { Briefcase, Church, School, Heart, Users, BookOpen } from "lucide-react";

const experiences = [
  {
    role: "Minister & Chinese Ministry Leader",
    roleZh: "傳道及華人事工負責人",
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
    role: "Design For Change New Zealand Representative",
    roleZh: "Design For Change 紐西蘭地區代表",
    organization: "Design For Change (Global Creative Education Movement)",
    organizationZh: "全球性創意教育運動",
    period: "Present 現任",
    description: "Leading creative education initiatives in New Zealand",
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
    role: "Founding Director & Clinical Supervisor",
    roleZh: "創辦主任及臨床督導",
    organization: "Lutheran Family Counselling Centre, Hong Kong",
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
    role: "Guest Lecturer",
    roleZh: "客席講師",
    organization: "Multiple Theological Seminaries & Universities",
    organizationZh: "多間神學院及大專院校",
    period: "Ongoing",
    description: "Teaching counseling, spiritual formation, and pastoral care",
    icon: BookOpen,
    color: "from-indigo-500/20 to-indigo-600/20",
  },
];

const teachingRoles = [
  {
    title: "Professor of Practical Theology",
    titleZh: "實用神學教授",
    institution: "Concordia Seminary",
    institutionZh: "協同神學院",
  },
  {
    title: "Spiritual Formation Facilitator",
    titleZh: "靈命塑造課程導師",
    institution: "Alliance Bible Seminary - Lay Leadership Training",
    institutionZh: "建道神學院 - 信徒領袖培訓部",
  },
  {
    title: "Life Growth Camp Facilitator",
    titleZh: "生命成長營導師",
    institution: "Alliance Bible Seminary",
    institutionZh: "建道神學院",
  },
];

const affiliations = [
  {
    title: "Pastoral Counseling Association Committee Member (Volunteer)",
    titleZh: "教牧輔導協會委員(義務)",
    org: "Alliance Bible Seminary",
    period: "2007-2009",
  },
];

export default function ExperienceSection() {
  return (
    <section className="section-padding">
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

        {/* Main Experiences */}
        <div className="mb-16">
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-card p-6 rounded-lg border border-accent/10 hover:border-accent/30 transition-all hover:shadow-lg">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity rounded-lg`} />
                  
                  <div className="relative flex gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="p-4 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                        <exp.icon className="w-8 h-8 text-accent" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                          <p className="font-chinese text-muted-foreground">{exp.roleZh}</p>
                        </div>
                        <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-base font-medium text-foreground/90 mb-1">{exp.organization}</p>
                      <p className="font-chinese text-sm text-muted-foreground mb-3">{exp.organizationZh}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Teaching Roles */}
        <div className="mb-16">
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
                className="bg-gradient-to-br from-accent/5 to-accent/10 p-6 rounded-lg border border-accent/20"
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

        {/* Professional Affiliations */}
        <div>
          <h3 className="text-2xl font-display font-semibold mb-8 text-center">
            Professional Memberships <span className="font-chinese text-muted-foreground">專業會員</span>
          </h3>
          <div className="max-w-4xl mx-auto space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-accent/5 p-6 rounded-lg border-l-4 border-accent"
            >
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-5 h-5 text-accent" />
                <span className="text-sm text-accent font-medium">2007-2009</span>
              </div>
              <h4 className="font-semibold text-foreground">
                Pastoral Counseling Association Committee Member (Volunteer)
              </h4>
              <p className="font-chinese text-sm text-muted-foreground mt-1">
                教牧輔導協會委員(義務)
              </p>
              <p className="text-sm text-muted-foreground mt-2">Alliance Bible Seminary 建道神學院</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-accent/5 p-6 rounded-lg border-l-4 border-accent"
            >
              <div className="flex items-center gap-3 mb-2">
                <Heart className="w-5 h-5 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground">Over 10+ Years of Counseling Experience</h4>
              <p className="font-chinese text-sm text-muted-foreground mt-1">超過十多年輔導經驗</p>
              <p className="text-sm text-muted-foreground mt-2">
                Specializing in marriage & family therapy, spiritual direction, and focusing-oriented therapy
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

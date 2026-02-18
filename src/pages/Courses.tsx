import { motion } from "framer-motion";
import { BookOpen, FileText, ExternalLink, Mic, ArrowRight } from "lucide-react";
import PublicationsSection from "@/components/home/PublicationsSection";

const courses = [
  {
    title: "聚焦取向心理治療基礎課程",
    desc: "Focusing-Oriented Psychotherapy introductory course",
    icon: BookOpen,
  },
  {
    title: "靈性指導培訓",
    desc: "Spiritual Direction training program",
    icon: BookOpen,
  },
  {
    title: "臨床督導課程",
    desc: "Clinical Supervision certification",
    icon: BookOpen,
  },
];

const articles = [
  {
    id: "1",
    label: "1",
    title: "耶穌多說「理」? 還是有「情」人? (1)",
    date: "2018-09-14",
    url: "https://www.tongsir.net/#_blog",
    fullText: `之前提及過要說說自身的經驗，但因為忙這忙那，終於有空在火車上可以試試組織一下。

我成長在一個父母都頗為嚴謹及要求頗高的家庭，小時候吃飯時若一時忘記提起飯碗吃飯，腦袋就會被父親手中的戒指擊中。而且小時候成績不佳，加上母親自身承受很多生活的壓力，當行為稍為有一點不佳，打罵也是家常便飯。被打罵的結果是，自小都覺得自己活在恐懼、擔心之中。

加上有個醒目到震、性格外向、得人歡心兼就讀名校的哥哥，內向的我更是常被比下去，自信心極度低落。

這樣的成長背景於我的信仰生活有何影響? 為我來說，影響極大。

媽媽性格上是較似九型人格中（Enneagram）1號的完美主義者/改革型。凡是要求我作「對」的事，對一個原本「自由奔放、創意無限又喜發白日夢」的我來說，實在是火星撞地球，或是準確的來說，是地球被太陽吞噬了。而初信主的年代，對聖經中一些黑白分明的教導，我十分容易接受，亦很容易簡化信仰就是「去作對的事」，人也變得「更」沒有彈性。回顧以往，那時候對信仰的熱誠，可以總結為「渴望像神，卻不懂做人」，經常操練作「屬靈人」，卻因為自己成長的影響，沒有發現原來事事以極度理性去評定對錯、自以為熟悉聖經，知道真理，其實也是走在法利賽人非黑即白的老路之上。

後來成為一位老師，更發現我的「精靈」學生們，他們不需要更多的說教（因為大部份人其實都「只」懂說教），而是需要更多有「人性」的人去接觸他們的內心。只是當時因為不知如何去幫助他們，所以就想去找些東西進修學習一下，原本是希望學到一些「技巧」去叫自己的工作有番多一點啲意義。

那知，原來修讀輔導的過程，受幫助的不是別人（我的學生），反而先得益的是自己（所以我常說，其實我的學生們才是我的老師）。而學習輔導、以及13年「極具挑戰的」教學工作給我的學習，竟是上帝給我生命／靈命成長的重要旅程。甚或可以說是上帝給我的「度身訂造」訓練班吧！

欲知後事如何.....下回繼續.....以免咗住火車上的人瞓覺😝😝😝`,
  },
  {
    id: "2",
    label: "2",
    title: "耶穌多說「理」? 還是有「情」人? (2)",
    date: "2018-09-20",
    url: "https://www.tongsir.net/#_blog",
    fullText: `修讀輔導的過程，要由參加 Dr. Grace Cheung 的「教師成長工作坊」開始。當年見是教育局給老師的免費暑期課程，盲舂舂的成為 Satir Family Reconstruction 之中的「星星 (Star)」，深深感覺原來自己受原生家庭影響很深。為何自己與天父的關係難有親密？其實也跟原生家庭中的父親形象息息相關。因為由小到大，「慈愛、無條件接納的天父」確實未有自身親自的體會機會，就像一個人未曾嘗過"鮑魚"，任你如何「講解」、形容給我聽，我也不會明白"鮑魚"的味道。

故此，由這個工作坊開始，我了解到自己極需要成長，故此我由青少年輔導文憑、到唔理當年Cert.Ed. 可升Point（加人工）都先去修讀輔導學碩士，之後學習沙維雅家庭治療 (Satir Systemic Family Therapy) ，以及在建道神學院修讀整合信仰與婚姻家庭治療的基督教研究碩士，其實都只是我個人信仰生命的一個醒覺、了解、悔改、調整、重拾人性的成長歷程。

多謝我的學生們迫使我去學習，並開始在思想上挑戰這個「非人性」的教育制度。而更進一步的，也迫使我去檢視以往在教會中「教導」的缺欠。

及後有機會接受美國 Western Seminary 舊約學者 Dr. David Eckman 信徒培育課程的訓練，更加強了我對輔導能與神學極佳整合的確認與示範。亦讓我更肯定信仰生命的成長，不能只在「理性」及「教導」之上。頭腦知識明白是容易的，然而要生命改變，結出果子，不能不處理「纏累」著我們的許多歷史包袱與故事。如該課程的內容所說：Our GOD is an emotional God. （我們的上主，乃是情感極為豐富的主）。而我們的被造，乃是按著上主的形象及樣式而造的。人若不能在情緒及人性方面成熟，如何能有整全的成長呢？然而，教會中普遍信徒的培育，是否多傾向／被教導去成為一個「做對事」的人，還是我們較渴望成為一個「有血有肉、有情有義、有憐憫、有感受」的人呢？

小弟後來有機會跟不同老師學習靈修、Focusing，更讓我有另外一些深刻的體會…….`,
  },
  {
    id: "3",
    label: "3",
    title: "耶穌多說「理」? 還是有「情」人? (3)",
    date: "2018-11-26",
    url: "https://www.tongsir.net/#_blog",
    fullText: `學習輔導的其中一個片段，是在突破青年村跟 Dr. John Banmen上課的一幕，當時因為自告奮勇，站在同學們當中去示範（順便要讚一下自己，因為要在生命中成長，有時候真的要幾勇）。當時 Dr. John 的第一句就已經令我Hang機,"What is your feeling RIGHT NOW?" （你此時此刻的感受如何？）

那時自問自己已經修讀多年輔導課程，也覺得自己已經經歷不少轉變（包括有機會體會了不同老師的Family Reconstruction被修整）。但在當時，我卻突然發現，原來自己對感受還是十分陌生。我忘記了當事我用「頭腦」去「分析」了自己的甚麼感受。然而我內心深知道的是，距離成為一個接納「整全」自己，全然擁抱上主賜與自我「感受」的人，我還是有漫漫長路要走。

自始以後，我會在搭巴士、在崇拜、食飯、帶敬拜的時候，問一問自己：What is your feeling RIGHT NOW?

然而這個「尋回自己」的歷程，其實並沒有停止過。我常跟朋友們說，我用了20年時間，去一點一滴地找回上主給我的「感受」部份。而在學習靈修的過程當中，也發現「感受」在靈性修持的學習上，也有一重要地位。在後來 Welcoming Prayer 及 Focusing的學習中，更讓我有更驚訝的「發現」。`,
  },
];

export default function Courses() {
  return (
    <div className="min-h-screen">

      {/* Page Header */}
      <section className="section-padding bg-gradient-to-b from-accent/10 to-background">
        <div className="container-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-4 font-chinese">
              課程 / 出版 / 文章
            </h1>
            <p className="text-xl text-muted-foreground">
              Courses, Publications &amp; Articles
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-8 font-chinese">
              課程
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {courses.map((course, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow"
                >
                  <course.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2 font-chinese">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{course.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Publications Section */}
      <PublicationsSection />

      {/* Articles Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-8 font-chinese">
              文章
            </h2>
            <div className="space-y-6">
              {articles.map((article) => (
                <div
                  key={article.id}
                  className="p-6 rounded-xl border border-border bg-card"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-foreground font-chinese">
                      {article.title}
                    </h3>
                    <span className="text-sm text-muted-foreground ml-4 shrink-0">
                      {article.date}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed font-chinese whitespace-pre-line line-clamp-4">
                    {article.fullText}
                  </p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-3 text-primary hover:underline text-sm"
                  >
                    閱讀全文 <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

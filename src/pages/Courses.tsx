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
    number: 1,
    title: "耶穌多說「理」? 還是有「情」人? (1)",
    date: "2018-09-14",
    url: "https://www.tongsir.net/blog/1",
    fullText: `耶穌雖有運用智慧去"應付"那些要用律法去置死婦人之流，但祂不但沒有站在「自以為義手指指」之人的一方，祂其實也沒有站在"公義律法"的一邊(其實這兩邊是不同的)。因為祂的心不在這裡，祂心繫在「人(那婦人)」身上。

那份愛，包含著許多的感受與情緒(憐憫、關懷、擔憂)，故此，耶穌個是"有感有情"的人。

難怪《The Emotionally Healthy Church》的作者Peter Scazzero 提出「我們是一個完整的人，是按照神的形像造的； 否認這個真理的任何方面，都會帶來長期的災難性後果，特別是傾向把情感健康和靈性健康分離。」`,
  },
  {
    number: 2,
    title: "耶穌多說「理」? 還是有「情」人? (2)",
    date: "2018-09-14",
    url: "https://www.tongsir.net/blog/2",
    fullText: `「感受」是上主創造人類的一重要部份，我們的主也是滿有豐富情感的一位上帝。

耶穌是個大忙人，然而祂忙著的，都是與人的需要有關的事情。我相信祂看治病、趕鬼等等行動，絕對不是一個「事工」，而只是帶著極大的感受與憐憫去體會人類的困境的回應。或者說祂被自己的感受(愛)驅動，而帶著強烈的情感以行動去回應，我相信也不為過。

在祂與門徒忙極之時，肚餓了，門徒竟忘記準備食物。「那時，耶穌在安息日，從麥地經過，祂的門徒餓了，就掐起麥穗來吃。」(太12:1)

耶穌選擇重視「人」的需要，祂關心人比律法更多。祂沒有可能不知道律法的要求，按現代的說法，那絕對是"偷雞"。我們是否必要地理性為耶穌說出一個合"理"的解說? 這要留待釋經學者去做，但我傾向接受耶穌是重「人情」過於律法之對錯。

我們作為耶穌的追隨者，我與耶穌的「感受」層次，又有多同步呢？還是我們有機會連自己對自己的情緒「無感」也不自知呢？(就像主觀的人不覺得自己主觀，其實也是十分普遍的)

又引用一下近日翻睇的一本好書《Becoming Who God Intended》Dr. David Eckman 說："Probably the most important use of emotions with regard to the Bible is often overlooked. The principle is as follows: Emotions do not authenticate truth, but emotions do authenticate our understanding and integration of truth."`,
  },
  {
    number: 3,
    title: "耶穌多說「理」? 還是有「情」人? (3)",
    date: "2018-09-15",
    url: "https://www.tongsir.net/blog/3",
    fullText: `我們都喜歡分辨對錯。甚至我們都善於指出別人的錯。

我也是在這個培訓的環境長大的，在我成長的年月裡，父母許多時候都會只以"言語"去教導我們（因為時間有限，搵食重要），直到今天，我還十分喜歡挑戰家長，試試向孩子作出一個承諾，三個月內改變一個自己的壞習慣（而比孩子權利去用佢喜歡的方法"提醒"你），從而以身教去教導孩子。（結果留待大家去猜想）這說明甚麼呢？就是30年後的今天，其實我們都仍是指出"別人"錯處的專家。

耶穌與井旁的婦人相遇的事件，其實與之前我在(1)及(2)舉的例子也一樣，由一開始已經是錯的，行淫者"應該"被石頭打死，安息日"應該"要休息（鬼叫你唔準備好食物啊，耶穌），這個對話一開始就"錯"。當然我們還可以分析耶穌的說話技巧，思路如何周詳，如何有智慧等等。但由情緒的角度去看，耶穌可能只是帶著一份對婦人的關懷，以致一開始他就"不理會"應該不應該（不是說他沒有"理"性分析過），而是在分析過後，仍帶著"情"去反對"合理"的事。

所以，耶穌的"狀況"是在"情"之上，走過"理性"（因為我們深信耶穌的IQ不低，唔會無諗過）而回歸讓愛讓情主導祂的行為。（這狀況同樣在(1)及(2)的例子中發生）

然而我要說的是，現代的基督徒，在我們普遍由小到大文化要求"快，靚，正"影響之下，我們有多少熟悉情緒，就連大部份的神學教育也是以"頭腦/理性分析"成績主導時，究竟我們有多大敏銳別人的感受，以致了解整全的狀態？還是我們已經是"被制約"地無意識地容易走回法利賽人的老路，太快地批評別人，急於分出對錯，事事要去改正，而忘記人生就跟本不是非黑即白的。

耶穌的智慧在於跟隨"心"而行，並不是說他缺乏"理性"，而是祂"心"以"情"而非"理"繫於人，對人的"愛"才是祂心所歸。`,
  },
  {
    number: 4,
    title: "耶穌多說「理」? 還是有「情」人? (4)",
    date: "2018",
    url: "https://www.tongsir.net/blog/4",
    fullText: null,
  },
  {
    number: 5,
    title: "耶穌多說「理」? 還是有「情」人? (5)",
    date: "2018",
    url: "https://www.tongsir.net/blog/5",
    fullText: null,
  },
  {
    number: 6,
    title: "耶穌多說「理」? 還是有「情」人? (6)",
    date: "2019",
    url: "https://www.tongsir.net/blog/6",
    fullText: null,
  },
  {
    number: 7,
    title: "耶穌多說「理」? 還是有「情」人? (7)",
    date: "2019",
    url: "https://www.tongsir.net/blog/7",
    fullText: null,
  },
  {
    number: 8,
    title: "耶穌多說「理」? 還是有「情」人? (8)",
    date: "2019",
    url: "https://www.tongsir.net/blog/8",
    fullText: null,
  },
  {
    number: 9,
    title: "耶穌多說「理」? 還是有「情」人? (9)",
    date: "2019-05-25",
    url: "https://www.tongsir.net/blog/9",
    fullText: null,
  },
  {
    number: 10,
    title: "耶穌多說「理」? 還是有「情」人? (10)",
    date: "2019",
    url: "https://www.tongsir.net/blog/10",
    fullText: null,
  },
  {
    number: 11,
    title: "耶穌多說「理」? 還是有「情」人? (11)",
    date: "2019-07-30",
    url: "https://www.tongsir.net/blog/11",
    fullText: null,
  },
  {
    number: 12,
    title: "耶穌多說「理」? 還是有「情」人? (12)",
    date: "2019-08-02",
    url: "https://www.tongsir.net/blog/12",
    fullText: null,
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
            <p className="text-xl text-muted-foreground">Courses, Publications & Articles</p>
            <div className="gold-line-center mt-6" />
          </motion.div>
        </div>
      </section>

      {/* Section 1: Courses */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-2">
              <Mic className="text-accent" size={28} />
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground font-chinese">課程</h2>
            </div>
            <p className="text-lg text-muted-foreground ml-10">Courses</p>
            <div className="gold-line mt-4" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-6 rounded-xl border border-accent/10 hover:border-accent/30 hover:shadow-lg transition-all"
              >
                <div className="p-3 bg-accent/10 rounded-lg w-fit mb-4">
                  <course.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-base font-display font-semibold text-foreground font-chinese">{course.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{course.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Online Courses CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <a
              href="https://www.prolearning.asia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-semibold"
            >
              Browse Online Courses <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Publications & Research */}
      <PublicationsSection />

      {/* Section 3: Articles */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <FileText className="text-accent" size={28} />
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground font-chinese">其他文章</h2>
            </div>
            <p className="text-lg text-muted-foreground ml-10">Recent writings and reflections</p>
            <div className="gold-line mt-4" />
          </motion.div>

          <p className="font-chinese text-lg font-semibold text-foreground mb-10 ml-1">
            『耶穌多說「理」？還是有「情」人？』系列
          </p>

          <div className="space-y-8">
            {articles.map((article, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-xl border border-accent/10 hover:border-accent/30 hover:shadow-lg transition-all overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <time className="text-xs text-accent font-semibold uppercase tracking-wider">
                        {article.date}
                      </time>
                      <h3 className="text-lg md:text-xl font-display font-semibold text-foreground mt-1 font-chinese">
                        {article.title}
                      </h3>
                    </div>
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold text-sm">
                      {article.number}
                    </span>
                  </div>

                  {article.fullText ? (
                    <div className="prose prose-sm max-w-none text-muted-foreground font-chinese leading-loose">
                      {article.fullText.split("\n\n").map((para, pi) => (
                        <p key={pi} className="mb-4 text-sm md:text-base leading-relaxed">
                          {para}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground font-chinese italic">
                      請點擊下方連結閱讀全文
                    </p>
                  )}

                  <div className="mt-4 pt-4 border-t border-accent/10">
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-accent font-medium hover:gap-3 transition-all"
                    >
                      閱讀原文 <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

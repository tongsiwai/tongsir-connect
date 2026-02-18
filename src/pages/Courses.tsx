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
    url: "https://www.tongsir.net/blog/1",
    fullText: `耶穌雖有運用智慧去「應付」那些要用律法去置死婦人之流，但祂不但沒有站在「自以為義手指指」之人的一方，祂其實也沒有站在「公義律法」的一邊(其實這兩邊是不同的)。因為祂的心不在這裡，祂心繫在「人(那婦人)」身上。

那份愛，包含著許多的感受與情緒(憐憫、關懷、擔憂)，故此，耶穌個是「有感有情」的人。

難怪《The Emotionally Healthy Church》的作者Peter Scazzero 提出「我們是一個完整的人，是按照神的形像造的；否認這個真理的任何方面，都會帶來長期的災難性後果，特別是傾向把情感健康和靈性健康分離。」`,
  },
  {
    id: "2",
    label: "2",
    title: "耶穌多說「理」? 還是有「情」人? (2)",
    date: "2018-09-14",
    url: "https://www.tongsir.net/blog/2",
    fullText: `「感受」是上主創造人類的一重要部份，我們的主也是滿有豐富情感的一位上帝。

耶穌是個大忙人，然而祂忙著的，都是與人的需要有關的事情。我相信祂看治病、趕鬼等等行動，絕對不是一個「事工」，而只是帶著極大的感受與憐憫去體會人類的困境的回應。或者說祂被自己的感受(愛)驅動，而帶著強烈的情感以行動去回應，我相信也不為過。

在祂與門徒忙極之時，肚餓了，門徒竟忘記準備食物。「那時，耶穌在安息日，從麥地經過，祂的門徒餓了，就掐起麥穗來吃。」(太12:1)

耶穌選擇重視「人」的需要，祂關心人比律法更多。祂沒有可能不知道律法的要求，按現代的說法，那絕對是「偷雞」。我們是否必要地理性為耶穌說出一個合「理」的解說？這要留待釋經學者去做，但我傾向接受耶穌是重「人情」過於律法之對錯。

我們作為耶穌的追隨者，我與耶穌的「感受」層次，又有多同步呢？還是我們有機會連自己對自己的情緒「無感」也不自知呢？(就像主觀的人不覺得自己主觀，其實也是十分普遍的)

又引用一下近日翻睇的一本好書《Becoming Who God Intended》Dr. David Eckman 說：「Probably the most important use of emotions with regard to the Bible is often overlooked. The principle is as follows: Emotions do not authenticate truth, but emotions do authenticate our understanding and integration of truth.」`,
  },
  {
    id: "3",
    label: "3",
    title: "耶穌多說「理」? 還是有「情」人? (3)",
    date: "2018-09-15",
    url: "https://www.tongsir.net/blog/3",
    fullText: `我們都喜歡分辨對錯。甚至我們都善於指出別人的錯。

我也是在這個培訓的環境長大的，在我成長的年月裡，父母許多時候都會只以「言語」去教導我們（因為時間有限，搵食重要），直到今天，我還十分喜歡挑戰家長，試試向孩子作出一個承諾，三個月內改變一個自己的壞習慣（而比孩子權利去用佢喜歡的方法「提醒」你），從而以身教去教導孩子。（結果留待大家去猜想）這說明甚麼呢？就是30年後的今天，其實我們都仍是指出「別人」錯處的專家。

耶穌與井旁的婦人相遇的事件，其實與之前我在(1)及(2)舉的例子也一樣，由一開始已經是錯的，行淫者「應該」被石頭打死，安息日「應該」要休息（鬼叫你唔準備好食物啊，耶穌），這個對話一開始就「錯」。當然我們還可以分析耶穌的說話技巧，思路如何周詳，如何有智慧等等。但由情緒的角度去看，耶穌可能只是帶著一份對婦人的關懷，以致一開始他就「不理會」應該不應該（不是說他沒有「理」性分析過），而是在分析過後，仍帶著「情」去反對「合理」的事。

所以，耶穌的「狀況」是在「情」之上，走過「理性」（因為我們深信耶穌的IQ不低，唔會無諗過）而回歸讓愛讓情主導祂的行為。（這狀況同樣在(1)及(2)的例子中發生）

然而我要說的是，現代的基督徒，在我們普遍由小到大文化要求「快，靚，正」影響之下，我們有多少熟悉情緒，就連大部份的神學教育也是以「頭腦/理性分析」成績主導時，究竟我們有多大敏銳別人的感受，以致了解整全的狀態？還是我們已經是「被制約」地無意識地容易走回法利賽人的老路，太快地批評別人，急於分出對錯，事事要去改正，而忘記人生就跟本不是非黑即白的。

耶穌的智慧在於跟隨「心」而行，並不是說他缺乏「理性」，而是祂「心」以「情」而非「理」繫於人，對人的「愛」才是祂心所歸。`,
  },
  {
    id: "3.5",
    label: "3.5",
    title: "耶穌多說「理」? 還是有「情」人? (3.5)",
    date: "2018-09-15",
    url: "https://www.tongsir.net/blog/3",
    fullText: `今天離家時在電梯上與別家的外傭姐姐同Lift，想到山竹星期日可能襲港。也想起以前外傭姐姐就算是打幾大風，也不願留在家中而去搵姐妹相聚，心中就有一點傷感。

試代入她們的處境，相信不是不怕外面的風雨。而是留在家中，便會變成「又要番多一日工」的慘況（有可能是比在外面更可怕）。

在這個時刻要作個合「情」理的僱主，特別間屋大啲的，會否來個港菲文化交流派對給子女體驗，或是安全一點的，來個角色扮演大反轉，一家人給傭人來給她一份皇帝級服待禮物，給孩子學習及同理的最佳體會？

這是一個挑戰(好彩我依家無請工人)，屋企又唔大(要認衰仔今次只是挑機Mode)。不過去到綠楊的公園，我看見每年一度的家長排隊打蛇餅唔怕打風攞表格奇景，我應該說家長們都是對子女很有「情」嗎？我沒有答案。不過我希望香港的傭工們都能有經驗一個有「情」的星期天，不知大家的關心緊啲乜嘢呢？

畢竟我們的行為及思想，都正在反映我們的內在「情」況，我們的心有多與耶穌同一「情」況呢？`,
  },
  {
    id: "4",
    label: "4",
    title: "耶穌多說「理」? 還是有「情」人? (4)",
    date: "2018-09-19",
    url: "https://www.tongsir.net/blog/4",
    fullText: `基督教信仰經常強調「愛神」及「愛人」，可見「愛」實在是我們信仰的核心。然而，如何去「愛」，卻又很多時候，說不出所以然。的確，其實「愛」真的是「應該」講唔清楚的。正如人生中，若我們仔細察驗，原來大部份事情也是不能「言說」的，簡單如剛才吃過的「一粒糖有幾好食」，其實已經無法用言語去完全說明，在此可以看到言語、理性，其實有極大的限制。

然而一個人若要展現愛心，個人認為「同理心」就好像是「溫度計」的作用一樣。我們對人若沒有同理心，不能切身處地代入別人的位置與感受，口頭說愛，也是空口白話而已。缺乏「情感」的行動，就是鳴的鑼、響的鈸，那怕是如何偉大的事工，也會變成沒有「靈魂」的「事情」而已。

耶穌挑戰那位自小遵守律法而又關心「自己」永生的少年人，去變賣所有的，跟隨耶穌。我們當然可以理解為耶穌提出天國更嚴謹的標準，或是耶穌想指出財主難於捨棄財富的問題。但另一方面，耶穌不也是希望將他指向「非律法性地守規」，甚或耶穌也不希望他只機械性/行為性地變賣所有，祂渴望這個少青人，能夠整個人以「情」投入委身基督的關係之中。祂渴望這個少年的官，在「人不能」之下，被「愛(=神)」指引，「能」自然放下一切，跟隨基督，經驗上帝的大「能」。

耶穌用「情」生活，甚至關心人的「情緒、內心」狀況，比行為、守規更為重要。而當我們去回應世情時，關心的又是甚麼呢？

小弟在修讀神學的期間，曾讀過前中神院長余達心博士的一本著作，名為「聆聽：神學言說的開端」。十分慚愧，其實書中內容的細節已忘記得七七八八，但書名著實令我印象深刻。聆聽，確是進入別人世界的鑰匙，正如余院長在一篇訪問中提及：「該書以聆聽作主題就是要讀者先學習聆聽，放低自我，進入世界聆聽，然後返回聽神的聲音，再回應人的需要……」。

或許，我們應回歸基本，不以為自己就是知道所有真理、懂得正確去愛的人。讓我們先由聆聽開始，學習聆聽世界、了解別人，藉此我們可能發現，耶穌的教導，也許有時候與我們自以為認知的，並不一樣。`,
  },
  {
    id: "4.5",
    label: "4.5",
    title: "耶穌多說「理」? 還是有「情」人? (4.5)",
    date: "2018-09-21",
    url: "https://www.tongsir.net/blog/4",
    fullText: `(就當我是抽水吧)

「政府管治團隊的集體『無感』，才是最棘手的難題。」

政府高層管治團隊裡一直也不缺信徒在內，可見「無感」(無情/無同理) 不單是小數問題，並且影響深遠。

信徒事事以「理」分析，卻未能察覺自己在缺「情」的世界成長，生命中也未有敏銳「情緒」的能力，著實會為身邊的人帶來傷害而不自知。`,
  },
  {
    id: "5",
    label: "5",
    title: "耶穌多說「理」? 還是有「情」人? (5)",
    date: "2018-09-22",
    url: "https://www.tongsir.net/blog/5",
    fullText: `寫了這麼多(包括1,2,3,3.5, 4, 4.5)，只是想說明現今信徒缺乏的，不是不夠理性分析(當然也未必很足夠)，但這部份的培養也算是我們現代文化較為重視的部份。反而教會對「情感」的體會及認知，對同理心的訓練及培養，似乎有時比未信者的關注還不如。

上主是有「情」人

「我也聽見以色列人被埃及人苦待的哀聲，我也記念我的約。所以你要對以色列人說：我是耶和華，我要用伸出來的膀臂重重地刑罰埃及人，救贖你們脫離他們的重擔，不做他們的苦工。我要以你們為我的百姓，我也要做你們的神。」（出埃及記 6:4-7上 — 中文標準譯本）

耶穌是有「情」人

「耶穌看見眾人，就對他們動了憐憫之心，因為他們困苦流離，像羊沒有牧人那樣。」（馬太福音 9:36 — 中文標準譯本）

保羅也是有「情」的人

保羅對著「最出事」的哥林多教會，其實也在不住的提醒她們，對主內一家人時要有著極大相顧及同理之情：

「你用靈祝謝，那在座不通方言的人，既然不明白你的話，怎能在你感謝的時候說阿們呢？……在教會中，寧可用悟性說五句教導人的話，強如說萬句方言。」

「如果我能說人間和天使的各種殊言，卻沒有愛，我就成了嘈雜的鑼、鳴響的鈸……」

「我們知道『我們都有知識。』知識使人自我膨脹，但是愛能造就人。如果有人自以為知道了什麼，照著應該知道的，他還是不知道。」

難怪近代有不同的教牧提出教會急需要培訓信徒在「感受／情緒」上的能力。小弟見識少，但想起的就有已經有由學園傳道會同工發展的 Aphesis Group 事工、Rev. Peter Scazzero提倡的 Emotional Healthy Church 及 Dr. David Eckman 的Becoming What God Intended Ministry，都是渴望在教會中，重新更新信徒靈命的「情緒」部份。

以上課程不約而同的有探索原生甚或多代家庭歷史，以清理「不完美世界」對信徒影響的部份、亦有重新學習接觸感受、學習良好溝通的元素。

還記得過去幾年有幸在神學院裡分享Aphesis Group的課程時，自己也被其中一句說話震撼我的心：

「Our God is a very Emotional God（我們的上主乃是充滿情感/情緒的主）」

課程透過不同的活動，嘗試讓學員去進入耶穌、天父的心情，透過弟兄姊妹的互動，更深刻的體會上主對著祂的至愛(即是「你」跟「我」)，其實是滿著不能自己的激情。

想想耶穌為何選擇走上十字架之路，是因為祂計算清楚得失利害？是因為祂知道是對/正確之事？就是作為「大佬」，就應該「頂」咗佢？這不能理解之事，全是因為那是一份帶著極大激情之愛（有過因拍拖而有的荷爾蒙分泌失調的人應該比較明白），以致一個人能忍受十字架上如此的痛苦，而忘我地甘心走上。

而這些有關「情緒」的門徒造就課程為何對我如此吸引，當然是跟個人成長經驗有著莫大的關係，篇幅關係，留待下回繼續分享……`,
  },
  {
    id: "6",
    label: "6",
    title: "耶穌多說「理」? 還是有「情」人? (6)",
    date: "2019",
    url: "https://www.tongsir.net/blog/6",
    fullText: null,
  },
  {
    id: "7",
    label: "7",
    title: "耶穌多說「理」? 還是有「情」人? (7)",
    date: "2019",
    url: "https://www.tongsir.net/blog/7",
    fullText: null,
  },
  {
    id: "8",
    label: "8",
    title: "耶穌多說「理」? 還是有「情」人? (8)",
    date: "2019",
    url: "https://www.tongsir.net/blog/8",
    fullText: null,
  },
  {
    id: "9",
    label: "9",
    title: "耶穌多說「理」? 還是有「情」人? (9)",
    date: "2019-05-25",
    url: "https://www.tongsir.net/blog/9",
    fullText: null,
  },
  {
    id: "10",
    label: "10",
    title: "耶穌多說「理」? 還是有「情」人? (10)",
    date: "2019",
    url: "https://www.tongsir.net/blog/10",
    fullText: null,
  },
  {
    id: "11",
    label: "11",
    title: "耶穌多說「理」? 還是有「情」人? (11)",
    date: "2019-07-30",
    url: "https://www.tongsir.net/blog/11",
    fullText: null,
  },
  {
    id: "12",
    label: "12",
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
            《耶穌多說「理」？還是有「情」人？》系列
          </p>

          <div className="space-y-8">
            {articles.map((article, i) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
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
                    <span className="flex-shrink-0 min-w-[2.5rem] h-10 px-2 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold text-sm">
                      {article.label}
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

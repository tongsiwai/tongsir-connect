export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  date: string;
  content: string;
  series?: string;
  excerpt?: string;
}

export const blogArticles: BlogArticle[] = [
  {
    id: "1",
    slug: "jesus-reason-emotion-1",
    title: "耶穌多說「理」？還是有「情」人？ (1)",
    date: "2018-09-14",
    series: "耶穌多說「理」？還是有「情」人？",
    excerpt: "耶穌雖有運用智慧去「應付」那些要用律法去置死婦人之流，但祂不但沒有站在「自以為義手指指」之人的一方...",
    content: `耶穌雖有運用智慧去「應付」那些要用律法去置死婦人之流，但祂不但沒有站在「自以為義手指指」之人的一方，祂其實也沒有站在「公義律法」的一邊(其實這兩邊是不同的)。因為祂的心不在這裡，祂心繫在「人(那婦人)」身上。

那份愛，包含著許多的感受與情緒(憐憫、關懷、擔憂)，故此，耶穌個是「有感有情」的人。

難怪《The Emotionally Healthy Church》的作者Peter Scazzero 提出「我們是一個完整的人，是按照神的形像造的；否認這個真理的任何方面，都會帶來長期的災難性後果，特別是傾向把情感健康和靈性健康分離。」`
  },
  {
    id: "2",
    slug: "jesus-reason-emotion-2",
    title: "耶穌多說「理」？還是有「情」人？ (2)",
    date: "2018-09-14",
    series: "耶穌多說「理」？還是有「情」人？",
    excerpt: "「感受」是上主創造人類的一重要部份，我們的主也是滿有豐富情感的一位上帝...",
    content: `「感受」是上主創造人類的一重要部份，我們的主也是滿有豐富情感的一位上帝。

耶穌是個大忙人，然而祂忙著的，都是與人的需要有關的事情。我相信祂看治病、趕鬼等等行動，絕對不是一個「事工」，而只是帶著極大的感受與憐憫去體會人類的困境的回應。或者說祂被自己的感受(愛)驅動，而帶著強烈的情感以行動去回應，我相信也不為過。

在祂與門徒忙極之時，肚餓了，門徒竟忘記準備食物。「那時，耶穌在安息日，從麥地經過，祂的門徒餓了，就掐起麥穗來吃。」(太12:1)

耶穌選擇重視「人」的需要，祂關心人比律法更多。祂沒有可能不知道律法的要求，按現代的說法，那絕對是「偷雞」。我們是否必要地理性為耶穌說出一個合「理」的解說？這要留待釋經學者去做，但我傾向接受耶穌是重「人情」過於律法之對錯。

我們作為耶穌的追隨者，我與耶穌的「感受」層次，又有多同步呢？還是我們有機會連自己對自己的情緒「無感」也不自知呢？(就像主觀的人不覺得自己主觀，其實也是十分普遍的)

又引用一下近日翻睇的一本好書《Becoming Who God Intended》Dr. David Eckman 說：「Probably the most important use of emotions with regard to the Bible is often overlooked. The principle is as follows: Emotions do not authenticate truth, but emotions do authenticate our understanding and integration of truth.」`
  }
  // ... 繼續其他篇章
];

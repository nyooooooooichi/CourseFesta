const chapters=[
{name:"データ分析",range:[1,6],icon:"▥",desc:"確率・期待値・表計算"},
{name:"広告・ポスター・キャッチコピー",range:[7,12],icon:"▣",desc:"広告の仕組みと表現"},
{name:"辞書編纂・語彙・言語表現",range:[13,20],icon:"文",desc:"言葉の意味と使い方"},
{name:"発想法・文章構成・レポート",range:[21,28],icon:"✎",desc:"考えを整理し文章にする"},
{name:"声・コミュニケーション・敬語",range:[29,38],icon:"◉",desc:"伝え方・聞き方・敬語"},
{name:"コースフェスタ全体",range:[39,44],icon:"★",desc:"授業・展示・活動の振り返り"}
];
const Q=(id,ch,type,q,a,opts=[],hint="",multi=0)=>({id,ch,type,q,a,opts,hint,multi});
const questions=[
Q(1,0,"choice","毎回引いた玉を箱に戻して抽選を行う方式で、過去の結果に影響されず、次の1回の当選確率が常に一定である性質を何というか?","完全確率（独立試行）",["完全確率（独立試行）","大数の法則","期待値","サンクコスト"]),
Q(2,0,"text","試行回数が少ないと結果に偏りが出ますが、試行回数を数百〜数千回と増やしていくと、実際の当選率が理論上の確率（例:1/99 ≒ 1.01%）に近づいていく統計上の法則を何というか?","大数の法則",[],"大数の法則"),
Q(3,0,"choice","「1/100」の確率を再現する抽選箱を作る場合、全体を100個にするには「ハズレの白玉」と「当たりの色玉」をそれぞれ何個ずつ用意すればよいか?","白玉99個、色玉1個",["白玉99個、色玉1個","白玉100個、色玉1個","白玉98個、色玉2個","白玉1個、色玉99個"]),
Q(4,0,"text","過去に投じた金銭や時間・努力への執着から、「ここまでやったのだから元を取るまでやめられない」と合理的な判断ができなくなる心理的傾向を何というか?","サンクコスト（埋没費用）の誤謬",[],"サンクコスト／埋没費用"),
Q(5,0,"text","ギャンブルにおいて、1回のプレイで得られると期待される平均的な戻り額（または割合）を示し、長期的にはプレイヤーにとってマイナスになる数値を何というか?","期待値",[],"期待値"),
Q(6,0,"choice","Googleスプレッドシートで、データ全体の当選回転数の平均値を自動計算する関数は何か?","AVERAGE関数",["AVERAGE関数","SUM関数","COUNT関数","MAX関数"]),
Q(7,1,"text","人が広告を見てから行動を起こすまでの心理プロセスを表す「AIDMA（アイドマ）の法則」の5要素（日本語）を順に答えなさい。","注目・関心・欲望・記憶・行動",[],"注目→関心→欲望→記憶→行動"),
Q(8,1,"text","ポスターにおいて、瞬間的に読み手の目を捕らえ、強い印象を与えることを目的とした短い言葉や文を何というか?","キャッチフレーズ（キャッチコピー）",[],"キャッチコピー"),
Q(9,1,"text","ポスターにおいて、伝えたい内容の詳細や日時・場所などを補足し、読み手に理解させる役割を持つ文章を何というか?","ボディコピー",[],"ボディコピー"),
Q(10,1,"text","ポスター制作の初期段階で行う、「誰に届けるか」「何に力点を置くか」を明確にする作業を何というか?","アピールポイント（またはターゲット）の検討",[],"ターゲット／アピールポイント"),
Q(11,1,"text","ポスターの視覚要素（写真やイラスト）と文章要素（コピー）が引き立て合い、効果を高め合う関係を何効果というか?","相乗効果（シナジー効果）",[],"相乗効果"),
Q(12,1,"text","「最後の焼き蛤」のように、迷っている来場者の背中を押して行動（Action）を起こさせるコピーで活用された表現手法は何か?","限定（希少性の訴求）",[],"限定／希少性"),
Q(13,2,"text","国語辞典の項目を構成する主な3つの基本要素を答えなさい。","見出し語・語釈（意味解説）・例文",[],"見出し語、語釈、例文の3つ"),
Q(14,2,"text","名詞の末尾に「る」を付けることで、新しい動作を表す単語を作り出す手法（例:「パチる」「沼る」）を何というか?","動詞化（または命名）",[],"動詞化"),
Q(15,2,"text","辞書に載っている既存の言葉に、自分たちの体験や仲間内での新しい意味・解釈を付け加える作業を何というか?","新しい意味・用法の追加（転用）",[],"転用／意味・用法の追加"),
Q(16,2,"text","特定のグループや界隈の中だけで使われる専門的・限定的な用語や流行語のことを何というか?","隠語・スラング（または業界用語・ニッチな用語）",[],"隠語／スラング"),
Q(17,2,"text","与謝野晶子の歌集『みだれ髪』にちなみ、髪が乱れている状態を表す新語の見出し語例（教科書ヒント）は何か?","与謝野る（よさのる）",[],"与謝野る"),
Q(18,2,"text","辞書の語釈を書く際、実際の使われ方や文脈を示すために添える文章を何というか?","例文",[],"例文"),
Q(19,2,"text","「あひるご飯（朝昼兼用の食事）」のように、複数の単語を短縮したり合成したりして新しい言葉を作る手法を何というか?","略語（または合成・省略）",[],"略語／合成／省略"),
Q(20,2,"text","小論文などの改まった場面で用いるため、「すごく」を「著しく」、「確かめる」を「確認する」と言い換える言語変換を何というか?","和語から漢語への言い換え（改まった書き言葉への変換）",[],"和語から漢語"),
Q(21,3,"text","カード（付箋）に1つのアイデアを書き出し、似た性質ごとにグループ化して分類・命名・整理していく発想法を何というか?","KJ法",[],"KJ法"),
Q(22,3,"text","情報を「抽象から具体へ」と樹木のように枝分かれさせて整理し、論理構成を作る発想法を何というか?","ツリー図",[],"ツリー図"),
Q(23,3,"text","小論文やレポートの一般的な文章構成である「三部構成」の3ステップを答えなさい。","はじめ・なか・おわり（序論・本論・結論）",[],"序論・本論・結論"),
Q(24,3,"choice","小論文の構成の型（頭括型・尾括型・双括型）のうち、冒頭と最後の両方で意見を述べ、まとまりを与える型は何か?","双括型",["頭括型","尾括型","双括型"]),
Q(25,3,"text","レポートにおいて、個人の感情や体験（主観）と区別され、第三者が検証できる客観的な数値や事実を何というか?","エビデンス（客観的根拠・データ）",[],"エビデンス"),
Q(26,3,"text","文章を執筆する前に、各段落の役割や論理の流れを一覧化した「設計図」のことを何というか?","構成メモ（またはアウトライン）",[],"構成メモ／アウトライン"),
Q(27,3,"text","自己PRで自分の強みを証明するために記述する、過去の具体例や学んだ体験談を何というか?","エピソード",[],"エピソード"),
Q(28,3,"text","自分の主張を展開する際、あえて相手の異論や反論を一度受け止める表現技法（「たしかに〜、しかし...」）を何というか?","譲歩（じょうほ）",[],"譲歩"),
Q(29,4,"text","相手の話を聞く際、自分の先入観を捨てて相手の気持ちや言葉に耳を傾けるコミュニケーション技法を何というか?","傾聴（アクティブリスニング）",[],"傾聴"),
Q(30,4,"text","実況やアナウンスにおいて、セリフの直前に意識的に置くことで聴衆の注目を集める無音の間隔を何というか?","間（ま）",[],"間"),
Q(31,4,"multi","現代の敬語体系（5分類）において、「尊敬語」「謙譲語」「丁寧語」に加えて分類される2つは何か?","丁重語・美化語",["丁重語","美化語","尊敬語","謙譲語","丁寧語"],"2つ選択",2),
Q(32,4,"choice","話し手ではなく、動作を受ける相手を高める敬語（例:「お送りする」「伺う」）の種類は何か?","謙譲語",["尊敬語","謙譲語","丁寧語","美化語"]),
Q(33,4,"choice","動作の主体（相手や目上の人）を高める敬語（例:「おっしゃる」「いらっしゃる」）の種類は何か?","尊敬語",["尊敬語","謙譲語","丁寧語","美化語"]),
Q(34,4,"choice","社外の人に対して自分の上司（山田部長）について話す際、「山田部長はおられますか」ではなくどう表現すべきか?","部長の山田は不在にしております（または出張しております）",["部長の山田は不在にしております","山田部長様はいらっしゃいます","山田部長はおられます","部長の山田がおられます"]),
Q(35,4,"text","「お見えになられる」のように、尊敬語の形式を二重に重ねて使ってしまう不自然な敬語表現を何というか?","二重敬語（過剰な敬語）",[],"二重敬語"),
Q(36,4,"text","面接や発表の場で、相手に誠実で良い印象を与えるための視線に関する基本動作は何か?","相手の目（または顔）を見て話す・聞く（目線接触）",[],"相手の目／顔を見る"),
Q(37,4,"text","抽選の状況や人間の感情の動きをその場でリアルタイムにストーリー化して伝える実況技法を何というか?","ナラティブ（語り・ライブ実況）",[],"ナラティブ"),
Q(38,4,"text","議論やディベートにおいて、相手チームが述べた主張の不備や論理の飛躍を突いて反論する段階を何というか?","反駁（はんばく）",[],"反駁"),
Q(39,5,"multi","スポーツコースの「スポーツ体験ブース」で体験できるスポーツ種目を3つすべて答えなさい。","ゴルフ・ラグビー・アルティメット",["ゴルフ","ラグビー","アルティメット","バスケットボール","バレーボール"],"3つ選択",3),
Q(40,5,"text","ビジネスコースが販売・発表を行う地元のパン屋さんの店名は何ですか?","自家製酵母ぱん むぎ",[],"自家製酵母ぱん むぎ"),
Q(41,5,"multi-manual","家庭コースが「あらさわふるさと公園」の食堂向けに考案・試食提供を行ったメニューやワンハンドスイーツのうち、2つを答えなさい。","オマエザキンパ・青パパイヤ入り肉じゃが・ハニーマスタード添えチキン・揚げさつまパン",["オマエザキンパ","青パパイヤ入り肉じゃが","ハニーマスタード添えチキン","揚げさつまパン"],"2つ選択。正答の組み合わせは配布資料で確認してください。",2),
Q(42,5,"text","文系コースが実施する発表・展示のテーマは何ですか?","はにわ・古墳の模型作成（日本史探究の授業紹介および古墳・埴輪の探究発表）",[],"はにわ／古墳"),
Q(43,5,"text","理系コース「Re:color of Omaezaki」にて、Tシャツの草木染めに使用された素材は何ですか?","御前崎市の農家協力のもと集めた捨てられる農作物の蔓・茎・葉",[],"蔓・茎・葉を答える"),
Q(44,5,"text","スポーツコースのブースにて、スポーツ体験に加えて来場者向けに用意されている自作の飲み物は何ですか?","自作のスポーツドリンク",[],"スポーツドリンク")
];
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
let state=JSON.parse(localStorage.getItem("cf-progress")||'{"answers":{},"wrong":[]}');
let session=[],pos=0,locked=false,view="home",selectedChapter=null,testMode=false,testAnswers=[],sessionResults=[];
function save(){localStorage.setItem("cf-progress",JSON.stringify(state));updateStats()}
function norm(s){return String(s||"").toLowerCase().replace(/[^\p{L}\p{N}]/gu,"")}
function isCorrect(q,ans){if(q.type==="multi-manual")return null;if(q.type==="multi"){return Array.isArray(ans)&&ans.length===q.multi&&q.a.split("・").every(x=>ans.includes(x))}if(q.type==="choice")return ans===q.a;let v=norm(ans);if(!v)return false;const id=q.id;const rules={1:["独立試行"],2:["大数の法則"],3:["1/100","0.01","100分の1"],4:["サンクコスト","埋没費用"],5:["期待値"],6:["average"],7:["aidma"],8:["キャッチコピー","キャッチフレーズ"],9:["ボディコピー"],10:["アピールポイント","ターゲット"],11:["相乗効果","シナジー"],12:["限定","希少性"],13:["見出し語","語釈","例文"],14:["動詞化"],15:["転用","新しい意味","用法"],16:["隠語","スラング","業界用語"],17:["与謝野る","よさのる","よさの"],18:["例文"],19:["略語"],20:["漢語"],21:["kj法"],22:["ツリー図"],23:["序論","本論","結論"],24:["双括型"],25:["エビデンス"],26:["構成メモ","アウトライン"],27:["エピソード"],28:["譲歩"],29:["傾聴","アクティブリスニング"],30:["間","ま"],31:["美化語","丁重語"],32:["謙譲語"],33:["尊敬語"],34:["部長の山田","不在"],35:["二重敬語"],36:["目","顔"],37:["ナラティブ"],38:["反駁"],40:["自家製酵母ぱん","むぎ"],42:["はにわ","埴輪","古墳"],43:["蔓","つる","茎","葉"],44:["スポーツドリンク"]};if(id===7)return v.includes("aidma")||v.includes(norm(q.a));if(id===13)return ["見出し語","語釈","例文"].every(k=>v.includes(norm(k)));if(id===23)return ["序論","本論","結論"].every(k=>v.includes(norm(k)));if(id===42)return (v.includes("古墳")&&(v.includes("はにわ")||v.includes("埴輪")));if(id===43)return ["蔓","茎","葉"].every(k=>v.includes(norm(k)));return (rules[id]||[]).some(k=>v.includes(norm(k)))};

const explanations={
1:"毎回箱に戻すため、前の抽選結果が次の抽選に影響しません。このような試行を独立試行といいます。",
2:"試行を何度も繰り返すと、相対度数は理論上の確率に近づいていきます。これが大数の法則です。",
3:"色玉は全部で100個中1個なので、確率は1/100（1%）です。",
4:"すでに支払って回収できない費用がサンクコスト（埋没費用）です。それに引きずられて判断することをサンクコストの誤謬といいます。",
5:"期待値は、各結果の値にその起こる確率を掛けて足し合わせた平均的な値です。",
6:"AVERAGE関数は、指定したセル範囲に含まれる数値の平均を求めます。",
7:"AIDMAはAttention（注目）、Interest（関心）、Desire（欲望）、Memory（記憶）、Action（行動）の頭文字です。",
8:"キャッチコピー／キャッチフレーズは、短い言葉で人の注意を引き、印象や魅力を伝える表現です。",
9:"ボディコピーは、キャッチコピーだけでは伝えきれない内容や特徴を詳しく説明する本文です。",
10:"ポスターでは、誰に向けて何を伝えるのか、つまりターゲットとアピールポイントを明確にすることが重要です。",
11:"複数の要素を組み合わせ、単独のとき以上の効果を生むことを相乗効果（シナジー効果）といいます。",
12:"数量や期間を限ることで、手に入りにくさや今行動する価値を強調する方法です。",
13:"見出し語は調べる言葉、語釈はその意味の説明、例文は実際の使い方を示す文です。",
14:"名詞などを動詞として使うようにする言葉の変化を動詞化といいます。",
15:"既存の言葉に新しい意味や使い方を持たせることを、意味・用法の転用といいます。",
16:"隠語やスラングは、特定の集団・仲間の間で使われることが多い言葉です。",
17:"「与謝野る」は、人名などをもとに動詞として使う形を作った、動詞化の例です。",
18:"例文は、言葉が文の中でどのように使われるかを具体的に示します。",
19:"略語は、長い言葉の一部を省いて短くした言葉です。",
20:"漢語は音読みを中心とする語で、和語より改まった書き言葉に使われることがあります。",
21:"KJ法は、情報をカードなどに書き出し、似た内容をグループ化して整理する発想法です。",
22:"ツリー図は、大きなテーマから要素を枝分かれさせ、関係や階層を整理する図です。",
23:"序論でテーマや問題を示し、本論で内容を展開し、結論でまとめます。",
24:"双括型は、文章の最初と最後の両方に中心となる主張を置く構成です。",
25:"エビデンスは、主張が妥当であることを支える客観的な根拠やデータです。",
26:"構成メモ（アウトライン）は、書き始める前に内容と順序を整理する設計図です。",
27:"エピソードは、強みや主張を具体的な経験・出来事によって裏付けるものです。",
28:"譲歩は、相手の意見を一度認めたうえで、自分の主張を述べる表現方法です。",
29:"傾聴は、相手の話を注意深く聞き、理解しようとする姿勢です。アクティブリスニングとも呼ばれます。",
30:"間を取ることで、聞き手が内容を理解する時間を作り、言葉を強調したり印象を残したりできます。",
31:"美化語は「お水」「お花」のように、言葉を上品に表現する敬語です。",
32:"謙譲語は、自分や自分側の動作をへりくだって表し、相手を立てる敬語です。",
33:"尊敬語は、相手や話題の人物の動作・状態を高めて表す敬語です。",
34:"社外の人に自分の上司を伝えるときは、社内の役職名に「様」を付けず、「部長の山田」のように表します。",
35:"同じ種類の敬語を不必要に重ねた表現を二重敬語といいます。「おっしゃられる」はその例です。",
36:"相手の目や顔に自然に視線を向けると、関心や誠実さが伝わりやすくなります。",
37:"ナラティブは、出来事や経験を語りとして伝える表現です。実況では状況を物語るように伝えます。",
38:"反駁は、相手の主張に対して根拠を示しながら反論することです。",
39:"この問題は、コースフェスタで扱われた3競技（ゴルフ・ラグビー・アルティメット）を確認する問題です。",
40:"紹介されたパンのお店は「自家製酵母ぱん むぎ」です。",
41:"この設問は正答の組み合わせが未確定のため、配布資料で該当する2つを確認してください。",
42:"古墳は古代の墓で、埴輪（はにわ）は古墳の周囲などに並べられた素焼きの造形物です。",
43:"蔓・茎・葉など、通常は捨てられる農作物の部分を活用する取り組みです。",
44:"スポーツドリンクは、水分や電解質などを補給するための飲料です。"
};
const questionHints={"1":"抽選のたびに箱の中身を元に戻すので、前回の結果は次の確率を左右しません。確率が毎回同じになる考え方です。","2":"短い期間では偏っても、試行を十分に繰り返すと、観測された割合は理論上の値に近づいていきます。","3":"当たりは全体の100分の1。全体の数から当たりを1つ引いた残りがハズレです。","4":"「もう費やした分が惜しいから続けよう」と考えてしまうとき、判断に影響しているのは過去に回収できない費用です。","5":"結果ごとの獲得額と、その結果が起きる確率を組み合わせて計算する、長期的な平均の見込みです。","6":"関数名は英語で「平均」を意味する単語。合計を求める関数とは違います。","7":"5段階の頭文字は A・I・D・M・A。広告を見た直後から、行動に移るまでの順番を思い出しましょう。","8":"ポスターを遠くから見ても一瞬で印象に残る、短くて目を引くメインの言葉です。","9":"メインの短い言葉だけでは伝わらない情報を補う、ポスターの説明部分。日時や場所などもここに書きます。","10":"制作前に、届けたい相手の属性を決めることと、作品で特に伝えたい魅力を絞ることが大切です。","11":"写真と文章が別々に働くより、組み合わせることで互いの魅力を引き立て、効果が大きくなる関係です。","12":"「今しかない」「残りわずか」と伝えると、いつでも手に入るものより価値が高く感じられます。その心理を利用します。","13":"辞書の説明を作るとき、まず言葉そのものを掲げ、その意味を書き、最後に実際の使い方を示します。","14":"名詞などの言葉を、語尾に「る」を付けて「〇〇する」という行動の形に変える工夫です。","15":"元の言葉の意味をそのまま使うのではなく、別の場面や仲間内で新たな意味を持たせて使います。","16":"特定の集団内では通じるけれど、一般の人には意味が分かりにくい言葉。くだけた流行表現も含みます。","17":"歌人の名前をヒントに、名前を動詞のように使う新語です。髪の状態を表す言い方として考えられました。","18":"辞書の意味だけでなく、その言葉を文章中でどう使うかが分かる具体的な文です。","19":"長い語を短くしたり、複数の語の一部を組み合わせたりして、呼びやすい新語を作ります。","20":"日常的で柔らかい表現を、文章や公的な場面に合う少し硬い表現に置き換える方法です。","21":"アイデアをカードに一つずつ書き、似たもの同士を集めて関係性を整理する発想整理の手法です。提唱者のイニシャルが名前になっています。","22":"中心となるテーマを上に置き、下へ細かい要素を分岐させて整理します。木の枝のような形をイメージしてください。","23":"文章の流れは、導入でテーマを示し、中心部分で説明・論証し、最後にまとめます。それぞれの呼び名を考えましょう。","24":"結論を最初に提示して、最後にも同じ主張を確認する。意見を両端から挟む構成です。","25":"主張を裏付ける、調査結果や統計など、他の人も確かめられる客観的な材料を指します。","26":"執筆前に段落ごとの内容や順番を書き出しておく、本文を書くための設計図です。","27":"自己PRの強みを「自分はこうです」と言うだけでなく、実際に経験した出来事を挙げて説得力を持たせます。","28":"相手の意見にも一理あると認めたうえで、自分の主張を続ける。「確かに〜。しかし〜」の形です。","29":"ただ聞き流すのではなく、相手の言葉・感情・意図を理解しようとして注意深く聞く姿勢です。","30":"話し続けるのではなく、言葉の前に短い沈黙を挟むことで、次の発言を際立たせます。","31":"残る2分類のうち、片方は自分側の話を丁寧に述べる表現、もう片方は「お水」のように語を上品にする表現です。","32":"自分の動作を低く表すことで、相手を立てます。「伺う」「お送りする」などが代表例です。","33":"目上の人や相手の動作を高めて表します。「おっしゃる」「いらっしゃる」の仲間です。","34":"社外の相手には、自分の会社の上司を高めて呼ぶ必要はありません。役職を名前の前に置き、社内側の状況として伝えます。","35":"敬意を表す形を同じ動作に重ねてしまうこと。例えば「お〜になる」と「〜られる」を重ねた形です。","36":"視線を避け続けるのではなく、相手の顔のあたりへ自然に向けること。見つめ続ける必要はありません。","37":"実況を単なる事実の羅列にせず、出来事や気持ちの動きを物語のように伝える「語り」の考え方です。","38":"相手の意見をただ否定するのではなく、主張の弱点や根拠の不足を示して論理的に返します。","39":"3種のうち、球を打つ競技、楕円球を使う競技、フライングディスクを投げ合う競技が含まれます。","40":"店名は「自家製酵母ぱん」に続く、ひらがな2文字。麦を連想する言葉です。","41":"選択肢には、御前崎らしい名前の巻き寿司、青パパイヤを使った家庭料理、鶏料理、さつまいものパン系スイーツが登場します。配布資料の料理名を照合してください。","42":"日本史に関係する、古代の墓とその周囲に置かれた土製の像・造形物を題材にした展示です。","43":"染色に使ったのは作物の食べる部分だけではありません。植物の体を支える部分や、伸びる部分、広がる部分の3つに注目してください。","44":"運動中に汗で失われる水分と塩分などを補給するため、コースで手作りした飲み物です。"}
function explain(q){return explanations[q.id]||("この問題の重要語句は「"+q.a+"」です。意味と使い方を確認しましょう。")}

function updateStats(){let vals=Object.values(state.answers),done=vals.length,correct=vals.filter(x=>x.correct===true).length,rate=done?Math.round(correct/done*100):0;$("#stat-done").textContent=done;$("#stat-rate").textContent=done?rate+"%":"—";$("#stat-review").textContent=state.wrong.length;$("#done-bar").style.width=done/44*100+"%";$("#rate-bar").style.width=rate+"%";$("#review-bar").style.width=state.wrong.length/44*100+"%";$("#review-count").textContent=state.wrong.length;$("#result-done").textContent=done;$("#result-correct").textContent=correct;$("#result-rate").textContent=done?rate+"%":"—";renderReview();renderResults()}
function showView(v){view=v;$$(".view").forEach(x=>x.classList.remove("active"));$("#view-"+v).classList.add("active");$$(".nav").forEach(x=>x.classList.toggle("active",x.dataset.view===v));$("#page-title").textContent=({home:"ダッシュボード",study:"問題演習",review:"間違えた問題",results:"学習記録"})[v];if(v==="home")renderChapters()}
function renderChapters(){$("#chapter-grid").innerHTML=chapters.map((c,i)=>{let ids=questions.filter(q=>q.ch===i),done=ids.filter(q=>state.answers[q.id]).length;return '<button class="chapter" data-ch="'+i+'"><div class="chapter-top"><span class="chapter-num">CHAPTER 0'+(i+1)+'</span><span class="chapter-icon">'+c.icon+'</span></div><h4>'+c.name+'</h4><p>'+c.desc+'</p><div class="chapter-foot"><span>'+done+' / '+ids.length+' 問 解答済み</span><span>'+Math.round(done/ids.length*100)+'%</span></div><div class="mini-track"><i style="width:'+done/ids.length*100+'%"></i></div></button>'}).join("");$(".chapter").forEach(b=>b.onclick=()=>showChapterModes(+b.dataset.ch))}function showChapterModes(ch){const panel=$("#chapter-mode-panel");const chapter=chapters[ch];const chapterQs=questions.filter(q=>q.ch===ch);const choiceQs=chapterQs.filter(q=>q.type==="choice"||q.type.startsWith("multi"));const writtenQs=chapterQs.filter(q=>q.type==="text");panel.classList.remove("hidden");panel.innerHTML='<div class="section-head"><div><div class="eyebrow">CHAPTER 0'+(ch+1)+' / PRACTICE MODE</div><h3>'+chapter.name+' — 出題形式を選択</h3></div><button class="text-btn" id="close-chapter-modes">閉じる ×</button></div><div class="practice-grid chapter-mode-grid"><button class="practice-card" id="chapter-choice" '+(choiceQs.length?"":"disabled")+'><span class="practice-icon">A</span><span class="practice-copy"><strong>選択問題</strong><small>選択式・複数選択式 '+choiceQs.length+'問</small></span><span class="practice-arrow">→</span></button><button class="practice-card" id="chapter-written" '+(writtenQs.length?"":"disabled")+'><span class="practice-icon written">✎</span><span class="practice-copy"><strong>記述問題</strong><small>自分で答えを書く問題 '+writtenQs.length+'問</small></span><span class="practice-arrow">→</span></button></div>';$("#close-chapter-modes").onclick=()=>{panel.classList.add("hidden");panel.innerHTML=""};$("#chapter-choice").onclick=()=>{if(choiceQs.length)startSession(choiceQs,"第"+(ch+1)+"章："+chapter.name+"（選択問題）",false)};$("#chapter-written").onclick=()=>{if(writtenQs.length)startSession(writtenQs,"第"+(ch+1)+"章："+chapter.name+"（記述問題）",false)};panel.scrollIntoView({behavior:"smooth",block:"nearest"})}
function startSession(qs,label,shuffle=true){testMode=false;testAnswers=[];sessionResults=[];session=[...qs];if(shuffle)session.sort(()=>Math.random()-.5);pos=0;selectedChapter=label;$("#study-mode-label").textContent=label;$("#session-title").textContent=label;$("#session-total").textContent=session.length;showView("study");renderQuestion()}
function startExam(){testMode=true;testAnswers=[];sessionResults=[];session=[...questions].sort(()=>Math.random()-.5);pos=0;selectedChapter="総合テスト";$("#study-mode-label").textContent="テスト形式";$("#session-title").textContent="総合テスト";$("#session-total").textContent=session.length;showView("study");renderQuestion()}
function renderQuestion(){locked=false;let q=session[pos];if(!q){finishSession();return}$("#session-current").textContent=pos+1;$("#session-bar").style.width=pos/session.length*100+"%";$("#session-progress").style.width=pos/session.length*100+"%";$("#question-chapter").textContent="第"+(q.ch+1)+"章 / "+chapters[q.ch].name;$("#question-number").textContent="QUESTION "+String(q.id).padStart(2,"0")+" / 44";$("#question-type").textContent=q.type.startsWith("multi")?"複数選択":q.type==="choice"?"選択問題":"記述問題";$("#question-text").textContent=q.q;$("#question-hint").textContent=questionHints[q.id]||"問題文の重要な言葉に注目しましょう。";$("#question-hint").classList.add("hidden");$("#question-hint").style.display="none";$("#hint-btn").classList.toggle("hidden",testMode);$("#hint-btn").style.display=testMode?"none":"inline-flex";$("#hint-btn").textContent="💡 ヒントを見る";$("#hint-btn").setAttribute("aria-expanded","false");$("#unknown-btn").textContent=testMode?"未回答で次へ":"わからない（無回答）";$("#feedback").className="feedback hidden";$("#answer-btn").classList.remove("hidden");$("#answer-btn").style.display="";$("#next-btn").classList.add("hidden");$("#next-btn").style.display="none";$("#next-btn").textContent="次の問題へ →";$("#unknown-btn").disabled=false;let area=$("#answer-area");if(q.type==="choice"||q.type.startsWith("multi")){const displayOptions=[...q.opts];for(let i=displayOptions.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[displayOptions[i],displayOptions[j]]=[displayOptions[j],displayOptions[i]];}area.innerHTML='<div class="options">'+displayOptions.map((o,i)=>'<label class="option"><input type="'+(q.type==="choice"?"radio":"checkbox")+'" name="answer" value="'+o+'"><span>'+String.fromCharCode(65+i)+'.</span>'+o+'</label>').join("")+'</div>';$$(".option input").forEach(inp=>inp.onchange=()=>{if(q.type==="choice")$$(".option").forEach(x=>x.classList.remove("selected"));inp.closest(".option").classList.toggle("selected",inp.checked)})}else{area.innerHTML='<textarea class="answer-input" id="written-answer" placeholder="ここに答えを入力..."></textarea>'}}
function submitAnswer(){if(locked)return;let q=session[pos],ans;if(q.type==="choice"){ans=$('input[name="answer"]:checked')?.value}else if(q.type.startsWith("multi")){ans=$$('input[name="answer"]:checked').map(x=>x.value);if(ans.length!==q.multi){alert(q.multi+"つ選択してください。");return}}else ans=$("#written-answer").value.trim();if(!ans||Array.isArray(ans)&&ans.length===0){alert("回答を入力・選択してください。");return}let correct=isCorrect(q,ans);locked=true;if(testMode){testAnswers[pos]={answer:ans,correct};$("#answer-btn").classList.add("hidden");$("#answer-btn").style.display="none";$("#next-btn").classList.remove("hidden");$("#next-btn").style.display="inline-flex";$("#next-btn").textContent=pos===session.length-1?"採点して結果を見る →":"次の問題へ →";$("#unknown-btn").disabled=true;return;}sessionResults[pos]=correct;state.answers[q.id]={answer:ans,correct,at:Date.now()};if(correct===false&&!state.wrong.includes(q.id))state.wrong.push(q.id);if(correct===true)state.wrong=state.wrong.filter(x=>x!==q.id);save();let fb=$("#feedback");fb.className="feedback "+(correct===true?"good":"bad");if(correct===null){fb.innerHTML='<strong>回答を記録しました</strong>この問題は正答の組み合わせを資料で確認する必要があるため、自分で採点してください。<br><b>確認する内容：</b>'+q.a+'<br>復習リストには自動追加していません。'}else if(correct){fb.innerHTML='<strong>正解です！</strong>よくできました。<br><b>解説：</b>'+explain(q)}else{fb.innerHTML='<strong>不正解です</strong><br><b>解説：</b>'+explain(q)+'<br>正解を確認して覚えましょう。'}if(correct!==null&&(q.type==="choice"||q.type==="multi")){$$(".option").forEach(label=>{const input=label.querySelector("input");const isAnswer=q.type==="choice"?input.value===q.a:q.a.split("・").includes(input.value);if(isAnswer)label.classList.add("is-correct-answer");else if(input.checked)label.classList.add("is-wrong-answer");input.disabled=true})}
if(correct===true){fb.classList.add("answer-correct");fb.insertAdjacentHTML("afterbegin",'<div class="result-status"><span class="result-mark">✓</span><span><b>正解！</b><small>その答えで合っています</small></span></div>')}else if(correct===false){fb.classList.add("answer-incorrect");fb.insertAdjacentHTML("afterbegin",'<div class="result-status"><span class="result-mark">×</span><span><b>不正解</b><small>正しい答えを確認しましょう</small></span></div>');}else{fb.classList.add("answer-review")}
$("#answer-btn").classList.add("hidden");$("#answer-btn").style.display="none";$("#next-btn").classList.remove("hidden");$("#next-btn").style.display="inline-flex";$("#unknown-btn").disabled=true}
function nextQuestion(){if(pos>=session.length-1){finishSession();return;}pos++;renderQuestion()}
function finishSession(){let main=$("#view-study");if(testMode){const graded=testAnswers.filter(x=>x&&x.correct!==null);const score=graded.filter(x=>x.correct===true).length;const unanswered=session.length-testAnswers.filter(Boolean).length;const max=session.filter(q=>q.type!=="multi-manual").length;const rate=max?Math.round(score/max*100):0;main.innerHTML='<div class="exam-result"><div class="eyebrow">TEST COMPLETED</div><h2>テスト終了</h2><p>最後までお疲れさまでした。</p><div class="exam-score"><strong>'+score+'</strong><span> / '+max+' 点</span></div><div class="exam-rate">'+rate+'%</div><div class="exam-result-detail"><span>出題数 '+session.length+'問</span><span>未回答 '+unanswered+'問</span><span>採点対象外 '+(session.length-max)+'問</span></div><p class="exam-note">テスト中は正解・解説・ヒントを表示していません。今回のテスト結果は通常の学習記録には加算されません。</p><button class="primary" id="finish-home">ダッシュボードへ戻る →</button></div>';$("#finish-home").onclick=()=>{testMode=false;location.reload()};return;}const graded=sessionResults.filter(x=>x===true||x===false);const score=graded.filter(x=>x===true).length;const max=graded.length;const rate=max?Math.round(score/max*100):0;const excluded=session.length-max;main.innerHTML='<div class="study-main" style="max-width:700px;margin:35px auto;text-align:center"><div class="eyebrow">SESSION COMPLETED</div><h2>今回の学習は終了です。</h2><p class="muted">お疲れさまでした。今回の学習結果です。</p><div class="exam-score"><strong>'+score+'</strong><span> / '+max+' 点</span></div><div class="exam-rate">'+rate+'%</div><div class="exam-result-detail"><span>出題数 '+session.length+'問</span><span>採点対象 '+max+'問</span><span>対象外・無回答 '+excluded+'問</span></div><p class="muted">正答率は自動採点できた回答のみで計算しています。自己確認問題・無回答は含みません。</p><button class="primary" id="finish-home">ダッシュボードへ戻る →</button></div>';$("#finish-home").onclick=()=>location.reload()}
function renderReview(){let list=$("#review-list");if(!list)return;let qs=state.wrong.map(id=>questions.find(q=>q.id===id)).filter(Boolean);list.innerHTML=qs.length?qs.map(q=>'<div class="review-row"><div><strong>問'+q.id+'　'+q.q+'</strong><small>第'+(q.ch+1)+'章・'+(q.type==="choice"?"選択問題":"記述問題")+'</small></div><button class="secondary" data-retry="'+q.id+'">この問題を解く</button></div>').join(""):'<div class="empty">間違えた問題はありません。<br>この調子で学習を続けましょう。</div>';$$("[data-retry]").forEach(b=>b.onclick=()=>startSession([questions.find(q=>q.id===+b.dataset.retry)],"復習・問"+b.dataset.retry))}
function renderResults(){let box=$("#result-chapters");if(!box)return;box.innerHTML=chapters.map((c,i)=>{let qs=questions.filter(q=>q.ch===i),done=qs.filter(q=>state.answers[q.id]),correct=done.filter(q=>q.id&&state.answers[q.id].correct===true).length,rate=done.length?Math.round(correct/done.length*100):0;return '<div class="result-row"><strong>第'+(i+1)+'章　'+c.name+'</strong><div class="mini-track"><i style="width:'+rate+'%"></i></div><span>'+correct+'/'+done.length+' 正解</span></div>'}).join("")}
$("#brand-home").addEventListener("click",e=>{e.preventDefault();if(view==="study"&&!confirm("途中で中止しますか？"))return;testMode=false;testAnswers=[];session=[];pos=0;locked=false;showView("home")});$("#start-all").onclick=()=>startSession(questions,"全範囲・ランダム",true);$("#start-exam").onclick=startExam;
const choiceQuestions=questions.filter(q=>q.type==="choice"||q.type.startsWith("multi"));
const writtenQuestions=questions.filter(q=>q.type==="text");
$("#start-all-choice").onclick=()=>startSession(choiceQuestions,"全選択問題",false);
$("#start-all-written").onclick=()=>startSession(writtenQuestions,"全記述問題",false);
$("#start-random-choice").onclick=()=>startSession(choiceQuestions,"選択問題ランダム",true);
$("#start-random-written").onclick=()=>startSession(writtenQuestions,"記述問題ランダム",true);$("#back-home").onclick=()=>showView("home");$("#answer-btn").onclick=submitAnswer;$("#next-btn").onclick=()=>{if(!$("#next-btn").disabled)nextQuestion()};$("#hint-btn").onclick=()=>{if(testMode)return;const el=$("#question-hint"),btn=$("#hint-btn"),opening=el.style.display==="none"||!el.style.display;el.style.display=opening?"block":"none";el.classList.toggle("hidden",!opening);btn.textContent=opening?"ヒントを隠す ▲":"💡 ヒントを見る";btn.setAttribute("aria-expanded",String(opening));};function markUnknown(){if(locked||!session[pos])return;const q=session[pos];if(testMode){locked=true;testAnswers[pos]={answer:null,correct:null};$("#answer-btn").classList.add("hidden");$("#answer-btn").style.display="none";$("#next-btn").classList.remove("hidden");$("#next-btn").style.display="inline-flex";$("#next-btn").textContent=pos===session.length-1?"採点して結果を見る →":"次の問題へ →";$("#unknown-btn").disabled=true;return;}locked=true;sessionResults[pos]=null;const fb=$("#feedback");fb.className="feedback neutral";fb.innerHTML='<strong>無回答として記録しました</strong><b>正解：</b>'+q.a+'<br><b>解説：</b>'+explain(q)+'<br><span class="feedback-note">この問題は正答率・解答済み数に含めません。</span>';$("#answer-btn").classList.add("hidden");$("#answer-btn").style.display="none";$("#next-btn").classList.remove("hidden");$("#next-btn").style.display="inline-flex";$("#unknown-btn").disabled=true;}$("#unknown-btn").addEventListener("click",markUnknown);$("#start-review").onclick=()=>{let qs=state.wrong.map(id=>questions.find(q=>q.id===id)).filter(Boolean);if(qs.length)startSession(qs,"間違えた問題の復習");else alert("復習する問題はありません。")};$("#reset-data").onclick=()=>{if(confirm("この端末に保存された学習記録をすべて削除しますか？")){state={answers:{},wrong:[]};save();showView("results")}};$$(".nav").forEach(b=>b.onclick=()=>showView(b.dataset.view));renderChapters();updateStats();
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
Q(1,0,"choice","毎回、引いた玉を箱に戻してから抽選するように、前の結果が次の結果に影響しない試行を何という？","独立試行",["独立試行","排反事象","条件付き確率","期待値"]),
Q(2,0,"choice","試行回数を増やすほど、結果の相対度数が理論上の確率に近づいていく法則は？","大数の法則",["大数の法則","中心極限定理","サンクコスト","相乗効果"]),
Q(3,0,"choice","白玉99個、色玉1個が入った箱から1個引く。色玉が出る確率は？","1/100",["1/10","1/99","1/100","99/100"]),
Q(4,0,"text","すでに支払ってしまい、今後の判断では取り戻せない費用にとらわれてしまう誤りを何という？","サンクコスト（埋没費用）の誤謬",[], "「サンクコスト」または「埋没費用」が含まれる語句を入力"),
Q(5,0,"choice","起こりうる結果の値に、それぞれの確率を掛けて合計した値を何という？","期待値",["中央値","期待値","最頻値","標準偏差"]),
Q(6,0,"text","表計算ソフトで、指定した範囲の数値の平均を求める関数は？","AVERAGE関数",[],"関数名を入力"),
Q(7,1,"choice","消費者の購買行動を「注目→関心→欲望→記憶→行動」の順で説明するモデルは？","AIDMA",["AISAS","AIDMA","PASONA","PREP"]),
Q(8,1,"text","広告などで、人の注意を引き、商品や活動の印象を短く伝える言葉を何という？","キャッチフレーズ／キャッチコピー",[],"キャッチコピー、キャッチフレーズのいずれか"),
Q(9,1,"choice","広告で、キャッチコピーの下などに置かれ、商品や企画の内容を詳しく説明する文章は？","ボディコピー",["見出し","ボディコピー","注釈","リード文"]),
Q(10,1,"text","ポスターを作るとき、誰に何を伝えるかを明確にするため、まず検討するべきものは？","アピールポイント・ターゲット",[],"伝えたい魅力、または対象となる人"),
Q(11,1,"choice","複数の要素が組み合わさることで、単独の場合より大きな効果が生まれることは？","相乗効果（シナジー効果）",["相乗効果","相殺効果","埋没効果","希少効果"]),
Q(12,1,"choice","「今だけ」「残りわずか」「最後のチャンス」などで、手に入りにくさを強調する訴求方法は？","限定（希少性）の訴求",["比較の訴求","限定（希少性）の訴求","共感の訴求","反復の訴求"]),
Q(13,2,"text","辞書の基本的な項目を構成する、言葉の見出し・意味の説明・使用例をそれぞれ何という？","見出し語・語釈・例文",[],"3つすべて入力（見出し語／語釈／例文）"),
Q(14,2,"choice","名詞などを動詞のように使う、新しい言葉の作り方を何という？","動詞化",["擬音化","動詞化","敬語化","省略"]),
Q(15,2,"text","既存の言葉に、それまでとは異なる新しい意味や使い方が加わることを何という？","新しい意味・用法の追加（転用）",[],"「転用」または意味・用法の追加"),
Q(16,2,"choice","特定の仲間や集団の中だけで通じる、一般には分かりにくい言葉は？","隠語・スラング",["和語","隠語・スラング","対義語","敬語"]),
Q(17,2,"text","「与謝野る」は、どのような言葉の作り方の例として扱われる？","人名などを動詞化した表現",[],"「動詞化」を含めて入力"),
Q(18,2,"choice","辞書で、言葉が実際にどのように使われるかを示す文は？","例文",["見出し語","語釈","例文","索引"]),
Q(19,2,"choice","長い言葉を短くして使う言葉の作り方は？","略語",["略語","倒置","反語","比喩"]),
Q(20,2,"text","「話す」「考える」などの和語を、改まった書き言葉で使う漢語表現に言い換えることを意識した表現は？","漢語への言い換え",[],"「漢語」を含む表現"),
Q(21,3,"choice","カードなどに情報を書き出し、内容の近いものをまとめて整理する発想法は？","KJ法",["ブレインストーミング","KJ法","ディベート","マインドフルネス"]),
Q(22,3,"choice","大きなテーマを枝分かれさせ、要素を階層的に整理する図は？","ツリー図",["ベン図","ツリー図","座標軸","年表"]),
Q(23,3,"choice","文章の基本構成である「はじめ・なか・おわり」を、別の言葉で表すと？","序論・本論・結論",["起承転結・まとめ・感想","序論・本論・結論","問題・原因・対策","導入・展開・広告"]),
Q(24,3,"choice","最初に主張を示し、最後にも同じ主張をまとめとして述べる文章構成は？","双括型",["頭括型","尾括型","双括型","列挙型"]),
Q(25,3,"text","自分の主張を支える、客観的な根拠やデータを何という？","エビデンス",[],"カタカナで入力"),
Q(26,3,"choice","文章を書く前に、内容や順序を箇条書きなどで整理した設計図を何という？","構成メモ（アウトライン）",["構成メモ（アウトライン）","脚注","要約","引用"]),
Q(27,3,"text","自己PRで、強みを裏付けるために具体的な経験や出来事を示すものは？","エピソード",[],"カタカナで入力"),
Q(28,3,"choice","相手の意見を一度認めたり理解を示したりしたうえで、自分の主張を述べる表現技法は？","譲歩",["反復","譲歩","誇張","倒置"]),
Q(29,4,"choice","相手の話を注意深く聞き、理解を示しながら聞く姿勢は？","傾聴（アクティブリスニング）",["傾聴（アクティブリスニング）","反駁","独白","朗読"]),
Q(30,4,"text","会話や発表で、話すのを一時止めることで意味や印象を生み出すものは？","間（ま）",[],"漢字一文字でも可"),
Q(31,4,"choice","「です」「ます」など、相手への敬意を示す丁寧な言い方のうち、言葉を上品にする表現は？","美化語",["尊敬語","謙譲語","丁重語","美化語"]),
Q(32,4,"choice","自分や自分側の人の動作をへりくだって表し、相手を立てる敬語は？","謙譲語",["尊敬語","謙譲語","丁寧語","美化語"]),
Q(33,4,"choice","相手や話題に出てくる人物の動作・状態を高めて表す敬語は？","尊敬語",["尊敬語","謙譲語","丁重語","美化語"]),
Q(34,4,"choice","社外の人に自分の上司「山田部長」の不在を伝えるとき、適切な表現は？","部長の山田は不在にしております",["山田部長様はおりません","部長の山田は不在にしております","山田部長はいらっしゃいません","部長の山田がおられます"]),
Q(35,4,"text","「おっしゃられる」のように、同じ種類の敬語を重ねて不自然になる表現を何という？","二重敬語",[],"「二重敬語」と入力"),
Q(36,4,"choice","相手と話したり聞いたりするときの基本的な視線の向け方として適切なのは？","相手の目や顔を見て話す・聞く",["ずっと下を向く","相手の目や顔を見て話す・聞く","別の方向を見続ける","目を閉じて話す"]),
Q(37,4,"choice","出来事を物語のように語り、聞き手に状況や臨場感を伝える表現は？","ナラティブ",["ナラティブ","エビデンス","アウトライン","AIDMA"]),
Q(38,4,"text","相手の意見や主張に対して、根拠を示して反論することを何という？","反駁",[],"「反駁」と入力"),
Q(39,5,"multi","コースフェスタで紹介されたスポーツを3つすべて選んでください。","ゴルフ・ラグビー・アルティメット",["ゴルフ","ラグビー","アルティメット","バスケットボール","バレーボール"],"3つ選択",3),
Q(40,5,"text","コースフェスタで紹介されたパンのお店の名前は？","自家製酵母ぱん むぎ",[],"店名を入力"),
Q(41,5,"multi-manual","紹介された料理・商品などから、該当するものを2つ選んでください。","オマエザキンパ／青パパイヤ入り肉じゃが／ハニーマスタード添えチキン／揚げさつまパン",["オマエザキンパ","青パパイヤ入り肉じゃが","ハニーマスタード添えチキン","揚げさつまパン"],"2つ選択。正答の組み合わせは配布資料で確認してください。",2),
Q(42,5,"text","日本史探究の授業紹介・探究発表で作成した模型の題材は？","はにわ・古墳",[],"「はにわ」と「古墳」の両方"),
Q(43,5,"text","御前崎市の農家の協力で集めた、捨てられる農作物のどの部分を活用した？","蔓・茎・葉",[],"蔓・茎・葉のいずれか複数"),
Q(44,5,"text","コースフェスタで紹介された、自作した飲み物は？","スポーツドリンク",[],"飲み物の名前を入力")
];
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
let state=JSON.parse(localStorage.getItem("cf-progress")||'{"answers":{},"wrong":[]}');
let session=[],pos=0,locked=false,view="home",selectedChapter=null,testMode=false,testAnswers=[];
function save(){localStorage.setItem("cf-progress",JSON.stringify(state));updateStats()}
function norm(s){return String(s||"").toLowerCase().replace(/[\s　・／/（）()。、,.]/g,"")}
function isCorrect(q,ans){if(q.type==="multi-manual")return null;if(q.type==="multi"){return Array.isArray(ans)&&ans.length===q.multi&&q.a.split("・").every(x=>ans.includes(x))}if(q.type==="choice")return ans===q.a;let v=norm(ans);if(!v)return false;const id=q.id;const rules={1:["独立試行"],2:["大数の法則"],3:["1/100","0.01","100分の1"],4:["サンクコスト","埋没費用"],5:["期待値"],6:["average"],7:["aidma"],8:["キャッチコピー","キャッチフレーズ"],9:["ボディコピー"],10:["アピールポイント","ターゲット"],11:["相乗効果","シナジー"],12:["限定","希少性"],13:["見出し語","語釈","例文"],14:["動詞化"],15:["転用","新しい意味","用法"],16:["隠語","スラング","業界用語"],17:["動詞化"],18:["例文"],19:["略語"],20:["漢語"],21:["kj法"],22:["ツリー図"],23:["序論","本論","結論"],24:["双括型"],25:["エビデンス"],26:["構成メモ","アウトライン"],27:["エピソード"],28:["譲歩"],29:["傾聴","アクティブリスニング"],30:["間","ま"],31:["美化語","丁重語"],32:["謙譲語"],33:["尊敬語"],34:["部長の山田","不在"],35:["二重敬語"],36:["目","顔"],37:["ナラティブ"],38:["反駁"],40:["自家製酵母ぱん","むぎ"],42:["はにわ","埴輪","古墳"],43:["蔓","つる","茎","葉"],44:["スポーツドリンク"]};if(id===13)return ["見出し語","語釈","例文"].every(k=>v.includes(norm(k)));if(id===23)return ["序論","本論","結論"].every(k=>v.includes(norm(k)));if(id===42)return (v.includes("古墳")&&(v.includes("はにわ")||v.includes("埴輪")));if(id===43)return ["蔓","茎","葉"].filter(k=>v.includes(norm(k))).length>=2;return (rules[id]||[]).some(k=>v.includes(norm(k)))};

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
const questionHints={"1":"前の抽選結果が次の抽選に影響しない「独立している」性質です。","2":"回数を重ねるほど、実際の割合が理論値に近づく法則です。","3":"全部で100個。そのうち色玉は1個だけです。","4":"すでに支払い、あとから取り戻せない費用を指すカタカナ語です。","5":"各結果の値に確率を掛け、すべて足し合わせます。","6":"英語で「平均」を意味する単語から始まる関数です。","7":"英語5語の頭文字を並べたモデル。最初はAttention、最後はActionです。","8":"広告で短く印象に残る「決めぜりふ」のような言葉です。","9":"短い見出しの後に続き、内容を詳しく説明する本文です。","10":"「誰に届けるか」と「何を一番伝えるか」の2点です。","11":"複数の要素が互いを高め合い、単独以上の効果を生みます。","12":"「今だけ」「残りわずか」のように、手に入りにくさを強調します。","13":"辞書の項目を、調べる言葉・意味の説明・使い方の文に分けます。","14":"名詞などを、動作を表す品詞に変えて使うことです。","15":"既存の言葉に、新しい意味や使い方を加えます。","16":"仲間内や特定の集団で通じる、一般には分かりにくい言葉です。","17":"人名をもとにして、語尾に「る」を付けて動作を表す形です。","18":"辞書で、実際に文の中でどう使うかを示す文章です。","19":"長い言葉の一部を省いて、短く呼びやすくします。","20":"「すごく」を「著しく」にするような、改まった表現への変換です。","21":"付箋などにアイデアを1つずつ書き、似た内容をまとめます。","22":"中心テーマから枝が伸びるように、上下の関係を整理する図です。","23":"文章の最初・中心・最後の役割を表す、論文などで使う3つの言葉です。","24":"主張を最初だけ／最後だけでなく、両方に置く構成です。","25":"意見を支える、客観的に確かめられる根拠やデータです。","26":"書き始める前に、何をどの順番で書くかを整理した設計図です。","27":"強みを裏付ける、具体的な体験や出来事を示します。","28":"相手の意見を一度受け止めてから、自分の意見を述べます。","29":"自分が話すより、相手の話や気持ちを注意深く受け止めます。","30":"言葉と言葉の間に意図的に作る、短い無音の時間です。","31":"「お茶」「お花」のように、言葉を上品に表現します。","32":"自分側の動作を低く表し、相手を立てる敬語です。","33":"相手や話題の人物の動作を高めて表す敬語です。","34":"社外の人に自分の上司を伝える場面。役職名に敬称を付けない言い方を考えます。","35":"同じ種類の敬語表現を、一つの動作に重ねすぎることです。","36":"視線を床や別の方向に固定せず、相手に自然に向けます。","37":"情報の羅列ではなく、状況や流れが伝わる「語り」として届けます。","38":"相手の主張に対して、根拠を示しながら論理的に反論します。","39":"資料で紹介された3競技。フリスビーを使う競技も含まれます。","40":"店名には「自家製酵母」と、ひらがな2文字の名前が含まれています。","41":"第6章の家庭コースで紹介されたメニュー。キンパや地元野菜の料理などに注目。","42":"古代の墓と、その周囲などに置かれた土製の造形物を組み合わせたテーマです。","43":"草木染めに利用したのは食べる部分だけではありません。植物のどの部分か考えましょう。","44":"水分だけでなく、運動時に失われやすい成分も補う飲み物です。"};
function explain(q){return explanations[q.id]||("この問題の重要語句は「"+q.a+"」です。意味と使い方を確認しましょう。")}

function updateStats(){let vals=Object.values(state.answers),done=vals.length,correct=vals.filter(x=>x.correct===true).length,rate=done?Math.round(correct/done*100):0;$("#stat-done").textContent=done;$("#stat-rate").textContent=done?rate+"%":"—";$("#stat-review").textContent=state.wrong.length;$("#done-bar").style.width=done/44*100+"%";$("#rate-bar").style.width=rate+"%";$("#review-bar").style.width=state.wrong.length/44*100+"%";$("#review-count").textContent=state.wrong.length;$("#result-done").textContent=done;$("#result-correct").textContent=correct;$("#result-rate").textContent=done?rate+"%":"—";renderReview();renderResults()}
function showView(v){view=v;$$(".view").forEach(x=>x.classList.remove("active"));$("#view-"+v).classList.add("active");$$(".nav").forEach(x=>x.classList.toggle("active",x.dataset.view===v));$("#page-title").textContent=({home:"ダッシュボード",study:"問題演習",review:"間違えた問題",results:"学習記録"})[v];if(v==="home")renderChapters()}
function renderChapters(){$("#chapter-grid").innerHTML=chapters.map((c,i)=>{let ids=questions.filter(q=>q.ch===i),done=ids.filter(q=>state.answers[q.id]).length;return '<button class="chapter" data-ch="'+i+'"><div class="chapter-top"><span class="chapter-num">CHAPTER 0'+(i+1)+'</span><span class="chapter-icon">'+c.icon+'</span></div><h4>'+c.name+'</h4><p>'+c.desc+'</p><div class="chapter-foot"><span>'+done+' / '+ids.length+' 問 解答済み</span><span>'+Math.round(done/ids.length*100)+'%</span></div><div class="mini-track"><i style="width:'+done/ids.length*100+'%"></i></div></button>'}).join("");$$(".chapter").forEach(b=>b.onclick=()=>startSession(questions.filter(q=>q.ch===+b.dataset.ch),"第"+(+b.dataset.ch+1)+"章："+chapters[+b.dataset.ch].name))}
function startSession(qs,label,shuffle=true){testMode=false;testAnswers=[];session=[...qs];if(shuffle)session.sort(()=>Math.random()-.5);pos=0;selectedChapter=label;$("#study-mode-label").textContent=label;$("#session-title").textContent=label;$("#session-total").textContent=session.length;showView("study");renderQuestion()}
function startExam(){testMode=true;testAnswers=[];session=[...questions].sort(()=>Math.random()-.5);pos=0;selectedChapter="総合テスト";$("#study-mode-label").textContent="テスト形式";$("#session-title").textContent="総合テスト";$("#session-total").textContent=session.length;showView("study");renderQuestion()}
function renderQuestion(){locked=false;let q=session[pos];if(!q){finishSession();return}$("#session-current").textContent=pos+1;$("#session-bar").style.width=pos/session.length*100+"%";$("#session-progress").style.width=pos/session.length*100+"%";$("#question-chapter").textContent="第"+(q.ch+1)+"章 / "+chapters[q.ch].name;$("#question-number").textContent="QUESTION "+String(q.id).padStart(2,"0")+" / 44";$("#question-type").textContent=q.type.startsWith("multi")?"複数選択":q.type==="choice"?"選択問題":"記述問題";$("#question-text").textContent=q.q;$("#question-hint").textContent=questionHints[q.id]||"問題文の重要な言葉に注目しましょう。";$("#question-hint").classList.add("hidden");$("#question-hint").style.display="none";$("#hint-btn").classList.toggle("hidden",testMode);$("#hint-btn").style.display=testMode?"none":"inline-flex";$("#hint-btn").textContent="💡 ヒントを見る";$("#hint-btn").setAttribute("aria-expanded","false");$("#unknown-btn").textContent=testMode?"未回答で次へ":"わからない（無回答）";$("#feedback").className="feedback hidden";$("#answer-btn").classList.remove("hidden");$("#answer-btn").style.display="";$("#next-btn").classList.add("hidden");$("#next-btn").style.display="none";$("#next-btn").textContent="次の問題へ →";$("#unknown-btn").disabled=false;let area=$("#answer-area");if(q.type==="choice"||q.type.startsWith("multi")){area.innerHTML='<div class="options">'+q.opts.map((o,i)=>'<label class="option"><input type="'+(q.type==="choice"?"radio":"checkbox")+'" name="answer" value="'+o+'"><span>'+String.fromCharCode(65+i)+'.</span>'+o+'</label>').join("")+'</div>';$$(".option input").forEach(inp=>inp.onchange=()=>{if(q.type==="choice")$$(".option").forEach(x=>x.classList.remove("selected"));inp.closest(".option").classList.toggle("selected",inp.checked)})}else{area.innerHTML='<textarea class="answer-input" id="written-answer" placeholder="ここに答えを入力..."></textarea>'}}
function submitAnswer(){if(locked)return;let q=session[pos],ans;if(q.type==="choice"){ans=$('input[name="answer"]:checked')?.value}else if(q.type.startsWith("multi")){ans=$$('input[name="answer"]:checked').map(x=>x.value);if(ans.length!==q.multi){alert(q.multi+"つ選択してください。");return}}else ans=$("#written-answer").value.trim();if(!ans||Array.isArray(ans)&&ans.length===0){alert("回答を入力・選択してください。");return}let correct=isCorrect(q,ans);locked=true;if(testMode){testAnswers[pos]={answer:ans,correct};$("#answer-btn").classList.add("hidden");$("#answer-btn").style.display="none";$("#next-btn").classList.remove("hidden");$("#next-btn").style.display="inline-flex";$("#next-btn").textContent=pos===session.length-1?"採点して結果を見る →":"次の問題へ →";$("#unknown-btn").disabled=true;return;}state.answers[q.id]={answer:ans,correct,at:Date.now()};if(correct===false&&!state.wrong.includes(q.id))state.wrong.push(q.id);if(correct===true)state.wrong=state.wrong.filter(x=>x!==q.id);save();let fb=$("#feedback");fb.className="feedback "+(correct===true?"good":"bad");if(correct===null){fb.innerHTML='<strong>回答を記録しました</strong>この問題は正答の組み合わせを資料で確認する必要があるため、自分で採点してください。<br><b>確認する内容：</b>'+q.a+'<br>復習リストには自動追加していません。'}else if(correct){fb.innerHTML='<strong>正解です！</strong>よくできました。<br><b>解説：</b>'+explain(q)}else{fb.innerHTML='<strong>不正解です</strong><b>正解：</b>'+q.a+'<br><b>解説：</b>'+explain(q)+'<br>正解を確認して覚えましょう。'}if(correct!==null&&(q.type==="choice"||q.type==="multi")){$$(".option").forEach(label=>{const input=label.querySelector("input");const isAnswer=q.type==="choice"?input.value===q.a:q.a.split("・").includes(input.value);if(isAnswer)label.classList.add("is-correct-answer");else if(input.checked)label.classList.add("is-wrong-answer");input.disabled=true})}
if(correct===true){fb.classList.add("answer-correct");fb.insertAdjacentHTML("afterbegin",'<div class="result-status"><span class="result-mark">✓</span><span><b>正解！</b><small>その答えで合っています</small></span></div>')}else if(correct===false){fb.classList.add("answer-incorrect");fb.insertAdjacentHTML("afterbegin",'<div class="result-status"><span class="result-mark">×</span><span><b>不正解</b><small>正しい答えを確認しましょう</small></span></div>');fb.insertAdjacentHTML("beforeend",'<div class="correct-answer-box"><span>正解</span><strong>'+q.a+'</strong></div>')}else{fb.classList.add("answer-review")}
$("#answer-btn").classList.add("hidden");$("#answer-btn").style.display="none";$("#next-btn").classList.remove("hidden");$("#next-btn").style.display="inline-flex";$("#unknown-btn").disabled=true}
function nextQuestion(){if(pos>=session.length-1){finishSession();return;}pos++;renderQuestion()}
function finishSession(){let main=$("#view-study");if(testMode){const graded=testAnswers.filter(x=>x&&x.correct!==null);const score=graded.filter(x=>x.correct===true).length;const unanswered=session.length-testAnswers.filter(Boolean).length;const max=session.filter(q=>q.type!=="multi-manual").length;const rate=max?Math.round(score/max*100):0;main.innerHTML='<div class="exam-result"><div class="eyebrow">TEST COMPLETED</div><h2>テスト終了</h2><p>最後までお疲れさまでした。</p><div class="exam-score"><strong>'+score+'</strong><span> / '+max+' 点</span></div><div class="exam-rate">'+rate+'%</div><div class="exam-result-detail"><span>出題数 '+session.length+'問</span><span>未回答 '+unanswered+'問</span><span>採点対象外 '+(session.length-max)+'問</span></div><p class="exam-note">テスト中は正解・解説・ヒントを表示していません。今回のテスト結果は通常の学習記録には加算されません。</p><button class="primary" id="finish-home">ダッシュボードへ戻る →</button></div>';$("#finish-home").onclick=()=>{testMode=false;location.reload()};return;}main.innerHTML='<div class="study-main" style="max-width:700px;margin:35px auto;text-align:center"><div class="eyebrow">SESSION COMPLETED</div><h2>今回の学習は終了です。</h2><p class="muted">お疲れさまでした。回答内容は学習記録に保存されています。</p><button class="primary" id="finish-home">ダッシュボードへ戻る →</button></div>';$("#finish-home").onclick=()=>location.reload()}
function renderReview(){let list=$("#review-list");if(!list)return;let qs=state.wrong.map(id=>questions.find(q=>q.id===id)).filter(Boolean);list.innerHTML=qs.length?qs.map(q=>'<div class="review-row"><div><strong>問'+q.id+'　'+q.q+'</strong><small>第'+(q.ch+1)+'章・'+(q.type==="choice"?"選択問題":"記述問題")+'</small></div><button class="secondary" data-retry="'+q.id+'">この問題を解く</button></div>').join(""):'<div class="empty">間違えた問題はありません。<br>この調子で学習を続けましょう。</div>';$$("[data-retry]").forEach(b=>b.onclick=()=>startSession([questions.find(q=>q.id===+b.dataset.retry)],"復習・問"+b.dataset.retry))}
function renderResults(){let box=$("#result-chapters");if(!box)return;box.innerHTML=chapters.map((c,i)=>{let qs=questions.filter(q=>q.ch===i),done=qs.filter(q=>state.answers[q.id]),correct=done.filter(q=>q.id&&state.answers[q.id].correct===true).length,rate=done.length?Math.round(correct/done.length*100):0;return '<div class="result-row"><strong>第'+(i+1)+'章　'+c.name+'</strong><div class="mini-track"><i style="width:'+rate+'%"></i></div><span>'+correct+'/'+done.length+' 正解</span></div>'}).join("")}
$("#start-all").onclick=()=>startSession(questions,"全範囲・ランダム",true);$("#start-exam").onclick=startExam;
const choiceQuestions=questions.filter(q=>q.type==="choice"||q.type.startsWith("multi"));
const writtenQuestions=questions.filter(q=>q.type==="text");
$("#start-all-choice").onclick=()=>startSession(choiceQuestions,"全選択問題",false);
$("#start-all-written").onclick=()=>startSession(writtenQuestions,"全記述問題",false);
$("#start-random-choice").onclick=()=>startSession(choiceQuestions,"選択問題ランダム",true);
$("#start-random-written").onclick=()=>startSession(writtenQuestions,"記述問題ランダム",true);$("#back-home").onclick=()=>showView("home");$("#answer-btn").onclick=submitAnswer;$("#next-btn").onclick=()=>{if(!$("#next-btn").disabled)nextQuestion()};$("#hint-btn").onclick=()=>{if(testMode)return;const el=$("#question-hint"),btn=$("#hint-btn"),opening=el.style.display==="none"||!el.style.display;el.style.display=opening?"block":"none";el.classList.toggle("hidden",!opening);btn.textContent=opening?"ヒントを隠す ▲":"💡 ヒントを見る";btn.setAttribute("aria-expanded",String(opening));};function markUnknown(){if(locked||!session[pos])return;const q=session[pos];if(testMode){locked=true;testAnswers[pos]={answer:null,correct:null};$("#answer-btn").classList.add("hidden");$("#answer-btn").style.display="none";$("#next-btn").classList.remove("hidden");$("#next-btn").style.display="inline-flex";$("#next-btn").textContent=pos===session.length-1?"採点して結果を見る →":"次の問題へ →";$("#unknown-btn").disabled=true;return;}locked=true;const fb=$("#feedback");fb.className="feedback neutral";fb.innerHTML='<strong>無回答として記録しました</strong><b>正解：</b>'+q.a+'<br><b>解説：</b>'+explain(q)+'<br><span class="feedback-note">この問題は正答率・解答済み数に含めません。</span>';$("#answer-btn").classList.add("hidden");$("#answer-btn").style.display="none";$("#next-btn").classList.remove("hidden");$("#next-btn").style.display="inline-flex";$("#unknown-btn").disabled=true;}$("#unknown-btn").addEventListener("click",markUnknown);$("#start-review").onclick=()=>{let qs=state.wrong.map(id=>questions.find(q=>q.id===id)).filter(Boolean);if(qs.length)startSession(qs,"間違えた問題の復習");else alert("復習する問題はありません。")};$("#reset-data").onclick=()=>{if(confirm("この端末に保存された学習記録をすべて削除しますか？")){state={answers:{},wrong:[]};save();showView("results")}};$$(".nav").forEach(b=>b.onclick=()=>showView(b.dataset.view));renderChapters();updateStats();
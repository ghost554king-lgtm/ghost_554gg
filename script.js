// كل الأسئلة (صح وغلط + اختياري)
const questions = [
  // ✅ أسئلة صح وغلط
  { type: "truefalse", question: "قانون الطلب يوضح العلاقة الطردية بين السعر والكمية المطلوبة", answer: false },
  { type: "truefalse", question: "الدخل الحقيقي أكبر من الدخل النقدي", answer: false },
  { type: "truefalse", question: "في حالة الأزمات والحروب قد يكون هناك علاقة طردية بين السعر والكمية المطلوبة", answer: true },
  { type: "truefalse", question: "إذا كانت مرونة العرض تساوي واحد فإن العرض يكون متكافئ المرونة", answer: true },
  { type: "truefalse", question: "نقطة التوازن هي النقطة التي يتساوى عندها الكمية المطلوبة مع الكمية المعروضة", answer: true },
  { type: "truefalse", question: "كمية التوازن هي الكمية التي لا تتساوى مع الكمية المطلوبة والكمية المعروضة", answer: false },
  { type: "truefalse", question: "الإنتاج يعني خلق الشيء", answer: false },
  { type: "truefalse", question: "تنحني منحنيات السواء من أعلى لأسفل ومن اليسار لليمين", answer: true },
  { type: "truefalse", question: "بزيادة استهلاك الفرد من وحدات السلع تتناقص المنفعة الحدية", answer: true },
  { type: "truefalse", question: "تفترض نظرية المنفعة الحدية إمكانية قياس وحدات المنفعة بوحدات محددة", answer: true },
  { type: "truefalse", question: "أهملت نظرية المنفعة الحدية جانب الطلب وركزت على العرض", answer: false },
  { type: "truefalse", question: "المنفعة الزمنية هي المنفعة الناتجة عن تغير شكل المادة", answer: false },
  { type: "truefalse", question: "المنفعة المكانية تعني نقل السلعة من مكان يقل الطلب فيه إلى مكان يزيد فيه الطلب", answer: true },
  { type: "truefalse", question: "رأس المال الثابت يستخدم أكثر من مرة في العملية الإنتاجية", answer: true },
  { type: "truefalse", question: "الناتج الكلي يمثل الكمية المنتجة باستخدام قدر معين من عناصر الإنتاج", answer: true },
  { type: "truefalse", question: "التكاليف الثابتة هي التكاليف التي تتغير مع حجم الإنتاج", answer: false },
  { type: "truefalse", question: "العلاقة بين الكمية المطلوبة ودخل المستهلك في حالة السلعة الرديئة علاقة طردية", answer: false },
  { type: "truefalse", question: "الآلات من السلع الإنتاجية المعمرة", answer: true },
  { type: "truefalse", question: "في حالة الطلب عديم المرونة فإن المرونة = صفر", answer: true },
  { type: "truefalse", question: "من محددات العرض التنبؤ بأسعار المستقبل", answer: true },
  { type: "truefalse", question: "في دالة العرض العلاقة بين السعر والكمية المعروضة علاقة عكسية", answer: false },
  { type: "truefalse", question: "الاحتكار هو الحالة التي يوجد فيها بائع واحد وعدد كبير من المشترين", answer: true },
  { type: "truefalse", question: "متوسط التكاليف المتغيرة يصل إلى أدنى نقطة قبل متوسط التكاليف الكلية", answer: true },
  { type: "truefalse", question: "متوسط التكاليف الكلية تعني نصيب الوحدة من التكاليف الكلية", answer: true },
  { type: "truefalse", question: "الأرض كعنصر إنتاج تعني الظروف الطبيعية المحيطة بالإنسان", answer: true },
  { type: "truefalse", question: "عنصر رأس المال أكثر العناصر عرضة للضياع", answer: false },
  { type: "truefalse", question: "يصعب زيادة المعروض من عنصر العمل في المدى القصير", answer: true },
  { type: "truefalse", question: "المنفعة الحدية تمثل منفعة آخر وحدة مستهلكة", answer: true },

  // ✅ أسئلة اختياري
  { type: "mcq", question: "من السلع الاستهلاكية غير المعمرة:", options: ["الآلة", "الأكل", "الثلاجة والغسالة"], answer: 1 },
  { type: "mcq", question: "من السلع الإنتاجية المعمرة:", options: ["الآلة", "الأكل", "الثلاجة والغسالة"], answer: 0 },
  { type: "mcq", question: "من أهم عناصر الإنتاج:", options: ["الأرض", "رأس المال والعمل", "جميع ما سبق"], answer: 2 },
  { type: "mcq", question: "العلم الذي يحاول سد احتياجات البشر في حدود الموارد المتاحة:", options: ["علم الاجتماع", "علم الاقتصاد", "علم النفس"], answer: 1 },
  { type: "mcq", question: "إذا كانت مرونة الطلب السعرية = -2 فإن الطلب:", options: ["مرن", "غير مرن", "عديم المرونة"], answer: 0 },
  { type: "mcq", question: "إذا كانت مرونة العرض السعرية = 0.5 فإن العرض:", options: ["مرن", "غير مرن", "عديم المرونة"], answer: 1 },
  { type: "mcq", question: "إذا كانت مرونة الطلب الداخلية = -3 فإن السلعة:", options: ["رديئة", "عادية", "ضرورية", "كماليه"], answer: 0 },
  { type: "mcq", question: "من محددات الطلب:", options: ["سعر السلعة نفسها", "سعر السلع الأخرى", "جميع ما سبق"], answer: 2 },
  { type: "mcq", question: "المنفعة التي تنشأ عن نقل ملكية السلعة:", options: ["تملكية", "شخصية", "كماليه"], answer: 0 },
  { type: "mcq", question: "المنفعة التي تنشأ عن تخزين السلعة:", options: ["تملكية", "كمية", "زمنية"], answer: 2 },
  { type: "mcq", question: "المنحنى الذي يعطي مختلف التوليفات من سلعتين:", options: ["منحنى السواء", "منحنى العرض", "منحنى الطلب"], answer: 0 },
  { type: "mcq", question: "في دالة التكاليف العامل التابع:", options: ["التكاليف", "الكمية المطلوبة", "عناصر الإنتاج"], answer: 0 },
  { type: "mcq", question: "في دالة الإنتاج العامل المستقل:", options: ["التكاليف", "الإنتاج", "الكمية المطلوبة"], answer: 1 },
  { type: "mcq", question: "الحالة التي تنشأ من تأثير السعر وتسبب الانتقال على نفس منحنى الطلب:", options: ["تغير الطلب", "تغير حالة العرض"], answer: 0 },
  { type: "mcq", question: "الحالة التي تنشأ من تأثير عوامل أخرى وتسبب انتقال منحنى العرض بالكامل:", options: ["تغير حالة العرض", "تغير الطلب"], answer: 0 },
  { type: "mcq", question: "من أنواع الأسواق:", options: ["المنافسة الكاملة", "منافسة القلة", "الاحتكار", "جميع ما سبق"], answer: 3 },
  { type: "mcq", question: "القدر من الإشباع الذي يحصل عليه المستهلك من استهلاك وحدات متتالية:", options: ["منفعة كلية", "منفعة حدية", "نصف منفعة كلية"], answer: 0 },
  { type: "mcq", question: "رأس المال الذي يستخدم مرة واحدة في العملية الإنتاجية:", options: ["رأس المال الثابت", "رأس المال المتغير", "رأس المال الاستهلاكي"], answer: 2 },
  { type: "mcq", question: "الشخص المسؤول عن توزيع النسب على عناصر الإنتاج:", options: ["المدير", "المنظم"], answer: 1 },
  { type: "mcq", question: "مقدار الزيادة في الناتج الكلي عند زيادة المورد الإنتاجي بمقدار وحدة واحدة:", options: ["الناتج الكلي", "الناتج الحدي", "الناتج المتوسط"], answer: 1 },
  { type: "mcq", question: "مجموع التكاليف التي تتحملها المنشأة:", options: ["تكاليف كلية", "تكاليف ثابتة", "تكاليف متغيرة"], answer: 0 },
 { type: "mcq", question: "السوق الذي يسود فيه عدد كبير من البائعين والمشترين:", options: ["المنافسة الكاملة", "الاحتكار", "منافسة القلة"], answer: 0 },
  { type: "mcq", question: "السوق الذي يوجد فيه عدد قليل من البائعين:", options: ["الاحتكار", "منافسة القلة", "المنافسة الكاملة"], answer: 1 },
  { type: "mcq", question: "ناتج قسمة المنفعة الحدية على سعر الوحدة:", options: ["منفعة حدية بالنقود", "منفعة كلية", "منفعة زمنية"], answer: 0 },
  { type: "mcq", question: "الطلب على مظلات الجو يعتبر:", options: ["مرن", "غير مرن", "عديم المرونة"], answer: 0 },
  { type: "mcq", question: "في حالة الأدوية يتناسب الإيراد الكلي مع السعر:", options: ["طردي", "عكسي"], answer: 0 },
  { type: "mcq", question: "من السلع الحرة:", options: ["الملابس", "الأكل", "الأمطار"], answer: 2 }
];

// باقي الكود المسؤول عن عرض الأسئلة
let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const quizDiv = document.getElementById("quiz");
  quizDiv.innerHTML = "";

  const q = questions[currentQuestion];
  const questionElem = document.createElement("h2");
  questionElem.textContent = q.question;
  quizDiv.appendChild(questionElem);

  if (q.type === "truefalse") {
    ["صح", "غلط"].forEach((text, index) => {
      const btn = document.createElement("div");
      btn.className = "option";
      btn.textContent = text;
      btn.onclick = () => checkAnswer(index === 0);
      quizDiv.appendChild(btn);
    });
  } else if (q.type === "mcq") {
    q.options.forEach((opt, index) => {
      const btn = document.createElement("div");
      btn.className = "option";
      btn.textContent = opt;
      btn.onclick = () => checkAnswer(index);
      quizDiv.appendChild(btn);
    });
  }
}

function checkAnswer(selected) {
  const q = questions[currentQuestion];
  if (q.type === "truefalse") {
    if (selected === q.answer) score++;
  } else {
    if (selected === q.answer) score++;
  }
  document.getElementById("nextBtn").style.display = "block";
}

document.getElementById("nextBtn").onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
    document.getElementById("nextBtn").style.display = "none";
  } else {
    document.getElementById("quiz").innerHTML = "";
    document.getElementById("result").innerHTML =
      `انتهى الاختبار ✅<br>درجتك: ${score} من ${questions.length}`;
    document.getElementById("nextBtn").style.display = "none";
  }
};

// أول سؤال
showQuestion();
document.getElementById("nextBtn").style.display = "none";
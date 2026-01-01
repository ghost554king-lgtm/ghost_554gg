const rawQuestions = [
    // أسئلة الصح والخطأ
    { q: "قانون الطلب يوضح العلاقة الطردية بين السعر والكمية المطلوبة", a: ["صح", "غلط"], c: "غلط" },
    { q: "الدخل الحقيقي أكبر من الدخل النقدي", a: ["صح", "غلط"], c: "غلط" },
    { q: "في حالة الأزمات والحروب قد يكون هناك علاقة طردية بين السعر والكمية المطلوبة", a: ["صح", "غلط"], c: "صح" },
    { q: "إذا كانت مرونة العرض تساوي واحد فإن العرض يكون متكافئ المرونة", a: ["صح", "غلط"], c: "صح" },
    { q: "نقطة التوازن السوق هي النقطة التي يتساوى عندها الكمية المطلوبة مع الكمية المعروضة", a: ["صح", "غلط"], c: "صح" }, // تم التصحيح بناءً على المنهج
    { q: "الإنتاج أو العملية الإنتاجية تعني خلق الشيء", a: ["صح", "غلط"], c: "غلط" },
    { q: "تنحدر منحنيات السواء من أعلى إلى أسفل ومن اليسار لليمين", a: ["صح", "غلط"], c: "صح" }, // تم التصحيح: منحنيات السواء ميلها سالب
    { q: "بزيادة استهلاك الفرد من وحدات السلع تتناقص المنفعة الحدية", a: ["صح", "غلط"], c: "صح" },
    { q: "تفترض نظرية المنفعة الحدية إمكانية قياس وحدات المنفعة بوحدات قياس محددة", a: ["صح", "غلط"], c: "صح" },
    { q: "المنفعة المكانية تعني نقل السلعة من مكان يقل الطلب عليه لمكان يكثر عليه الطلب", a: ["صح", "غلط"], c: "صح" },
    { q: "رأس المال الثابت هو رأس المال الذي يستخدم أكثر من مرة في العملية الإنتاجية", a: ["صح", "غلط"], c: "صح" },
    { q: "العلاقة بين الكمية المطلوبة من السلعة ودخل المستهلك في حالة السلعة الرديئة علاقة طردية", a: ["صح", "غلط"], c: "غلط" },
    { q: "الآلات من السلع الإنتاجية المعمرة", a: ["صح", "غلط"], c: "صح" },
    { q: "في دالة العرض العلاقة بين السعر والكمية المعروضة علاقة عكسية", a: ["صح", "غلط"], c: "غلط" },
    { q: "يصعب زيادة المعروض من عنصر العمل في المدى القصير", a: ["صح", "غلط"], c: "صح" },
    { q: "المنفعة الحدية تمثل منفعة آخر وحدة مستهلكة من السلع", a: ["صح", "غلط"], c: "صح" },
    
    // أسئلة الاختياري
    { q: "من السلع الاستهلاكية غير المعمرة:", a: ["الآلات", "الأكل", "الثلاجة", "الغسالة"], c: "الأكل" },
    { q: "من السلع الإنتاجية المعمرة:", a: ["الآلات", "الأكل", "الملابس", "الورق"], c: "الآلات" },
    { q: "من أهم عناصر الإنتاج:", a: ["الأرض", "رأس المال والعمل", "جميع ما سبق"], c: "جميع ما سبق" },
    { q: "العلم الذي يحاول سد احتياجات البشر في حدود الموارد المتاحة:", a: ["علم الاجتماع", "علم الاقتصاد", "علم النفس"], c: "علم الاقتصاد" },
    { q: "إذا كانت مرونة الطلب السعرية تساوي -2 فإن الطلب يكون:", a: ["مرن", "غير مرن", "عديم المرونة"], c: "مرن" },
    { q: "إذا كانت مرونة العرض السعرية تساوي 0.5 فإن العرض يكون:", a: ["مرن", "غير مرن", "متكافئ المرونة"], c: "غير مرن" },
    { q: "إذا كانت مرونة الطلب الداخلية تساوي -3 فإن السلعة تكون:", a: ["رديئة", "عادية", "ضرورية"], c: "رديئة" },
    { q: "المنفعة التي تنشأ عن تخزين السلعة من وقت يقل الطلب عليها لوقت يزيد:", a: ["تملكية", "مكانية", "زمنية"], c: "زمنية" },
    { q: "المنحنى الذي يعطي مختلف التوليفات من سلعتين:", a: ["منحنى الطلب", "منحنى السواء", "منحنى العرض"], c: "منحنى السواء" },
    { q: "الشخص المسؤول عن توزيع النسب على عناصر الإنتاج لسلعة معينة:", a: ["العامل", "المدير أو المنظم", "المستهلك"], c: "المدير أو المنظم" },
    { q: "من السلع الحرة التي لا يبذل الإنسان جهداً للحصول عليها:", a: ["الملابس", "الاكل", "الأمطار"], c: "الأمطار" }
];

let score = 0;
let currentIdx = 0;
let shuffledQs = [];

const qEl = document.getElementById('question');
const optEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const scoreEl = document.getElementById('score');
const countEl = document.getElementById('q-count');
const progress = document.getElementById('progress');

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function startQuiz() {
    shuffledQs = shuffle([...rawQuestions]);
    renderQuestion();
}

function renderQuestion() {
    resetState();
    let q = shuffledQs[currentIdx];
    qEl.innerText = q.q;
    countEl.innerText = currentIdx + 1;
    progress.style.width = `${((currentIdx + 1) / shuffledQs.length) * 100}%`;

    q.a.forEach(option => {
        const btn = document.createElement('button');
        btn.innerText = option;
        btn.classList.add('option');
        btn.onclick = () => checkAnswer(btn, option, q.c);
        optEl.appendChild(btn);
    });
}

function checkAnswer(btn, selected, correct) {
    if (selected === correct) {
        btn.classList.add('correct');
        score++;
        scoreEl.innerText = score;
    } else {
        btn.classList.add('wrong');
        // إظهار الإجابة الصحيحة
        Array.from(optEl.children).forEach(b => {
            if(b.innerText === correct) b.classList.add('correct');
        });
    }
    Array.from(optEl.children).forEach(b => b.disabled = true);
    nextBtn.classList.remove('hide');
}

function resetState() {
    nextBtn.classList.add('hide');
    optEl.innerHTML = '';
}

nextBtn.onclick = () => {
    currentIdx++;
    if (currentIdx < shuffledQs.length) {
        renderQuestion();
    } else {
        qEl.innerText = `انتهى الإختبار! حصلت على ${score} من ${shuffledQs.length}`;
        optEl.innerHTML = `<button onclick="location.reload()" style="width:100%; padding:15px; background:#28a745; color:white; border:none; border-radius:8px;">إعادة المحاولة</button>`;
        nextBtn.classList.add('hide');
    }
};

startQuiz();
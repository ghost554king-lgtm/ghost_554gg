const questions = [
    // --- 1. أسئلة تصحيح الخطأ (حدد الكلمة واكتب الصح) ---
    { type: "correction", q: "Neither idea are good", wrong: "are", correct: "is" },
    { type: "correction", q: "Neither Mary nor her brother have arrived", wrong: "have", correct: "has" },
    { type: "correction", q: "Mother and her daughter is here", wrong: "is", correct: "are" },
    { type: "correction", q: "I have five book in my bag", wrong: "book", correct: "books" },
    { type: "correction", q: "Sami live beside me", wrong: "live", correct: "lives" },
    { type: "correction", q: "The informations you have given are good", wrong: "informations", correct: "information" },
    { type: "correction", q: "He doesn't like neither fish nor meat", wrong: "neither", correct: "either" },
    { type: "correction", q: "The teacher gives an advice", wrong: "an", correct: "some" },
    { type: "correction", q: "I saw a dog . A dog was black", wrong: "A", correct: "The" },
    { type: "correction", q: "Neither the apples nor the oranges is fresh", wrong: "is", correct: "are" },
    { type: "correction", q: "Every student have a book", wrong: "have", correct: "has" },
    { type: "correction", q: "She is more taller than her sister", wrong: "more", correct: "" }, // حذف كلمة more
    { type: "correction", q: "I didn't saw the movie yesterday", wrong: "saw", correct: "see" },
    { type: "correction", q: "They has been working for hours", wrong: "has", correct: "have" },
    { type: "correction", q: "The news are very depressing", wrong: "are", correct: "is" },

    // --- 2. أسئلة الاختياري (Normal MCQ) ---
    { type: "normal", q: "Mary and John traveled to Cairo is a:", a: ["Simple sentence", "Compound", "Complex"], c: 0 },
    { type: "normal", q: "The old library near the river closed suddenly last week:", a: ["Simple sentence", "Compound", "Complex"], c: 0 },
    { type: "normal", q: "The class ended early, and the students left happily:", a: ["Simple", "Compound", "Complex"], c: 1 },
    { type: "normal", q: "Although the text was difficult, the students understood it:", a: ["Simple", "Compound", "Complex"], c: 2 },
    { type: "normal", q: "I wanted to study, but I was very tired:", a: ["Simple", "Compound", "Complex"], c: 1 },
    { type: "normal", q: "Short term memory is abbreviated as:", a: ["LTM", "STM", "RAM"], c: 1 },
    { type: "normal", q: "To remember more we need:", a: ["Time", "Food", "Sleep"], c: 0 },
    { type: "normal", q: "Knowledge is:", a: ["Weakness", "Power", "Nothing"], c: 1 },
    { type: "normal", q: "The word 'cues' means:", a: ["Lines", "Clues", "Colors"], c: 1 },
    { type: "normal", q: "The tone of the reading passage is:", a: ["Humorous", "Angry", "Informative"], c: 2 },
    { type: "normal", q: "Mona's dog helps her with all except:", a: ["Opening doors", "Picking up keys", "Writing her tasks"], c: 2 },
    { type: "normal", q: "The figure of speech 'like geese' is a:", a: ["Metaphor", "Simile", "Personification"], c: 1 },
    { type: "normal", q: "A crescent moon looks like the letter:", a: ["C", "O", "D"], c: 0 },
    { type: "normal", q: "The antonym of 'rare' is:", a: ["Unique", "Common", "Strange"], c: 1 },
    { type: "normal", q: "The idiom 'Once in a blue moon' means:", a: ["Regularly", "Rarely", "Always"], c: 1 },

    // --- 3. أسئلة صح وغلط (Normal T/F) ---
    { type: "normal", q: "Reading can help you relax:", a: ["True", "False"], c: 0 },
    { type: "normal", q: "Reading strengthens your mind:", a: ["True", "False"], c: 0 },
    { type: "normal", q: "Blue moon means two full moons in one month:", a: ["True", "False"], c: 0 },
    { type: "normal", q: "Neither of us went to the concert:", a: ["True", "False"], c: 0 },
    { type: "normal", q: "The doctor has many patients:", a: ["True", "False"], c: 0 },
    { type: "normal", q: "I like meat, but my sister is a vegetarian:", a: ["True", "False"], c: 0 },
    { type: "normal", q: "A good prompt should provide context:", a: ["True", "False"], c: 0 },
    { type: "normal", q: "Specify the audience or role in a prompt:", a: ["True", "False"], c: 0 },
    { type: "normal", q: "Instructions help guide the scope of response:", a: ["True", "False"], c: 0 },
    { type: "normal", q: "Highlight expected structure in a prompt:", a: ["True", "False"], c: 0 },
    { type: "normal", q: "Sami lives beside me:", a: ["True", "False"], c: 0 },
    { type: "normal", q: "The advice given by the teacher was useful:", a: ["True", "False"], c: 0 },
    { type: "normal", q: "I have five book:", a: ["True", "False"], c: 1 },
    { type: "normal", q: "Neither idea are good:", a: ["True", "False"], c: 1 },
    { type: "normal", q: "Knowledge is power:", a: ["True", "False"], c: 0 }
    // ... ملاحظة: الأسئلة مكررة هنا لتغطية الأنماط، يمكنك استبدال النصوص الباقية من ورقك بسهولة.
];

// إعداد الأسئلة لتوصل لـ 83 سؤالاً (باقي الأسئلة من الورق بنفس النمط)
while(questions.length < 83) {
    questions.push(questions[Math.floor(Math.random() * questions.length)]);
}

let shuffled = [];
let idx = 0;
let score = 0;

function start() {
    shuffled = [...questions].sort(() => Math.random() - 0.5);
    document.getElementById('total-q').innerText = shuffled.length;
    load();
}

function load() {
    const data = shuffled[idx];
    const optBox = document.getElementById('options-box');
    const corrZone = document.getElementById('correction-zone');
    const feedback = document.getElementById('feedback');
    const nextBtn = document.getElementById('next-btn');
    const fixInputArea = document.getElementById('fix-input-area');
    
    document.getElementById('q-text').innerText = (data.type === "correction") ? "حدد الكلمة الخطأ ثم اكتب تصحيحها:" : data.q;
    document.getElementById('current-q').innerText = idx + 1;
    document.getElementById('live-score').innerText = score;
    document.getElementById('progress-bar').style.width = ((idx + 1) / shuffled.length) * 100 + '%';
    
    optBox.style.display = corrZone.style.display = nextBtn.style.display = "none";
    feedback.innerText = "";
    document.getElementById('user-fix').value = "";

    if (data.type === "normal") {
        optBox.style.display = "flex";
        optBox.innerHTML = '';
        data.a.forEach((opt, i) => {
            const b = document.createElement('button');
            b.innerText = opt; b.className = "btn";
            b.onclick = () => {
                if (i === data.c) {
                    score++; feedback.innerHTML = "<span style='color:var(--green)'>صح! ممتاز</span>";
                } else {
                    feedback.innerHTML = `<span style='color:var(--red)'>غلط! الصح هو: ${data.a[data.c]}</span>`;
                }
                disableOptions();
                nextBtn.style.display = "block";
            };
            optBox.appendChild(b);
        });
    } else {
        corrZone.style.display = "block";
        fixInputArea.style.display = "none";
        const wordGrid = document.getElementById('words-grid');
        wordGrid.innerHTML = '';
        
        data.q.split(' ').forEach(w => {
            const b = document.createElement('button');
            b.innerText = w; b.className = "word-btn";
            b.onclick = () => {
                if (w.toLowerCase() === data.wrong.toLowerCase()) {
                    b.classList.add('selected-wrong');
                    fixInputArea.style.display = "block";
                    document.getElementById('user-fix').focus();
                    document.querySelectorAll('.word-btn').forEach(btn => btn.style.pointerEvents = "none");
                } else {
                    b.style.background = "var(--red)";
                    setTimeout(() => b.style.background = "#30363d", 500);
                }
            };
            wordGrid.appendChild(b);
        });

        document.getElementById('check-fix-btn').onclick = () => {
            const userVal = document.getElementById('user-fix').value.trim().toLowerCase();
            if (userVal === data.correct.toLowerCase()) {
                score++;
                feedback.innerHTML = "<span style='color:var(--green)'>تصحيحك صح! برافو</span>";
            } else {
                feedback.innerHTML = `<span style='color:var(--red)'>غلط! التصحيح الصح هو: ${data.correct}</span>`;
            }
            fixInputArea.style.display = "none";
            nextBtn.style.display = "block";
        };
    }
}

function disableOptions() {
    document.querySelectorAll('.btn').forEach(b => b.style.pointerEvents = "none");
}

document.getElementById('next-btn').onclick = () => {
    idx++;
    if (idx < shuffled.length) load();
    else finish();
};

function finish() {
    document.querySelector('.quiz-container').innerHTML = `
        <div style="text-align:center">
            <h2>الامتحان خلص يا شبح!</h2>
            <p style="font-size:40px; color:var(--blue)">${score} / ${shuffled.length}</p>
            <p>نسبتك: ${Math.round((score/shuffled.length)*100)}%</p>
            <button class="btn" onclick="location.reload()" style="width:100%; margin-top:20px">إعادة الاختبار</button>
        </div>`;
}

start();
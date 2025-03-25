        document.getElementById("logoutBtn").addEventListener("click", function(){
            window.location.href = "../index.html";
        });

        let currentQuestion = 0;
        let score = 0;
        let questions = [
            {
                question: "Ibu kota Indonesia adalah?",
                options: ["Jakarta", "Bandung", "Surabaya", "Medan"],
                correct: 0
            },
            {
                question: "Planet terdekat dari Matahari adalah?",
                options: ["Venus", "Mars", "Merkurius", "Bumi"],
                correct: 2
            },
            {
                question: "2 + 2 × 2 = ?",
                options: ["6", "8", "4", "12"],
                correct: 0
            },
            {
                question: "Warna pelangi yang pertama adalah?",
                options: ["Merah", "Jingga", "Kuning", "Ungu"],
                correct: 0
            },
            {
                question: "Penemu bola lampu adalah?",
                options: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Albert Einstein"],
                correct: 0
            }
        ];

        function startQuiz() {
            document.getElementById('startScreen').classList.add('hidden');
            document.getElementById('quizSection').classList.remove('hidden');
            document.getElementById('totalQuestions').textContent = questions.length;
            showQuestion();
        }

        function showQuestion() {
            const question = questions[currentQuestion];
            document.getElementById('question').textContent = question.question;
            document.getElementById('currentQuestion').textContent = currentQuestion + 1;

            const optionsDiv = document.getElementById('options');
            optionsDiv.innerHTML = '';

            question.options.forEach((option, index) => {
                const button = document.createElement('button');
                button.className = 'option w-full p-4 text-left rounded-lg bg-gray-100 hover:bg-gray-200 transition-all';
                button.textContent = option;
                button.onclick = () => selectAnswer(index);
                optionsDiv.appendChild(button);
            });

            // Update progress bar
            const progress = (currentQuestion / questions.length) * 100;
            document.getElementById('progressBar').style.width = progress + '%';
        }

        function selectAnswer(selectedIndex) {
            const question = questions[currentQuestion];
            const options = document.querySelectorAll('#options button');

            options.forEach(option => option.disabled = true);

            if (selectedIndex === question.correct) {
                options[selectedIndex].classList.add('correct');
                score += 20;
                document.getElementById('score').textContent = `Skor: ${score}`;
            } else {
                options[selectedIndex].classList.add('wrong');
                options[question.correct].classList.add('correct');
            }

            setTimeout(() => {
                currentQuestion++;
                if (currentQuestion < questions.length) {
                    showQuestion();
                } else {
                    showResult();
                }
            }, 1500);
        }

        function showResult() {
            document.getElementById('quizSection').classList.add('hidden');
            document.getElementById('resultSection').classList.remove('hidden');
            document.getElementById('finalScore').textContent = score;
        }

        function restartQuiz() {
            currentQuestion = 0;
            score = 0;
            document.getElementById('resultSection').classList.add('hidden');
            document.getElementById('startScreen').classList.remove('hidden');
            document.getElementById('score').textContent = 'Skor: 0';
            document.getElementById('progressBar').style.width = '0%';
        }
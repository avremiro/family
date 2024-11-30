function openDailyQuestion() {
    const newWindow = window.open("", "DailyQuestion", "width=500,height=600");
    newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="he">
        <head>
            <meta charset="UTF-8">
            <title>שאלה יומית</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    padding: 20px;
                    background-color: #f9f9f9;
                }
                h1 {
                    color: #4caf50;
                    text-align: center;
                }
                form {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    margin-top: 20px;
                }
                input, textarea {
                    width: 100%;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    font-size: 16px;
                }
                button {
                    padding: 10px;
                    background-color: #4caf50;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    font-size: 16px;
                    cursor: pointer;
                }
                #answers-list {
                    list-style-type: none;
                    padding: 0;
                    margin-top: 20px;
                }
                #answers-list li {
                    margin-bottom: 10px;
                    padding: 10px;
                    background-color: #ffffff;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                }
                .back-button {
                    margin-top: 20px;
                    padding: 10px 20px;
                    background-color: #4caf50;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 16px;
                }
            </style>
        </head>
        <body>
            <h1>שאלה יומית</h1>
            <p>איך עברה עליכם השבת?</p>
            <form id="question-form">
                <input type="text" id="name" placeholder="שם" required>
                <textarea id="answer" placeholder="תשובה" required></textarea>
                <button type="submit">שלח</button>
            </form>
            <ul id="answers-list"></ul>
            <button class="back-button" onclick="window.close()">חזרה</button>
            <script>
                // שליפה של תשובות מ-LocalStorage
                let answers = JSON.parse(localStorage.getItem("dailyAnswers")) || [];

                const form = document.getElementById("question-form");
                const answersList = document.getElementById("answers-list");

                // הצגת תשובות שנשמרו
                function displayAnswers() {
                    answersList.innerHTML = ""; // איפוס הרשימה
                    answers.forEach(answer => {
                        const listItem = document.createElement("li");
                        listItem.textContent = answer.name + ": " + answer.answer;
                        answersList.appendChild(listItem);
                    });
                }

                // שמירה והוספת תשובה חדשה
                form.addEventListener("submit", function(event) {
                    event.preventDefault();
                    const name = document.getElementById("name").value.trim();
                    const answer = document.getElementById("answer").value.trim();

                    if (name && answer) {
                        const newAnswer = { name, answer };
                        answers.push(newAnswer);
                        localStorage.setItem("dailyAnswers", JSON.stringify(answers));
                        displayAnswers();
                        form.reset();
                    }
                });

                // הצגת התשובות ברגע שהחלון נטען
                displayAnswers();
            </script>
        </body>
        </html>
    `);
    newWindow.document.close();
}
// הודעות משפחתיות מתחלפות
const messages = [
    `<span>ימים ראשון ושני ראש חודש כסלו, היכונו לסופגניות</span> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Sufganiyah.jpg/120px-Sufganiyah.jpg" alt="סופגנייה">`,
    "מחר יציאה ב07:45. כולם קמים בשעה 07:00",
    "אמא לימור הכי יפה בעולם!!!"
];

let messageIndex = 0;

function updateMessages() {
    const messageElement = document.getElementById("family-messages");
    messageElement.innerHTML = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
}

setInterval(updateMessages, 5000); // כל 5 שניות
updateMessages(); // הצגת ההודעה הראשונה מיד
// פונקציה לפתיחת המשפט היומי
function showQuote() {
    const quote = "תחלום בגדול והעז להיכשל.<br><br><strong>(נורמן ווהן)</strong>";
    const newWindow = window.open("", "QuoteWindow", "width=400,height=300");
    newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="he">
        <head>
            <meta charset="UTF-8">
            <title>משפט יומי</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    padding: 20px;
                    background-color: #f4f4f9;
                }
                h1 {
                    color: #4caf50;
                    font-size: 24px;
                }
                p {
                    font-size: 18px;
                    color: #333;
                }
                button {
                    margin-top: 20px;
                    padding: 10px 20px;
                    background-color: #4caf50;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 16px;
                }
            </style>
        </head>
        <body>
            <h1>משפט יומי</h1>
            <p>${quote}</p>
            <button onclick="window.close()">חזרה</button>
        </body>
        </html>
    `);
    newWindow.document.close();
}

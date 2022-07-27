
let QuizObject = []
let Quiz = []
async function GetQuestLevel1() {
    let data = await axios.get('https://62d91b195d893b27b2de482c.mockapi.io/questions')
    QuizLevel1 = data.data
    $(QuizLevel1).filter(
        function (i, v) {
            if (v.level == 1) {
                QuizObject.push(v)
            }
        }
    )
    getRandomQuest()
    console.log(QuizObject)
    console.log(Quiz)
    renderQuest()
    QuizObject = []
}
async function GetQuestLevel2() {
    let data = await axios.get('https://62d91b195d893b27b2de482c.mockapi.io/questions')
    QuizLevel1 = data.data
    $(QuizLevel1).filter(
        function (i, v) {
            if (v.level == 2) {
                QuizObject.push(v)
            }
        }
    )
    getRandomQuest()
    console.log(QuizObject)
    console.log(Quiz)
    renderQuest()
    QuizObject = []
}
async function GetQuestLevel3() {
    let data = await axios.get('https://62d91b195d893b27b2de482c.mockapi.io/questions')
    QuizLevel1 = data.data
    $(QuizLevel1).filter(
        function (i, v) {
            if (v.level == 3) {
                QuizObject.push(v)
            }
        }
    )
    getRandomQuest()
    console.log(QuizObject)
    console.log(Quiz)
    renderQuest()
    QuizObject = []
}


function getRandomQuest() {
    let randomQuest = Math.floor(Math.random() * QuizObject.length)
    Quiz = QuizObject[randomQuest]
}

function renderQuest() {
    let questContent = `${Quiz.content}`
    let questOption1 = `${Quiz.keyA}`
    let questOption2 = `${Quiz.keyB}`
    let questOption3 = `${Quiz.keyC}`
    let questOption4 = `${Quiz.keyD}`
    let level = `Câu hỏi có độ khó : ${Quiz.level}`
    document.getElementById('level').innerHTML = level
    document.getElementById('content').innerHTML = questContent
    document.getElementById('keyA').innerHTML = questOption1
    document.getElementById('keyA').value = questOption1
    document.getElementById('keyB').innerHTML = questOption2
    document.getElementById('keyB').value = questOption2
    document.getElementById('keyC').innerHTML = questOption3
    document.getElementById('keyC').value = questOption3
    document.getElementById('keyD').innerHTML = questOption4
    document.getElementById('keyD').value = questOption4
    document.getElementById('inputA').value = questOption1
    document.getElementById('inputB').value = questOption2
    document.getElementById('inputC').value = questOption3
    document.getElementById('inputD').value = questOption4

    document.getElementById('ans').value = Quiz.ans
}




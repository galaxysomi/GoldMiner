
let Quiz = []
async function GetQuest(questId) {
    let data = await axios.get('https://62d91b195d893b27b2de482c.mockapi.io/questions/' + questId)
    Quiz = data.data
    console.log(Quiz)
    renderQuest()
}

function getRandomQuest() {
    let randomQuest = Math.floor(Math.random() * 100 + 1)
    GetQuest(randomQuest)
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
    document.getElementById('inputA').value = questOption1
    document.getElementById('keyB').innerHTML = questOption2
    document.getElementById('inputB').value = questOption2
    document.getElementById('keyC').innerHTML = questOption3
    document.getElementById('inputC').value = questOption3
    document.getElementById('keyD').innerHTML = questOption4
    document.getElementById('inputD').value = questOption4
    document.getElementById('ans').value = Quiz.ans
}


function checkAnswer(quizForm,
    theAnswer,
    urlRight,
    urlWrong) {
    var s = "?";

    // go through the "current choices"
    // to find the selected choice.
    // radio boxes pointing to choices
    // must be named "cc"
    // change if necessary
    //
    var i = 0;
    for (; i < quizForm.elements.length; i++) {
        if (("key" ==
            quizForm.elements[i].name) &&
            (quizForm.elements[i].checked)) {
            s = quizForm.elements[i].value;
        }
    }
    // no choice was selected
    //
    if ("?" == s) {
        alert("Please make a selection.");
        return false;
    }

    // check if we have the correct
    // choice selected
    //
    if (s == theAnswer) {
        alert("'" + s + "' is correct!");
        if (urlRight) {
            document.location.href = urlRight;
        }
    }
    else {
        alert("'" + s + "' is incorrect.");
        if (urlWrong) {
            document.location.href = urlWrong;
        }
    }
    console.log(s)
    console.log(theAnswer)
    // return "false" to indicate not to
    // submit the form.
    // change this to "true" if the form
    // "action" is valid,
    // i.e. points to a valid CGI script
    //
    return false;
}


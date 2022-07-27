
async function findStudent() {
  let num = 0;
  await axios.get('https://62d91b195d893b27b2de482c.mockapi.io/questions',)
    .then(result => {
      console.log(result.data);
      let quiz = result.data;
      let info = " ";
      $.each(quiz, async function (index, value) {

        num++;
        info += `
        <tr>
              <td>${value.id}</td>
  
              <td>${value.level}</td>
              <td>${value.content}</td>
              <td>${value.keyA}</td>
              <td>${value.keyB}</td>
              <td>${value.keyC}</td>
              <td>${value.keyD}</td>
              <td>${value.ans}</td>
  
              
              <td>
              
            <button onClick="deleteQuiz('${value.id}')" style="margin-top: 50px;  margin-bottom: 50px;" type="button" class="btn btn-danger">
              Delete
            </button>
              </td>                                                                  
            </tr>     
        
        
              `;
      });
      $('#information').html(info);


    })
}

$(document).ready(findStudent());

function deleteQuiz(id) {
  axios.delete('https://62d91b195d893b27b2de482c.mockapi.io/questions/' + id)
    .then(result => {
      if (result.status == "200") alert("Delete Quiz Success");
    })
}

function addQuiz() {
  let level = parseInt(document.getElementById("addLevel").value);
  let content = document.getElementById("addContent").value;
  let keyA = document.getElementById("addKeyA").value;
  let keyB = document.getElementById("addKeyB").value;
  let keyC = document.getElementById("addKeyC").value;
  let keyD = document.getElementById("addKeyD").value;
  let ans = document.getElementById("addKey").value;
  let data = {
    level: level,
    content: content,
    keyA: keyA,
    keyB: keyB,
    keyC: keyC,
    keyD: keyD,
    ans: ans
  }
  axios.post('https://62d91b195d893b27b2de482c.mockapi.io/questions', data)
    .then(result => {
      console.log(result.status);
      if (result.status == "201") alert("Add Quiz Success");
      else alert("Add Quiz Fail");
    })
}
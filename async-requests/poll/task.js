document.addEventListener("DOMContentLoaded", function () {
    const pollTitle = document.getElementById("poll__title");
    const pollAnswers = document.getElementById("poll__answers");
  
    function fetchPollData() {
      fetch("https://students.netoservices.ru/nestjs-backend/poll")
        .then(response => response.json())
        .then(data => {
          displayPollData(data.data);
        })
        .catch(error => {
          console.error("Error fetching poll data:", error);
        });
    }
  
    function displayPollData(pollData) {
      pollTitle.textContent = pollData.title;
  
      pollAnswers.innerHTML = "";
  
      pollData.answers.forEach(answer => {
        const answerButton = document.createElement("button");
        answerButton.classList.add("poll__answer");
        answerButton.textContent = answer;
  
        answerButton.addEventListener("click", () => {
          showConfirmationDialog();
        });
  
        pollAnswers.appendChild(answerButton);
      });
    }
  
    function showConfirmationDialog() {
      alert("Спасибо, ваш голос засчитан!");
    }
  
    fetchPollData();
  });
  
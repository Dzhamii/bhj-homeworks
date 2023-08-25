const signinForm = document.getElementById("signin__form");
const welcomeBlock = document.getElementById("welcome");
const userIdSpan = document.getElementById("user_id");

signinForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(signinForm);

    try {
        const response = await fetch("https://students.netoservices.ru/nestjs-backend/auth", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        if (data.success) {
            localStorage.setItem("user_id", data.user_id);

            showWelcomeBlock(data.user_id);
        } else {
            alert("Неверный логин/пароль");
        }
    } catch (error) {
        console.error("Ошибка при отправке запроса:", error);
    }
});

function showWelcomeBlock(userId) {
    userIdSpan.textContent = userId;
    welcomeBlock.classList.add("welcome_active");
}

const storedUserId = localStorage.getItem("user_id");
if (storedUserId) {
    showWelcomeBlock(storedUserId);
}


//display the register or login sections based on the button pressed
document.querySelector('#register').addEventListener("click", () => {
    document.getElementById('register-section').hidden = false;
    document.getElementById('login-section').hidden = true;
});

document.querySelector('#login').addEventListener("click", () => {
    document.getElementById('register-section').hidden = true;
    document.getElementById('login-section').hidden = false;
});


document.querySelector('#register-button').addEventListener("click", () => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);

    today.toDateString();
    document.getElementById('register-date').value = `${today}`;
    uniqueId();
});

function uniqueId() {
    let userId = '';
    userId = 'id-' + Math.random().toString(36).substring(2, 16);
    console.log(userId);
    document.getElementById('register-user-id').value = `${userId}`;
}

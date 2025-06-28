// auth.js

// Check login state on load
document.addEventListener("DOMContentLoaded", () => {
  const user = localStorage.getItem("starmiinkUser");
  const menu = document.querySelector(".menu-bar");

  if (user) {
    const parsedUser = JSON.parse(user);
    const logoutBtn = document.createElement("button");
    logoutBtn.textContent = "🚪 Logout";
    logoutBtn.style.marginLeft = "10px";
    logoutBtn.onclick = () => {
      localStorage.removeItem("starmiinkUser");
      alert("Logged out!");
      window.location.reload();
    };

    // Optional: Customize greeting
    const greeting = document.createElement("span");
    greeting.textContent = `🌟 Welcome, ${parsedUser.username}`;
    greeting.style.fontSize = "8px";
    greeting.style.marginLeft = "10px";

    menu?.appendChild(greeting);
    menu?.appendChild(logoutBtn);
  }
});

// Hiển thị lời chào dựa trên giờ trong ngày
window.addEventListener("DOMContentLoaded", () => {
  const greeting = document.createElement("div");
  const hour = new Date().getHours();
  let message;

  if (hour < 12) {
    message = "🌅 Good morning and welcome!";
  } else if (hour < 18) {
    message = "☀️ Good afternoon, enjoy the dishes!";
  } else {
    message = "🌙 Good evening! Ready to explore Vietnamese flavors?";
  }

  greeting.textContent = message;
  greeting.style.background = "#ffd54f";
  greeting.style.color = "#333";
  greeting.style.padding = "10px";
  greeting.style.textAlign = "center";
  greeting.style.fontWeight = "bold";

  document.body.insertBefore(greeting, document.body.firstChild);
});

// Hover ảnh sẽ phóng to nhẹ nhàng
const addHoverEffect = () => {
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.style.transition = "transform 0.3s ease-in-out";
    img.addEventListener("mouseenter", () => {
      img.style.transform = "scale(1.05)";
    });
    img.addEventListener("mouseleave", () => {
      img.style.transform = "scale(1)";
    });
  });
};

window.onload = addHoverEffect;
// Sweetuu ❤️ Rasmalaiiii

const enterBtn = document.getElementById("enterBtn");

if (enterBtn) {
    enterBtn.addEventListener("click", () => {
        alert(
`❤️ Welcome Rasmalaiiii ❤️

Our love story is just beginning...

From your Sweetuu 💕`
        );

        document.querySelector(".timeline").scrollIntoView({
            behavior: "smooth"
        });
    });
}
.openGift{
    animation:openBox 1s forwards;
}

@keyframes openBox{
    0%{
        transform:rotate(0deg) scale(1);
    }
    50%{
        transform:rotate(-15deg) scale(1.2);
    }
    100%{
        transform:rotate(0deg) scale(1);
    }
}

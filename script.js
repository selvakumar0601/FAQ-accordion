const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {

    question.addEventListener("click", () => {

        const currentItem = question.parentElement;

        // Close other FAQ items
        document.querySelectorAll(".faq-item").forEach(item => {
            if (item !== currentItem) {
                item.classList.remove("active");
            }
        });

        // Open / close current item
        currentItem.classList.toggle("active");

    });

});
function includeHTML() {
    const elements = document.querySelectorAll("[data-include]");
    elements.forEach(el => {
        const file = el.getAttribute("data-include");
        if (file) {
            fetch(file)
                .then(response => {
                    if (response.ok) return response.text();
                    else throw new Error("Không thể tải file: " + file);
                })
                .then(data => el.innerHTML = data)
                .catch(err => console.error(err));
        }
    });
}

// Tự động gọi khi tải trang
document.addEventListener("DOMContentLoaded", includeHTML);

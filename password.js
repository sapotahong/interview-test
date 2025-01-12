document.addEventListener("DOMContentLoaded", () => {
    const password = prompt("Please enter the password to access this page:");
    if (password !== "sapotahong") {
        document.body.innerHTML = `
        <main>
            <section class="section section--1">
                <h1>Access Denied</h1>
                <p>The password you entered is incorrect. If you need assistance, please contact 
                <a href="mailto:sapotahong@gmail.com">sapotahong@gmail.com</a>.</p>
            </section>
        </main>
        `;
    }
});

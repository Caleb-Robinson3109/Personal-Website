function goBack() {
    // Get the previous page URL from document.referrer
    var previousPage = document.referrer;

    if (previousPage.includes("KKA.html")) {
        //goes to about
        window.location.href = "../../../../project/projects/KKA/KKA.html"
    } else {
        //goes to projects
        window.location.href = "../../game.html"
    }
}
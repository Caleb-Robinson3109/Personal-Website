function goBack() {
    // Get the previous page URL from document.referrer
    var previousPage = document.referrer;

    if (previousPage.includes("about.html")) {
        //goes to about
        window.location.href = "../../../about/about.html"
    } else {
        //goes to projects
        window.location.href = "../../project.html"
    }
}
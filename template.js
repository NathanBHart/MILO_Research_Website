document.addEventListener("DOMContentLoaded", function () {
    const techData = JSON.parse(
        document.getElementById("tech-data").textContent
    );

    let img = document.getElementById("tech-image");
    let caption = document.getElementById("tech-image-caption");

    if (techData["image-url"] !== "") {
        img.src = techData["image-url"];
        caption.innerHTML = techData["image-caption"];
    } else {
        img.remove();
        caption.remove();
    }

    document.getElementById("tech-id").textContent = techData["tech-id"];
    document.getElementById("tech-title").textContent = techData["title"];
    if (techData["inventors"].length >= 1 && techData["inventors"][0] !== "") {
        document.getElementById("inventors").textContent =
            techData["inventors"].join(", ");
    } else {
        document.getElementById("inventors-block").remove();
    }
    if (techData["patent-status"] !== "") {
        document.getElementById("patent-status").textContent =
            techData["patent-status"];
    } else {
        document.getElementById("patent-status-block").remove();
    }
    if (techData["research-stage"] !== "") {
        document.getElementById("research-stage").textContent =
            techData["research-stage"];
    } else {
        document.getElementById("research-stage-block").remove();
    }
    document.getElementById("contact-name").textContent =
        techData["contact-name"];
    let title = document.getElementById("contact-title");
    if (techData["contact-title"] !== "") {
        title.textContent = techData["contact-title"];
    } else {
        title.remove();
    }

    let emailBtn = document.getElementById("contact-email-btn");
    if (techData["contact-email"] !== "") {
        emailBtn.textContent = "Email " + techData["contact-name"];
        emailBtn.href = "mailto:" + techData["contact-email"];
    } else {
        emailBtn.remove();
    }

    let altContactBtn = document.getElementById("alternative-contact-btn");
    if (techData["alternative-contact"] !== "") {
        altContactBtn.textContent = "Contact " + techData["contact-name"];
        altContactBtn.href = techData["alternative-contact"];
    } else {
        altContactBtn.remove();
    }

    document.getElementById("executive-summary").innerHTML =
        techData["executive-summary"];
    document.getElementById("abstract").innerHTML = techData["abstract"];

    // Populate applications as a list
    const applicationsList = document.getElementById("applications");
    if (
        techData["applications"].length >= 1 &&
        techData["applications"][0] !== ""
    ) {
        techData["applications"].forEach(function (application) {
            const listItem = document.createElement("li");
            listItem.innerHTML = application;
            applicationsList.appendChild(listItem);
        });
    } else {
        document.getElementById("applications-block").remove();
    }

    // Populate advantages as a list
    const advantagesList = document.getElementById("advantages");
    if (
        techData["advantages"].length >= 1 &&
        techData["advantages"][0] !== ""
    ) {
        techData["advantages"].forEach(function (advantage) {
            const listItem = document.createElement("li");
            listItem.innerHTML = advantage;
            advantagesList.appendChild(listItem);
        });
    } else {
        document.getElementById("advantages-block").remove();
    }

    // Populate references as a list
    const referencesList = document.getElementById("references");
    if (
        techData["references"].length >= 1 &&
        techData["references"][0] !== ""
    ) {
        techData["references"].forEach(function (reference) {
            const listItem = document.createElement("li");
            listItem.innerHTML = reference;
            referencesList.appendChild(listItem);
        });
    } else {
        document.getElementById("references-block").remove();
    }
});

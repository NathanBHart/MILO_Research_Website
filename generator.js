document.addEventListener("DOMContentLoaded", function () {
    // Check if tech-content exists and has flag to run
    const techContentElement = document.getElementById("tech-content");
    if (!techContentElement || !techContentElement.dataset.run) {
        return;
    }

    let techData;

    try {
        techData = JSON.parse(document.getElementById("tech-data").textContent);
        // Check if techData is empty or not an object
        if (!techData || typeof techData !== "object") {
            console.error("Invalid tech data format:", techData);
            document.getElementById("tech-content").innerHTML =
                "<p>Error loading content.</p>";
            return;
        }
    } catch (error) {
        console.error("Failed to parse tech data:", error);
        document.getElementById("tech-content").innerHTML =
            "<p>Error loading content.</p>";
        return;
    }

    let techTitle = "";
    if (techData["title"] !== "") {
        techTitle = `<h2 id="tech-title">${techData["title"]}</h2>`;
    } else {
        techTitle = `<h2 id="tech-title">Technology Title Missing</h2>`;
    }

    let techExecutiveSummary = "";
    if (techData["executive-summary"] !== "") {
        techExecutiveSummary = `<p id="executive-summary">${techData["executive-summary"]}</p>`;
    }

    let techFigure = "";
    if (techData["image-url"] !== "") {
        techFigure = `
        <figure style="margin-left: -15px;margin-right: -15px;width: calc(100% + 30px) !important;max-width: calc(100% + 30px) !important;">
            <a href="${techData["image-url"]}" data-lightbox="tech-image" data-title="${techData["image-caption"]}">
                <img class="technology-image" src="${techData["image-url"]}" alt="${techData["alt-text"]}" loading="lazy" style="cursor: zoom-in;">
            </a>
            <figcaption class="technology-image-caption">${techData["image-caption"]}</figcaption>
        </figure>`;
    }

    let techId = techData["tech-id"] !== "" ? techData["tech-id"] : "N/A";
    let techInventors = "";
    if (techData["inventors"].length >= 1 && techData["inventors"][0] !== "") {
        techInventors = `<div id="inventors-block" class="mb-4"><h4 class="mb-2">Inventors:</h4><p id="inventors">${techData[
            "inventors"
        ].join(", ")}</p></div>`;
    }

    let techPatentStatus = "";
    if (techData["patent-status"] !== "") {
        techPatentStatus = `<div id="patent-status-block" class="mb-4"><h4 class="mb-2">Patent Status:</h4><p id="patent-status">${techData["patent-status"]}</p></div>`;
    }

    let techResearchStage = "";
    if (techData["research-stage"] !== "") {
        techResearchStage = `<div id="research-stage-block" class="mb-4"><h4 class="mb-2">Stage of Research:</h4><p id="research-stage">${techData["research-stage"]}</p></div>`;
    }

    let techContactName = "";
    if (techData["contact-name"] !== "") {
        techContactName = `<p id="contact-name">${techData["contact-name"]}</p>`;
    }

    let techContactTitle = "";
    if (techData["contact-title"] !== "") {
        techContactTitle = `<p id="contact-title">${techData["contact-title"]}</p>`;
    }

    let techContactEmail = "";
    let emailContent = `mailto:${techData["contact-email"]}?subject=Inquiry%20about%20${techData["title"]}&body=Hello%20${techData["contact-name"]},%0D%0A%0D%0AI%20am%20interested%20in%20your%20technology%20"${techData["title"]}".`;
    if (techData["contact-email"] !== "" && techData["contact-name"] !== "") {
        techContactEmail = `<a id="contact-email-btn" class="btn btn-primary btn-block btn-arrow mt-2" target="_blank" href="${emailContent}" role="button">Email ${techData["contact-name"]}</a>`;
    }

    let techAlternativeContact = "";
    if (
        techData["alternative-contact"] !== "" &&
        techData["contact-name"] !== ""
    ) {
        techAlternativeContact = `<a id="alternative-contact-btn" class="btn btn-primary btn-block btn-arrow mt-2" target="_blank" href="${techData["alternative-contact"]}" role="button">Contact ${techData["contact-name"]}</a>`;
    }

    let techContactButtons = "";
    if (techContactEmail !== "" || techAlternativeContact !== "") {
        techContactButtons = `<div id="contact-buttons" class="mb-4">${techContactEmail}${techAlternativeContact}</div>`;
    }

    let techContactBlock = "";
    if (techData["contact-name"] !== "") {
        techContactBlock = `<div id="contact-block" class="mb-4"><h4 class="mb-2">Contact:</h4>${techContactName}${techContactTitle}${techContactButtons}</div>`;
    }

    let techAbstract = "";
    if (techData["abstract"] !== "") {
        techAbstract = `<div id="abstract-block" class="mb-4"><h4 class="mb-2">Abstract:</h4><p id="abstract">${techData["abstract"]}</p></div>`;
    }

    let techApplications = "";
    if (
        techData["applications"].length >= 1 &&
        techData["applications"][0] !== ""
    ) {
        let applicationsList = "";
        techData["applications"].forEach(function (application) {
            applicationsList += `<li>${application}</li>`;
        });
        techApplications = `<div id="applications-block" class="mb-4"><h4 class="mb-2">Applications:</h4><ul id="applications">${applicationsList}</ul></div>`;
    }

    let techAdvantages = "";
    if (
        techData["advantages"].length >= 1 &&
        techData["advantages"][0] !== ""
    ) {
        let advantagesList = "";
        techData["advantages"].forEach(function (advantage) {
            advantagesList += `<li>${advantage}</li>`;
        });
        techAdvantages = `<div id="advantages-block" class="mb-4"><h4 class="mb-2">Advantages:</h4><ul id="advantages">${advantagesList}</ul></div>`;
    }

    let techReferences = "";
    if (
        techData["references"].length >= 1 &&
        techData["references"][0] !== ""
    ) {
        let referencesList = "";
        techData["references"].forEach(function (reference) {
            referencesList += `<li>${reference}</li>`;
        });
        techReferences = `<div id="references-block" class="mb-4"><h4 class="mb-2">References:</h4><ul id="references">${referencesList}</ul></div>`;
    }

    let techHTML = `<div class="container"><div class="row"><div class="col-12"><div class="row"><div class="col-md-12 align-self-center my-3"><div class="container"><div class="technology"><div class="row flex-row-reverse"><div class="col-lg-7 pl-lg-5 my-auto pb-5 technology-title">${techTitle}${techExecutiveSummary}</div><div class="col-lg-5">${techFigure}</div></div><hr class="mb-5"><div class="technology-body"><div class="row"><div class="col-lg-4 technology-sidebar"><div class="tech-id text-white"><div class="row align-items-center"><div class="col-6"><h4 style="font-size: x-large;" class="text-white">Tech ID:</h4></div><div class="col-6"><p id="tech-id" class="text-white" style="font-size: x-large;font-weight: 800;text-align: right;">${techId}</p></div></div></div><div class="sidebar-info">${techInventors}${techResearchStage}${techPatentStatus}${techContactBlock}</div></div><div class="col-lg-8 pl-lg-5">${techAbstract}${techApplications}${techAdvantages}${techReferences}</div></div></div></div></div></div></div></div></div></div>`;

    document.getElementById("tech-content").innerHTML = techHTML;
});

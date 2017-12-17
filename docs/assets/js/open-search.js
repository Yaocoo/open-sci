obj = getQueryString('obj');
srchContent = getQueryString('srchContent');
srchType = getQueryString('srchType');

var googleScho = {
    articleUrlPre: "https://scholar.google.com/scholar?hl=en&q=",
    authorUrlPre: "https://scholar.google.com/citations?view_op=search_authors&hl=en&mauthors=",
}
var semanticScho = {
    articleUrlPre: "https://www.semanticscholar.org/search?sort=relevance&q=",
}

var researchGate = {
    articleUrlPre: "https://www.researchgate.net/search.Search.html?type=publication&query=",
    authorUrlPre: "https://www.researchgate.net/search.Search.html?type=researcher&query=",
}

var sage = {
    articleUrlPre: "http://journals.sagepub.com/action/doSearch?AllField=",
}

if (obj == 'article') {
    switch (srchType) {
        case 'google_scholar':
            // srchContent = srchContent.replace('+',' ');
            resultUrl = googleScho.articleUrlPre + srchContent;
            break;

        case 'semantic_scholar':
            srchContent = srchContent.replace('+', ' ');
            resultUrl = semanticScho.articleUrlPre + srchContent;
            break;

        case 'research_gate':
            srchContent = srchContent.replace('+', ' ');
            resultUrl = researchGate.articleUrlPre + srchContent;
            break;

        case 'sage_journals':
            // srchContent = srchContent.replace('+',' ');
            resultUrl = sage.articleUrlPre + srchContent;
            break;
    }
} else if (obj == 'author') {
    switch (srchType) {
        case 'google_scholar':
            // srchContent = srchContent.replace('+',' ');
            resultUrl = googleScho.authorUrlPre + srchContent;
            break;

        case 'subject_aera':
            srchContent = srchContent.replace('+', '_');
            resultUrl = googleScho.authorUrlPre + 'label:' + srchContent;
            break;

        case 'research_gate':
            srchContent = srchContent.replace('+', ' ');
            resultUrl = researchGate.authorUrlPre + srchContent;
            break;
    }
}


window.location.href = resultUrl;
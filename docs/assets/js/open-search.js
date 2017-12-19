obj = getQueryString('obj');
srchContent = getQueryString('srchContent');
srchType = getQueryString('srchType');

articleUrlPre = {
    googleScho: "https://scholar.google.com/scholar?hl=en&q=",
    semanticScho: "https://www.semanticscholar.org/search?sort=relevance&q=",
    researchGate: "https://www.researchgate.net/search.Search.html?type=publication&query=",
    pubmed: "https://www.ncbi.nlm.nih.gov/pubmed/?term=",
    sage: "http://journals.sagepub.com/action/doSearch?AllField=",
    nature: "https://www.nature.com/search?q=",
    science: "http://search.sciencemag.org/?q=",
    cell: "http://www.cell.com/action/doSearch?searchType=quick&occurrences=all&journalCode=&searchScope=fullSite&searchText=",
}

authorUrlPre = {
    googleScho: "https://scholar.google.com/citations?view_op=search_authors&hl=en&mauthors=",
    researchGate: "https://www.researchgate.net/search.Search.html?type=researcher&query=",
}

if (obj == 'article') {
    switch (srchType) {
        case 'google_scholar':
            resultUrl = articleUrlPre.googleScho + srchContent;
            break;

        case 'semantic_scholar':
            srchContent = srchContent.replace('+', ' ');
            resultUrl = articleUrlPre.semanticScho + srchContent;
            break;

        case 'research_gate':
            srchContent = srchContent.replace('+', ' ');
            resultUrl = articleUrlPre.researchGate + srchContent;
            break;

        case 'pubmed':
            resultUrl = articleUrlPre.pubmed + srchContent;
            break;

        case 'sage_journals':
            resultUrl = articleUrlPre.sage + srchContent;
            break;

        case 'nature':
            resultUrl = articleUrlPre.nature + srchContent;
            break;

        case 'science':
            srchContent = srchContent.replace('+', ' ');
            resultUrl = articleUrlPre.science + srchContent;
            break;

        case 'cell':
            resultUrl = articleUrlPre.cell + srchContent;
            break;

    }
} else if (obj == 'author') {
    switch (srchType) {
        case 'google_scholar':
            resultUrl = authorUrlPre.googleScho + srchContent;
            break;

        case 'subject_aera':
            srchContent = srchContent.replace('+', '_');
            resultUrl = authorUrlPre.googleScho + 'label:' + srchContent;
            break;

        case 'research_gate':
            srchContent = srchContent.replace('+', ' ');
            resultUrl = authorUrlPre.researchGate + srchContent;
            break;
    }
}


window.location.href = resultUrl;
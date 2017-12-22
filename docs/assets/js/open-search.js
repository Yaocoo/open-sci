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
    arXiv: "https://arxiv.org/find/all/1/all:+AND+value+AND+phase+locking/0/1/0/all/0/1",
    bioXiv: "https://www.biorxiv.org/search/phase%252Blocking%252Bvalue",
}

authorUrlPre = {
    googleScho: "https://scholar.google.com/citations?view_op=search_authors&hl=en&mauthors=",
    researchGate: "https://www.researchgate.net/search.Search.html?type=researcher&query=",
}

generalUrlPre = {
    google: "https://www.google.com/search?&q=",
    bing: "https://www.bing.com/search?q=",
    quora: "https://www.quora.com/search?q=",
    rgQuestion: "https://www.researchgate.net/search.Search.html?type=question&query=",
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

        case 'google_pdf':
            resultUrl = generalUrlPre.google + 'filetype:pdf ' + srchContent;
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
} else if (obj = 'general') {
    switch (srchType) {
        case 'google':
            resultUrl = generalUrlPre.google + srchContent;
            break;

        case 'bing':
            resultUrl = generalUrlPre.bing + srchContent;
            break;

            case 'quora':
            resultUrl = generalUrlPre.quora + srchContent;
            break;

            case 'rg_question':
            srchContent = srchContent.replace('+', ' ');
            resultUrl = generalUrlPre.rgQuestion + srchContent;
            break;

            
    }
}


window.location.href = resultUrl;
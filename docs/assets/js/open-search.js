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
    arXiv: "https://arxiv.org/find/all/1/all:+AND+value+AND+phase+locking",
    bioRXiv: "https://www.biorxiv.org/search/", //phase%252Blocking%252Bvalue",
};

authorUrlPre = {
    googleScho: "https://scholar.google.com/citations?view_op=search_authors&hl=en&mauthors=",
    researchGate: "https://www.researchgate.net/search.Search.html?type=researcher&query=",
    orcid: "https://orcid.org/orcid-search/quick-search/?searchQuery=",

};

generalUrlPre = {
    google: "https://www.google.com/search?&q=",
    bing: "https://www.bing.com/search?q=",
    wiki: "https://en.wikipedia.org/wiki/Special:Search?search=",
    quora: "https://www.quora.com/search?q=",
    rgQuestion: "https://www.researchgate.net/search.Search.html?type=question&query=",
};

httpMethod = 1; // 1 - get, 0 - POST

if (obj == 'article') {
    switch (srchType) {
        case 'google_scholar':
            resultUrl = articleUrlPre.googleScho + srchContent;
            break;

        case 'semantic_scholar':
            srchContent = srchContent.replace(/\+/g, ' ');
            resultUrl = articleUrlPre.semanticScho + srchContent;
            break;

        case 'research_gate':
            srchContent = srchContent.replace(/\+/g, ' ');
            resultUrl = articleUrlPre.researchGate + srchContent;
            break;

        case 'pubmed':
            resultUrl = articleUrlPre.pubmed + srchContent;
            break;

        case 'google_pdf':
            resultUrl = generalUrlPre.google + 'filetype:pdf ' + srchContent;
            break;

        case 'nature':
            resultUrl = articleUrlPre.nature + srchContent;
            break;

        case 'science':
            srchContent = srchContent.replace(/\+/g, ' ');
            resultUrl = articleUrlPre.science + srchContent;
            break;

        case 'cell':
            resultUrl = articleUrlPre.cell + srchContent;
            break;

        case 'arxiv':
            srchContent = srchContent.replace(/\+/g, ' ');
            params = {
                query: srchContent,
                searchtype: 'all',
            };
            post('https://arxiv.org/search/', params);

            httpMethod = 0;
            break;

        case 'biorxiv':
            srchContent = srchContent.replace(/\+/g, '%252B');
            resultUrl = articleUrlPre.bioRXiv + srchContent;
            break;

    }
} else if (obj == 'author') {
    switch (srchType) {
        case 'google_scholar':
            resultUrl = authorUrlPre.googleScho + srchContent;
            break;

        case 'subject_aera':
            srchContent = srchContent.replace(/\+/g, '_');
            resultUrl = authorUrlPre.googleScho + 'label:' + srchContent;
            break;

        case 'research_gate':
            srchContent = srchContent.replace(/\+/g, ' ');
            resultUrl = authorUrlPre.researchGate + srchContent;
            break;

        case 'orcid':
            srchContent = srchContent.replace(/\+/g, ' ');
            resultUrl = authorUrlPre.orcid + srchContent;
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

        case 'wiki':
            resultUrl = generalUrlPre.wiki + srchContent;
            break;

        case 'quora':
            resultUrl = generalUrlPre.quora + srchContent;
            break;

        case 'rg_question':
            srchContent = srchContent.replace(/\+/g, ' ');
            resultUrl = generalUrlPre.rgQuestion + srchContent;
            break;


    }
}

if (httpMethod) {
    window.location.href = resultUrl;
}
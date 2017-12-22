//  functions
function changeScihubHost(host) {
    switch (host) {
        case 'cn':
            host_url = 'http://sci-hub.cn';
            break;
        case 'hk':
            host_url = 'http://sci-hub.hk';
            break;
        case 'tw':
            host_url = 'http://sci-hub.tw';
            break;
        case 'tv':
            host_url = 'http://sci-hub.tv';
            break;
        case 'mn':
            host_url = 'http://sci-hub.mn';
            break;
        case 'la':
            host_url = 'http://sci-hub.la';
            break;
    }

    $("#scihub-form").attr("action", host_url);
}


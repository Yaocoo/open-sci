//  functions
function changeScihubHost(host) {
    switch (host) {
        case 'tw':
            host_url = 'https://sci-hub.tw';
            break;
        case 'se':
            host_url = 'https://sci-hub.se';
            break;
        case 'shop':
            host_url = 'https://sci-hub.shop';
            break;
        case 'fun':
            host_url = 'https//sci-hub.fun';
            break;


        case 'cn':
            host_url = 'http://sci-hub.cn';
            break;
        case 'hk':
            host_url = 'http://sci-hub.hk';
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


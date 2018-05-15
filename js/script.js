function copyCode(x) {
    var copyText = document.getElementById(x);
    copyText.select();
    document.execCommand("Copy");
}
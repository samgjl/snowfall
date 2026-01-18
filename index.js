const airtable = 'https://airtable.com/apprPhYEXiE9svCFc/shr76pclgsZDoJAfN';
const submit = document.querySelector("#submit");
const share = document.querySelector("#share");

function shareableLink() {
    let plate = document.querySelector("#plate-num").value;
    return airtable + `?search=${plate}`;
}

submit.addEventListener("click", () => {
    const link = shareableLink();
    window.open(link, '_blank');
});

share.addEventListener("click", () => {
    const link = shareableLink();
    navigator.clipboard.writeText(link);
});
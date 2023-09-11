function downloadClient() {
    window.location.href = "link_to_your_download_page_or_file";
}
// Event listener for FAQ items
document.querySelectorAll('#faq .faq-item h3').forEach(item => {
    item.addEventListener('click', event => {
        const answer = event.currentTarget.nextElementSibling;
        answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
    });
});

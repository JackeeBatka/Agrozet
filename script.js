$(function () {
    // Aktivní nav-link podle aktuální URL
    var currentPath = window.location.pathname.split('/').pop() || 'index.php';
    $('.site-nav .nav-link').each(function () {
        if ($(this).attr('href') === currentPath) {
            $(this).closest('.nav-item').addClass('active');
        }
    });
});

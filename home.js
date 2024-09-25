var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,  // Tạo vòng lặp
    pagination: {
        el: '.swiper-pagination',
        clickable: true,  // Cho phép người dùng bấm vào pagination
    },
    navigation: {
        nextEl: '.swiper-button-next',  // Nút chuyển sang slide kế tiếp
        prevEl: '.swiper-button-prev',  // Nút quay về slide trước đó
    },
});

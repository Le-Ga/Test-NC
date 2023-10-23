class Slider {
    constructor(images, parentContainer, parentControls, prevBtn, nextBtn) {
        this.images = images;
        this.currentIndex = 0;
        this.sliderElement = document.querySelector(parentContainer);
        this.controls = document.querySelector(parentControls);
        this.showSlide(this.currentIndex);

        const prevButton = this.controls.querySelector(prevBtn);
        prevButton.addEventListener('click', () => this.prevSlide());

        const nextButton = this.controls.querySelector(nextBtn);
        nextButton.addEventListener('click', () => this.nextSlide());
    }

    showSlide(index) {
        this.sliderElement.innerHTML = `<img src="${this.images[index]}" alt="Slide">`;
    }

    prevSlide() {
        if (this.currentIndex === 0) {
            this.currentIndex = this.images.length - 1;
        } else {
            this.currentIndex = this.currentIndex - 1;
        }

        this.showSlide(this.currentIndex);
    }

    nextSlide() {
        if (this.currentIndex === this.images.length - 1) {
            this.currentIndex = 0;
        } else {
            this.currentIndex = this.currentIndex + 1;
        }

        this.showSlide(this.currentIndex);
    }
}

const images = [
    'https://avatars.mds.yandex.net/i?id=deb1f7b9d3222b5586d7595aede5075a29745036-8567894-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=270ceb28a7d01e05e92a96e1dac899aa5f62f5c5-9853586-images-thumbs&n=13',
    'https://yandex-images.clstorage.net/GY5uL6087/94e4e8Ugx/M_8FNyBXiDCRBXf4JIr2VqYaZsmdeRjVuuo-u9WrjL8aeKm6snvsVqN530cfVhDeU94c1KS23OJGwrnYplU0bHO-YDYReoBp4FxbmXSq-kKubxPF2QhwxM6DN8vsjuiXMmSgJkOmKMs73Ha-3_656xKHbaDUxo3X_179cEuoIUX7C1X7ZKeJDA3x-vAoin6WlqNOmYEEAEgelscDZIc4CoOJtJ6jsgybhwiCKiuOXd-ia0kgGS7RE9uf0czjvNHBc2dZB6Cr3cj9KS7cELIanoozckmpEDx41o6bk7wrqAYjqXyCp76ki5tkok4H3jmvqnNFnH0qybenk6WgT5jlwT__rUPAf8mkhV1aqGzeqoZW63o9OawUEIKmF8tQ61wKjw30YleGBONz-CaWez5lCx5fuZh57oWzQ6sxiKegSW0vAykzQBcJvD19dqT4nhZ6HhtiNWF0uOiOfmcvTN-IkvuRPL7fZiQT59SSMqOe3U-CI10YORqtn68T0VwfUNk1a8ehb8x7QcCVXaZICLIq0rZL0qUVIORIcloLwxTTVHJbfTSCp3Iwb69QYtYHztFT0lvl4BXO_YsnB81Uf4gRKdf7XTtEvxkkHfGOxGAWGlJqP0rVgeR0FNJCC68w65Qi652sileyJHNz3G46j0q5y57nZQg58m0bQ-NV_B-UPZ27k53bZIsJwOWlcph0Qv4eClOeQSkMnCCa3jvjXF-UzoNJdMb7dpDjG0x-Imdumc9W611gOS7RX187bUwnML2thyPh8xx_DZgtGVIolKoO7lazWi1dJDz0EsIfJ3B_QEqjbXhykyagn9NQLkpnBjGf8pfVrOViLYcfKyVglxhNpau3hc9MU4G0Da0yUOAChlqmt3al3SRktJ7q-_fw6ximB5XUSlf28A8jLG4OazJh675jxdQJPpU_13_Z5POE2c0j88lPTIPVUKEBlmTURnqGUnd6sY0ksKSSLpeDkGMo',
];

const mySlider = new Slider(images, '.slides', '.controls', '.prev', '.next');

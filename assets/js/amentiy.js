const items = document.querySelectorAll('.slideshow-item');
const overlay = document.querySelector('.text-overlay');
const amename = document.querySelector('.amenity-name');

let currentIndex = 0;
let amenity = 0;

const amenityName  = [
    'Parking',
    'Swimming Pool',
    'Security',
    'Clinics',
    'Library',
    'Bedrooms',
    'Smart Homes',
    'Playground'
]

const aminiteis = [
    [
        { image: 'assets/images/aminities/back1.png', text: 'Vasant Vihar, New Delhi, Delhi, India' },
        { image: '/assets/images/aminities/back3.png', text: 'Trikuta Nagar, Jammu, Jammu and Kashmir, India' },
        { image: '/assets/images/aminities/back3.png', text: 'Malabar Hill, Mumbai, Maharashtra, India' },
        { image: '/assets/images/aminities/back3.png', text: 'Gomti Nagar, Lucknow, Uttar Pradesh, India' },
        { image: '/assets/images/aminities/back3.png', text: 'Kalyani Nagar, Pune, Maharashtra, India' },
        { image: '/assets/images/aminities/back3.png', text: 'Gurgoan Delhi Expressway, Gurgoan, Delhi, India'}
    ],
    [
        { image: '/assets/images/aminities/back1.png', text: 'Vasant Vihar, New Delhi, Delhi, India' },
        { image: '/assets/images/aminities/back2.png', text: 'Trikuta Nagar, Jammu, Jammu and Kashmir, India' },
        { image: '/assets/images/aminities/back3.png', text: 'Malabar Hill, Mumbai, Maharashtra, India' },
        { image: '/assets/images/aminities/back1.png', text: 'Gomti Nagar, Lucknow, Uttar Pradesh, India' },
        { image: '/assets/images/aminities/back3.png', text: 'Kalyani Nagar, Pune, Maharashtra, India' },
        { image: '/assets/images/aminities/back2.png', text: 'Gurgoan Delhi Expressway, Gurgoan, Delhi, India'}
    ],
    [
        { image: '/assets/images/aminities/back1.png', text: 'Vasant Vihar, New Delhi, Delhi, India' },
        { image: '/assets/images/aminities/back2.png', text: 'Trikuta Nagar, Jammu, Jammu and Kashmir, India' },
        { image: '/assets/images/aminities/back3.png', text: 'Malabar Hill, Mumbai, Maharashtra, India' },
        { image: '/assets/images/aminities/back1.png', text: 'Gomti Nagar, Lucknow, Uttar Pradesh, India' },
        { image: '/assets/images/aminities/back3.png', text: 'Kalyani Nagar, Pune, Maharashtra, India' },
        { image: '/assets/images/aminities/back2.png', text: 'Gurgoan Delhi Expressway, Gurgoan, Delhi, India'}
    ],
    [
        { image: '/assets/images/aminities/back1.png', text: 'Vasant Vihar, New Delhi, Delhi, India' },
        { image: '/assets/images/aminities/back2.png', text: 'Trikuta Nagar, Jammu, Jammu and Kashmir, India' },
        { image: '/assets/images/aminities/back3.png', text: 'Malabar Hill, Mumbai, Maharashtra, India' },
        { image: '/assets/images/aminities/back1.png', text: 'Gomti Nagar, Lucknow, Uttar Pradesh, India' },
        { image: '/assets/images/aminities/back3.png', text: 'Kalyani Nagar, Pune, Maharashtra, India' },
        { image: '/assets/images/aminities/back2.png', text: 'Gurgoan Delhi Expressway, Gurgoan, Delhi, India'}
    ],
    [
        { image: '/assets/images/aminities/back1.png', text: 'Vasant Vihar, New Delhi, Delhi, India' },
        { image: '/assets/images/aminities/back2.png', text: 'Trikuta Nagar, Jammu, Jammu and Kashmir, India' },
        { image: '/assets/images/aminities/back3.png', text: 'Malabar Hill, Mumbai, Maharashtra, India' },
        { image: '/assets/images/aminities/back1.png', text: 'Gomti Nagar, Lucknow, Uttar Pradesh, India' },
        { image: '/assets/images/aminities/back3.png', text: 'Kalyani Nagar, Pune, Maharashtra, India' },
        { image: '/assets/images/aminities/back2.png', text: 'Gurgoan Delhi Expressway, Gurgoan, Delhi, India'}
    ],
    [
        { image: '/assets/images/aminities/back1.png', text: 'Vasant Vihar, New Delhi, Delhi, India' },
        { image: '/assets/images/aminities/back2.png', text: 'Trikuta Nagar, Jammu, Jammu and Kashmir, India' },
        { image: '/assets/images/aminities/back3.png', text: 'Malabar Hill, Mumbai, Maharashtra, India' },
        { image: '/assets/images/aminities/back1.png', text: 'Gomti Nagar, Lucknow, Uttar Pradesh, India' },
        { image: '/assets/images/aminities/back3.png', text: 'Kalyani Nagar, Pune, Maharashtra, India' },
        { image: '/assets/images/aminities/back2.png', text: 'Gurgoan Delhi Expressway, Gurgoan, Delhi, India'}
    ],
    [
        { image: '/assets/images/aminities/back1.png', text: 'Vasant Vihar, New Delhi, Delhi, India' },
        { image: '/assets/images/aminities/back2.png', text: 'Trikuta Nagar, Jammu, Jammu and Kashmir, India' },
        { image: '/assets/images/aminities/back2.png', text: 'Malabar Hill, Mumbai, Maharashtra, India' },
        { image: '/assets/images/aminities/back2.png', text: 'Gomti Nagar, Lucknow, Uttar Pradesh, India' },
        { image: '/assets/images/aminities/back2.png', text: 'Kalyani Nagar, Pune, Maharashtra, India' },
        { image: '/assets/images/aminities/back2.png', text: 'Gurgoan Delhi Expressway, Gurgoan, Delhi, India'}
    ],
    [
        { image: '/assets/images/aminities/back1.png', text: 'Vasant Vihar, New Delhi, Delhi, India' },
        { image: '/assets/images/aminities/back2.png', text: 'Trikuta Nagar, Jammu, Jammu and Kashmir, India' },
        { image: '/assets/images/aminities/back3.png', text: 'Malabar Hill, Mumbai, Maharashtra, India' },
        { image: '/assets/images/aminities/back1.png', text: 'Gomti Nagar, Lucknow, Uttar Pradesh, India' },
        { image: '/assets/images/aminities/back3.png', text: 'Kalyani Nagar, Pune, Maharashtra, India' },
        { image: '/assets/images/aminities/back2.png', text: 'Gurgoan Delhi Expressway, Gurgoan, Delhi, India'}
    ],
];

function showamen(index){
    amename.innerText = amenityName[index];
}


function showItem(index) {
    items.forEach((item, i) => {
        item.style.backgroundImage = `url(${aminiteis[amenity][index].image})`;
        showTextOverlay(aminiteis[amenity][index].text);
        item.style.opacity = '1';
    });
}

function showTextOverlay(text) {
    overlay.textContent = text;
    overlay.classList.add('active');
}

function hideTextOverlay() {
    overlay.classList.remove('active');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % aminiteis[amenity].length;
    showItem(currentIndex);
}

function info() {
    overlay.addEventListener('mouseover', () => {
        overlay.style.opacity = '1';
    });

    overlay.addEventListener('mouseout', () => {
        overlay.style.opacity = '0';
    });
}

function changeAmenity(newAmenity) {
    amenity = newAmenity;
    currentIndex = 0; 
    showItem(currentIndex);
    showamen(amenity);
}

document.addEventListener('DOMContentLoaded', () => {
    // Check if amenity is specified in the URL
    const urlParams = new URLSearchParams(window.location.search);
    const amenityParam = urlParams.get('amenity');
    if (amenityParam !== null) {
        changeAmenity(parseInt(amenityParam));
    } else {
        showItem(0);
    }
    info();
});

setInterval(nextSlide, 3000);

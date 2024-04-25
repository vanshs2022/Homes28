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
        { image: '/assets/images/aminities/parking-1.jpg', text: 'Vasant Vihar, New Delhi, Delhi, India' },
        { image: '/assets/images/aminities/parking-2.jpg', text: 'Trikuta Nagar, Jammu, Jammu and Kashmir, India' },
        { image: '/assets/images/aminities/parking-3.jpg', text: 'Malabar Hill, Mumbai, Maharashtra, India' },
        { image: '/assets/images/aminities/parking-4.jpg', text: 'Gomti Nagar, Lucknow, Uttar Pradesh, India' },
        { image: '/assets/images/aminities/parking-5.jpg', text: 'Kalyani Nagar, Pune, Maharashtra, India' },
        { image: '/assets/images/aminities/parking-6.jpg', text: 'Gurgoan Delhi Expressway, Gurgoan, Delhi, India'}
        
    ],
    [
        { image: '/assets/images/aminities/swim1.jpg', text: 'Vasant Vihar, New Delhi, Delhi, India' },
        { image: '/assets/images/aminities/swim2.jpg', text: 'Trikuta Nagar, Jammu, Jammu and Kashmir, India' },
        { image: '/assets/images/aminities/swim3.jpg', text: 'Malabar Hill, Mumbai, Maharashtra, India' },
        { image: '/assets/images/aminities/swim-4.jpg', text: 'Gomti Nagar, Lucknow, Uttar Pradesh, India' },
        { image: '/assets/images/aminities/swim-5.jpg', text: 'Kalyani Nagar, Pune, Maharashtra, India' },
        { image: '/assets/images/aminities/swim-6.jpeg', text: 'Gurgoan Delhi Expressway, Gurgoan, Delhi, India'}
    ],
    [
        { image: '/assets/images/aminities/security-1.jpg', text: 'Vasant Vihar, New Delhi, Delhi, India' },
        { image: '/assets/images/aminities/security-2.jpg', text: 'Trikuta Nagar, Jammu, Jammu and Kashmir, India' },
        { image: '/assets/images/aminities/security-3.jpg', text: 'Malabar Hill, Mumbai, Maharashtra, India' },
        { image: '/assets/images/aminities/security-4.jpg', text: 'Gomti Nagar, Lucknow, Uttar Pradesh, India' },
        { image: '/assets/images/aminities/security-5.jpg', text: 'Kalyani Nagar, Pune, Maharashtra, India' },
        { image: '/assets/images/aminities/security-6.jpg', text: 'Gurgoan Delhi Expressway, Gurgoan, Delhi, India'}
    ],
    [
        { image: '/assets/images/aminities/clinic-1.jpg', text: 'Vasant Vihar, New Delhi, Delhi, India' },
        { image: '/assets/images/aminities/clinic-2.jpg', text: 'Trikuta Nagar, Jammu, Jammu and Kashmir, India' },
        { image: '/assets/images/aminities/clinic-3.jpg', text: 'Malabar Hill, Mumbai, Maharashtra, India' },
        { image: '/assets/images/aminities/clinic-4.jpg', text: 'Gomti Nagar, Lucknow, Uttar Pradesh, India' },
        { image: '/assets/images/aminities/clinic-5.jpg', text: 'Kalyani Nagar, Pune, Maharashtra, India' },
        { image: '/assets/images/aminities/clinic-6.jpg', text: 'Gurgoan Delhi Expressway, Gurgoan, Delhi, India'}
    ],
    [
        { image: '/assets/images/aminities/library-1.jpg', text: 'Vasant Vihar, New Delhi, Delhi, India' },
        { image: '/assets/images/aminities/library-2.jpg', text: 'Trikuta Nagar, Jammu, Jammu and Kashmir, India' },
        { image: '/assets/images/aminities/library-3.jpg', text: 'Malabar Hill, Mumbai, Maharashtra, India' },
        { image: '/assets/images/aminities/library-4.jpg', text: 'Gomti Nagar, Lucknow, Uttar Pradesh, India' },
        { image: '/assets/images/aminities/library-5.jpg', text: 'Kalyani Nagar, Pune, Maharashtra, India' },
        { image: '/assets/images/aminities/library-6.jpg', text: 'Gurgoan Delhi Expressway, Gurgoan, Delhi, India'}
    ],
    [
        { image: '/assets/images/aminities/bed-1.jpg', text: 'Vasant Vihar, New Delhi, Delhi, India' },
        { image: '/assets/images/aminities/bed-2.jpg', text: 'Trikuta Nagar, Jammu, Jammu and Kashmir, India' },
        { image: '/assets/images/aminities/bed-3.jpg', text: 'Malabar Hill, Mumbai, Maharashtra, India' },
        { image: '/assets/images/aminities/bed-4.jpg', text: 'Gomti Nagar, Lucknow, Uttar Pradesh, India' },
        { image: '/assets/images/aminities/bed-5.jpg', text: 'Kalyani Nagar, Pune, Maharashtra, India' },
        { image: '/assets/images/aminities/bed-6.jpg', text: 'Gurgoan Delhi Expressway, Gurgoan, Delhi, India'}
    ],
    [
        { image: '/assets/images/aminities/smart-1.jpg', text: 'Vasant Vihar, New Delhi, Delhi, India' },
        { image: '/assets/images/aminities/smart-2.jpg', text: 'Trikuta Nagar, Jammu, Jammu and Kashmir, India' },
        { image: '/assets/images/aminities/smart-3.jpg', text: 'Malabar Hill, Mumbai, Maharashtra, India' },
        { image: '/assets/images/aminities/smart-4.jpg', text: 'Gomti Nagar, Lucknow, Uttar Pradesh, India' },
        { image: '/assets/images/aminities/smart-5.jpg', text: 'Kalyani Nagar, Pune, Maharashtra, India' },
        { image: '/assets/images/aminities/smart-6.jpg', text: 'Gurgoan Delhi Expressway, Gurgoan, Delhi, India'}
    ],
    [
        { image: '/assets/images/aminities/play-1.jpg', text: 'Vasant Vihar, New Delhi, Delhi, India' },
        { image: '/assets/images/aminities/play-2.jpg', text: 'Trikuta Nagar, Jammu, Jammu and Kashmir, India' },
        { image: '/assets/images/aminities/play-3.jpg', text: 'Malabar Hill, Mumbai, Maharashtra, India' },
        { image: '/assets/images/aminities/play-4.jpg', text: 'Gomti Nagar, Lucknow, Uttar Pradesh, India' },
        { image: '/assets/images/aminities/play-5.jpg', text: 'Kalyani Nagar, Pune, Maharashtra, India' },
        { image: '/assets/images/aminities/play-6.jpg', text: 'Gurgoan Delhi Expressway, Gurgoan, Delhi, India'}
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

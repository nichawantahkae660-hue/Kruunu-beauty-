// Språköversättningar (Svenska, Finska, Engelska)
const translations = {
    sv: {
        "nav-facials": "Ansiktsbehandlingar",
        "nav-manicure": "Manikyr",
        "nav-pedicure": "Pedikyr",
        "nav-pmu": "Permanent Makeup",
        "nav-microblading": "Microblading",
        "nav-contact": "Kontakt",
        "hero-title": "Tidlös Elegans & Skönhet",
        "hero-subtitle": "Exklusiva skönhetsbehandlingar anpassade för dina unika drag i en avkopplande miljö.",
        "hero-btn": "Boka Tid",
        "about-title": "Välkommen till Kruunun Beauty",
        "about-desc": "Vi erbjuder professionella skönhetsbehandlingar med högsta precision och premiumprodukter. Låt oss ta hand om din hud, dina naglar och framhäva din naturliga skönhet.",
        "facials-title": "Ansiktsbehandlingar",
        "facial-1-title": "Kruunun Signaturansikte",
        "facial-1-desc": "Djuprengörande behandling med djupåterfuktande serum, enzympeeling och avkopplande ansiktsmassage.",
        "facial-2-title": "Glow & Radiance Facial",
        "facial-2-desc": "Ge huden maximal lyster med vitamin C-boost och mild fruktsyra-peeling.",
        "manicure-title": "Manikyr",
        "mani-1-title": "Klassisk Manikyr med Gel lack",
        "mani-1-desc": "Nagelbandsvård, formning av naglar, stärkande gellack och avslutande nagelolja.",
        "mani-2-title": "Lyxig Spa Manikyr",
        "mani-2-desc": "Handskrubb, paraffinbad, handmassage samt formning och valfritt lackering.",
        "pedicure-title": "Pedikyr",
        "pedi-1-title": "Medicinsk & Kosmetisk Pedikyr",
        "pedi-1-desc": "Fotbad, avlägsnande av förhårdnader, nagelvård, fotmassage och gellack.",
        "pmu-title": "Permanent Makeup (PMU)",
        "pmu-1-title": "Lip Blush (Läpptatuering)",
        "pmu-1-desc": "Framhäver läpparnas form och ger en naturlig, fräsch färg som håller länge.",
        "pmu-2-title": "Eyeliner & Eyelash Liner",
        "pmu-2-desc": "Pigmentering längs franskanten för en fylligare och mer definierad blick.",
        "microblading-title": "Microblading",
        "micro-1-title": "Microblading 3D Ögonbryn",
        "micro-1-desc": "Manuell stråteknik för fylliga och naturliga ögonbryn anpassade efter din ansiktsform.",
        "micro-2-title": "Combo Brows (Strån + Skuggning)",
        "micro-2-desc": "Kombination av microblading och puderskuggning för ett mer markerat resultat.",
        "contact-title": "Boka Tid & Kontakt",
        "form-heading": "Skicka en förfrågan",
        "form-name": "Namn",
        "form-email": "E-post",
        "form-service": "Önskad behandling",
        "opt-facial": "Ansiktsbehandling",
        "opt-mani": "Manikyr",
        "opt-pedi": "Pedikyr",
        "opt-pmu": "Permanent Makeup",
        "opt-micro": "Microblading",
        "form-message": "Meddelande",
        "form-send": "Skicka Förfrågan",
        "info-heading": "Besök Oss"
    },
    fi: {
        "nav-facials": "Kasvohoidot",
        "nav-manicure": "Manikyyri",
        "nav-pedicure": "Pedikyyri",
        "nav-pmu": "Kestomeikki",
        "nav-microblading": "Microblading",
        "nav-contact": "Yhteystiedot",
        "hero-title": "Ajatonta Eleganssia & Kauneutta",
        "hero-subtitle": "Ylellisiä kauneushoitoja räätälöitynä sinun piirteillesi rentouttavassa ympäristössä.",
        "hero-btn": "Varaa Aika",
        "about-title": "Tervetuloa Kruunun Beautyyn",
        "about-desc": "Tarjoamme ammattimaisia kauneuspalveluita korkealla tarkkuudella ja premium-tuotteilla. Anna meidän huolehtia ihostasi ja kynsistäsi.",
        "facials-title": "Kasvohoidot",
        "facial-1-title": "Kruunun Nimikkokasvohoito",
        "facial-1-desc": "Syväpuhdistava hoito, joka sisältää kosteuttavan seerumin, entsyymikuorinnan ja rentouttavan hieronnan.",
        "facial-2-title": "Glow & Radiance Kasvohoito",
        "facial-2-desc": "Anna ihollesi maksimisäteilyä C-vitamiinilla ja miedolla hedelmähappokuorinnalla.",
        "manicure-title": "Manikyyri",
        "mani-1-title": "Klassinen Manikyyri Geelilakkauksella",
        "mani-1-desc": "Kynsinauhojen hoito, kynsien muotoilu, vahvistava geelilakkaus ja kynsiöljy.",
        "mani-2-title": "Ylellinen Spa-Manikyyri",
        "mani-2-desc": "Käsikuorinta, parafiinihoito, käsihieronta sekä kynsien muotoilu ja lakkaus.",
        "pedicure-title": "Pedikyyri",
        "pedi-1-title": "Kosmeettinen Pedikyyri",
        "pedi-1-desc": "Jalkakylpy, kovettumien poisto, kynsien hoito, jalkahieronta ja geelilakkaus.",
        "pmu-title": "Kestomeikki (PMU)",
        "pmu-1-title": "Lip Blush (Huulten Kestopigmentointi)",
        "pmu-1-desc": "Korostaa huulten muotoa ja antaa luonnollisen, raikkaan värin pitkäksi aikaa.",
        "pmu-2-title": "Eyeliner & Ripsi-rajauksen Pigmentointi",
        "pmu-2-desc": "Pigmentointi ripsirajaan tiheämmän ja määritellymmän katseen saavuttamiseksi.",
        "microblading-title": "Microblading",
        "micro-1-title": "Microblading 3D -Kulmakarvat",
        "micro-1-desc": "Manuaalinen karvatekniikka luonnollisten ja täyteläisten kulmakarvojen luomiseksi.",
        "micro-2-title": "Combo Brows (Karvatekniikka + Varjostus)",
        "micro-2-desc": "Microbladingin ja puuterivarjostuksen yhdistelmä näyttävämpään tulokseen.",
        "contact-title": "Varaa Aika & Yhteystiedot",
        "form-heading": "Lähetä kysely",
        "form-name": "Nimi",
        "form-email": "Sähköposti",
        "form-service": "Valitse hoito",
        "opt-facial": "Kasvohoito",
        "opt-mani": "Manikyyri",
        "opt-pedi": "Pedikyyri",
        "opt-pmu": "Kestomeikki",
        "opt-micro": "Microblading",
        "form-message": "Viesti",
        "form-send": "Lähetä Viesti",
        "info-heading": "Vieraile Luonamme"
    },
    en: {
        "nav-facials": "Facials",
        "nav-manicure": "Manicure",
        "nav-pedicure": "Pedicure",
        "nav-pmu": "Permanent Makeup",
        "nav-microblading": "Microblading",
        "nav-contact": "Contact",
        "hero-title": "Timeless Elegance & Beauty",
        "hero-subtitle": "Exclusive beauty treatments tailored to your features in a relaxing environment.",
        "hero-btn": "Book Appointment",
        "about-title": "Welcome to Kruunun Beauty",
        "about-desc": "We offer professional beauty services with high precision and premium products. Let us care for your skin, nails, and enhance your natural beauty.",
        "facials-title": "Facial Treatments",
        "facial-1-title": "Kruunun Signature Facial",
        "facial-1-desc": "Deep cleansing facial with hydrating serums, enzyme peel, and a relaxing facial massage.",
        "facial-2-title": "Glow & Radiance Facial",
        "facial-2-desc": "Boost skin radiance with vitamin C and a gentle fruit acid peel.",
        "manicure-title": "Manicure",
        "mani-1-title": "Classic Manicure with Gel Polish",
        "mani-1-desc": "Cuticle care, nail shaping, strengthening gel polish, and nourishing oil.",
        "mani-2-title": "Luxury Spa Manicure",
        "mani-2-desc": "Hand scrub, paraffin treatment, massage, shaping, and polish of choice.",
        "pedicure-title": "Pedicure",
        "pedi-1-title": "Cosmetic Pedicure",
        "pedi-1-desc": "Foot bath, callus removal, nail care, foot massage, and gel polish.",
        "pmu-title": "Permanent Makeup (PMU)",
        "pmu-1-title": "Lip Blush",
        "pmu-1-desc": "Enhances natural lip shape and adds a long-lasting, fresh color tint.",
        "pmu-2-title": "Eyeliner & Lash Line",
        "pmu-2-desc": "Pigmentation along the lash line for a fuller and defined eye look.",
        "microblading-title": "Microblading",
        "micro-1-title": "Microblading 3D Brows",
        "micro-1-desc": "Manual hair-stroke technique for natural, full eyebrows matching your face shape.",
        "micro-2-title": "Combo Brows (Strokes + Shading)",
        "micro-2-desc": "Combination of microblading and powder shading for a defined result.",
        "contact-title": "Book & Contact",
        "form-heading": "Send an Inquiry",
        "form-name": "Name",
        "form-email": "Email",
        "form-service": "Select Service",
        "opt-facial": "Facial Treatment",
        "opt-mani": "Manicure",
        "opt-pedi": "Pedicure",
        "opt-pmu": "Permanent Makeup",
        "opt-micro": "Microblading",
        "form-message": "Message",
        "form-send": "Send Message",
        "info-heading": "Visit Us"
    }
};

// Hantera språkBbyte
const langSwitcher = document.getElementById('lang-switcher');

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    localStorage.setItem('selectedLang', lang);
}

langSwitcher.addEventListener('change', (e) => {
    setLanguage(e.target.value);
});

// Mobil-meny toggle
const mobileToggle = document.getElementById('mobile-toggle');
const navbar = document.getElementById('navbar');

mobileToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Stäng mobilmeny vid klick på länk
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});

// Ladda sparat språk vid start
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLang') || 'sv';
    langSwitcher.value = savedLang;
    setLanguage(savedLang);
});

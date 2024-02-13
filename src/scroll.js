export function someFunction() {

    var aboutMeElement = document.getElementById('about-me');
    var components = document.getElementById('about-skills');
    var drupalExp = document.getElementById('drupal-ex');
    var chiExp = document.getElementById('sigchi-ex');

    if (window.scrollY >= 500 && !(aboutMeElement.classList.contains('effect'))) {
        aboutMeElement.classList.add("effect");
        components.classList.add("effect");
    }

    if ((window.innerWidth > 768 && window.scrollY >= 2000) || (window.innerWidth <= 768 && window.scrollY >= 3700)) {
        if (!drupalExp.classList.contains('effect')) {
            drupalExp.classList.add("effect");
        }
        if (!chiExp.classList.contains('effect')) {
            chiExp.classList.add("effect");
        }
    }
    
}

export function someFunction() {
    console.log(window.scrollY);
    var aboutMeElement = document.getElementById('about-me');
    var components = document.getElementById('about-skills');
    var drupalExp = document.getElementById('drupal-ex');
    var chiExp = document.getElementById('sigchi-ex');

    if (window.scrollY >= 500 && !(aboutMeElement.classList.contains('effect'))) {
        aboutMeElement.classList.add("effect");
        components.classList.add("effect");
    }

    if(window.scrollY >= 3700 && !(drupalExp.classList.contains('effect'))){
        drupalExp.classList.add("effect");
        chiExp.classList.add("effect");
    }
    
}

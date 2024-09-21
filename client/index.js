
console.log("its working");

const map = document.createElement('iframe')
map.setAttribute('loading', 'lazy');
map.setAttribute('allowFullScreen', "");
map.setAttribute('width', '600px');
map.setAttribute('height', '500px')
map.setAttribute('src', `https://www.google.com/maps/embed/v1/directions?key=&origin=Space+Needle,Seattle+WA&destination=Middletown+Delaware"`)
document.querySelector('body').appendChild(
  map
)
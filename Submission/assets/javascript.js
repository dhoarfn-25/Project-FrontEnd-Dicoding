console.log("Selamat Datang di Developer tools, Ridho!")

let profileImage = document.querySelector("#profileImage");
profileImage.setAttribute("src", "assets/image/profile1.png");

let caption = document.querySelector("#caption");
caption.innerHTML = '<em>Foto Profil</em>'

let newElement = document.createElement('p');
newElement

newElement.innerHTML = 'Anda menekan foto profil sebanyak <span id="count">0</span> kali';

document.body.appendChild(newElement);

profileImage.addEventListener('click', function(event) {
    document.querySelector('#count').innerText++;
 });
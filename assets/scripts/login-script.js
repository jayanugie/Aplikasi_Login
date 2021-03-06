/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

/* Membuat variabel untuk setiap elemen view. */
const loginFormElement = document.getElementById('loginForm');
const inputEmailElement = document.getElementById('inputEmail');
const inputPasswordElement = document.getElementById('inputPassword');

/* Membuat variabel untuk menyimpan informasi email dan password. */
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

/* Menambahkan aksi klik pada button. */
loginFormElement.addEventListener('submit', function(event){
    event.preventDefault();

    /* Mendapatkan nilai dari masing-masing input (email & password) ketika tombol ditekan. */
    const email = inputEmailElement.value;
    const password = inputPasswordElement.value;

    /* Memastikan bahwa nilai email dan password sesuai dengan nilai yang tersimpan */
    if (email == expectedEmail && password == expectedPassword){

        /* Jika sesuai maka program akan berpindah ke halaman home. */
        goToHome();
    } else {

        /* Namun jika tidak sesuai maka akan menampilkan informasi bahwa input salah. */
        showPopUp();
    }


});
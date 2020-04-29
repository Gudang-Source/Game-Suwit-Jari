function getPilihanKomputer() {
	// menangkap pilihan komputer
	const comp = Math.random();

	if(comp < 0.34) return 'gajah';
	if(comp >= 0.34 && comp < 0.67) return 'orang';
		return 'semut';
}

// Aturan
function getHasil(comp, player) {
	if( player == comp) return 'SERI!';
	if(player == 'gajah') return (comp == 'orang') ? 'Menang' : 'Kalah';
	if( player == 'orang') return ( comp == 'gajah') ? 'Kalah' : 'Menang';
	if( player == 'semut') return ( comp == 'orang') ? 'Kalah' : 'Menang';
}


function putar() {
	const imgKomputer = document.querySelector('.img-komputer');
	const gambar = ['gajah', 'semut', 'orang'];
	let i = 0;
	const waktuMulai = new Date().getTime();
	setInterval(function(){
		if(new Date().getTime() - waktuMulai > 1000) {
			clearInterval;
			return;
		}
		imgKomputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
		if(i == gambar.length) i = 0;
	}, 100)
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil){
	pil.addEventListener('click', function(){
			const pilihanKomputer = getPilihanKomputer();
			const pilihanPlayer = pil.className;
			const hasil = getHasil(pilihanKomputer, pilihanPlayer);

			putar();

			setTimeout(function(){
				const imgKomputer = document.querySelector('.img-komputer');
				imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

				// tampilkan
				const info = document.querySelector('.info');
				info.innerHTML = hasil;
			}, 1000)

			
	});
});

// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function(){
// 	const pilihanKomputer = getPilihanKomputer();
// 	const pilihanPlayer = pGajah.className;
// 	const hasil = getHasil(pilihanKomputer, pilihanPlayer);
// 	// console.log('comp : ' + pilihanKomputer);
// 	// console.log('player : ' + pilihanPlayer);
// 	// console.log('hasil : ' + hasil);
// 	// ambil gambar
// 	const imgKomputer = document.querySelector('.img-komputer');
// 	imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

// 	// tampilkan
// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;
// });
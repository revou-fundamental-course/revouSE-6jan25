//greeting
document.addEventListener("DOMContentLoaded", function() {
    const name = prompt("Siapa nama Anda?", ""); // Meminta input nama dari pengguna
    if (name) {
        const greeting = document.getElementById("greeting");
        greeting.textContent = `Hi, ${name} come on`; // Menampilkan teks sapaan
    }
});


// slider 
const slides = document.querySelectorAll('.slide')
const btns = document.querySelectorAll('.btn')
let curret = 1

var manual = function(manual){
	slides.forEach((slide) => {
		slide.classList.remove('active')
	})
	btns.forEach((btn) => {
		btn.classList.remove('active')
	})
	slides[manual].classList.add('active')
	btns[manual].classList.add('active')
}

btns.forEach((btn, i) => {
	btn.addEventListener("click", () => {
		manual(i)
		curret = i
	})
})
var repeat = function(activeClass){
	let active = document.getElementsByClassName('active')
	let i = 1

	var repeater = () => {
		setTimeout(function(){
			[...active].forEach((activeSlide) => {
				activeSlide.classList.remove('active')
			})
			slides[i].classList.add('active')
			btns[i].classList.add('active')
			i++ 
	
			if(slides.length == i){
				i = 0
			}
			if(i >= slides.length){
				return
			}
			repeater()
		}, 3000)
	}
	repeater()
}
repeat()


//menu
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu() {
    tombolMenu.click(function () {
        menu.toggle();
    });
    menu.click(function () {
        menu.toggle();
    });
}

$(document).ready(function () {
    var width = $(window).width();
    if (width < 990) {
        klikMenu();
    }
})

//cek lebar
$(window).resize(function(){
    var width = $(window).width(); 
    if(width > 989){
        menu.css("display","block");
    }
    else{
        menu.css("display","none");
    }
});

//efek scroll

$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function(){
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 0){
            $("nav").addClass("putih");
            $("nav img.hitam").show();
            $("nav img.putih").hide();
        }else {
            $("nav").removeClass("putih");
            $("nav img.hitam").hide("");
            $("nav img.putih").show("");
        
        }
    })
});

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah pengiriman form secara default
    
    alert("Data terkirim!"); // Menampilkan alert
    
    this.reset(); // Mengosongkan semua input di dalam form
});

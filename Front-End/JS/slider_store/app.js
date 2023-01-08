let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function more(string) {
    if(string == 'santa') {
        document.body.innerHTML +=
        `<div id="myModal" class="modal">
            <div class="modal-content">
                <span class="close" onclick="closeModal()">&times;</span>
                <p>Santa Claus</p> <button class="custom-btn btn-13" onclick="addToBasket()">Buy</button>
                <hr/>
                <div class='modalWrapper'>
                    <div class='wrapper__img'>
                        <img src="./img/hoang-mai-nguyen-DSidoufmm1E-unsplash.jpg">
                    </div>
                    <div class='wrapper__text'>
                        <div class='text__price'>
                            Price: 5€
                        </div><br>
                        <div class='text__description'>
                            Description: <br>Santa Claus, also known as Father Christmas, Saint Nicholas, Saint Nick, Kris Kringle, or simply Santa, is a legendary figure originating in Western Christian culture who is said to bring gifts during the late evening and overnight hours on Christmas Eve to "nice" children, and either coal or nothing to "naughty" children. He is said to accomplish this with the aid of Christmas elves, who make the toys in his North Pole workshop, and with the aid of flying reindeer who pull his sleigh through the air.<br><br>

                            The modern figure of Santa is based on folklore traditions surrounding Saint Nicholas, the English figure of Father Christmas, and the Dutch figure of Sinterklaas.<br><br>
                            
                            Santa is generally depicted as a portly, jolly, white-bearded man, often with spectacles, wearing a red coat with white fur collar and cuffs, white-fur-cuffed red trousers, red hat with white fur, and black leather belt and boots, carrying a bag full of gifts for children. He is commonly portrayed as laughing in a way that sounds like "ho ho ho". This image became popular in the United States and Canada in the 19th century due to the significant influence of the 1823 poem "A Visit from St. Nicholas". Caricaturist and political cartoonist Thomas Nast also played a role in the creation of Santa's image. This image has been maintained and reinforced through song, radio, television, children's books, family Christmas traditions, films, and advertising.
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    };
    if(string == 'big') {
        document.body.innerHTML +=
        `<div id="myModal" class="modal">
            <div class="modal-content">
                <span class="close" onclick="closeModal()">&times;</span>
                <p>Winter Town(big)</p> <button class="custom-btn btn-13" onclick="addToBasket()">Buy</button>
                <hr/>
                <div class='modalWrapper'>
                    <div class='wrapper__img'>
                        <img src="./img/john-matychuk-5RGhNBTeplg-unsplash.jpg">
                    </div>
                    <div class='wrapper__text'>
                        <div class='text__price'>
                            Price: 15€
                        </div><br>
                        <div class='text__description'>
                            Description: <br>
                            The winter town is a settlement in the North, located just outside of Winterfell itself.<br><br>

                            During the years-long winters which hit the region, the smallfolk of the North came to huddle in settlements outside the walls of Winterfell for protection. Over time they built these up into permanent structures and over the centuries it grew into a more established town, though its population still swells during winter and declines during spring and summer.
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    };
    if(string == 'small') {
        document.body.innerHTML +=
        `<div id="myModal" class="modal">
            <div class="modal-content">
                <span class="close" onclick="closeModal()">&times;</span>
                <p>Winter Town(small)</p> <button class="custom-btn btn-13" onclick="addToBasket()">Buy</button>
                <hr/>
                <div class='modalWrapper'>
                    <div class='wrapper__img'>
                        <img src="./img/tyler-delgado-cAkkwenx5zo-unsplash.jpg">
                    </div>
                    <div class='wrapper__text'>
                        <div class='text__price'>
                            Price: 10€
                        </div><br>
                        <div class='text__description'>
                            Description: <br>
                            The winter town is a settlement in the North, located just outside of Winterfell itself.<br><br>

                            During the years-long winters which hit the region, the smallfolk of the North came to huddle in settlements outside the walls of Winterfell for protection. Over time they built these up into permanent structures and over the centuries it grew into a more established town, though its population still swells during winter and declines during spring and summer.
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    };
};


function closeModal(){
    document.getElementById("myModal").remove();
};


function addToBasket() {
    document.querySelector('.header__count').innerHTML ++;
}
const createNav = () => {
    let nav = document.querySelector('.navbar');
    
    nav.innerHTML = "
        <div class="nav">
             <img src="Tree.png" class="brand-logo" alt="">
            <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" placeholder="search ">
                <button class="search-btn">Search</button>
                </div>
                <a href="#"><img src="user.jpg" alt=""></a>
                    <a href="#"><img src="cart.jpg" alt=""></a>
            </div>
             </div>
             <ul class="link-container">
               <li class="link-item"><a href="#" class="link">Home</a></li>
                 <li class="link-item"><a href="#" class="link">New Arrivals</a></li>
                 <li class="link-item"><a href="#" class="link">Shop Trees</a></li>
                 <li class="link-item"><a href="#" class="link">Shop Plants</a></li>
                 <li class="link-item"><a href="#" class="link">About Us</a></li>
             </ul>
        
    ";
}
createNav();
//const Header = () => {
//    const init = () => {
//        let link = document.querySelector(".menu-btn");
//        link.addEventListener("click", () => {
//            let menu = document.querySelector(".menu-container > div");
//            menu.classList.toggle("is-visible");
//           
//        });
//    }
//    
//
//    return {
//        init: init
//      
//    }
//
//
//}

const Header = function(){
        const init = () => {
       let link = document.querySelector(".menu-btn");
       link.addEventListener("click", () => {
           let menu = document.querySelector(".menu-container > div");
           menu.classList.toggle("is-visible");
          
       });
   }
   

    return {
        init: init
     
    }
}

export default Header;
import "./carrousel.css"
import React, { useState, useEffect } from "react";

function Carrousel(){

// 	const preniumAnonceInits = [{ id: "1", title: "tes1", prix: "200", image: "./assets/image/annonce/imagepctest.webp" },
//   { id: "1", title: "test2", prix: "200", image: "./assets/image/annonce/imagepctest.webp" },
//   { id: "2", title: "test3", prix: "200", image: "./assets/image/annonce/imagepctest.webp" },
//   { id: "3", title: "test4", prix: "200", image: "./assets/image/annonce/imagepctest.webp" },
//   { id: "4", title: "test5", prix: "200", image: "./assets/image/annonce/imagepctest.webp" },
//   { id: "5", title: "test6", prix: "200", image: "./assets/image/annonce/imagepctest.webp" },
//   { id: "6", title: "test7", prix: "200", image: "./assets/image/annonce/imagepctest.webp" },
//   { id: "7", title: "test8", prix: "200", image: "./assets/image/annonce/imagepctest.webp" },]

//    const preniumAnonceElement = preniumAnonceInits.map((prenium) => (
//      <div className="" key={prenium.id}>
//         <div className="section-products">
//         {/* <!-- Single Product --> */}
//         <div id="product-1" className="single-product">
// 		<div className="part-1">
// 		  <img className="test" src="https://picsum.photos/200/300/?blur=2" alt="" />
// 		  <ul>
// 			<li>
// 			  <a href="#">
// 				<i className="fas fa-heart"></i>
// 			  </a>
// 			</li>
// 			<li>
// 			  <a href="#">
// 				<i className="fas fa-plus"></i>
// 			  </a>
// 			</li>
// 			<li>
// 			  <a href="#">
// 				<i className="fas fa-expand"></i>
// 			  </a>
// 			</li>
// 		  </ul>
// 		</div>
// 		<div className="part-2">
// 		  <h3 className="product-title">{prenium.title}</h3>
// 		  {/* <h4 className="product-old-price">$79.99</h4> */}
// 		  <h4 className="product-price">{prenium.prix},00</h4>
// 		</div>
// 	  </div>
//     </div>
// 	</div>
//   ));

      
        useEffect(() => {
            let items = document.querySelectorAll('.carousel .carousel-item')

                items.forEach((el) => {
                    const minPerSlide = 4
                    let next = el.nextElementSibling
                    for (var i=1; i<minPerSlide; i++) {
                        if (!next) {
                    // wrap carousel by using first child
                    next = items[0]
                }
                let cloneChild = next.cloneNode(true)
                el.appendChild(cloneChild.children[0])
                next = next.nextElementSibling
            }
            })
        }, []);
      
    
    return(
        
        <>
    <div class="container text-center my-3">
		<div class="row mx-auto my-auto justify-content-center">
			<div id="recipeCarousel" class="carousel slide" data-bs-ride="carousel">
				<div class="carousel-inner" role="listbox">
                    <h1>Annonces mises en avant <span className="text-warning"><u>*premium*</u></span></h1>
					<div class="carousel-item active">
						<div class="col-md-3">
							<div class="card">
								<div class="card-img">
									<img src="https://via.placeholder.com/700x500.png/CB997E/333333?text=1" class="img-fluid"/>
								</div>
								<div class="card-img-overlay">Slide 1</div>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<div class="col-md-3">
						{/* {preniumAnonceElement} */}
						
						</div>
					</div>
					<div class="carousel-item">
						<div class="col-md-3">
							<div class="card">
								<div class="card-img">
									<img src="https://via.placeholder.com/700x500.png/FFE8D6/333333?text=3" class="img-fluid"/>
								</div>
								<div class="card-img-overlay">Slide 3</div>
							</div>
						</div>
					</div> 
					 <div class="carousel-item">
						<div class="col-md-3">
							<div class="card">
								<div class="card-img">
									<img src="https://via.placeholder.com/700x500.png/B7B7A4/333333?text=4" class="img-fluid"/>
								</div>
								<div class="card-img-overlay">Slide 4</div>
							</div>
						</div>
					</div> 
					 <div class="carousel-item">
						<div class="col-md-3">
							<div class="card">
								<div class="card-img">
									<img src="https://via.placeholder.com/700x500.png/A5A58D/333333?text=5" class="img-fluid"/>
								</div>
								<div class="card-img-overlay">Slide 5</div>
							</div>
						</div>
					</div> 
					 <div class="carousel-item">
						<div class="col-md-3">
							<div class="card">
								<div class="card-img">
									<img src="https://via.placeholder.com/700x500.png/6B705C/eeeeee?text=6" class="img-fluid"/>
								</div>
								<div class="card-img-overlay">Slide 6</div>
							</div>
						</div>
					</div>
				</div>
				<a class="carousel-control-prev bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				</a>
				<a class="carousel-control-next bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
				</a>
			</div>
		</div>		
	</div>

        
        </>
        
    )
    
}


export default Carrousel
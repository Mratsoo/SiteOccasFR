import Cards from "../../card/card"
import Search from "../../search/search"
import "./home.css"
import Paginate from "../../paginate/paginate";
import Carrousel from "../../carrousel/carrousel";


function Homepage() {

  
    const categoryInits = [
        { id: "1", title: "pc", prix: "200", image: "./assets/image/annonce/imagepctest.webp" },
        { id: "2", title: "rtx", prix: "500", image: "./assets/image/annonce/imagepc2.webp" },
        { id: "3", title: "m.2", prix: "600", image: "./assets/image/annonce/imagepc3.jpg" },
        { id: "4", title: "ssd", prix: "700", image: "./assets/image/annonce/imagepc4.webp" },
        { id: "5", title: "pc-gamer", prix: "1000", image: "./assets/image/annonce/imagepctest.webp" },
        { id: "6", title: "pc", prix: "200", image: "./assets/image/annonce/imagepctest.webp" },
        { id: "7", title: "rtx", prix: "500", image: "./assets/image/annonce/imagepc2.webp" },
        { id: "8", title: "m.2", prix: "600", image: "./assets/image/annonce/imagepc3.jpg" },
        { id: "9", title: "ssd", prix: "700", image: "./assets/image/annonce/imagepc4.webp" },
        { id: "10", title: "pc-gamer", prix: "1000", image: "./assets/image/annonce/imagepctest.webp" },
        { id: "11", title: "pc", prix: "200", image: "./assets/image/annonce/imagepctest.webp" },
        { id: "12", title: "rtx", prix: "500", image: "./assets/image/annonce/imagepc2.webp" },
        { id: "13", title: "m.2", prix: "600", image: "./assets/image/annonce/imagepc3.jpg" },
        { id: "14", title: "ssd", prix: "700", image: "./assets/image/annonce/imagepc4.webp" },
        { id: "15", title: "pc-gamer", prix: "1000", image: "./assets/image/annonce/imagepctest.webp" },
        { id: "16", title: "pc", prix: "200", image: "./assets/image/annonce/imagepctest.webp" },
        { id: "17", title: "rtx", prix: "500", image: "./assets/image/annonce/imagepc2.webp" },
        { id: "18", title: "m.2", prix: "600", image: "./assets/image/annonce/imagepc3.jpg" },
        { id: "19", title: "ssd", prix: "700", image: "./assets/image/annonce/imagepc4.webp" },
        { id: "20", title: "pc-gamer", prix: "1000", image: "./assets/image/annonce/imagepctest.webp" }
      ];
    
      const categoryElements = categoryInits.map((category) => (
        <div className="col-md-6 col-lg-4 col-xl-3" key={category.id}>
          <Cards
            title={category.title}
            prix={category.prix}
            image={category.image}
          />
        </div>
      ));
    
    return(<>

    <header className="text-center mt-5">
      <Carrousel/>
    <h1 class="container"><span className="text-success"><u>Achetez</u></span> et <span className="text-success"><u>vendez</u></span> en toute sécurité !</h1>
    </header>
        <div><Search/></div>
        <div className='row container m-auto'>{categoryElements}</div>
        <Paginate/>
</>
)}


export default Homepage
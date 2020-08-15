import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import RequirementCard from './RequirementCard'
import SearchResultCard from './SearchResultCard'
import Footer from './Footer'

const RequirementCardData = {
    image: "https://images.pexels.com/photos/4499803/pexels-photo-4499803.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Garima Sharma",
    role: "Buyer",
    organisation: "ABC Agro Farms Pvt. Ltd.",
    email: "garimasharma@gmail.com",
    location: "Bengaluru, India",
    requirement: "T Shirt",
    garment: "Shirts",
    quantity: 30,
    costBracket: 67,
    leadTimeProvision: 8
}

const SearchResultCardData = {
    image: "https://images.pexels.com/photos/4499803/pexels-photo-4499803.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Garima Sharma",
    role: "Seller",
    organisation: "ABC Agro Farms Pvt. Ltd.",
    email: "garima@gmail.com",
    location: "Bengaluru, India",
    requirement: "T Shirt",
    garment: "Shirts",
    availabilityConfirmed: "Yes",
    costBracket: 56,
    leadTimeProvision: 3,
    rating: 4.8
}

function App() {
    return (
        <div>
            <Navbar />
            <div class="container">
                <Search />
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                        <h1 style={{ textAlign: "center", fontFamily: "Suez One, serif" }}>My requirements</h1>
                        <RequirementCard content={RequirementCardData} />
                        <RequirementCard content={RequirementCardData} />
                    </div>
                    <div class="col-sm-1"></div>
                    <div class="col-sm-7">
                        <h1 style={{ textAlign: "center", fontFamily: "Suez One, serif" }}>Search Results</h1>
                        <SearchResultCard content={SearchResultCardData} />
                        <SearchResultCard content={SearchResultCardData} />
                        <SearchResultCard content={SearchResultCardData} />
                        <SearchResultCard content={SearchResultCardData} />
                        <nav aria-label="Page navigation" style={{textAlign: "center"}}>
                            <ul class="pagination">
                                <li>
                                    <a href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li>
                                    <a href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default App
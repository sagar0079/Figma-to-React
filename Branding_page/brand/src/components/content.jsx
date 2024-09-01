const Section = () => {
    return <div>
        <div className="main">
            <div className="left">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="shop_btn">
                    <button>Shop Now</button>
                    <button className="cat_btn">Category</button>
                </div>
                <div className="shop_logo">
                    <p>Also Available On</p>
                    <div className="img_logo">
                    <img src="./images/flipkart.png" alt="flipkart" />
                    <img src="./images/amazon.png" alt="amazon" />
                    </div>
                </div>
            </div>
            <div className="right">
                <img src="./images/shoe_image.png" alt="shoe" />
            </div>
        </div>
    </div>
}

export default Section;
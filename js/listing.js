const items = [{
      title: 'Freedom St. 8',
      src: './img/Freedom St. 8.jpg',
      rating: 3,
      price: 200000
    },
    {
        title: 'Grand Desert St. 12',
        src: './img/Grand Desert St. 12.jpg',
        rating: 1,
        price: 25000
    },
    {
        title: 'Jackson St. 1',
        src: './img/Jackson St. 1.jpg',
        rating: 4,
     price: 475000
    },
    {
        title: 'Paleto Bay 3',
        src: './img/Paleto Bay 3.jpg',
        rating: 2,
        price: 95000
    },
    {
        title: 'Strawbery St. 5',
        src: './img/Strawberry St. 5.jpg',
        rating: 5,
        price: 2500000
    },
    {
        title: 'Whispymound Drive 5',
        src: './img/Whispymound Drive 5.jpg',
        rating: 5,
        price: 5000000
}];

const list = document.querySelector(".list");

items.forEach(elem =>
{
    const item = document.createElement("li"); 
    const image = document.createElement("img");
    image.src = elem.src;
    image.alt = elem.title;
    item.appendChild(image); // item > image
    const div = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = elem.title;
    div.appendChild(title); // div > title
    const rating = document.createElement("div");
    const ratingPlaceholder = document.createElement("img");
    ratingPlaceholder.src = "/img/Rating Placeholder.png"
    rating.appendChild(ratingPlaceholder); // rating > ratingPlaceholder
    const ratingStars = document.createElement("ul");
    for (let i = 0; i < elem.rating; i++) {
        const ratingStarsItem = document.createElement("li");
        const star = document.createElement("img");
        star.src = "./img/star.png";
        ratingStarsItem.appendChild(star); // ratingStarsItem > star
        ratingStars.appendChild(ratingStarsItem); // ratingStars > ratingStarsItem > star
    };
    rating.appendChild(ratingStars); // rating > ratingPlaceholder + ratingStars > ratingStarsItem*i > star
    div.appendChild(rating); // div >  title + rating...
    const price = document.createElement("p");
    price.textContent = '$' + elem.price;
    div.appendChild(price); // div > title + rating... + price
    const buyBtn = document.createElement("button");
    buyBtn.textContent = "Придбати зараз";
    div.appendChild(buyBtn); // div > title + rating... + price + button
    item.appendChild(div); // item > image + div > title + rating... 
    list.append(item); // list > item > image + div > title + rating...
    /*list (ul)
      > item (li)
        > image (img)
        > div (div)
          > title (h3)
          > rating (div)
            > ratingPlaceholder (img)
            > ratingStars (ul)
              > ratingStarsItem (li)
                > star (img)
        > price (p)
        > buyBtn (button)*/
}
)
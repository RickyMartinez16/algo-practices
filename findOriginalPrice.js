// We need to write some code to return the original price of a product, 
//the return type must be of type decimal and the number must be rounded to two decimal places in javascript

// We will be given the sale price (discounted price), and the sale percentage, our job is to figure out the original price.

// For example:
// Given an item at $75 sale price after applying a 25% discount, 
//the function should return the original price of that item before applying the sale percentage, 
//which is ($100.00) of course, rounded to two decimal places.

// DiscoverOriginalPrice(75, 25) => 100.00M where 75 is the sale price (discounted price), 
//25 is the sale percentage and 100 is the original price


function DiscoverOriginalPrice(discountedPrice, salePercentage) {

    //initizliae OG price var as discountedPrice divied by the result of 1 minus the result of salesPercentage divived by 100
    let originalPrice = discountedPrice / (1 - salePercentage / 100);

    //return og price to fixed(2) to only have 2 decicmal places
    return originalPrice.toFixed(2);
}

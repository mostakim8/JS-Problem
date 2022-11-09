// ২. [ ফাংশন নেম দিতে হবে totalSales]: তিনটা প্যারামিটার লাগবে।

// ১ টি শার্টের দাম – ১০০ টাকা

// ১ টি প্যান্টের দাম – ২০০ টাকা

// ১ টি জুতার দাম – ৫০০ টাকা

// এখন সে যদি বিভিন্ন সংখ্যার শার্ট, প্যান্ট বা জুতা বিক্রি করে তাহলে টোটাল কত বিক্রি হলো সেই সংখ্যা রিটার্ন করতে হবে।

function tatolSales(shirt, pant, Shoes) {

    const perShirt=100;
    const perPant=200;
    const perShoes=500;

    let totalshirtsell=shirt*perShirt;
    let totalpanttsell=pant*perPant;
    let totalshoestsell=Shoes*perShoes;

    let totalsell= totalshirtsell+totalpanttsell+totalshoestsell;

    return totalsell;   
}

console.log(("Total Sell:") +(" ")+ tatolSales(5,2,2));
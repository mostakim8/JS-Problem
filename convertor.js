// ১. [ ফাংশন নেম দিতে হবে seerToMon]: একটা ফাংশন এ প্যারামিটার হিসেবে নিবে সের। তারপর সেটাকে মন এ কনভার্ট করে কত মন হয় সেই সংখ্যা রিটার্ন করবে। শুধু সংখ্যাটা রিটার্ন করবে।

function seerToMon(seer) {

    let Mon=seer*0.025;
    return Mon;  
}
let result= seerToMon(66);

console.log(("Maund:") +(" ") + result);
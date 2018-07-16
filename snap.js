let numPosts = $("div[class*='thing id-t3_8']").length;

let half = numPosts / 2;

for (let i = 0; i < half; i++) {
    let random = Math.floor(Math.random()*numPosts);
    let element = $("div[class*='thing id-t3_8']");
    element.eq(random).fadeOut(5000, () => element.eq(random).css("display", "block").css("visibility", "hidden"));
    numPosts--;
}
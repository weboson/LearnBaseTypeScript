//! enum
// создадим enum с установленными полями, где значение, по-умолчанию, как индексы в массивах
var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standard"] = 1] = "Standard";
    Membership[Membership["Premium"] = 2] = "Premium"; // 2
})(Membership || (Membership = {}));
// использования enum Membership
// получить значение поля
var membership = Membership.Standard;
console.log(membership); // 1
// получить поле относительно его значения
var membershipReverse = Membership[2];
console.log(membershipReverse); // Premium
// создадим enum с установленными полями и их значение (например строки)
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["VK"] = "VK";
    SocialMedia["FACEBOOK"] = "FACEBOOK";
    SocialMedia["INSTAGRAM"] = "INSTAGRAM";
})(SocialMedia || (SocialMedia = {}));
var social = SocialMedia.INSTAGRAM;
console.log(social); //

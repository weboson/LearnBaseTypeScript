//! enum
// создадим enum с установленными полями, где значение, по-умолчанию, как индексы в массивах
enum Membership {
    Simple, // 0
    Standard, // 1
    Premium // 2
}

// использования enum Membership
// получить значение поля
const membership = Membership.Standard
console.log(membership) // 1
// получить поле относительно его значения
const membershipReverse = Membership[2] 
console.log(membershipReverse) // Premium


// создадим enum с установленными полями и их значение (например строки)
enum SocialMedia {
    VK = 'VK',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM'
}
// получить значение поля
const social = SocialMedia.INSTAGRAM
console.log(social) // INSTAGRAM - вместо индексов
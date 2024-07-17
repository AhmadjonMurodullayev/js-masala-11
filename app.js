// 1.Berilgan ikki massivning umumiy elementlarini toping.
function commonElements(arr1, arr2) {
    let arr = []
    for(let i =0; i < arr1.length; i++){
        for(let g = 0 ; g < arr2.length; g++){
            if(arr1[i] == arr2[g]){
                arr.push(arr1[i])
            }
        }
    }
    return arr
}

console.log(commonElements([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]




// 2.Berilgan ikki qatorning umumiy belgilarini qaytaring.
function commonCharacters(str1, str2) {
    let str = []
    for(let i =0; i < str1.length; i++){
        for(let g = 0 ; g < str2.length; g++){
            if(str1[i] == str2[g] && i !== g){
                str.push(str1[i]);
            }
        }
    }

    return str.join("")
}

console.log(commonCharacters("hello", "world")); // "lo"


// 3.Berilgan ikki massivdan simmetrik farqni 
// toping (faqat birida bor va ikkinchisida yo'q elementlar).
function symmetricDifference(arr1, arr2) {
    let arr = []
    let arr4 = []
    for(let i = 0 ; i < arr1.length; i++){
        if(arr2.includes(arr1[i])){
            arr.push(arr1[i])
        }else{
           arr4.push(arr1[i],arr2[i])
        }
    }
     arr4.sort((a,b) => a-b)
     return arr4
}

console.log(symmetricDifference([1, 2, 3,], [3, 4, 5])); // [1, 2, 4, 5]


// 4.Berilgan massiv ichida musbat, manfiy va nol 
// qiymatli raqamlarning foizini hisoblang.
function calculatePercentages(arr) {
    // Code here
}

console.log(calculatePercentages([1, -2, 0, 4, -5, 6, 0])); 
// {positive: 42.86, negative: 28.57, zero: 28.57}

// 5.Berilgan qator ichidagi har bir belgini faqat bir marta qoldirib,
//  unikal belgilar ketma-ketligini yarating.

function findPairs(arr, target) {
    // Code here
}

console.log(findPairs([1, 2, 3, 4, 5], 6)); // [[1, 5], [2, 4]]




// 6.Berilgan massivdan yig'indisi ma'lum bir qiymatga
//  teng bo'lgan sonlar juftligini toping.

function findPairs(arr, target) {
    // Code here
}

console.log(findPairs([1, 2, 3, 4, 5], 6)); // [[1, 5], [2, 4]]

// 7.Berilgan massiv ichidagi har bir raqamning kvadratini
//  hisoblang va yangi massiv qaytaring.

function squareNumbers(arr) {
    // Code here
}

console.log(squareNumbers([1, 2, 3, 4, 5])); // [1, 4, 9, 16, 25]

// 8.Berilgan oraliqda nechta palindrom son borligini toping.
function countPalindromNumbers(start, end) {
    // Code here
}

console.log(countPalindromNumbers(1, 100)); // 18 (1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99)

// 9.Berilgan sonlar qatorini vergul 
// bilan ajratilgan qator ko'rinishida qaytaring.
function joinWithCommas(arr) {
    // Code here
}

console.log(joinWithCommas([1, 2, 3, 4, 5])); // "1, 2, 3, 4, 5"
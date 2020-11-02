

// const isAnimal = (text) => {
//     return (
//         text === '개'     || 
//         text === '고양이' ||
//         text === '참새'   ||
//         text === '비둘기' ||
//         text === '너구리'    
//     )
// }

// const isAnimal = (text) =>  ['개', '고양이', '참새', '비둘기', '너구리'].includes(text);    

// function anyFunction (animal) {
//     if (isAnimal(animal)) { return; }
//     return 'do Something with ' + animal;
// }


// type Animal = '개' | '고양이' | '참새' | '비둘기' | '너구리';

// function anyFunction (animal : Animal) {
//     return 'do Something with ' + animal;
// }

// console.log(anyFunction('개'));

// function getSound(animal) {
//     if (animal === '개') return '멍멍!';
//     if (animal === '고양이') return '야옹~';
//     if (animal === '참새') return '짹짹';
//     if (animal === '비둘기') return '구구 구 구';
//     return '...?';
// }

// function getSound(animal) {
//     switch (animal) {
//         case '개':      return '멍멍!';
//         case '고양이':  return '야옹~';
//         case '참새':    return '짹짹';
//         case '비둘기':  return '구구 구 구';
//         default:        return '...?';
//     }
// }

function getSound(animal) {
    const sound = {
        개: '멍멍',
        고양이: '야옹~',
        참새: '짹짹',
        비둘기: '구구 구 구'
    }
    return sound[animal] || '...?';
}

console.log(getSound('비둘기'));
console.log(getSound('호박고구마'));
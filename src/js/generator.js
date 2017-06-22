let GenModule = (()=> {

    let symbols = ("!()-._@#'\"").split("");
    let alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");
    let numbers = ("0123456789").split("");

    let length = 20;


    /**
     *  Upper- and Lowercase Characters 
        Numbers 
        Ambiguous Characters 
        Symbols 
        20 unique Characters
     */ 
    let randomPassword = function () {
        let randomSymbols = getNRandomSymbols(Math.floor(length * 0.2));
        let randomUpperCase = getNRandomCharacter(Math.floor(length * 0.2), true);
        let randomCharacters = getNRandomCharacter(length - randomUpperCase.length - randomSymbols.length + 1, false);

        let combined = randomCharacters.concat(randomSymbols).concat(randomUpperCase);

        let password = '';
        while(combined.length > 0){
            let randIndex = randomIndex(combined);

            password += combined[randIndex];
            combined.splice(randIndex, 1);
        }
        return password;
    }

    let getNRandomCharacter = function (n, upper) {
        let characters = [];

        for(let i = 0; i < n; i++){
            let c = alphabet[randomIndex(alphabet)];
            characters.push(upper ? c : c.toUpperCase());
        }    
        return characters;
    }

    let getNRandomNumbers = function (n) {
        let randNumbers = [];

        for(let i = 0; i < n; i++){
            randNumbers.push(numbers[randomIndex(numbers)]);
        }    
        return randNumbers;
    }

    let getNRandomSymbols = function (n) {
        let randSymbols = [];

        for(let i = 0; i < n; i++){
            randSymbols.push(symbols[randomIndex(symbols)]);
        }    
        return randSymbols;
    }

    let randomIndex = function(array) {
        return Math.floor(Math.random()*array.length);
    }

    let randomNumberIn = function(min,max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    return {
        randomPassword : randomPassword,
        setNumberOfCharacters : (n) => {length = n;} 
    }
})();


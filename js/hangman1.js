

const hangman = {


    wins: 0,
    losses: 0,
    guessesLeft: 9,
    guessed: [],
    compChoice: '',
    compArray: [],



    randomChoice: function () {
        const random = Math.floor(Math.random() * (122 - 97) + 97)
        this.compChoice = ( String.fromCharCode(random) )
        
            this.compArray.push(this.compChoice)
        
           

    },
    



    LoadedReview: function () {
        document.querySelector('#wins').innerHTML = this.wins
        document.querySelector('#losses').innerHTML = this.losses
        document.querySelector('#guess-left').innerHTML = this.guessesLeft
        document.querySelector('#guessed').innerHTML = this.guessed.join(', ')
        document.querySelector('#comp').innerHTML = this.compArray.join(', ')
         
    

    },
    guessedSoFar: function (string) {
        if (!this.guessed.includes(string)) {
            this.guessed.push(string)
        }

        this.LoadedReview()
        
    },
    






    try: function (string) {
        const userChoice = string
    
        if (userChoice === this.compChoice) {
            this.wins++
            this.restart()
        } else if (this.guessesLeft > 0) {
            this.guessesLeft--
            
            this.guessedSoFar(userChoice)
            



        } else {
            this.losses++
            if (this.guessesLeft === 0) {
                this.restart()
            }
        }




        this.LoadedReview()
    },
    restart: function () {
        if (this.guessesLeft === 0) {
            this.guessesLeft = 9
            this.guessed = []
            this.compArray = []
            this.randomChoice()

        }
         this.LoadedReview()

    }
}


hangman.restart()
hangman.LoadedReview()

window.onkeyup = function (e) {
    hangman.try(e.key)
    hangman.LoadedReview()
    hangman.randomChoice()
    
}






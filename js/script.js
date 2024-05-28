// 

// Variables
let index = 0
let prop = 0

const QuestionsList = [
    '1 What is a map?',
    '2 What is a what?',
    '3 What is a question?',
    '4 What is a plateau?'
]
const OptionsList = [
    [
        '1A',
        'B',
        'C',
        'D'
    ],
    [
        '2Aa',
        'Bb',
        'Cc',
        'Dd'
    ],
    [
        '3Aaa',
        'Bbb'
    ],
    [
        '4Ab',
        'Bc',
        'Cd'
    ]
]

const QuestionDisplay = document.querySelector('.question-section')
const OptionsDisplay = document.querySelector('.options-section')
QuestionDisplay.textContent = QuestionsList[index].toUpperCase()

const getOption = () => {
    prop = 0

    options = OptionsList[prop]
    
    options.find(option => {
        const opt = document.createElement('div')
        const label = document.createElement('label')

        opt.className = 'option'
        label.htmlFor = 'option'

        label.innerText = option

        opt.addEventListener('click', () => {
            // HandleOptionClick()
            opt.style.backgroundColor = 'red'
        })
        opt.append(label)
        OptionsDisplay.append(opt)
    })
}


const getNextOption = () => {
    prop++

    if (prop < QuestionsList.length) {

        options = OptionsList[prop]
        const OptionsDisplayNext = document.createElement('div')
        OptionsDisplayNext.className = 'options-section'

        options.forEach(option => {
            const opt = document.createElement('div')
            const label = document.createElement('label')
            const OptionsDisplay = document.querySelector('.options-section')


            opt.className = 'option'
            label.htmlFor = 'option'

            label.innerText = option
            opt.append(label)
            OptionsDisplayNext.append(opt)
            OptionsDisplay.replaceWith(OptionsDisplayNext)
        })
        }
        else if (prop = QuestionsList.length) {
            prop = 0

            options = OptionsList[prop]
            const OptionsDisplayNext = document.createElement('div')
            OptionsDisplayNext.className = 'options-section'
    
            options.find(option => {
                const opt = document.createElement('div')
                const label = document.createElement('label')
                const OptionsDisplay = document.querySelector('.options-section')
    
    
                opt.className = 'option'
                label.htmlFor = 'option'
    
                label.innerText = option
                opt.append(label)
                OptionsDisplayNext.append(opt)
                OptionsDisplay.replaceWith(OptionsDisplayNext)
            })
    
        }
    
    }


const Questions = () => {
    if (index < QuestionsList.length - 1) {
        index++
        QuestionDisplay.textContent = QuestionsList[index].toUpperCase()
    }
    else if (index = QuestionsList.length) {
        index = 0
        QuestionDisplay.textContent = QuestionsList[index].toUpperCase()

    }

}

const Next = () => {
    Questions()
    getNextOption()
}

getOption()





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


console.log(QuestionsList[index]);
console.log(QuestionsList.length - 1);

const QuestionDisplay = document.querySelector('.question-section')
const OptionsDisplay = document.querySelector('.options-section')
QuestionDisplay.textContent = QuestionsList[index].toUpperCase()

const getOption = () => {
    prop = 0

    options = OptionsList[prop]
    
    options.find(option => {
        const opt = document.createElement('div')
        const label = document.createElement('label')
        const radiobtn = document.createElement('input')

        opt.className = 'option'
        label.htmlFor = 'option'
        radiobtn.type = 'radio'
        radiobtn.name = 'option'

        radiobtn.id = option
        label.innerText = option
        opt.append(radiobtn, ' ', label)
        OptionsDisplay.append(opt)
    })
}


const getNextOption = () => {
    /*
    if (prop < OptionsList[prop].length + 1) {
        prop++

        options = OptionsList[prop]
        const OptionsDisplayNext = document.createElement('div')
        OptionsDisplayNext.className = 'options-section'

        options.find(option => {
            const opt = document.createElement('div')
            const label = document.createElement('label')
            const radiobtn = document.createElement('input')
            const OptionsDisplay = document.querySelector('.options-section')


            opt.className = 'option'
            label.htmlFor = 'option'
            radiobtn.type = 'radio'
            radiobtn.name = 'option'

            radiobtn.id = option
            label.innerText = option
            opt.append(radiobtn, ' ', label)
            OptionsDisplayNext.append(opt)
            OptionsDisplay.replaceWith(OptionsDisplayNext)
        })
    }
    else if (prop > OptionsList[prop].length) {
        prop = 0

        options = OptionsList[prop]
        const OptionsDisplayNext = document.createElement('div')
        OptionsDisplayNext.className = 'options-section'

        options.find(option => {
            const opt = document.createElement('div')
            const label = document.createElement('label')
            const radiobtn = document.createElement('input')
            const OptionsDisplay = document.querySelector('.options-section')


            opt.className = 'option'
            label.htmlFor = 'option'
            radiobtn.type = 'radio'
            radiobtn.name = 'option'

            radiobtn.id = option
            label.innerText = option
            opt.append(radiobtn, ' ', label)
            OptionsDisplayNext.append(opt)
            OptionsDisplay.replaceWith(OptionsDisplayNext)
        })
    }

    */

    if (index < QuestionsList.length - 1) {
        prop++

        options = OptionsList[prop]
        const OptionsDisplayNext = document.createElement('div')
        OptionsDisplayNext.className = 'options-section'

        options.find(option => {
            const opt = document.createElement('div')
            const label = document.createElement('label')
            const radiobtn = document.createElement('input')
            const OptionsDisplay = document.querySelector('.options-section')


            opt.className = 'option'
            label.htmlFor = 'option'
            radiobtn.type = 'radio'
            radiobtn.name = 'option'

            radiobtn.id = option
            label.innerText = option
            opt.append(radiobtn, ' ', label)
            OptionsDisplayNext.append(opt)
            OptionsDisplay.replaceWith(OptionsDisplayNext)
        })
        }
        else if (index = QuestionsList.length) {
            prop = 0

            options = OptionsList[prop]
            const OptionsDisplayNext = document.createElement('div')
            OptionsDisplayNext.className = 'options-section'
    
            options.find(option => {
                const opt = document.createElement('div')
                const label = document.createElement('label')
                const radiobtn = document.createElement('input')
                const OptionsDisplay = document.querySelector('.options-section')
    
    
                opt.className = 'option'
                label.htmlFor = 'option'
                radiobtn.type = 'radio'
                radiobtn.name = 'option'
    
                radiobtn.id = option
                label.innerText = option
                opt.append(radiobtn, ' ', label)
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




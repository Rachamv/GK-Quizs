

//Generets characters in alphabetica order
class StringIdGenerator {
    constructor(chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') {
      this._chars = chars;
      this._nextId = [0];
    }
  
    next() {
      const r = [];
      for (const char of this._nextId) {
        r.unshift(this._chars[char]);
      }
      this._increment();
      return r.join('');
    }
  
    _increment() {
      for (let i = 0; i < this._nextId.length; i++) {
        const val = ++this._nextId[i];
        if (val >= this._chars.length) {
          this._nextId[i] = 0;
        } else {
          return;
        }
      }
      this._nextId.push(0);
    }
  
    *[Symbol.iterator]() {
      while (true) {
        yield this.next();
      }
    }
}

//Function to create an const for an element.
//Usage :
// Firstly say the name of the variable - this will create a const which will have the same name as the name of the html Element
// Set the number of elements you wish to be created. Each element will be with 1+2+3+4
// If you have your elements charachters ratehr than numbers set the third variable as 1 
// If you want your const names to have charachters rather than numbers set the fourth variable as 1
//Example createConstForElements('element',5,1,0)
//The above will create a 5 constants with the name element1,element2,element3 etc. The queryeSelects will be elementa,elementb,elementc etc because we have set the third argument as 1.
function createConstForElements(variableName,numberOfElements,areNamesUseChars=0,addChartoVariables=0,char='a'){
    if(areNamesUseChars == 1){
        char        = new StringIdGenerator();
        charconst   = new StringIdGenerator();
        //Check if we want to have the name of the const with char rather than number
        if(addChartoVariables == 1){
            for (let i = 1; i <= numberOfElements; i++) {
                name='[name=' + variableName + char.next()+']';
                window[variableName + charconst.next()] = document.querySelector(name);    
            }
        } else {
                for (let i = 1; i <= numberOfElements; i++) {
                    name='[name=' + variableName + char.next()+']';
                    window[variableName + i] = document.querySelector(name);       
            }
        }
    } else {
        //Check if we want to have the name of the const with char rather than number
        if(addChartoVariables == 1){
            for (let i = 1; i <= numberOfElements; i++) {
                name='[name=' + variableName +']';
                window[variableName + charconst.next()] = document.querySelector(name);    
            } 
        } else {
            for (let i = 1; i <= numberOfElements; i++) {
                name='[name=' + variableName +']';
                window[variableName + i] = document.querySelector(name);    
            } 
        }
    }
}

// Function to add animation to an element.
//If State is 1 it adds annimation to an HTML Element. Additionally, we can specify annimation we want.By default the animation is zoom-in.
function addRemoveAnimationFromElement(htmlElement,state,animation='zoom-in'){
    if(state == 1 ){
        htmlElement.setAttribute('data-aos', animation);
                setTimeout(function(){
                    htmlElement.classList.add('aos-init');
                    htmlElement.classList.add('aos-animate');
                }, 100);
    } else {
        htmlElement.removeAttribute('data-aos', animation);
        htmlElement.classList.remove('aos-init');
        htmlElement.classList.remove('aos-animate');
    }
}

//Shows or hides an element based on the second value. By default it shows the element
function showHideElement(elementName, hideElement=0){
    if (hideElement == 1) {
        elementName.style.display ='none';
    } else {
        elementName.style.display ='block';
    }

}


function showHideElementFlex(elementName, hideElement=0){
    if (hideElement == 1) {
        elementName.style.display ='none';
    } else {
        elementName.style.display ='flex';
    }

}

//Area to add animations on the QuizForms
const freeQuiz          = document.querySelector('[name=freeQuiz]');
const freeQuizDiv       = document.querySelector('[name=freeQuizDiv]');
const chooseQuizForm    = document.querySelector('[name=chooseQuizForm]')
const hiddenCategories  = document.querySelectorAll('.FreeQuiz');


//This function hides one element and shows a block of elements with an animation.
function showHiddenFiles(firstElement,secondElement, arrayElements){
    firstElement.style.display ='block';
    secondElement.style.display='none';
    arrayElements.forEach(arrayElement => [
        arrayElement.style.display='block',
        arrayElement.setAttribute('data-aos', 'zoom-in'),
        setTimeout(function(){
            arrayElement.classList.add('aos-init');
            arrayElement.classList.add('aos-animate');
        }, 100),
    ]);
}
//Animation and removing divs for the QuizPage
if (freeQuiz) {
    freeQuiz.addEventListener('click', function(){ showHiddenFiles(freeQuizDiv, chooseQuizForm, hiddenCategories); });
}



//Client Contribution area
createConstForElements('answer_',6,1);
createConstForElements('label_answer_',6,1);
createConstForElements('checkbox_answer_',6,1);
createConstForElements('div_checkbox_answer_',6,1);

const NumberOfAnswers   = document.querySelector('[name=NumberOfAnswers]');

//Function to check how many answers to show when selected from a dropdown
function checkAnswersToShow(lowestAnswers, highestAnswers, NumberOfAnswers){
    for (let i = lowestAnswers; i <= highestAnswers; i++) { 
        inputElement    = eval('answer_' + i);
        labelElement    = eval('label_answer_' + i);
        checkBoxDiv     = eval('div_checkbox_answer_' +i);
        if(i <= NumberOfAnswers){

            //Gets the answer_3 to based of select value and makes them visable. Additionally it addes affect as it's fading up

            showHideElement(inputElement);
            showHideElement(labelElement);
            showHideElement(checkBoxDiv);

        } else {

            showHideElement(inputElement,1);
            showHideElement(labelElement,1);
            showHideElement(checkBoxDiv,1);
            inputElement.value = '';

        }
    }
}

//This is for showing DIVs - Notice the answers.
function checkAnswersToShowDivOnly(lowestAnswers, highestAnswers, NumberOfAnswers){
    for (let i = lowestAnswers; i <= highestAnswers; i++) { 
        divElement    = eval('answer' + i +'Div');
        if(i <= NumberOfAnswers){

            //Gets the answer_3 to based of select value and makes them visable. Additionally it addes affect as it's fading up
            showHideElement(divElement);
        } else {
            showHideElement(divElement,1);
            divElement.value = '';
        }
    }
}
if (NumberOfAnswers) {
    NumberOfAnswers.addEventListener('change', function(){ checkAnswersToShow(3,6, NumberOfAnswers.value)} );
}
//End of contribution code Javascript


//Contribution pages
//name,twitter account etc.
const contributorDetailsDiv                 = document.querySelector('[name=contributorDetails]');
const goToQuestionEssentialsSectionButton   = document.querySelector('[name=goToQuestionEssentialsSection]');
const contributorPageButtonsDiv             = document.querySelector('[name=contributorPageButtons]');
const expandQuestionsP                      = document.querySelector('[name=expandQuestions]');

//Question Essential elements - tag,category etc.
const questionEssentialsDiv                 = document.querySelector('[name=questionEssentials]');
const goToContributorSectionButton          = document.querySelector('[name=goToContributorSection]');
const goToQuestionDetailsSection            = document.querySelector('[name=goToQuestionDetailsSection]');
const questionEssentialsPageButtonsDiv      = document.querySelector('[name=questionEssentialsPageButtons]');

//Question detail elements - question,answers, number of answers
const questionDetailsDiv                       = document.querySelector('[name=questionDetails]');
const questionCategoryPageButtonsDiv           = document.querySelector('[name=questionCategoryPageButtons]');
const goBackToQuestionEssentialsSectionButton  = document.querySelector('[name=goBackToQuestionEssentialsSection]');
const goToTipSectionButton                     = document.querySelector('[name=goToTipSection]');

//Tip details elements
const tipDetailsDiv                            = document.querySelector('[name=tipDetails]');
const tipSectionPageButtonsDiv                 = document.querySelector('[name=tipSectionPageButtons]');
const goBackToQuestionDetailsSectionButton  = document.querySelector('[name=goBackToQuestionDetailsSection]');

//form submittion button
const submitFormDiv                            = document.querySelector('[name=submitForm]');
const contributionDividerDiv                   = document.querySelector('[name=contributionDivider]');

//Next/Previous buttons functionallity on the clientarea contribute area
if(goToQuestionEssentialsSectionButton){
    //The bellow listener will get you the 'Questions eseentials' section 
    goToQuestionEssentialsSectionButton.addEventListener('click', function(){ 
        showHideElementFlex(contributorDetailsDiv, 1);
        showHideElementFlex(contributorPageButtonsDiv, 1);
        showHideElementFlex(questionEssentialsDiv, 0);
        showHideElementFlex(questionEssentialsPageButtonsDiv,0);
        expandQuestionsP.innerHTML = 'Please choose the Category, Tags and Difficulty your question will belong to.';
    });

    //If you ae on the Question Essentialns and click 'previous section' it shows the Contributor Details section
    goToContributorSectionButton.addEventListener('click', function(){ 
        showHideElementFlex(questionEssentialsDiv, 1);
        showHideElementFlex(questionEssentialsPageButtonsDiv, 1);
        showHideElementFlex(contributorDetailsDiv, 0);
        showHideElementFlex(contributorPageButtonsDiv,0);
        expandQuestionsP.innerHTML = 'Help us expand our questions database by contributing a quesiton on any technical topic!';
    });

    //If you ae on the Question Essentialns and click next section it shows the Question Details(question, number of questions etc.)
    goToQuestionDetailsSection.addEventListener('click', function(){ 
        showHideElementFlex(questionEssentialsDiv, 1);
        showHideElementFlex(questionEssentialsPageButtonsDiv, 1);
        showHideElementFlex(goToTipSectionButton,0);
        showHideElementFlex(questionDetailsDiv, 0);
        showHideElementFlex(questionCategoryPageButtonsDiv,0);
        expandQuestionsP.innerHTML = "Time to add the question!";
    });

    //If you are on the Question Details section and click previous page it shows the questions essentials(tags,category,diffuclty)
    goBackToQuestionEssentialsSectionButton.addEventListener('click', function(){ 
        showHideElementFlex(questionDetailsDiv, 1);
        showHideElementFlex(questionCategoryPageButtonsDiv, 1);
        showHideElementFlex(goToTipSectionButton,1);
        showHideElementFlex(questionEssentialsDiv, 0);
        showHideElementFlex(questionEssentialsPageButtonsDiv,0);
        expandQuestionsP.innerHTML = 'Help us expand our questions database by contributing a quesiton on any technical topic!';
    });

    //If you ae on the Question Tip section and click previous section it shows the Question Details(question, number of questions etc.)
    goBackToQuestionDetailsSectionButton.addEventListener('click', function(){ 
        showHideElementFlex(tipDetailsDiv, 1);
        showHideElementFlex(tipSectionPageButtonsDiv, 1);
        showHideElementFlex(goBackToQuestionDetailsSectionButton, 1);
        showHideElementFlex(submitFormDiv,1);
        showHideElement(contributionDividerDiv,1);
        showHideElementFlex(questionDetailsDiv, 0);
        showHideElementFlex(questionCategoryPageButtonsDiv,0);
        showHideElementFlex(goToTipSectionButton,0);
        expandQuestionsP.innerHTML = "Time to add the question!";
    });

    //If you ae on the Question Tip section and click previous section it shows the Question Details(question, number of questions etc.)
    goToTipSectionButton.addEventListener('click', function(){ 
        showHideElementFlex(tipDetailsDiv, 0);
        showHideElementFlex(tipSectionPageButtonsDiv, 0);
        showHideElementFlex(goBackToQuestionDetailsSectionButton, 0);
        showHideElementFlex(submitFormDiv,0);
        showHideElement(contributionDividerDiv,0);
        showHideElementFlex(questionDetailsDiv, 1);
        showHideElementFlex(questionCategoryPageButtonsDiv,1);
        showHideElementFlex(goToTipSectionButton,1);
        expandQuestionsP.innerHTML = "Add a tip for anyone using the question!";
    });    

}

$('.label.ui.dropdown')
.dropdown();

$('.no.label.ui.dropdown')
.dropdown({
useLabels: false
});

$('.ui.button').on('click', function () {
$('.ui.dropdown')
  .dropdown('restore defaults')
})


//Frontend Contribution Form
const answer6Div = document.querySelector('[name=answer6Div]');
const answer4Div = document.querySelector('[name=answer4Div]');
const answer5Div = document.querySelector('[name=answer5Div]');
const answer3Div = document.querySelector('[name=answer3Div]');
const numberOfAsnwersFrontEndContribute   = document.querySelector('[name=NumberOfAnswersFrontEnd]');


if (numberOfAsnwersFrontEndContribute) {
    numberOfAsnwersFrontEndContribute.addEventListener('change', function(){ checkAnswersToShowDivOnly(3,6, numberOfAsnwersFrontEndContribute.value)} );
}

//Show modal on page open - forntend contribution

$(window).on('load',function(){
    $('#signInModal').modal('show');
});

//Are you sure you wish to remove a question

function areYouSureRemoveQuestion($question){
    return confirm('Are you sure you wish to delete "' + $question +'" ?');
}


/** Page 
**Contriubtioons Review
**/

const contributionReviewStatus                = document.querySelector('[name=status]');
const contribtuionReviewReasonForDenialDiv    = document.querySelector('[name=reasonForDenialDiv]');

function showHideReasonForDenial(){
    if(contributionReviewStatus.value == 3){
        contribtuionReviewReasonForDenialDiv.style.display ='block';
        contribtuionReviewReasonForDenialDiv.required = true;
    } else {
        contribtuionReviewReasonForDenialDiv.style.display ='none';
        contribtuionReviewReasonForDenialDiv.required = false;
    }
}

if (contributionReviewStatus) {
    contributionReviewStatus.addEventListener('change', showHideReasonForDenial);
}


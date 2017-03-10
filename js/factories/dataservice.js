/*
 * IIFE to keep code safe and outside the global namespace
 */
(function(){

    /*
     * Declaring a factory service as part of the existing turtleFacts Module.
     */
    angular
        .module("turtleFacts")
        .factory("DataService", DataService);

    /*
     * Actual definition of the function used for this factory
     */
    function DataService(){
        /*
         * dataObj is used to simulate getting the data from a backend server
         * The object will hold data which will then be returned to the other
         * factory declared in js/factory/quiz.js which has this factory
         * as a dependency
         */

        var dataObj = {
            turtlesData: turtlesData,
            quizQuestions: quizQuestions,
            correctAnswers: correctAnswers
        };

        // returning the dataObj to anything that uses this factory as a 
        // dependency
        return dataObj;
    }

    /*
     * all of the below variables are simulating data that would typically be 
     * retrieved using an HTTP call to an API endpoint.
     *
     * For simplicity sake this data is hardcoded into the app as this tutorial
     * is about building the angular app, not the backend.
     *
     * The correctAnswers variable would be retrieved when the user has 
     * finished the quiz and would be used to mark the users answers against 
     * the correct answers
     *
     * the quizQuestions is an array of objects, each containing data 
     * pertaining to a single question. This includes:
     *                          - The type of question: image or text
     *                          - Text of the question (aka the actual question)
     *                          - A set of 4 possible answers, either text or 
     *                              images as indicated above
     *                          - a selected flag which will be used to know if
     *                              the user has selected 
     *                          an answer yet.
     *                          - Whether the user got the question correct or 
     *                              not
     *
     * The final turtleData variable hold the information that will be 
     * displayed in the list view when the app loads. This includes the name 
     * and an image of each turtle as well as other information such as the 
     * location and the size of the turtles
     *
     */

    var correctAnswers = [1, 2, 1, 0, 3];

    var quizQuestions  = [
        {
            type: "text",
            text: "When is the Earth Day celebrated? ",
            possibilities: [
                {
                    answer: "1st November"
                },
                {
                    answer: "22nd April"
                },
                {
                    answer: "16th October"
                },
                {
                    answer: "8th January"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Mahabharata war took place in ? ",
            possibilities: [
                {
                    answer: "500 AD"
                },
                {
                    answer: "1000 BC"
                },
                {
                    answer: "900 BC"
                },
                {
                    answer: "1200 BC"
                }
            ],
            selected: null,
            correct: null
        },
                {
            type: "text",
            text: "Mount Everest is located in ?",
            possibilities: [
                {
                    answer: "India"
                },
                {
                    answer: "Nepal"
                },
                {
                    answer: "Tibet"
                },
                {
                    answer: "China"
                }
            ],
            selected: null,
            correct: null
        }
        ,
                {
            type: "text",
            text: "Who created a new world record is scoring the fastest century in Test Cricket history in February 2016?",
            possibilities: [
                {
                    answer: "Brendon McCullum "
                },
                {
                    answer: "Chris Gayle"
                },
                {
                    answer: "Virat Kohli"
                },
                {
                    answer: "Steve Smith"
                }
            ],
            selected: null,
            correct: null
        }
        ,
                {
            type: "text",
            text: "The unit of noise pollution (level) is",
            possibilities: [
                {
                    answer: "Hertz"
                },
                {
                    answer: "Joule"
                },
                {
                    answer: "PPM"
                },
                {
                    answer: "Decibel"
                }
            ],
            selected: null,
            correct: null
        }
    ];

    var turtlesData = [
        
    ];

})();

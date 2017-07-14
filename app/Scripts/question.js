var questions = ["Inside which HTML element do we put the JavaScript?", `What is the correct JavaScript syntax to change the content of the HTML element below?<br /><br /><p class='lead'>&lt;p id="demo"&gtThis is a demostration.&lt;/p&gt;;</p>`, `Where is the correct place to insert a JavaScript?`, `What is the correct syntax of referring to an external script called "abc.js"?`, `The external file must contain &lt;script&gt tag.`];
var options = [{
        option1: "&lt;scripting&gt;",
        option2: "&lt;script&gt;",
        option3: "&lt;javascript&gt;",
        option4: "&lt;js&gt;"
    },
    {
        option1: `document.getElementByName("p").innerHTML = "Hello World!";`,
        option2: `document.getElementById("demo").innerHTML = "Hello World!";`,
        option3: `document.getElementByName("p").innerHTML = "Hello World!";`,
        option4: `demo.innerHTML = "Hello World!";`
    },
    {
        option1: `The &lt:head&gt; section`,
        option2: `The &lt:body&gt; section`,
        option3: `Both the &lt:head&gt; section and the &lt;body&gt; section`,
        option4: `The &lt;div&gt; section`
    }, {
        option1: `&lt;script name="abc.js"&gt;`,
        option2: `&lt;script src="abc.js"&gt;`,
        option3: `&lt;script ref="abc.js"&gt;`,
        option4: `&lt;script link="abc.js"&gt;`
    }, {
        option1: `True`,
        option2: `False`,
        option3: `Null`,
        option4: `No`
    }
]
export function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"

    // Your code here
    window.document.title = "Athithyen Varatharajan's Portfolio"
}

export function changeHeader() {
    // Change the name in the h1 of the page to your name

    // Your code here
    const name = document.querySelector("#header")
    name.children[0].innerText = "Athithyen Varatharajan"
}

export function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */

    // Your code here
    const para = document.querySelector(".section")
    para.children[1].innerText = "I want to become a software engineer at google and eventually start my own starup at Silicon Valley."
}

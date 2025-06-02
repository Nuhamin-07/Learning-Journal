import { blogPost } from "./data.js"

const section = document.getElementById("section")

function renderPosts() {
    return blogPost.map(item => {
        return `<div class="blog-items">
                <img class="blog-img" src="${item.img}"/>
                <p>${item.date}</p>
                <h4>${item.title}<h4>
                <p>${item.description}</p>
        </div>`
    }).join("")
}
section.innerHTML = renderPosts()
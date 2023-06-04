// Create an empty array to store the posts
let postArray = []

// Get references to the title and description inputs
const titleInput = document.getElementById("title")
const descriptionInput = document.getElementById("description")

// Get reference to the form element
const form = document.getElementById("form-post")

// Function to render the blog posts
const render = () => {
    let html = ""
    for (let post of postArray) {
        // Generate HTML for each post
        html += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr />
        `
    }
    // Update the HTML of the blog list element
    document.getElementById("blog-list").innerHTML = html
}

// Fetch initial data from an API and populate the post array
fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then((res) => res.json())
    .then((data) => {
        // Slice the data to get the first 11 posts
        postArray = data.slice(0, 11);
        // Render the blog posts
        render()
    })

// Event listener for form submission
form.addEventListener("submit", function(e) {
    e.preventDefault()
    
    // Get the values from the input fields
    const postTitle = titleInput.value
    const postBody = descriptionInput.value
    
    // Create a data object with the values
    const data = {
        title: postTitle,
        body: postBody
    }
    
    // Create options for the fetch request
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }
    
    // Send a POST request to the API with the new post data
    fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
        .then(res => res.json())
        .then(post => {
            // Add the new post to the beginning of the postArray
            postArray.unshift(post)
            console.log(postArray)
            // Render the updated blog posts
            render()
            // Reset the form
            form.reset()
        })
})

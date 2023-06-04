
# Blog Page

This is a simple blog page that allows users to create and display blog posts. The page fetches initial data from an API to populate the blog posts and provides a form for users to submit new posts. Please note that this implementation does not save the posts to a database; it only demonstrates the functionality of the page.

## Features

- Fetches initial blog post data from an API and displays them on the page.
- Allows users to submit new blog posts using a form.
- Renders the updated list of blog posts in real-time without page refresh.

## Technologies Used

- HTML
- CSS
- JavaScript

## Usage

1. Clone the repository:

   ```bash
   git clone test-blog
   ```

2. Open the `index.html` file in a web browser.

3. The blog posts fetched from the API will be displayed on the page.

4. To create a new blog post, enter the title and description in the provided form and click the "Submit" button.

5. The new blog post will be added to the top of the list in real-time.

6. Repeat step 4-5 to create more blog posts.

## Limitations

- The blog posts are stored in memory and are not saved to a database.
- Reloading the page will reset the blog posts to the initial fetched data.

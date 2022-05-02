/**
 * Render the home view and pass the title variable to the view.
 * @param req - The request object represents the HTTP request and has properties for the request query
 * string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 */
export const index = (req, res) => {
  res.render('home', {
    title: 'Home'
  })
}
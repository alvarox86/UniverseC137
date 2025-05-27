import { Link } from "react-router-dom"

function ErrorPage() {
  return (
    <div>
        
        <h1>Error 404</h1>
        <p>Not Found</p>
        <Link to={"/"}>
            <p>Go back to the Home Page</p>
        </Link>

    </div>
  )
}

export default ErrorPage
import { Link } from "react-router-dom";

function NotFoundPage() {
    
    return(
        <div>
            <h1>404 Page not found!</h1>
            <Link to="/">Go back to homepage</Link>
        </div>
    );
}
export default NotFoundPage;
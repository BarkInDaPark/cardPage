import { useParams } from "react-router-dom";
function ProfilePage(){
    const params = useParams();
    console.log(params);
    return (
      <div>
        <h1>Profile Page</h1>
        <p>Welcome to profile {params.profileId} page</p>
      </div>
    );
}
export default ProfilePage;
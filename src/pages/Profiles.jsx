import {Link, Outlet} from 'react-router-dom';
function Profiles() {
    const profiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (

    profiles.map((anything) => ( 
        <div className='flex flex-col gap 2'>
          <div className='flex gap-2'>
            <Link key= {anything} to={`/profiles/${anything}`} >
            profile {anything}
            </Link>
            <Outlet />
          </div>
        </div>
        /*notera `` för att detta ska funka INTE '' */
     )
        
  )
)

}
export default Profiles;
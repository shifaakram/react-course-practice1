
import {useNavigate} from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage()
{
    const navigate=useNavigate();
    function addMeetupHandler(meetupData)
    {
        fetch(
            'https://react-course-1df57-default-rtdb.firebaseio.com/meetups.json',
            {
                method:'POST',
                body: JSON.stringify(meetupData),
                headers:
                {
                    'Content-Type': 'application/json'
                }
            }

        ).then(()=>{
            navigate("/", { replace: true });
        });
    }
    return (

    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
);
}
export default NewMeetupPage;
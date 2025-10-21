export default function UserCArd(props){
    return (
         <div className="userCard">
           <img src={props.user.picture.large} alt="" />
            <h3>
               {props.user.name.first} {props.user.name.last}
             </h3>
             <p>{props.user.location.city}</p>
             <p>{props.user.dob.age} ans</p>
           </div>
    )
};
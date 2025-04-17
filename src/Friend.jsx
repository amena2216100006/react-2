export default function Friend({friend}){
    console.log(friend);
    const {name,email} = friend;
    return(
        <div className="card">
            <h4>name : {name} </h4>
            <p>email : {email}</p>
        </div>
    )
}
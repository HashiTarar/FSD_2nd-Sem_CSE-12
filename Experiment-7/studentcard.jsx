function StudentCard(props) {
    return (
        <div>
            <h2>Name : {props.Name}</h2>
            <p>Marks : {props.Marks}</p>
            <p>Grade : {props.Grade}</p>
        </div>
    );
}
export default StudentCard;
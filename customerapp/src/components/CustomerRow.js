export default function CustomerRow(props) {
    let {id, firstName, lastName} = props.customer;
    return <div>
        {firstName} {lastName}
        <button type="button" onClick={() => props.delEvent(id)}>&times;</button>
    </div>
}
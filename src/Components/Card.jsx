function Card(props) {
  

  return (
      <div>
          <th>Name:</th>
          <td>{props.name}</td>
          <br />
          <th>Age:</th>
          <td>{props.age}</td>
          <br />
          <th>Address:</th>
          <td>{props.address}</td>
          <br />
          <th>Status:</th>
          <td>{props.status}</td>
      </div>
  )
}

export default Card

function Profile(props) {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <p>DOB: {props.DOB}</p>
      </div>
  )
}

export default Profile
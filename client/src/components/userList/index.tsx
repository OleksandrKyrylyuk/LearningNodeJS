import { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const UserList = () => {
	const { data } = useTypedSelector( store => store.getUsers)
	const { GetAllUsers } = useActions();
	useEffect(() => {
		GetAllUsers();
	}, [])


	return (
    <div className="container">
      <h2 className=" text-center">User List</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">SurName</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, Name, Surname, Email }) => (
            <tr key={id} className="table-secondary">
              <th scope="row">{id}</th>
              <td>{Name}</td>
              <td>{Surname}</td>
              <td>{Email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;


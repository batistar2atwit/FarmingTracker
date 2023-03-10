import { useEffect, useState } from 'react';

const Home = () => {
   const [users, setUsers] = useState(null);

   useEffect(() => {
      const fetchUsers = async () => {
         const response = await fetch('/api/users');
         const json = await response.json();

         if (response.ok) {
            setUsers(json);
         }
      };
      fetchUsers();
   }, []);

   return (
      <div className="home">
         <div className="users">
            {users && users.map((user) => (
               <p key={user._id}>{user.name} </p>
            ))}
         </div>
      </div>
   );
};

export default Home;

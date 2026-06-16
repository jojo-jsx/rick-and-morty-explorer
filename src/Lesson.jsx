import { useState, useEffect } from "react";

export default function Lesson({ username }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        if (!res.ok) {
          throw new Error("User not found");
        }
        const data = await res.json();
        setUser(data);
        setError(null);
      } catch (error) {
        console.error(`There is a problem : ${error.message}`);
        setError(error.message);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [username]);

  if (loading) {
    return <div>...loading</div>;
  }
  if (error) {
    return <div>Error : {error}</div>;
  }
  if (!user) {
    return <div>No result found</div>;
  }
  console.log(user);

  return (
    <div>
      <span>{user.name}</span>
      <span>{user.followers}</span>
      <span>{user.bio}</span>
    </div>
  );
}

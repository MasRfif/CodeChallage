"use client";
import React, { useState, useEffect } from "react";

interface User {
  name: {
    first: string;
    last: string;
  };
  login: {
    uuid: string;
  };
}

const RandomUsers: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://randomuser.me/api/?results=15");
      const data = await response.json();
      setUsers(data.results);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {users.length > 0 && (
        <div key={users[0].login.uuid}>
          <p>
            {users[0].name.first} {users[0].name.last}
          </p>
        </div>
      )}
    </div>
  );
};

export default RandomUsers;

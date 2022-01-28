import Link from "next/link";

function UsersPage(props) {
  const { users } = props;

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) throw Error("Something went wrong!");

    const users = await response.json();

    //SUCCESS! RETURN PROPS
    return {
      props: { users },
    };
  } catch (error) {
    //ERROR! RETURN 404.js PAGE(Next.js uses default if you don't provide your own 404.js under pages)
    return {
      notFound: true,
    };
  }
}

export default UsersPage;

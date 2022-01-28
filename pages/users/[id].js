function UserDetailPage(props) {
  const { user } = props;

  if (!user) return <p>Loading...</p>;

  return (
    <>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </>
  );
}

export async function getStaticProps(context) {
  try {
    const { id } = context.params;
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    if (!response.ok) throw Error("Something went wrong!");

    const user = await response.json();

    return {
      props: {
        user,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}

export async function getStaticPaths() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) throw Error("Something went wrong!");

    const users = await response.json();

    //NOTE: values of path parameters must be String
    const paths = users.map((user) => {
      return { params: { id: `${user.id}` } };
    });

    /* If we set fallback:true, the pages which are not listed inside 'paths' array can be valid
But they're not pre-generated. Instead they're generated just in time when a request reaches
the server.

If you set fallback:true and if detail page is not pre-generated then you need to handle 
undefined props state while data is being fetched.

If you don't wanna handle empty props state, you can return blocking:true, this will not render the
page until props is ready.
*/

    return {
      paths,
      fallback: true,
    };

    //EXPECTED RETURN OBJECT
    /*   {
      paths: [
        { params: {id:1} },
        { params: {id:2} },
        { params: {id:3} },
        ...
      ]
  }  */
  } catch (error) {
    return { fallback: true };
  }
}

export default UserDetailPage;

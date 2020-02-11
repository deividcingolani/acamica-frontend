import { useRouter } from "next/router";
import { Layout } from "../../components/Layout";
import { isLoggedIn } from "../../lib/isLoggedIn";
import Error from "next/error";

export default function Payment() {
  const router = useRouter();

  return (
    <React.Fragment>
      {isLoggedIn()?  (
        <Layout title=" New Payment">
          new Payment 
        </Layout>
      ) : (
        <Error statusCode={403} />
      )}
    </React.Fragment>
  );
}

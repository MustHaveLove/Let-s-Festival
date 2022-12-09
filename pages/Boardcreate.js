import FormPost from '../components/CRUD/FormPost';
import Layout from '../components/Layout';

export default function create_Post(props) {
  return (
    <Layout>
      <div>
        <div className="container mx-auto px-4 max-w-screen-sm">
          <FormPost action="add"></FormPost>
        </div>
      </div>
    </Layout>
  );
}

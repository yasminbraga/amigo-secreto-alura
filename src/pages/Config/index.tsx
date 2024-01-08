import Card from "../../components/Card";
import Footer from "../../components/Footer";
import UserForm from "../../components/UserForm";
import UserList from "../../components/UserList";

const Config: React.FC = () => {
  return (
    <Card title="Vamos começar!">
      <UserForm />
      <UserList />
      <Footer />
    </Card>
  );
};

export default Config;

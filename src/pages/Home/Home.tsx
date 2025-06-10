import { selectUser } from "@/features/User";
import { useAppSelector } from "@/store/store";

const Home = () => {
  const user = useAppSelector(selectUser);
  return (
    <div>
      Hello world {user.given_name} {user.family_name} role is {user.userType}{" "}
      with id {user.user_id}
    </div>
  );
};

export default Home;

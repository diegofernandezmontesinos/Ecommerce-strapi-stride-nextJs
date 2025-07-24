import { Button } from "primereact/button";
import Link from "next/link";
import { useAuth } from "@/hooks";

const Index = () => {
  const { user, logout, updateUser } = useAuth();

  console.log(user)
  const updateUserDemo = () => {
    updateUser("username", "pepe");
    console.log("Username updated to 'pepe'");
  }

  return (
    <div>
      <h2>Games Shop</h2>
    </div>
  );
};

export default Index;

import { Button } from "primereact/button";
import Link from "next/link";

const Index = () => {
  return (
    <div>
      <h2>Games Shop</h2>
      <Link href="/join/sign-in">
        <Button
          severity="secondary"
          label="Ir al login"
          className="primereactButton"
        ></Button>
      </Link>
    </div>
  );
};

export default Index;

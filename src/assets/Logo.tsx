import { Image } from "@mantine/core";
import { useNavigate } from "react-router-dom";
export default function Logo() {
  const naviagate  = useNavigate()
  return (
    <>
      <Image
        style={{
          cursor: "pointer",
          height: 75,
          width: 75,
        }}
        onClick={()=>naviagate('/')}
        src={
          "https://ik.imagekit.io/yzrrrgg3d/marble-logo__1_-removebg-preview%20(1).png?updatedAt=1745552751287"
        }
      />
    </>
  );
}

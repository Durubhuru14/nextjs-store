import { RiNextjsLine } from "react-icons/ri";
import { Button } from "../ui/button";
import Link from "next/link";

function Logo() {
  return (
    <Button asChild size={"icon"}>
      <Link href={"/"}>
        <RiNextjsLine className="size-6" />
      </Link>
    </Button>
  );
}
export default Logo;

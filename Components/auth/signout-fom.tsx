import { Button } from "../ui";
import Form from "next/form";
import { Icon } from "@iconify/react/dist/iconify.js";
import { signout } from "@/lib/server/actions";

export default function SignoutForm() {
  return (
    <Form action={signout} className="mt-auto">
      <Button className="group min-h-11 w-full" type="submit">
        <Icon
          icon="uim:signout"
          className="mr-2 box-content rounded-lg bg-primary/10 p-1 text-2xl transition-colors group-hover:text-red-400"
        />
        Sign Out<span className="sr-only">sign out</span>
      </Button>
    </Form>
  );
}

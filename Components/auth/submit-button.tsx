import { Button } from "../ui";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function SubmitButton({
  children,
  isSuccessful,
  isPending,
}: {
  children?: React.ReactNode;
  isSuccessful: boolean;
  isPending: boolean;
}) {
  return (
    <Button
      type={isPending ? "button" : "submit"}
      disabled={isPending || isSuccessful}
      aria-disabled={isPending || isSuccessful}
      className="mt-5 h-11 w-full justify-center"
    >
      {isPending || isSuccessful ? (
        <span>
          <Icon icon="line-md:loading-loop" width="24" height="24" />
        </span>
      ) : (
        <> {children} </>
      )}

      <output aria-live="polite" className="sr-only">
        {isPending || isSuccessful ? "Loading" : "submit form"}
      </output>
    </Button>
  );
}

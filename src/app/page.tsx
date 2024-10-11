import { Button } from "~/components/ui/button";

export default function Home() {
  return (
    <div>
      Hello world
      <Button variant="destructive" size="lg">
        Click me
      </Button>
      <p className="text-red-500">Hello</p>
    </div>
  );
}

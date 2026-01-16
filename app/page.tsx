import Title from "@/components/ui/Title";
import ToggleButton from "@/components/ui/ToggleButton";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full gap-4">
      <h1>Hello World</h1>
      <div className="flex gap-4">
        <Title>Hello World</Title>
        <ToggleButton>Button</ToggleButton>
        <ToggleButton disabled>Button</ToggleButton>
      </div>
    </div>
  );
}

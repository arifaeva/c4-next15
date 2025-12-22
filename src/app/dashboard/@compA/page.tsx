export default function CompA() {
  const randomBoolean = Math.random() < 0.5;

  if (randomBoolean) {
    throw new Error("Something went wrong");
  }

  return <div>Comp A</div>;
}

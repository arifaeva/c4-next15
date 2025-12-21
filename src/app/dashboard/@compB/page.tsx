export default async function CompB() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return <div>Comp B</div>;
}

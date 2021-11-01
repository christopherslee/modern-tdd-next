import CardContainer from "../components/CardContainer";

export default function Home() {
  return (
    <div className="m-4">
      <CardContainer id={1} />
      <CardContainer id={2} />
      <CardContainer id={3} />
    </div>
  );
}

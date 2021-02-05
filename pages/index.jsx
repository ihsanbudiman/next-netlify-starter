import Template from '../components/Template/Template';

export default function Home() {
  return (
    <>
      <Template>
        <div className="h1">
          <span className="text-center"> Hello My Name is </span>
          <div className="text-white bg-dark rounded-2 shadow-lg px-2 d-xs-block d-lg-inline-block d-flex justify-content-center">
            Moh. Ihsan Budiman
          </div>
        </div>
      </Template>
    </>
  );
}

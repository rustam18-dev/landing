import { ComplexSupplies } from "./ComplexSupplies.tsx";
import { About } from "../About.tsx";
import { Categories } from "./Categories.tsx";
import {ApplicationForm} from "./ApplicationForm.tsx";

export const Main = () => {
  return (
    <>
      <ComplexSupplies />
      <About />
      <Categories />
      <ApplicationForm/>
    </>
  );
};

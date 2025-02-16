import Section from "../section/Section";
import { SECTION_URLS } from "@/constants/urls";
import { SectionTitle } from "@/types/Products";

function Sections() {
  const sections = SECTION_URLS.map((section) => (
    <Section
      title={section.title as SectionTitle}
      key={section.title}
      image={section.image}
    />
  ));
  return (
    <div className="h-auto w-auto grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 md:mx-40 m-8 place-items-center">
      {sections}
    </div>
  );
}

export default Sections;

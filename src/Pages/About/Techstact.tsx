import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <div
      style={{ justifyContent: "center", paddingBottom: "50px" }}
      className="tech"
    >
      <div className="tech-icons">
        <CgCPlusPlus />
      </div>
      <div className="tech-icons">
        <DiJavascript1 />
      </div>
      <div className="tech-icons">
        <TbBrandGolang />
      </div>
      <div className="tech-icons">
        <DiNodejs />
      </div>
      <div className="tech-icons">
        <DiReact />
      </div>
      <div className="tech-icons">
        <SiSolidity />
      </div>
      <div className="tech-icons">
        {" "}
        <DiMongodb />
      </div>
      <div className="tech-icons">
        {" "}
        <SiNextdotjs />
      </div>
      <div className="tech-icons">
        {" "}
        <DiGit />
      </div>
      <div className="tech-icons">
        <SiFirebase />
      </div>
      <div className="tech-icons">
        <SiRedis />
      </div>
      <div className="tech-icons">
        <SiPostgresql />
      </div>
      <div className="tech-icons">
        <DiPython />
      </div>
      <div className="tech-icons">
        <DiJava />
      </div>
    </div>
  );
}

export default Techstack;

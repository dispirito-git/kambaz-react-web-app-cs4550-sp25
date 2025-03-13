import { addModule, editModule, updateModule, deleteModule }
from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ModuleControlButtons from "./ModuleControlButtons";
import ModulesControls from "./ModulesControls";
import { useState } from "react";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();
  return (
  <div className="wd-modules">
  <ModulesControls moduleName={moduleName} setModuleName={setModuleName}
  addModule={() => {
  dispatch(addModule({ name: moduleName, course: cid }));
  setModuleName("");
  }} />
  <ul id="wd-modules" className="list-group rounded-0">
  {modules
  .filter((module: any) => module.course === cid)
    .map((module: any) => (
      <li key={module._id} className="list-group-item">
        {!module.editing && module.name}
        {module.editing && (
          <input
            className="form-control w-50 d-inline-block"
            onChange={(e) =>
              dispatch(updateModule({ ...module, name: e.target.value }))
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                dispatch(updateModule({ ...module, editing: false }));
              }
            }}
            defaultValue={module.name}
          />
        )}
        <ModuleControlButtons
          moduleId={module._id}
          deleteModule={(moduleId: string) => {
            dispatch(deleteModule(moduleId));
          }}
          editModule={(moduleId: string) => dispatch(editModule(moduleId))}
        />
      </li>
    ))}
    </ul>
    </div>
    );
  }